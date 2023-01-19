import { useState } from "react";
import axios from "axios";

function Login() {





  const handleApi = () => {
    
    axios.post('https://snapme-ng.com/api/v1/auth/twitter').then(result => {
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
      
      <button onClick={handleApi} >Login</button>
    </div>
  );
}

export default Login;