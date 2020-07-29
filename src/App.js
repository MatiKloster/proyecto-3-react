import React, {useState} from 'react';
import './App.css';
import Login from './components/login/Login';
import Bar from './components/navbar/Bar'
import Body from './components/body/Body';

function SetLocalStorage (data){
    localStorage.setItem('token',data.api_token);
    localStorage.setItem('name',data.name);
}

function WipeLocalStorage() {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
}

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
  // const [logData, setLogData] = useState(initialData);
  const [IsUserLogged, setIsUserLogged] = useState(localStorage.getItem("token") !== null);
  const [products , setProducts] = useState([]);


  const handleProducts = (url) => {
    var bearer = 'Bearer ' + localStorage.getItem('token');
    return new Promise((resolve) => 
        fetch(url, {
          method: 'GET',
          credentials: 'omit',
          headers: {
              'Authorization': bearer,
              'Content-Type': 'application/json'
          },
        })
        .then((response) => {
          if (response.status === 401) {
            alert('Ocurrió un error mientras intentábamos leer la información del servidor, probá relogear!');
          }
          else{
            response.json().then(json => 
              {setProducts(json);
                console.log(json);
              }
            )
          }
          resolve();
        })
        .catch(function(error) {
          alert('Ocurrió un error mientras intentábamos leer la información del servidor, volvé a intentar en unos instantes!');
      })
    );
  }

  const handleLog = (data) => {
    // setLogData(data);
    SetLocalStorage(data);
    setIsUserLogged(true);
    handleProducts('https://proyecto-2-mkloster.herokuapp.com/api/albums');
  };

  const handleLogOut = () =>{
    // setLogData(initialData);
    WipeLocalStorage();
    setIsUserLogged(false);
  }

  return (
      <div >
        <Bar 
          userName = {localStorage.getItem('name')}
          IsUserLogged = {IsUserLogged}
          handleLogOff = {handleLogOut}
          handleProducts = {handleProducts}
        />
        {!IsUserLogged && <Login onLoginResult = {data => handleLog(data)}/>}
        {IsUserLogged && <Body headers = {headCells} data = {products}/>}
      </div>
  );
}

export default App;
