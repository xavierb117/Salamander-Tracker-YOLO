import { useState } from 'react';

export default function Video() {
    const [file, setFile] = useState();
    const [response, setResponse] = useState();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
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
                <button type="submit">Submit</button>
            </form>
            {response && <video src={response.video_url} controls />}
        </>
    );
}