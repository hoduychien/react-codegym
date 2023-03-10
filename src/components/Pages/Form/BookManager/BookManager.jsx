import React, { useEffect, useState } from 'react';
import './bookManager.scss';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useOpen } from '../../hooks';
import CreateBook from './Modal/CreateBook';
import { Books } from './Books';
import Swal from 'sweetalert2';
import EditBook from './Modal/EditBook';

const BookManager = () => {
    const [isOpen, handleOpen] = useOpen();
    const [isOpenEditModal, setIsOpenEditModal] = useState(false);
    const [books, setBooks] = useState(Books);
    const [bookEdit, setBookEdit] = useState({});

    const openEditModal = async (bookEdit) => {
        setBookEdit(bookEdit);
        setIsOpenEditModal(!isOpenEditModal);
    };

    const setBookstoProps = (data) => {
        const newbook = books.filter((i) => i.title == data.title);
        if (newbook.length > 0) {
            alert('Email already exists in the system !');
            return;
        } else {
            setBooks([...books, data]);
        }
    };
    const handledDeleteBook = (booktitle) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                setBooks(books.filter((books) => books.title !== booktitle));
                Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
            }
        });
    };

    const updateBook = (data) => {
        if (data) {
            let newArr = books.map((item) => {
                item.title = item.title == data.title ? data.title : item.title;
                item.author = item.title == data.title ? data.author : item.author;
                item.price = item.title == data.title ? data.price : item.price;
                item.quantity = item.title == data.title ? data.quantity : item.quantity;
                item.date = item.title == data.title ? data.date : item.date;
                item.status = item.title == data.title ? data.status : item.status;
                item.image = item.title == data.title ? data.image : item.image;
                item.desc = item.title == data.title ? data.desc : item.desc;
                return item;
            });

            setBooks(newArr);
        }
    };

    return (
        <div className="container">
            <div className="book_manager">
                <CreateBook open={isOpen} handleOpen={handleOpen} setBookstoProps={setBookstoProps} />
                {isOpenEditModal && (
                    <EditBook
                        isOpenEditModal={isOpenEditModal}
                        bookEdit={bookEdit}
                        openEditModal={openEditModal}
                        updateBook={updateBook}
                    />
                )}
                <div className="book_manager-heading">
                    <h3>Data Table </h3>
                    <div className="book_manager-button book_manager-button-create" onClick={handleOpen}>
                        Create Book
                    </div>
                </div>
                <table className="book_manager-table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Book Title</th>
                            <th>Author</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((book, index) => {
                            return (
                                <tr key={book.title}>
                                    <td>{index + 1}</td>
                                    <td>{book.title}</td>
                                    <td>{book.author}</td>
                                    <td>{book.quantity}</td>
                                    <td>{book.price}</td>
                                    <td>{book.date}</td>
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
                                        <RemoveRedEyeOutlinedIcon
                                            className="book_manager-icon"
                                            onClick={() => openEditModal(book)}
                                        />
                                        <DeleteOutlineOutlinedIcon
                                            className="book_manager-icon"
                                            onClick={() => handledDeleteBook(book.title)}
                                        />
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BookManager;
