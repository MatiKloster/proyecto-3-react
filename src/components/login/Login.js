import React, {useState} from 'react';
import InputGroup from '../commons/input-group/InputGroup';
import Jumbotron from 'react-bootstrap/Jumbotron';
import LoadingButton from '../commons/button/LoadingButton';

const  Login = (props) => {
  
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
            alert('Credenciales incorrectas');
          }
          else{
            response.json().then(json => 
              {props.onLoginResult(json)}
            )
            alert('Ya estas logeado!');
          }
          resolve();
        })
        .catch(function(error) {
          alert('Ocurrió un error mientras intentábamos logearte, volvé a intentar en unos instantes!');
      })
    );
  }

  return (
    <Jumbotron className="py-4 col-md-4 offset-md-4">
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
