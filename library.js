
const addBook =()=>{
    const title =document.getElementById ("title").value
const author =document.getElementById ("author").value
const genre =document.getElementById ("genre").value
const rating =document.getElementById ("rating").value
const errMessage =document.getElementById('err')
errMessage.innerHTML =""
const notify =document.getElementById('notify')
notify.innerHTML =""
if(title && author && genre){
    const Book ={
        title: title,
        author:author,
        genre: genre,
        rating: rating
    }
    
    const books =JSON.parse( localStorage.getItem('library'));
    
    books.push(Book)
    localStorage.setItem('library', JSON.stringify(books))
    notify.innerHTML ="book added successfully!"
    errMessage.innerHTML =""

}
else{
    errMessage.innerHTML ="fill in book details to add"
    notify.innerHTML =""

}
}


const removeBook =()=>{
    const books =JSON.parse( localStorage.getItem('library'));
    const title =document.getElementById ("title").value
const author =document.getElementById ("author").value
const genre =document.getElementById ("genre").value
const rating =document.getElementById ("rating").value
const errMessage =document.getElementById('err')
errMessage.innerHTML =""
const notify =document.getElementById('notify')
notify.innerHTML =""
const bookSearch =books.findIndex((item,index) =>item.title.toLowerCase() == title.toLowerCase())
if (title || author || genre && bookSearch >=0){
    books.splice(bookSearch)
    localStorage.setItem('library', JSON.stringify(books))
    errMessage.innerHTML =""
    notify.innerHTML ="book removed successfully"
} 
// else if(title && bookSearch +1 ===0){
//     errMessage.innerHTML =`<span>Book not found in the library</span>`
//     notify.innerHTML =""

// }
   else{
    errMessage.innerHTML ="input a book title to delete"
    notify.innerHTML =""

   }
console.log(bookSearch<0)
console.log(bookSearch +1)

}