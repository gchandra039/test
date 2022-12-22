import React from "react";

function Header(){
  var x = 18
  return(
    <nav class="navbar navbar-expand-sm bg-danger navbar-dark">
  <div class="container-fluid">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link active" href="#">Active</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <ul class="navbar-nav">
      <li class="float-right">
        <button class ="btn btn-success">Notifications <span class="badge bg-info">{x}</span></button>

      </li>
    </ul>
  </div>
</nav>

  );
}

export default Header;
