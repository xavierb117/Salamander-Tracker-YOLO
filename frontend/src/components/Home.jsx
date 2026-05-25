import { useState, useEffect } from 'react';

export default function Home() {
    const [salamanderData, setSalamanderData] = useState();

    useEffect(() => {
        async function load() {
            try {
                const res = await fetch(`http://localhost:8000`)
                const json = await res.json();
                setSalamanderData(json)
            }
            catch (err) {
                console.error(`Failed to fetch JSON:`, err)
            }
        }

        load()
    }, [])
    
    return (
        <div>
            <pre>{JSON.stringify(salamanderData, null, 2)}</pre>
        </div>
    )
}