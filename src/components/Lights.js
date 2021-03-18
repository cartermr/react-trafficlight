const Lights = (props) => {
    return (
        <>
            <span className={`circle ${props.count == 1 ? 'red' : ''}`}></span>
            <span className={`circle ${props.count == 2 ? 'yellow' : ''}`}></span>
            <span className={`circle ${props.count == 3 ? 'green' : ''}`}></span>
        </>
    )
}

export default Lights