

import { useState, React } from "react";
import "./App.css";
// import randomWords from './components/faker'
import { name, commerce } from "faker";
import Card from "./components/Card";
import ModalAndButton from "./components/modalAndButton";

function App() {
  //states
  const [CPOs, setCPOs] = useState([]); //the big list of cats
  const [hasLoaded, setHasLoaded] = useState(false); //have we got a list yet?

  const handleFetch = async () => {
    try {
      setHasLoaded(true); // means API isn't called again for each cat-card
      let response = await fetch(
        "https://api.thecatapi.com/v1/images/search?limit=20"
      );
      let data = await response.json();
      let updatedData = await addFakeData(data);

      setCPOs(updatedData);
    } catch (error) {
      console.log(error);
    }
  };

  const addFakeData = (data) => {
    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      element["name"] = name.firstName();
      element["price"] = commerce.price();
      element["selected"] = false; //describes whether cat is in basket
    }
    return data;
  };
  if (hasLoaded === false) {
    handleFetch();
  }

  const handleBasketSelection = (array, index) => {
    //React won't register a change to CPOs if the array we send to setCPOs has
    //the same address in memory. So we have to create a new array before we
    //start editing
    const newArray = [...array];
    newArray[index].selected = array[index].selected ? false : true;
    setCPOs(newArray);
  };

  const getBasketTotal = () => {
    let total = 0;
    for (let i = 0; i < CPOs.length; i++) {
      if (CPOs[i].selected === true) {
        total += parseInt(CPOs[i].price);
      }
    }
    return total;
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Cat Shop</h1>
      </div>
      <ModalAndButton CPOs={CPOs} getBasketTotal={getBasketTotal} />
      <div id="cats">
        {CPOs.map((element, index) => {
          return (
            <Card
              CPO={element}
              index={index}
              handleBasketSelection={handleBasketSelection}
              array={CPOs}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
