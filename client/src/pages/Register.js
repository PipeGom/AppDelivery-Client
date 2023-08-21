import {useState} from 'react'


function App() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function registerUser(event){
    event.preventDefault()

    const response = await fetch('http://localhost:1337/api/register',{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
      },
        body: JSON.stringify({
          name, 
          email,
          password
        }),
    })
    const data = await response.json()
    if (data.status === 'error') {
			alert('El correo ingresado ya se encuentra registrado')
      
		}else{
      alert('Registro exitoso')
      window.location.href = '/inicio'
    }

    console.log(data)
  }

  return (

    <div className="text-center" style={{paddingTop: '5%', paddingLeft: '15%',paddingRight: '15%',paddingBottom: '15%', backgroundColor:' #181C21'}}>


<form onSubmit={registerUser}>

<img  className="mb-4" src={require('../images/Logo_app.png')} alt="Logo" width="200" height="200" />
<h1 className="h3 mb-3 fw-normal" style={{color:'white'}}>Register</h1>

<div className="form-floating">
  
<input  className="form-control"
        id="floatingInputName"
        placeholder="Name"
        type="text" 

        value={name}
        onChange={(e) => setName(e.target.value)}        
        />
  <label htmlFor="floatingInputName">Nombre </label>

</div>
<div className="form-floating">
  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
    value={email}
    onChange={(e) => setEmail(e.target.value)} 
  />

  <label htmlFor="floatingInput">Email address</label>
</div>
<div className="form-floating">

  <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)} 
  />
  <label htmlFor="floatingPassword">Password</label>

</div>

<div className="checkbox mb-3">
  <label>
      <a href="/"> ¿tienes una cuenta? Inicia sesión Aquí</a>
  </label>
</div>

<input  className="w-50 btn btn-lg btn-primary" type="submit" value="Registrarte"/>
<p className="mt-5 mb-3 text-muted">© 2017–2022</p>
</form>
    
      
    </div>
  );
}

export default App
