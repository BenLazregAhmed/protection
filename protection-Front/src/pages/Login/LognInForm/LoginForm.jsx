import React ,{useState} from 'react'
import './LoginForm.css'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Button from 'react-bootstrap/esm/Button'
import { Link, Navigate,useNavigate } from 'react-router-dom'
import Toast from 'react-bootstrap/Toast';

function LoginForm() {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const toggleShowA = () => setShowA(!showA);
    const [showA, setShowA] = useState(true);
    const navigate = useNavigate();

    const handleAdd= async ()=>{
         
          const response = await fetch('http://localhost:8080/users/login',{
          method:'POST',
          headers:{'content-type':'application/json'},
          body: JSON.stringify({email,password:password})
        })
        const data= await response.json();
        console.log(data);
        if (data.message == "Email not exits") 
             {
               <Toast show={showA} onClose={toggleShowA}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">failed!!</strong>
            <small>Just Now!!</small>
          </Toast.Header>
          <Toast.Body>Email not exits</Toast.Body>
        </Toast>
             } 
             else if(data.message == "Login Success")
             { 
                navigate("/")
            } 
              else 
             { 
                alert("Password not match");
    }}
    
  return (
    <>
        <div className='logIn-div'>
        <form>
            <Container>
                <Row className='login-row-title'>
                    <h2>Login</h2>
                </Row>
                <Row className='login-row-email'>
                    <label>Email</label>
                    <input type="email" placeholder="Email" value={email} onChange={e=>{setEmail(e.target.value)}}/>
                </Row>
                <Row className='login-row-password'>
                    <label>Password</label>
                    <input type="password" placeholder="Password" value={password} onChange={e=>{setPassword(e.target.value)}}/>
                    <Link className='pass-link'>Mot de passe oublié?</Link>
                </Row>
                <Row>
                    <Button type='button' onClick={handleAdd}>Login</Button>
                </Row>
            </Container>
        </form>
        </div>
    </>
  )
}

export default LoginForm