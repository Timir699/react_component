import Intro from './intro/Intro'
import Img from './img/Img'


let Left = () => {
    return (
        <div style = {{width : "30vw", borderRight : "1px solid #eee"}}>
            <Intro />
            <Img />
        </div>
    )
}


export default Left