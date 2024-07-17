import React, { useState } from 'react';
import music from "./mp3/test.mp3";
import './AllTracks.css';
import Swal from 'sweetalert2'
const Alltracks = ({ data }) => {
    const [playlist, setPlaylist] = useState([]);
    
    const [selectedIndex, setselectedIndex] = useState(null);
   
   
    
    const handleHeartClick =(track,index)=>{
        if(selectedIndex!==null){
            setselectedIndex(null)
        }
        else {
            setselectedIndex(index) 
            // setPlaylist([...playlist,track])
            console.log([...playlist]);
        }

    }
    return (
        <div className='grid-container'>
            {data.map((track,i) => (
                <div className="card" key={track.id}>
                    <div className="top">
                        <div className="pfp">
                            <div className="playing">
                                {[...Array(5)].map((_, index) => (
                                    <div key={index} className={`greenline line-${index + 1}`}></div>
                                ))}
                            </div>
                        </div>
                        <div className="texts">
                            <p className="title-1" onClick={()=>{Swal.fire({
  title: track.imageLink,
  
  showClass: {
    popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `
  },
  hideClass: {
    popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `
  }
});}}>{track.trackname}</p>
                            <p className="title-2">{track.artistname}</p>
                        </div>
                    </div>

                    <div className="controls">
                        <ControlIcon />
                        <ControlIcon />
                        <ControlIcon />
                        <ControlIcon />
                        <div className="air"></div>
                        <HeartIcon 
                            isFilled={selectedIndex===i?true:false} 
                            onClick={() => handleHeartClick(track,i)} 
                        />
                    </div>
                    <audio className='aud' controls>
                        <source src="horse.ogg" type="audio/ogg" />
                        <source src={music} type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                    <div className="time">
                        <div className="elapsed"></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

const HeartIcon = ({ isFilled, onClick }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={isFilled ? "red" : "none"}
        stroke="currentColor"
        strokeWidth="2"
        height="24"
        width="24"
        onClick={onClick}
        className="heart-icon"
    >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
);

const ControlIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        height="24"
        width="24"
    >
        <path
            clipRule="evenodd"
            d="M12 21.6a9.6 9.6 0 1 0 0-19.2 9.6 9.6 0 0 0 0 19.2Zm.848-12.352a1.2 1.2 0 0 0-1.696-1.696l-3.6 3.6a1.2 1.2 0 0 0 0 1.696l3.6 3.6a1.2 1.2 0 0 0 1.696-1.696L11.297 13.2H15.6a1.2 1.2 0 1 0 0-2.4h-4.303l1.551-1.552Z"
            fillRule="evenodd"
        ></path>
    </svg>
);

export default Alltracks;
