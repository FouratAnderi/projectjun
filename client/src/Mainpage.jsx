import React from 'react';
import NavBar from './Navbar.jsx';
// import Sidebar from './Asidebar.jsx';
import AllTracks from './Alltracks.jsx';
import './MainPage.css';

const MainPage = ({data,searching}) => {
    return (
        <div className="main-page">
            <NavBar searching={searching}/>
            {/* <div className="content"> */}
                {/* <Sidebar /> */}
                <div className="main-content">
                    <AllTracks data={data}/>
                </div>
            {/* </div> */}
        </div>
    );
};

export default MainPage;
