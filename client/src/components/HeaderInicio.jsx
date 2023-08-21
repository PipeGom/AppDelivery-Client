import React from "react";


const Header = () => {
  /* Envolvemos la home con el provider del context */
  return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Ninth navbar example">
            <div className="container-xl" style={{ marigin:'auto'}}>
            <img  className="mb-4" src={require('../images/Logo_app.png')} alt="Logo" width="90" height="90"/>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

               
                <form >
                <input className="form-control" type="text" placeholder="Search" aria-label="Search"/>
               
                </form>
                <a  class="fcc-btn" href='/login' style={{color:'white'}}>log out</a>
                
            </div>
            
        </nav>
  );
};

export default Header;
