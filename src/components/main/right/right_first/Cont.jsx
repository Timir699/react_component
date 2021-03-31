import Cont_img from './cont_img/Cont_img'
import Cont_text from './cont_text/Cont_text'

let Cont = () => {
    return (
        <div style = {{ display : "flex" }}>
            <Cont_text />
            <Cont_img />
        </div>
    )
}


export default Cont