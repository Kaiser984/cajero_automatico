const formulario = document.getElementById("formulario");

var cuentas = [
    { nombre: "cliente", saldo: 200, password: "hola123" },
    { nombre: "sandy", saldo: 290, password: "hola1234" },
    { nombre: "yats", saldo: 67, password: "hola12345" }
  ];

  // console.log(cuentas.length)
  function validar_acceso (u, p) {
    us_correcto = false;
    ps_correcto = false;
    for (var i = 0; i < cuentas.length; i++){
      // Comparo al usuario
      if (u == cuentas[i].nombre){
        us_correcto = true;
      } 
    
      // Comparo password
      if (p == cuentas[i].password){
        ps_correcto = true;
      }
  }


     if (us_correcto == true && ps_correcto == true){
      document.location = "banco.html"
    }
    else{
        if (us_correcto == false){
          alert("Usuario incorrecto")
        }
        else{
          alert("Password incorrecto")
        }
    }

  }
  formulario.addEventListener('submit', (evento)=>{
    evento.preventDefault()
    let get_usuario = document.getElementById("user").value;
    let get_password = document.getElementById("pass").value;

    validar_acceso(get_usuario, get_password);
})
  
//hola cambio