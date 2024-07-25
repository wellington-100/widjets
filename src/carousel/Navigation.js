const Navigation = ({ action, idx, length }) => {
    const prev = () => {
        if (idx > 0) {
            action(idx - 1)
        }
    }

    const next = () => {
        if (idx < length - 1) {
            action(idx + 1)
        }
    }

    return (
        // add the limits
        <div className="arrows">
            <button onClick={prev}>◀</button>
            <button onClick={next}>▶</button>
        </div>
    )
}

export { Navigation }
