import { useState } from "react";


function Modal({isVisible, onClose}) {

  const [name, setName] = useState("No Name");

  const containerStyle = {
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    backgroundColor: '#000000AA',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }

  const modalStyle = {
    padding: 10,
    backgroundColor: '#FFF',
    color: "#000",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 130,
  }

  return isVisible
    &&<div style={containerStyle}>
        <div style={modalStyle}>
          Hi, {name}!
          <button onClick={()=>setName("Tony")}>Become Tony</button>
          <button onClick={()=>setName("Sebastienne")}>Become Sebastienne</button>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
}

export default function Home(props) {
  const [showModal, setShowModal] = useState(false);

  function handleClick() {
    setShowModal(!showModal);
  }

  function resetClick() {
    setReactiveVarible(0)
  }

  return (
    <div >
      <button onClick={handleClick}>Toggle Information</button>
      <Modal isVisible={showModal} />
    </div>
  )
}
