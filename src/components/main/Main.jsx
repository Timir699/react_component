import '../main/main.css'


let Main = (props) => {
    let {left, right} = props
    return (
        <div className = "main">
            <div className="sidebar">
                {left}
            </div>
            <div className="right">
                {right} 
            </div>
        </div>
    )
}



export default Main