const books = [
    {
        "author": "George Orwell",
        "title": "1984",
        "year": 1949,
        "description": "A dystopian novel set in a totalitarian society under constant surveillance."
    },
    {
        "author": "Harper Lee",
        "title": "To Kill a Mockingbird",
        "year": 1960,
        "description": "A novel about racial injustice in the Deep South, seen through the eyes of a young girl."
    },
    {
        "author": "J.K. Rowling",
        "title": "Harry Potter and the Sorcerer's Stone",
        "year": 1997,
        "description": "The first book in the Harry Potter series, introducing the young wizard and his adventures at Hogwarts."
    },
    {
        "author": "J.R.R. Tolkien",
        "title": "The Lord of the Rings: The Fellowship of the Ring",
        "year": 1954,
        "description": "The first part of the epic fantasy trilogy, following the journey to destroy the One Ring."
    },
    {
        "author": "F. Scott Fitzgerald",
        "title": "The Great Gatsby",
        "year": 1925,
        "description": "A novel about the American Dream and the disillusionment of the Jazz Age."
    }
];

let currentBookIndex = 0;

document.getElementById('nextBookButton').addEventListener('click', function() {
    const bookDetails = document.getElementById('bookDetails');

    
    const book = books[currentBookIndex];
    bookDetails.innerHTML = `
        <h2>${book.title} (${book.year})</h2>
        <p><strong>Author:</strong> ${book.author}</p>
        <p>${book.description}</p>
    `;

    
    currentBookIndex = (currentBookIndex + 1) % books.length;
});
