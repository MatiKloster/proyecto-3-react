import React, {useState,useEffect} from 'react';
import './App.css';
import Login from './components/login/Login';
import Bar from './components/navbar/Bar'
import Body from './components/body/Body';

function setLocalStorage (data){
    localStorage.setItem('token',data.api_token);
    localStorage.setItem('name',data.name);
}

function wipeLocalStorage() {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
}

const urlAlbums = 'https://proyecto-2-mkloster.herokuapp.com/api/albums';
const urlMovies = 'https://proyecto-2-mkloster.herokuapp.com/api/movies';

const albumHeaders = [
  { id: "name",numeric: false,disablePadding: true,label: "Nombre"},
  { id: "artist",numeric: false,disablePadding: true,label: "Artista"},
  { id: "genre", numeric: false, disablePadding: false, label: "Género" },
  { id: "year", numeric: true, disablePadding: false, label: "Año" },
  { id: "price", numeric: true, disablePadding: false, label: "Precio" },
  { id: "quantity", numeric: true, disablePadding: false, label: "Cantidad" }
];
const movieHeaders = [
  { id: "name",numeric: false,disablePadding: true,label: "Nombre"},
  { id: "director",numeric: false,disablePadding: true,label: "Director"},
  { id: "genre", numeric: false, disablePadding: false, label: "Género" },
  { id: "year", numeric: true, disablePadding: false, label: "Año" },
  { id: "price", numeric: true, disablePadding: false, label: "Precio" },
  { id: "quantity", numeric: true, disablePadding: false, label: "Cantidad" }
];

function App() {
  const [IsUserLogged, setIsUserLogged] = useState(localStorage.getItem("token") !== null);
  const [products , setProducts] = useState([]);
  const [headers, setHeaders] = useState([]);

  useEffect(() => {
    if(IsUserLogged && products.length === 0){
      handleProducts(urlAlbums,albumHeaders);
    }
    return () => {
      //cleanup if needed
    }
  }, [IsUserLogged,products])

  const handleProducts = (url,headers) => {
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
              {
                setProducts(json);
                setHeaders(headers);
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
    setLocalStorage(data);
    setIsUserLogged(true);
  };

  const handleLogOut = () =>{
    wipeLocalStorage();
    setIsUserLogged(false);
  }

  return (
      <div >
        <Bar 
          userName = {localStorage.getItem('name')}
          IsUserLogged = {IsUserLogged}
          handleLogOff = {handleLogOut}
          handleAlbums = {() => handleProducts(urlAlbums,albumHeaders)}
          handleMovies = {() => handleProducts(urlMovies,movieHeaders)}
        />
        <div className="py-4 col-md-8 offset-md-2">
        {!IsUserLogged && <Login onLoginResult = {data => handleLog(data)}/>}
        {IsUserLogged && <Body headers = {headers} data = {products}/>}
        </div>
      </div>
  );
}

export default App;
