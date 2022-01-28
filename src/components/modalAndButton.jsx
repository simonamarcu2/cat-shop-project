// This component returns both the show/hide button and
// and the modal content the button reveals

import { useState } from "react";
import { Modal } from "./Modal";
import "./Modal.css";

const ModalAndButton = ({ CPOs, getBasketTotal }) => {
  //states
  const [modalShowing, setModalShowing] = useState(false);

  return (
    <div id="basketWrapper">
      <button className="basket"
        onClick={() => {
          setModalShowing(!modalShowing);
        }}
      >
        Basket
      </button>
      <Modal
        CPOs={CPOs}
        getBasketTotal={getBasketTotal}
        show={modalShowing}
        closeModal={setModalShowing}
      />
    </div>
  );
};
export default ModalAndButton;
