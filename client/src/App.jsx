
import React, { useEffect, useState } from 'react';
import Log from './Log.jsx';
import MainPage from './Mainpage.jsx';
import axios from 'axios';
import Search from './Searched.jsx';
const App = () => {
  const [data, setData] = useState([]);
  const [ref, setRef] = useState(null);
  const [view, setView] = useState('log');
  const [password,setpassword]=useState('')
  const [searched, setsearched] = useState([]);
  useEffect(() => {
    axios.get('http://127.0.0.1:8080/tracks')
      .then((res) => {
        setData(res.data);
      });
  }, [ref]);

  const logging=(x)=>{
    axios.get(`http://127.0.0.1:8080/users/${x}`)
    .then((res)=>{
            changeView('main'); // Navigate to MainPage
    }).catch((err)=>{console.log(err);})
  }

 const searching=(x)=>{
    axios.get(`http://127.0.0.1:8080/tracks/${x}`)
    .then((res)=>{
      setsearched(res.data)
      console.log(res.data)
            changeView('searched'); // Navigate to MainPage
    }).catch((err)=>{console.log(err);})
  }
  const changeView = (newView) => {
    setView(newView);
  };

  const renderView = () => {
    if (view === 'log') {
      return <Log  change={changeView} log={logging}/>;
    } else if (view === 'main') {
      return <MainPage data={data} searching={searching}/>;
    }
    if (view === 'acoount') {
      return <Log />;
    } else if (view === 'searched') {
      return <Search change={changeView} data={searched} />;

  };}

  return (
    <div className="App">
      {renderView()}
    </div>
  );
};

export default App;

