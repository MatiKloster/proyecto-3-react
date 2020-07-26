import React, {useState,useEffect} from 'react';
import './App.css';
import Login from './components/login/Login';
import Bar from './components/navbar/Bar'

const initialData = { id : '0' , name:'', api_token:''};

function App() {
  const [logData, setLogData] = useState(initialData);
  const [IsUserLogged, setIsUserLogged] = useState(false);

  useEffect(() => {
    console.log(logData)
    return () => {
      
    }
  }, [logData])

  const handleLog = (data) => {
    setLogData(data);
    setIsUserLogged(true);
  };

  const handleLogOut = () =>{
    setLogData(initialData);
    setIsUserLogged(false);
  }

  return (
      <div>
        <Bar 
          userName = {logData.name}
          IsUserLogged = {IsUserLogged}
          handleLogOff = {handleLogOut}
        />
        {!IsUserLogged && <Login onLoginResult = {data => handleLog(data)}/>}
      </div>
  );
}

export default App;
