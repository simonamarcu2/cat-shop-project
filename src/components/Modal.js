const Modal = ({ CPOs }) => {
  return (
    <div id="modal">
      <div id="listOfCats">
        {CPOs.map((CPO) => {
          if (CPO.selected === true) {
            return (
              <div className="basketCat">
                <div className="basketCatName">{CPO.name}</div>
                <div className="basketCatPrice">{CPO.price}</div>
              </div>
            );
          }
        })}
      </div>
      <div id="total">Total</div>
    </div>
  );
};

export { Modal };
