import "./Modal.css";
const Modal = ({ CPOs, getBasketTotal, show, closeModal }) => {
  console.log("show=" + show);
  if (show === true) {
    console.log(true);
    let total = getBasketTotal();
    return (
      <div id="modalBackdrop">
        <div id="modalContent">
          <div id="listOfCats">
            {CPOs.map((CPO) => {
              if (CPO.selected === true) {
                return (
                  <div className="basketCat">
                    <div className="basketCatName">{CPO.name}</div>
                    <div className="basketCatPrice">{CPO.price}</div>
                  </div>
                );
              } else {
                return <div></div>;
              }
            })}
          </div>
          <div id="total">Total: {total}</div>
          <button
            onClick={() => {
              closeModal(!show);
            }}
          >
            Close checkout
          </button>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export { Modal };
