
const addBook =()=>{
    const title =document.getElementById ("title").value
const author =document.getElementById ("author").value
const genre =document.getElementById ("genre").value
const rating =document.getElementById ("rating").value


const Book ={
    title: title,
    author:author,
    genre: genre,
    rating: rating
}

const books =JSON.parse( localStorage.getItem('library'));

books.push(Book)
localStorage.setItem('library', JSON.stringify(books))
}