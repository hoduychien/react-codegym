import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useFormatDate } from '../../hooks';
import ModaLCreateBook from './ModalCreateBook';
import { useOpen } from '../../hooks';
import { ToastContainer, toast } from 'react-toastify';
import ModalEditBook from './ModalEditBook';

const Books = () => {
    const [isOpenCreateModal, handleOpen] = useOpen();
    const [isOpenEditModal, handleOpenEdit] = useOpen();
    const [books, setBooks] = useState([]);
    const [selectedBook, setSelectedBook] = useState();

    const [formatTime] = useFormatDate();
    const getBooks = async () => {
        const response = await axios.get('http://localhost:3004/books');
        const data = await response.data;
        if (data.statusCode === 200) {
            setBooks(data.body);
        }
    };
    useEffect(() => {
        getBooks();
    }, []);

    const createBook = async (data) => {
        const response = await axios.post('http://localhost:3004/books', data);
        if (response.data) {
            getBooks();
            toast.success('Create books success ~', {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            });
        }
    };

    const deleteBook = (book) => {
        if (window.confirm('Are you sure you want to delete this book?')) {
            axios.delete(`http://localhost:3004/books/${book.id}`);
            getBooks();
            toast.success(`Delete ${book.title} success ~`, {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            });
        }
    };

    const handleOpenEditModal = (book) => {
        handleOpenEdit();
        setSelectedBook(book);
    };

    const updateBook = async (data) => {
        if (window.confirm('Are you sure you want to change this book information?')) {
            const response = await axios.put(`http://localhost:3004/books/${selectedBook.id}`, data);
            if (response.data) {
                getBooks();
                toast.success(`Update ${selectedBook.title} success ~`, {
                    position: 'bottom-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                });
            }
        }
    };

    return (
        <div className="container">
            <ToastContainer />
            <div className="book_manager">
                <div className="book_manager-heading">
                    <h3>Books Management</h3>
                    <div className="book_manager-button book_manager-button-create" onClick={handleOpen}>
                        Create Book
                    </div>
                </div>

                <ModaLCreateBook
                    open={isOpenCreateModal}
                    selectedBook={selectedBook}
                    createBook={createBook}
                    handleOpen={handleOpen}
                />
                {isOpenEditModal && (
                    <ModalEditBook
                        open={isOpenEditModal}
                        updateBook={updateBook}
                        selectedBook={selectedBook}
                        handleOpen={handleOpenEdit}
                    />
                )}
                <table className="book_manager-table">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Description</th>
                            <th>Date created</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books &&
                            books.map((book, index) => (
                                <tr key={book.id}>
                                    <td>{index + 1}</td>
                                    <td>{book.title}</td>
                                    <td>{book.author}</td>
                                    <td>{book.price}</td>
                                    <td>{book.quantity}</td>
                                    <td>{book.desc}</td>
                                    <td>{formatTime(book.createdAt)}</td>
                                    <td>
                                        <div
                                            className={
                                                book.status == 1
                                                    ? 'paid'
                                                    : book.status == 2
                                                    ? 'pending'
                                                    : book.status == 3
                                                    ? 'rejected'
                                                    : ''
                                            }
                                        >
                                            {book.status == 1
                                                ? 'paid'
                                                : book.status == 2
                                                ? 'pending'
                                                : book.status == 3
                                                ? 'rejected'
                                                : ''}
                                        </div>
                                    </td>
                                    <td>
                                        <button
                                            className="book_manager-button book_manager-button-edit"
                                            onClick={() => handleOpenEditModal(book)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="book_manager-button book_manager-button-delete"
                                            onClick={() => deleteBook(book)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Books;
