import React, {Fragment, useState} from 'react';
import InputGroup from '../commons/input-group/InputGroup';
import Jumbotron from 'react-bootstrap/Jumbotron';
import LoadingButton from '../commons/button/LoadingButton'

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
    fetch("https://proyecto-2-mkloster.herokuapp.com/api/user/token", {
      method: 'GET',
      headers: {
        'email': email,
        'password': password
      },
    }).then (function (response) {return response.json()})
      .then(function (json) {/* Here is your json */})
      .catch(function (error) {/*Handle error*/});
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
