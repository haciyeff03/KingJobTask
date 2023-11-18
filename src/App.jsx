import React, { useState } from "react";
import Modal from "./ModalSection/ModalPart";
import "./styles.css";
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <div className="click_div" onClick={openModal}>
        Open Window
      </div>
      {isModalOpen && <Modal onClose={closeModal} />}
    </div>
  );
}

export default App;
