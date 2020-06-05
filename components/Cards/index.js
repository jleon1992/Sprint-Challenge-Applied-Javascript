// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.




// axios.get('https://lambda-times-backend.herokuapp.com/articles')
// .then(respone => {
//     console.log(response)
// })
// .catch(error => {
//     console.log(error)
// }, [])

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    const articles = response.data.articles
    // const javascript = articles.javascript
    // const bootstrap = articles.bootstrap
    // const
    const genres = ['javascript', 'bootstrap', 'jquery', 'node', 'technology'] 
    genres.forEach(element => {
        // console.log(typeof element)
        // console.log(typeof articles)
        const subject = articles[element]
        // console.log(subject)
        subject.forEach(element => {
            const myVar = articleMaker(element)
            console.log(myVar)
            document.querySelector('.cards-container').appendChild(myVar)
        });
    });
    // console.log(articles)
})
.catch(error => {
    console.log(error)
},[])

function articleMaker(data){
    const card = document.createElement('div')
    card.classList.add('card')
    
    const headLine = document.createElement('div')
    headLine.classList.add('headline')

    const author = document.createElement('div')
    author.classList.add('author')

    const imgContainer = document.createElement('div')
    imgContainer.classList.add('img-container')

    const authorImage = document.createElement('img')
    
    const authorName = document.createElement('span')

    card.appendChild(headLine)
    card.appendChild(author)
    author.appendChild(imgContainer)
    author.appendChild(authorName)
    imgContainer.appendChild(authorImage)

    authorName.textContent = data.authorName
    authorImage.src = data.authorPhoto
    headLine.textContent = data.headline
// console.log(data.headline)
    console.log(card)

    return card

}