import React, { useEffect, useState } from 'react';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactLists = () => {
    const [contacts, setContacts] = useState();
    const [myContact, setMyContact] = useState();
    const { state } = useLocation();

    const navigate = useNavigate();

    const getContactList = async () => {
        const response = await axios.get('http://localhost:3004/contacts');
        const data = await response.data;
        if (data.statusCode === 200) {
            setContacts(data.body);
        }
    };

    const getMyContact = async () => {
        const response = await axios.get('http://localhost:3004/contacts/1');
        const data = await response.data;
        if (data.statusCode === 200) {
            setMyContact(data.body);
        }
    };

    const handleOpenDetailContact = (data) => {
        navigate(`/manage-contacts/contact/${data.id}`, {
            state: data,
        });
    };
    useEffect(() => {
        getMyContact();
        getContactList();
    }, []);
    return (
        <div className="contacts">
            <ToastContainer />
            <div className="contacts-header">
                <div className="contacts-header-heading">
                    <div className="contacts-header-link">Nhóm</div>
                    <div className="contacts-header-title">Liên hệ</div>
                    <div className="contacts-header-link" onClick={() => navigate('/manage-contacts/create-contact')}>
                        <AddRoundedIcon className="contacts-header-icon" />
                    </div>
                </div>
                <form className="contacts-header-search">
                    <SearchRoundedIcon className="contacts-header-search-icon" />
                    <input type="text" placeholder="Tìm kiếm" />
                </form>
            </div>
            <div className="contacts-main-item">
                <div className="contacts-main-avatar">
                    <img src={myContact ? myContact.avatar : ''} alt="" />
                </div>

                <div className="contacts-main-info">
                    <h3>{myContact && myContact.name}</h3>
                    <span>{myContact && myContact.email}</span>
                </div>
            </div>

            <div className="contacts-lists">
                {contacts &&
                    contacts.map((contact, index) => {
                        return (
                            <div
                                className="contacts-lists-item"
                                key={contact.id}
                                onClick={() => handleOpenDetailContact(contact)}
                            >
                                <div className="contacts-list-item-text">
                                    <h3>{contact.name}</h3>
                                    <span>{contact.email}</span>
                                </div>
                                {contact.id === 1 ? (
                                    <span>Thẻ của bạn</span>
                                ) : (
                                    <ChevronRightRoundedIcon className="contacts-header-icon" />
                                )}
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default ContactLists;
