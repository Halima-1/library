let books = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction", rating: 4.8, year: 1960 },
    { title: "1984", author: "George Orwell", genre: "Dystopian", rating: 4.7, year: 1949 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classics", rating: 4.5, year: 1925 },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", genre: "Classics", rating: 4.0, year: 1951 },
    { title: "Moby-Dick", author: "Herman Melville", genre: "Adventure", rating: 4.1, year: 1851 },
    { title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance", rating: 4.6, year: 1813 },
    { title: "War and Peace", author: "Leo Tolstoy", genre: "Historical Fiction", rating: 4.4, year: 1869 },
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien", genre: "Fantasy", rating: 4.9, year: 1954 },
    { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", genre: "Fantasy", rating: 4.9, year: 1997 },
    { title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy", rating: 4.8, year: 1937 },
    { title: "Crime and Punishment", author: "Fyodor Dostoevsky", genre: "Psychological Fiction", rating: 4.5, year: 1866 },
    { title: "The Brothers Karamazov", author: "Fyodor Dostoevsky", genre: "Philosophical", rating: 4.6, year: 1880 },
    { title: "Jane Eyre", author: "Charlotte Brontë", genre: "Classics", rating: 4.5, year: 1847 },
    { title: "Wuthering Heights", author: "Emily Brontë", genre: "Romantic Tragedy", rating: 4.3, year: 1847 },
    { title: "The Alchemist", author: "Paulo Coelho", genre: "Philosophical", rating: 4.7, year: 1988 },
    { title: "Brave New World", author: "Aldous Huxley", genre: "Science Fiction", rating: 4.4, year: 1932 },
    { title: "Fahrenheit 451", author: "Ray Bradbury", genre: "Dystopian", rating: 4.3, year: 1953 },
    { title: "The Road", author: "Cormac McCarthy", genre: "Post-apocalyptic", rating: 4.2, year: 2006 },
    { title: "The Book Thief", author: "Markus Zusak", genre: "Historical Fiction", rating: 4.8, year: 2005 },
    { title: "The Hunger Games", author: "Suzanne Collins", genre: "Dystopian", rating: 4.7, year: 2008 },
    { title: "Dune", author: "Frank Herbert", genre: "Science Fiction", rating: 4.6, year: 1965 },
    { title: "The Kite Runner", author: "Khaled Hosseini", genre: "Historical Fiction", rating: 4.8, year: 2003 },
    { title: "One Hundred Years of Solitude", author: "Gabriel García Márquez", genre: "Magical Realism", rating: 4.7, year: 1967 },
    { title: "The Da Vinci Code", author: "Dan Brown", genre: "Thriller", rating: 4.0, year: 2003 },
    { title: "The Shining", author: "Stephen King", genre: "Horror", rating: 4.5, year: 1977 },
    { title: "Dracula", author: "Bram Stoker", genre: "Gothic Horror", rating: 4.4, year: 1897 },
    { title: "Frankenstein", author: "Mary Shelley", genre: "Gothic Fiction", rating: 4.3, year: 1818 },
    { title: "The Picture of Dorian Gray", author: "Oscar Wilde", genre: "Philosophical", rating: 4.4, year: 1890 },
    { title: "The Handmaid's Tale", author: "Margaret Atwood", genre: "Dystopian", rating: 4.6, year: 1985 },
    { title: "Slaughterhouse-Five", author: "Kurt Vonnegut", genre: "Science Fiction", rating: 4.5, year: 1969 },
    { title: "Gone with the Wind", author: "Margaret Mitchell", genre: "Historical Fiction", rating: 4.6, year: 1936 },
    { title: "The Giver", author: "Lois Lowry", genre: "Dystopian", rating: 4.4, year: 1993 },
    { title: "Don Quixote", author: "Miguel de Cervantes", genre: "Adventure", rating: 4.2, year: 1605 },
    { title: "Les Misérables", author: "Victor Hugo", genre: "Historical Fiction", rating: 4.7, year: 1862 },
    { title: "Anna Karenina", author: "Leo Tolstoy", genre: "Classics", rating: 4.6, year: 1877 },
    { title: "The Count of Monte Cristo", author: "Alexandre Dumas", genre: "Adventure", rating: 4.8, year: 1844 },
    { title: "The Chronicles of Narnia", author: "C.S. Lewis", genre: "Fantasy", rating: 4.7, year: 1950 },
    { title: "A Tale of Two Cities", author: "Charles Dickens", genre: "Historical Fiction", rating: 4.5, year: 1859 },
    { title: "The Grapes of Wrath", author: "John Steinbeck", genre: "Historical Fiction", rating: 4.4, year: 1939 },
    { title: "The Stranger", author: "Albert Camus", genre: "Philosophical", rating: 4.2, year: 1942 },
    { title: "Beloved", author: "Toni Morrison", genre: "Historical Fiction", rating: 4.4, year: 1987 },
    { title: "Middlemarch", author: "George Eliot", genre: "Classics", rating: 4.5, year: 1871 },
    { title: "The Secret Garden", author: "Frances Hodgson Burnett", genre: "Children's Literature", rating: 4.6, year: 1911 },
    { title: "The Wind-Up Bird Chronicle", author: "Haruki Murakami", genre: "Magical Realism", rating: 4.4, year: 1994 },
    { title: "The Little Prince", author: "Antoine de Saint-Exupéry", genre: "Fable", rating: 4.7, year: 1943 },
    { title: "The Odyssey", author: "Homer", genre: "Epic", rating: 4.6, year: "8th Century BC" },
    { title: "Lolita", author: "Vladimir Nabokov", genre: "Psychological Fiction", rating: 4.3, year: 1955 },
    { title: "The Bell Jar", author: "Sylvia Plath", genre: "Classics", rating: 4.4, year: 1963 }
  ];
  

 // to display all books
 if(localStorage.getItem('library')){
    const books =JSON.parse( localStorage.getItem('library'));
    books.map((item,index) => {
        document.getElementById('books').innerHTML +=`<div> 
        <span>(${index +1})<span/>
                    <p id="title ">Title:${item.title}</p>
                    <p id="author">Author: ${item.author}</p>
                    <p id="genre">Genre:${item.genre}</p>
                                    <p id="genre">Genre:${item.year}</p>
    
                    <p id="rating">Rating:${item.rating}</p></div>`
    })
    
}
else{localStorage.setItem('library', JSON.stringify(books))
    books.map((item,index) => {
        document.getElementById('books').innerHTML +=`<div> 
        <span>(${index +1})<span/>
                    <p id="title ">Title:${item.title}</p>
                    <p id="author">Author: ${item.author}</p>
                    <p id="genre">Genre:${item.genre}</p>
                                    <p id="genre">Genre:${item.year}</p>
    
                    <p id="rating">Rating:${item.rating}</p></div>`
    })
    
}

// function to search book and display result
  const handleClick = () =>{
    if(localStorage.getItem('library')){
        const books =JSON.parse( localStorage.getItem('library'));
    
    }
    else{localStorage.setItem('library', JSON.stringify(books))
    }
    //   let books =JSON.parse( localStorage.getItem('library'));
    const inputValue = document.getElementById("input").value
let resultContainer =document.getElementById("result")

 const book = books.filter((item,index) => item.title.toLowerCase() == inputValue.toLowerCase() || item.genre.toLowerCase() == inputValue.toLowerCase() || item.author.toLowerCase() == inputValue.toLowerCase() )

 console.log (book)
resultContainer.innerHTML="" ;
if (!book.length ==0){
    book.map((item,index) => {
        resultContainer.innerHTML +=`<div> <p id="author">Author: ${item.author}</p>
                <p id="title ">Title:${item.title}</p>
                <p id="genre">Genre:${item.genre}</p>
                <p id="rating">Rating:${item.rating}</p><div/>`
     }
        
     )
}
else{
    resultContainer.innerHTML +=`<p style="color: red; margin:auto;" >no book found</p>`
}
 
  }

//   localStorage.setItem('library', JSON.stringify(books))