# Cat Shopfront 
This project was undertaken as part of a Code Nation bootcamp. Working as a team of 3 junior devs, we were tasked with creating a basic shopfront for selling cats.

## Structure
- Pictures of cats come from an API
- Information about each cat comes from the Faker library.
- Cat pictures and information are stored in an array of "Cat Product Objects"
- This array is stored as a state within React. 
- The state is referenced by every other component on the page.

## Components
- Each Cat Product Object is used to generate a card as part of a card display.
- Each of those cards contains a button that can change the CPO's "selected" attribute, this attribute determines membership in the storefront's basket.
- The basket is designed as a modal.

## Styling
- Styling is undertaken in vanilla CSS.

#############################################################
 The code starts by importing React and useState from "react".
- It then imports the CSS file "./App.css" which contains a class called "CPOs", which is an array of cats.

- Next, it creates two variables: [CPOs, setCPOs] = useState([]); This sets up the state for our app to be an empty list of cats.
- The next line uses this state to create a function called getCats() that returns all the cats in our database.

- The last line calls this function with some parameters (the number of items we want) and stores them in another variable called length .- The code will render a list of cats.

- The code will then render the first cat in the list.

- The code will then render the second cat in the list.- The code starts by defining a state variable called hasLoaded.
- This is initialized to false, meaning that the API hasn't been called yet for each cat-card.
- The handleFetch function will be executed when the user clicks on "Search".

- The code then calls fetch with a URL and waits for the response in order to get data from it.
- It then analyzes the JSON object returned from this call and sets hasLoaded to true if there are images found or setHasLoaded back to false if not.- The code is a snippet of code that will fetch the first 20 images from the cat API.

- The code has two important parts:

- 1) The useState function which creates a boolean value to represent whether or not we have loaded data from the API yet, and 2) The handleFetch function which calls an asynchronous function called fetch.
- This function will call our server and get back a JSON response with all of the images.- The code is a function that is called when the user clicks on the button.
- The first thing it does is check if there are any items in the basket, and then it adds an item to the basket with a random name and price.
- It also sets whether or not this cat is selected by checking its value in data.

- The code starts by declaring variables for what will be used later: 	let updatedData = await addFakeData(data); 	const addFakeData = (data) => { 	for (let i = 0; i < data.length; i++) { 		const element = data[i]; 	}

- It then creates an array of fake elements which has all of the properties from one of our products, but without their values filled out yet: const element["name"] = name.firstName(); //describes whether cat is in basket- The code is to be executed when the user clicks on the button that says "Add a new product".

- The code will create an array of fake data and then add it to the store.
