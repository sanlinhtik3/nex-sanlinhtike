import "./circular-progress-bar.css"

export default function CircularProgressBar({ percentage = 80, color = "#facc15", bg = "" }: { percentage?: number, color?: string, bg?: string }) {
    return (
        <div className="container-circular" style={{ "--i": percentage, "--clr": color, "--bg": bg } as React.CSSProperties}>
            <div className="progress w-10 h-10 relative rounded-full">
                <h3 className="absolute left-0 right-0 text-center top-[50%] transform -translate-y-1/2 z-10 font-bold text-xs">{percentage}</h3>
            </div>
        </div>
    )
}
