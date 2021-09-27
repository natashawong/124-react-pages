import React, { useState, useEffect} from 'react';
import './App.css';

function App() {
  const data = [
    {
      name: "Bettina Benitez",
      email: "bbenitez22@cmc.edu",
      phone: "(415) 549-6560",
    },
    {
      name: "Natasha Wong",
      email: "nwong22@cmc.edu",
      phone: "(909) 675 6412",
    },
  ]
  const [clicked, setClick] = useState(-1)

  const [opacity, setOpacity] = useState("50%");

  useEffect(() => {
    setInterval(() => {
      setOpacity((v) => (v === "50%" ? "100%" : "50%"));
    }, 1000);
  }, []);

  function ContactList(props) {

    return props.data.map((obj, i) => 
      <Contact 
        name={obj.name}
        phone={obj.phone} 
        email={obj.email}
        index={i}
        style={{backgroundColor: clicked === i && 'yellow', opacity:  clicked === i && opacity}}
        onClick={() => {clicked === i ? setClick(-1) : setClick(i)}}
      />
    )
  }

  function Contact(props) {
    return (
      <div className="container" style={props.style} onClick={props.onClick}>
        <p><b>{props.name}</b></p>
        <p className="email">{props.email}</p>
        <p>{props.phone}</p>
      </div>
    )
  }

  return (
    <>
      <div>
        <h1>People ({clicked === -1 ? 0 : 1}/{data.length} selected)</h1>
      </div>
      <ContactList data={data} />
    </>
  )
}

export default App;
