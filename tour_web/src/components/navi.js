import React from 'react';
import logo from '../images/logo.PNG'
const Navi1=()=>{
    return (<div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
      <img src={logo} class="h-10 w-16"></img>
    <a class="navbar-brand" href="/#">Tour Master</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="../css/login.html">Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="../css/signup.html">SignUp</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/#">AboutUs</a>
        </li>
        <li class="nav-item dropdown">

          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="/#">Action</a></li>
            <li><a class="dropdown-item" href="/#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="/#">Something else here</a></li>
          </ul>
        </li>
      </ul>
      <h6 class="pl-96"></h6>
      
      <form class="pl-96 d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  </div>
    );
}


export default Navi1;