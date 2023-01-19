import { useState } from "react";
import axios from "axios";

function Register() {
  const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
      const [country, setCountry] = useState('')
  const [password, setPassword] = useState('')
  console.log({ email, password })
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

   const handleUsername = (e) => {
    setUsername(e.target.value)
  }

   const handleCountry = (e) => {
    setCountry(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleApi = () => {
    console.log({ email, password, username, country })
    axios.post('https://snapme-ng.com/api/v1/signup', {
      email: email,
      password: password,
      username: username,
      country: country,
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
      username : <input value={username} onChange={handleUsername} type="text" /> <br />
      country : <input value={country} onChange={handleCountry} type="text" /> <br />
      Password : <input value={password} onChange={handlePassword} type="text" /> <br />
      <button onClick={handleApi} >register</button>
    </div>
  );
}

export default Register;