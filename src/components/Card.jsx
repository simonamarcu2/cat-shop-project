const Card = ({ CPO, index, setCPOs, array }) => {

    // const handleBasketSelection = (index, CPO, setCPO) => {
    //     const tempArray =
    // }

    return (
        <div className="catCard">
            <div className="background">
                <img className="catPhoto" src={CPO.url} alt={"picture of" + CPO.name}></img>
            </div>
            <div className="namePrice">
                <div className="catName">{CPO.name}</div>
                <div className="catPrice">{CPO.price}</div>
            </div>
        </div>)
}

export default Card
