const Card = ({ CPO, index }) => {

    
    return (
        <div className="catCard">
        <img className="catPhoto" src={CPO.url} alt={"picture of" + CPO.name}></img>
        <div className="catName">{CPO.name}</div>
        <div className="catPrice">{CPO.price}</div>
        </div>)
}

export default Card