import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <nav className="menu" tabIndex="0">
      <div className="smartphone-menu-trigger"></div>
     
      <ul >
        <li style={{cursor:'pointer'}}   tabIndex="0" className="icon-dashboard "><span>MyPlaylist</span></li>
        <li style={{cursor:'pointer'}}  tabIndex="0" className="icon-customers"><span>Albums</span></li>
        <li style={{cursor:'pointer'}}  tabIndex="0" className="icon-users"><span>Genres</span></li>
        <li style={{cursor:'pointer'}}  tabIndex="0" className="icon-settings"><span>Log Out</span></li>
      </ul>
    </nav>
    );
};

export default Sidebar;
