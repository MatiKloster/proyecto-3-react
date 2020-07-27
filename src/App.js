import React, {useState,useEffect} from 'react';
import './App.css';
import Login from './components/login/Login';
import Bar from './components/navbar/Bar'
import EnhancedTable from './components/body/table/EnhancedTable';

const initialData = { id : '0' , name:'', api_token:''};
const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Nombre"
  },
  { id: "genre", numeric: false, disablePadding: false, label: "Género" },
  { id: "year", numeric: true, disablePadding: false, label: "Año" },
  { id: "price", numeric: true, disablePadding: false, label: "Precio" },
  { id: "quantity", numeric: true, disablePadding: false, label: "Cantidad" }
];
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
      <div >
        <Bar 
          userName = {logData.name}
          IsUserLogged = {IsUserLogged}
          handleLogOff = {handleLogOut}
        />
        {!IsUserLogged && <Login onLoginResult = {data => handleLog(data)}/>}
        {IsUserLogged && <EnhancedTable headers = {headCells}/>}
      </div>
  );
}

export default App;
