import React, {useState, useEffect} from 'react';
import InputGroup from '../commons/input-group/InputGroup';
import Jumbotron from 'react-bootstrap/Jumbotron';
import LoadingButton from '../commons/button/LoadingButton';

function Login() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (name,value) => {
      if(name === 'Email'){
        setEmail(value);
      }
      else{
        setPassword(value);
      }
  };

  const handleClick = () => {
    return new Promise((resolve) => 
        fetch("https://proyecto-2-mkloster.herokuapp.com/api/user/token", {
          method: 'GET',
          headers: {
            'email': email,
            'password': password
          },
        })
        .then((response) => {
          if (response.status === 401) {
            console.log(response);
            alert('Credenciales incorrectas');
          }
          else{
            response.json().then(json => {console.log(json.api_token)})
            alert('Ya estas logeado!');
          }
          resolve();
        })
        .catch(function(error) {
              console.log('DO WHAT YOU WANT')
      })
    );
  }

  return (
    <Jumbotron>
        <InputGroup
          attribute= {{
            id : 'user-Input',
            name : 'Email',
            type : 'email',
            placeholder : 'Ingrese su email',
          }}
          handleChange = {handleChange}
        />
        <InputGroup
          attribute= {{
            id : 'pwd-Input',
            name : 'Constraseña',
            type : 'password',
            placeholder : 'Ingrese su contraseña',
          }}
          handleChange = {handleChange}
        />
        <LoadingButton
          variant = {'dark'}
          as = {'submit'}
          handler = {handleClick}
        />
    </Jumbotron>
  );
}

export default Login;
