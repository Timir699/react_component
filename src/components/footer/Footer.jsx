import '../footer/footer.css'
let Footer = (props) => {

    let {text, as:AS} = props
    return (
        <div className = "footer">
            {text}
        </div>
    )
}


export default Footer