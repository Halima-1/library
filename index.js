let books = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction", rating: 4.8 },
    { title: "1984", author: "George Orwell", genre: "Dystopian", rating: 4.7 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classics", rating: 4.5 },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", genre: "Classics", rating: 4.0 },
    { title: "Moby-Dick", author: "Herman Melville", genre: "Adventure", rating: 4.1 },
    { title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance", rating: 4.6 },
    { title: "War and Peace", author: "Leo Tolstoy", genre: "Historical Fiction", rating: 4.4 },
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien", genre: "Fantasy", rating: 4.9 },
    { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", genre: "Fantasy", rating: 4.9 },
    { title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy", rating: 4.8 },
    { title: "Crime and Punishment", author: "Fyodor Dostoevsky", genre: "Psychological Fiction", rating: 4.5 },
    { title: "The Brothers Karamazov", author: "Fyodor Dostoevsky", genre: "Philosophical", rating: 4.6 },
    { title: "Jane Eyre", author: "Charlotte Brontë", genre: "Classics", rating: 4.5 },
    { title: "Wuthering Heights", author: "Emily Brontë", genre: "Romantic Tragedy", rating: 4.3 },
    { title: "The Alchemist", author: "Paulo Coelho", genre: "Philosophical", rating: 4.7 },
    { title: "Brave New World", author: "Aldous Huxley", genre: "Science Fiction", rating: 4.4 },
    { title: "Fahrenheit 451", author: "Ray Bradbury", genre: "Dystopian", rating: 4.3 },
    { title: "The Road", author: "Cormac McCarthy", genre: "Post-apocalyptic", rating: 4.2 },
    { title: "The Book Thief", author: "Markus Zusak", genre: "Historical Fiction", rating: 4.8 },
    { title: "The Hunger Games", author: "Suzanne Collins", genre: "Dystopian", rating: 4.7 },
    { title: "Dune", author: "Frank Herbert", genre: "Science Fiction", rating: 4.6 },
    { title: "The Kite Runner", author: "Khaled Hosseini", genre: "Historical Fiction", rating: 4.8 },
    { title: "One Hundred Years of Solitude", author: "Gabriel García Márquez", genre: "Magical Realism", rating: 4.7 },
    { title: "The Da Vinci Code", author: "Dan Brown", genre: "Thriller", rating: 4.0 },
    { title: "The Shining", author: "Stephen King", genre: "Horror", rating: 4.5 },
    { title: "Dracula", author: "Bram Stoker", genre: "Gothic Horror", rating: 4.4 },
    { title: "Frankenstein", author: "Mary Shelley", genre: "Gothic Fiction", rating: 4.3 },
    { title: "The Picture of Dorian Gray", author: "Oscar Wilde", genre: "Philosophical", rating: 4.4 },
    { title: "The Handmaid's Tale", author: "Margaret Atwood", genre: "Dystopian", rating: 4.6 },
    { title: "Slaughterhouse-Five", author: "Kurt Vonnegut", genre: "Science Fiction", rating: 4.5 },
    { title: "Gone with the Wind", author: "Margaret Mitchell", genre: "Historical Fiction", rating: 4.6 },
    { title: "The Giver", author: "Lois Lowry", genre: "Dystopian", rating: 4.4 },
    { title: "Don Quixote", author: "Miguel de Cervantes", genre: "Adventure", rating: 4.2 },
    { title: "Les Misérables", author: "Victor Hugo", genre: "Historical Fiction", rating: 4.7 },
    { title: "The Count of Monte Cristo", author: "Alexandre Dumas", genre: "Adventure", rating: 4.8 },
    { title: "Beloved", author: "Toni Morrison", genre: "Historical Fiction", rating: 4.4 },
    { title: "The Color Purple", author: "Alice Walker", genre: "Historical Fiction", rating: 4.7 },
    { title: "The Odyssey", author: "Homer", genre: "Epic Poetry", rating: 4.3 },
    { title: "Ulysses", author: "James Joyce", genre: "Modernist", rating: 4.1 },
    { title: "Lolita", author: "Vladimir Nabokov", genre: "Literary Fiction", rating: 4.2 },
    { title: "The Secret Garden", author: "Frances Hodgson Burnett", genre: "Children's Fiction", rating: 4.5 },
    { title: "The Catch-22", author: "Joseph Heller", genre: "Satire", rating: 4.3 },
    { title: "The Grapes of Wrath", author: "John Steinbeck", genre: "Historical Fiction", rating: 4.5 },
    { title: "East of Eden", author: "John Steinbeck", genre: "Classics", rating: 4.6 },
    { title: "The Stranger", author: "Albert Camus", genre: "Philosophical Fiction", rating: 4.4 },
    { title: "Anna Karenina", author: "Leo Tolstoy", genre: "Classics", rating: 4.7 },
    { title: "Madame Bovary", author: "Gustave Flaubert", genre: "Realism", rating: 4.2 },
    { title: "Middlemarch", author: "George Eliot", genre: "Classics", rating: 4.4 },
    { title: "The Call of the Wild", author: "Jack London", genre: "Adventure", rating: 4.5 }
  ];

    // localStorage.setItem('library', JSON.stringify(books))

  const handleClick = () =>{
    if(localStorage.getItem('library')){
        const books =JSON.parse( localStorage.getItem('library'));
        const inputValue = document.getElementById("input").value
let resultContainer =document.getElementById("result")

 const book = books.filter((item,index) => item.title.toLowerCase() == inputValue.toLowerCase() || item.genre.toLowerCase() == inputValue.toLowerCase() || item.author.toLowerCase() == inputValue.toLowerCase() )
resultContainer.innerHTML="" ;
if (!book.length ==0){
    book.map((item,index) => {
        resultContainer.innerHTML +=` <p id="author">Author: ${item.author}</p>
                <p id="title ">Title:${item.title}</p>
                <p id="genre">Genre:${item.genre}</p>
                <p id="rating">Rating:${item.rating}</p>`
     }
        
     )
}
else{
    resultContainer.innerHTML +=`<p style="color: red;">no book found</p>`
}
 
    }
    else{localStorage.setItem('library', JSON.stringify(books))
    }
    //   let books =JSON.parse( localStorage.getItem('library'));

    
  }

//   localStorage.setItem('library', JSON.stringify(books))