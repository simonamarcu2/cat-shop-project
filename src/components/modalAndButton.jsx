// This component returns both the show/hide button and
// and the modal content the button reveals

import { useState } from "react";
import { Modal } from "./Modal";

const ModalAndButton = ({ CPOs }) => {
  //states
  const [modalShowing, setModalShowing] = useState(false);

  return (
    <div id="basketWrapper">
      <button
        onClick={() => {
          setModalShowing(!modalShowing);
        }}
      >
        press me
      </button>
      <Modal CPOs={CPOs} />
    </div>
  );
};
export default ModalAndButton;
