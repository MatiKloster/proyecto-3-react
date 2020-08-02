import React, {useState, useEffect, useCallback} from 'react';
import InputGroup from '../commons/input-group/InputGroup';
import Jumbotron from 'react-bootstrap/Jumbotron';
import LoadingButton from '../commons/button/LoadingButton';

const  Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);

  const handleKeyUp = (e) => {
    if(e.key === 'Enter'){
      setLoading(true);
    }
  }

  const handleClick = useCallback(() => {
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
  },[props,email,password])

  useEffect(() => {
    let mounted = true;
    if (isLoading) {
        handleClick().then(() => {
            if(mounted){
                setLoading(false);
            }
        });
    }
    return () => {
        mounted = false;
    }
}, [isLoading,handleClick]);



const handleChange = (name,value) => {
  if(name === 'Email'){
    setEmail(value);
  }
  else{
    setPassword(value);
  }
};

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
          handleKeyUp = {handleKeyUp}
        />
        <LoadingButton
          variant = {'dark'}
          as = {'submit'}
          handler = {handleClick}
          isLoading = {isLoading}
          startLoading = {() => setLoading(true)}
        />
    </Jumbotron>
  );
}

export default Login;
