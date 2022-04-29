export default function Container(props) {
    return (
        <div className={`max-w-5xl mx-auto ${props.className || ''}`}>{props.children}</div>
    )
}