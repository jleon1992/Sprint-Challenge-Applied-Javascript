// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

const newEntry = document.querySelector('div.topics')
console.log(newEntry)

axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(response => {
    // console.log(response.data.topics)
    const topics = response.data.topics
    topics.forEach(element => {
        // console.log(element)
        let newTab = creatTopic(element)
        newEntry.appendChild(newTab)
        console.log(newTab)
    });
})
.catch(error => {
    console.log(error)
},[])

function creatTopic(data){
    const tab = document.createElement('div')
    tab.classList.add('tab')
    tab.textContent = data
    return tab
}