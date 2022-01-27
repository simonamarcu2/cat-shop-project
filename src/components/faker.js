
// const handleFetch = async () => {

//   const res = await fetch("https://jsonplaceholder.typicode.com/posts")
//   const data = await res.json()

//   console.log(data)
//   return (data)

// }
///
const randomWords = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(myBlob => {
      return (myBlob)
    })
    .catch(e => {
      console.log('There has been a problem with your fetch operation: ' + e.message);
    });
}
const handleFetch = async () => {
  try {
    let response = await fetch(
      "https://api.thecatapi.com/v1/images/search?limit=20"
    );
    let data = await response.json();
    let updatedData = await addFakeData(data);
    setData(updatedData);
    setLoading(false);
  } catch (error) {
    setError(error);
  }
};
// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application.json'
//   },
//   body: JSON.stringify({
//     name: 'Cat 1'
//   }).then(res => {
//     return res.json()
//   })
//     .then(data => console.log(data))
//     .catch(error => console.log('error'))
// })


export default randomWords
