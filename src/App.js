
import { useState, React } from 'react';
import './App.css';
// import randomWords from './components/faker'
import { name, commerce } from "faker";


function App() {
  const [CPOs, setCPOs] = useState([]);
  const handleFetch = async (setCPOs) => {
    try {
      let response = await fetch(
        "https://api.thecatapi.com/v1/images/search?limit=20"
      );
      let data = await response.json();
      let updatedData = await addFakeData(data);
      console.log("Hello-fetchs")
      setCPOs(updatedData);
      // setLoading(false);
    } catch (error) {
      // setError(error);
    }
  };

  const addFakeData = (data) => {
    console.log("Hello-add fake data first")

    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      element["name"] = name.firstName();
      element["price"] = commerce.price();
    }
    handleFetch(setCPOs)
    console.log("Hello-add fake data to")
    return data;
  };
  addFakeData(CPOs)
  return (
    <div className="container">
      {/* <randomWords /> */}
    </div>
  );
}

export default App;
