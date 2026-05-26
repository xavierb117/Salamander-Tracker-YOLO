export default function CountChart({ data }) {
    const W = 620, H = 220;
    const pad = { top: 20, right: 20, bottom: 45, left: 45 };
    const innerW = W - pad.left - pad.right;
    const innerH = H - pad.top - pad.bottom;

    const maxTime = Math.max(...data.map(d => d.time_s), 1);
    const maxCount = Math.max(...data.map(d => d.count), 1);

    const xScale = t => (t / maxTime) * innerW;
    const yScale = c => innerH - (c / maxCount) * innerH;

    const points = data.map(d => `${xScale(d.time_s)},${yScale(d.count)}`).join(' ');

    const yTicks = Array.from({ length: maxCount + 1 }, (_, i) => i);
    const xTicks = Array.from({ length: Math.floor(maxTime) + 1 }, (_, i) => i);

    return (
        <svg width={W} height={H} style={{ display: 'block', margin: '16px 0' }}>
            <g transform={`translate(${pad.left},${pad.top})`}>
                <line x1={0} y1={innerH} x2={innerW} y2={innerH} stroke="#ccc" />
                <line x1={0} y1={0} x2={0} y2={innerH} stroke="#ccc" />
                {yTicks.map(i => (
                    <g key={i}>
                        <line x1={-4} y1={yScale(i)} x2={innerW} y2={yScale(i)} stroke="#eee" />
                        <text x={-8} y={yScale(i) + 4} textAnchor="end" fontSize={11} fill="#666">{i}</text>
                    </g>
                ))}
                {xTicks.map(i => (
                    <g key={i}>
                        <line x1={xScale(i)}  y1={innerH} x2={xScale(i)} y2={innerH + 4} stroke="#666"/>
                        <text x={xScale(i)} y={innerH + 18} textAnchor="middle" fontSize={11} fill="#666">{i}</text>
                    </g>
                ))}
                <polyline points={points} fill="none" stroke="#22c55e" strokeWidth={2} />
                {data.map((d, i) => (
                    <circle key={i} cx={xScale(d.time_s)} cy={yScale(d.count)} r={3} fill="#22c55e" />
                ))}
                <text x={innerW / 2} y={innerH + 38} textAnchor="middle" fontSize={12} fill="#444">Time (s)</text>
                <text
                    x={-(innerH / 2)}
                    y={-32}
                    textAnchor="middle"
                    fontSize={12}
                    fill="#444"
                    transform="rotate(-90)"
                >
                    Salamanders on screen
                </text>
            </g>
        </svg>
    );
}