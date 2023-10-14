interface ButtonProps {
    name?: string;
    className?: string;
}

export default function Button({ name = "Call Now!", className = "" }: ButtonProps) {
    return (
        <button className={`bg-purple-500 rounded-lg p-3 px-10 inline-block ${className}`}>
            {name}
        </button>
    )
}