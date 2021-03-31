import Rijwan from '../../../../../assets/images/Rijwan.jpg'
let Person1 = () => {
    return (
        <div style = {{marginLeft : "50px"}}>
            <div className="card" style= {{width: "18rem", boxShadow : "0px 0px 20px 0px"}}>
                <img src={Rijwan} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title text-center" >Card title</h5>
                </div>
            </div>
        </div>
        
    )
}
export default Person1