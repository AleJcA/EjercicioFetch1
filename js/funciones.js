fetch("https://api.escuelajs.co/api/v1/users")
.then(response => response.json())
.then (data =>{
    let tabla = `<tr>
          <th scope="col">Avatar</th>
          <th scope="col">Nombre</th>
          <th scope="col">Correo</th>
          <th scope="col">Contraseña</th>
          </tr>`

    for(let usuario of data){
        tabla += `<tr>
          <td><img src=${usuario.avatar} class="img-thumbnail" alt="Avatar"></td>
          <td>${usuario.name}</td>
          <td>${usuario.email}</td>
          <td>${usuario.password}</td>
        </tr>`
    }
    document.getElementById("tblUsuarios").innerHTML = tabla
})