import React, {useState,useEffect} from 'react';
import './App.css';
import Login from './components/login/Login';
import Bar from './components/navbar/Bar'

function App() {
  const [logData, setLogData] = useState({ id : '0' , name:'', api_token:''});
  const [IsUserLogged, setIsUserLogged] = useState(false);

  useEffect(() => {
    console.log(logData)
    return () => {
      
    }
  }, [logData])
  return (
      <div>
        <Bar userName = {logData.name}/>
        {!IsUserLogged && <Login onLoginResult = {data => setLogData(data)}/>}
      </div>
  );
}

export default App;
