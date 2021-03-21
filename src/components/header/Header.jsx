import '../header/header.css'

let Header = (props) => {
    let {text } = props
    return (
        <div className = "header">
            <div className="logo">
                {text}
            </div>
            <div className="menu">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Service</a></li>
                    <li><a href="#">Security</a></li>
                    <li><a href="#">Footer</a></li>
                </ul>
            </div>
        </div>
    )
}




export default Header 