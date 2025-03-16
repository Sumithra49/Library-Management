const Book = require("../models/Book");
const path = require("path");

// Add Book
exports.addBook = async (req, res) => {
  try {
    const { title, author, genre, year, description, bookURL } = req.body;
    const newBook = new Book({
      title,
      author,
      genre,
      year,
      description,
      bookURL,
      coverImage: req.file ? req.file.filename : "",
    });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (err) {
    res.status(500).json({ message: "Error adding book" });
  }
};

// Edit Book
exports.editBook = async (req, res) => {
  try {
    const updatedData = req.body;
    if (req.file) updatedData.coverImage = req.file.filename;

    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      updatedData,
      { new: true }
    );
    res.json(updatedBook);
  } catch (err) {
    res.status(500).json({ message: "Error editing book" });
  }
};

// Delete Book
exports.deleteBook = async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.json({ message: "Book deleted" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting book" });
  }
};

// Get All Books
exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: "Error fetching books" });
  }
};

// Get Book by ID
exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.json(book);
  } catch (err) {
    res.status(500).json({ message: "Error fetching book" });
  }
};
