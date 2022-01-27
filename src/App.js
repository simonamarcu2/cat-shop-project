

import { useState, React } from "react";
import "./App.css";
// import randomWords from './components/faker'
import { name, commerce } from "faker";

function App() {
  //states
  const [CPOs, setCPOs] = useState([]); //the big list of cats
  const [hasLoaded, setHasLoaded] = useState(false); //have we got a list yet?

  const handleFetch = async () => {
    try {
      let response = await fetch(
        "https://api.thecatapi.com/v1/images/search?limit=20"
      );
      let data = await response.json();
      let updatedData = await addFakeData(data);
      setCPOs(updatedData);
      setHasLoaded(true);
    } catch (error) {
      console.log(error);
    }
  };

  const addFakeData = (data) => {
    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      element["name"] = name.firstName();
      element["price"] = commerce.price();
    }
    return data;
  };
  if (hasLoaded === false) {
    handleFetch();
    console.log(CPOs);
  }
  return <div className="container"> </div>;
}

export default App;
