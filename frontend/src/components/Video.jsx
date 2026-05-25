import { useState } from 'react';

export default function Video() {
    const [file, setFile] = useState();
    const [response, setResponse] = useState();
    const [loading, setLoading] = useState(false);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const form = new FormData();
            form.append("video", file);
            const res = await fetch("http://localhost:8000/track", { method: "POST", body: form });
            const json = await res.json()
            setResponse(json)
        }
        catch (err) {
            console.error(`Failed to fetch JSON:`, err);
        }
        finally {
            setLoading(false);
        }
    }

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
            {loading && <p>Processing video...</p>}
            {response && <video src={response.video_url} controls />}
        </>
    );
}