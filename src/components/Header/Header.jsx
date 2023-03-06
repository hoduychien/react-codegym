import React from 'react';
import './header.scss';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ForumIcon from '@mui/icons-material/Forum';

const Header = () => {
    return (
        <div className="header">
            <div className="header-search-box">
                <SearchIcon className="header-icon" />
                <input type="text" placeholder="Search topic..." />
            </div>
            <div className="header-action">
                <div className="header-action-item">
                    <ForumIcon className="header-action-icon" />
                </div>
                <div className="header-action-item">
                    <NotificationsIcon className="header-action-icon" />
                </div>
                <div className="header-action-item">
                    <SettingsIcon className="header-action-icon" />
                </div>
            </div>
        </div>
    );
};

export default Header;
