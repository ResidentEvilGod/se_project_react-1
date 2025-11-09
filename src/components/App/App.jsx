import { useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { defaultClothingItems } from "../../utils/defaultClothingItems";
import "./App.css";
import ItemModal from "../ItemModal/ItemModal";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function App() {
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);
  const [activeModal, setActiveModal = useState("")];
  const [selectedCard, setSelectedCard = useState({})];
  function handleOpenItemModal (card) {
    setActiveModal ("item-modal");
    setSelectedCard (card);
  }
  function handleOpenAddGarmentModal (card) {
    setActiveModal ("add-garment-modal");
  }
  return (
    <div className="app">
      <Header handleOpenAddGarmentModal={handleOpenAddGarmentModal} />
      <Main clothingItems={clothingItems} />
      <Footer />
      <ItemModal card={selectedCard} isOpen={activeModal === "item-modal"} />
      <ModalWithForm isOpen={activeModal === "add-garment-modal"}>
        <h2>TEXT</h2>
        </ModalWithForm>
    </div>
  );
}

export default App;
