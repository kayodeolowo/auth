import { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  console.log({ email, password })
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleApi = () => {
    console.log({ email, password })
    axios.post('https://snapme-ng.com/api/v1/login', {
      email: email,
      password: password
    }).then(result => {
      console.log(result.data)
      alert('success')
    })
      .catch(error => {
        alert('service error')
        console.log(error)
      })
  }

  return (
    <div className="App">
      Email : <input value={email} onChange={handleEmail} type="text" /> <br />
      Password : <input value={password} onChange={handlePassword} type="text" /> <br />
      <button onClick={handleApi} >Login</button>
    </div>
  );
}

export default Login;