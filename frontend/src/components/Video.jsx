import { useState } from 'react';
import CountChart from './Chart.jsx'

export default function Video() {
    const [file, setFile] = useState();
    const [response, setResponse] = useState();
    const [loading, setLoading] = useState(false);
    const [percent, setPercent] = useState(0);
    
    const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setPercent(0);
    setResponse(null);

    try {
        const form = new FormData();
        form.append("video", file);

        await fetch("http://localhost:8000/track", {
            method: "POST",
            body: form
        });

        try {
            const interval = setInterval(async () => {
                const res = await fetch("http://localhost:8000/track");
                const json = await res.json();

                setPercent(json.percent || 0);

                if (json.status === "done") {
                    setResponse(json.result);
                    setLoading(false);
                    clearInterval(interval);
                }
            }, 1000);
        } catch (err) {
            console.error(`Failed to fetch Job Status:`, err);
            setLoading(false);
        }

    } catch (err) {
        console.error(`Failed to fetch Video JSON:`, err);
        setLoading(false);
    }
};

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Upload a video file:
                    <input 
                        type="file"
                        accept="video/*"
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                </label>
                <button type="submit" disabled={loading}> {loading ? "Processing..." : "Submit"} </button>
            </form>
            {loading && (
                <>
                    <p>Processing video...</p>
                    <progress value={percent} max={100} style={{ width: "300px" }} />
                    <p>{percent}%</p>
                </>
            )}
            {response &&
                <>
                    <video src={response.video_url} controls />
                    <h3>Count of Salamanders at each second</h3>
                    {response.count_over_time && <CountChart data={response.count_over_time} />}
                    <h3>Time of screen per individual salamander</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Track ID</th>
                                <th>Label</th>
                                <th>Time on Screen</th>
                            </tr>
                        </thead>
                        <tbody>
                            {response.tracks.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.track_id}</td>
                                    <td>{item.label}</td>
                                    <td>{item.time_on_screen_s}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            }
        </>
    );
}