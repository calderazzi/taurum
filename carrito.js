let carrito = [];
let estaEnCarrito;
const listaJuegos = document.getElementById("contenedor");
const listaCarrito = document.getElementById("carroLista");
const precioTotal = document.getElementById("total");

MostrarJuegos(arrayJuegos);
const nombreProductoAgregar = document.getElementById(`nombreProductoBuscar`);
nombreProductoAgregar.addEventListener(`input`, () => {
  let encontrados = arrayJuegos.filter(({nombre}) => {
    return nombre.toLowerCase().includes(nombreProductoAgregar.value.toLowerCase());
  });
  MostrarJuegos(encontrados);
});

function MostrarJuegos(array) {
  listaJuegos.innerHTML = "";
  if(array.length === 0) {
    Toastify({
      text: 'No se encontró!',
      duration: 1900,
      position: 'left',
      gravity: "top"
  }).showToast()
    MostrarJuegos(arrayJuegos);
  }
  array.forEach(juego => {
    let div = document.createElement(`div`);
      div.className =  `container`;
      div.innerHTML =  `<div class="card">
                          <div class="descript">
                            <img class="fotoCard" src="fotos/${juego.foto}" alt="foto de ${juego.nombre}">
                            <div class="descripcion">${juego.descripcion}</div>
                          </div>
                          <h4>Taurum</h4>
                          <div class="title">
                            <h2 class="titulo">${juego.nombre}</h2>
                          </div>
                          <div class="precios">
                            <h3 class="pre">Precio:</h3>
                            <h3 class="pre">$${juego.precio}</h3>
                          </div>
                          <div class="cant">cantidad:</div>
                          <p><label></label><input class="cantidad" id="agregar${juego.nombre}" type="number" min="1" max="999" value="1"></p>
                          <button class="btn" id="btn${juego.nombre}">AGREGAR</button>
                        </div>`;
    listaJuegos.appendChild(div);
    let btnAgregar = document.getElementById(`btn${juego.nombre}`);
    btnAgregar.addEventListener(`click`, ()=> {
      agregarCarrito(juego.nombre);
      transicion();
    })
  })
}

function agregarCarrito(juego) {
  estaEnCarrito = carrito.find(el => el.nombre == juego);
  if(estaEnCarrito) {
    let agregar = document.getElementById(`agregar${juego}`);
    estaEnCarrito.cantidad = Number(estaEnCarrito.cantidad) + Number(agregar.value);
    let precioNuevo = estaEnCarrito.cantidad * estaEnCarrito.precio;
    document.getElementById(`cantidad${estaEnCarrito.nombre}`).innerHTML = `<p id="cantidad${estaEnCarrito.cantidad}">${estaEnCarrito.cantidad}</p>`;
    document.getElementById(`precioCarro${estaEnCarrito.nombre}`).innerHTML = `<p id="precioCarro${estaEnCarrito.nombre}">${precioNuevo}</p>`;
    for(let i=0; i < Number(agregar.value); i++) {
      carrito.push(estaEnCarrito);
    }    
    let mandarPrecioNuevo = agregar.value * estaEnCarrito.precio;
    sumar(mandarPrecioNuevo);
  }else {
    let agregar = document.getElementById(`agregar${juego}`);
    estaEnCarrito = arrayJuegos.find(el=> el.nombre == juego);
    estaEnCarrito.cantidad = agregar.value;
    for(let i=0; i < Number(agregar.value); i++) {
      carrito.push(estaEnCarrito);
    }   
    document.getElementById(`esconder`).style.display = "flex";
    document.getElementById("btnCarro").style.color = "red";
    document.getElementById("btnCarro").style.backgroundColor = "rgb(255, 200, 0)";
    mostrarCarrito(estaEnCarrito);
if(carrito.length >= 1) {
    let divwsp = document.createElement(`div`);
      divwsp.innerHTML = `<button id="btnComprar">Pedir disponibilidad por whatsapp</button>`;
      listaCarrito.appendChild(divwsp); 
      let btnComprar = document.getElementById("btnComprar");
      btnComprar.addEventListener(`click`, ()=> {
        whatsapp();
      })
}
  }
}

function mostrarCarrito(juegoAgregar) {
  let agregar = document.getElementById(`agregar${juegoAgregar.nombre}`);
  agregar = agregar.value * juegoAgregar.precio;
  let div = document.createElement(`div`);
  div.setAttribute("id", `list${juegoAgregar.nombre}`);
  div.innerHTML = `<p id="cantidad${juegoAgregar.nombre}">${juegoAgregar.cantidad}</p> <p id="tituloCarro${juegoAgregar.nombre}">${juegoAgregar.nombre} $</p><p id="precioCarro${juegoAgregar.nombre}">${agregar}</p> <button class="btnEliminar" id="btnEliminar${juegoAgregar.nombre}"><i class="fa-solid fa-trash-can"></i></button>`;
  document.getElementById("carroLista").appendChild(div);
  sumar(agregar);
  eliminarJuego(juegoAgregar);
}

function eliminarJuego(juegoBorrar) {
  let btnEliminar = document.getElementById(`btnEliminar${juegoBorrar.nombre}`);
  btnEliminar.addEventListener(`click`,()=> {     
    Swal.fire({
      title: 'Estas seguro?',
      text: `Vas a eliminar ${juegoBorrar.nombre}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí!'
    }).then((result) => {
      if (result.isConfirmed) {
        restar(juegoBorrar);
        carrito = carrito.filter(el => el.nombre !== juegoBorrar.nombre);
        document.getElementById(`cantidad${juegoBorrar.nombre}`).innerHTML = `<p id="cantidad${juegoBorrar.cantidad}">${juegoBorrar.cantidad}</p>`;
        btnEliminar.parentElement.remove();
        contadorCarro();
        Swal.fire({
          icon: 'success',
          title: 'Confirmado!',
          showConfirmButton: false,
          timer: 1000
        })
      }      
    })
  })
}

function sumar(total) {
  contadorCarro();
  let numer = parseInt(precioTotal.innerText);
  numer += total;
  precioTotal.innerText = numer;
}

function restar(juegoEnCarrito) {
  let precio = document.getElementById(`precioCarro${juegoEnCarrito.nombre}`).innerText;
  precioTotal.innerText = precioTotal.innerText - precio;
  if(precioTotal.innerText == 0) {
    document.getElementById(`esconder`).style.display = "none";
    let ocultar = document.getElementById("carroLista");
    ocultar.style.display = "none";
    document.getElementById("btnCarro").style.color = "white";
    document.getElementById("btnCarro").style.backgroundColor = "";
    let btnComprar = document.getElementById("btnComprar");
    btnComprar.parentElement.remove();
  }
}

function transicion() {
  let entrarCarro = document.getElementById("btnCarro");
  entrarCarro.addEventListener(`click`, ()=> {
    document.getElementById("carroLista").style.display = "block";
  })
  let salirCarro = document.getElementById("x");
  salirCarro.addEventListener(`click`, ()=> {
    document.getElementById("carroLista").style.display = "none";
  })
}

function guardarCarrito() {
  localStorage.setItem("carroGuardado",JSON.stringify(carrito));
}

cargaCarro();

function cargaCarro() {
  let arrayStorage = JSON.parse(localStorage.getItem("carroGuardado"));
  if(arrayStorage) {
    Toastify({
      text: 'Tu carrito te espera!',
      duration: 1500,
      position: 'right',
      gravity: "top"
  }).showToast()
    for(let elements of arrayStorage) {
      agregarCarrito(elements.nombre);
    }
    transicion();
  }
}

function contadorCarro() {
  guardarCarrito();
  document.getElementById("contador").innerText = carrito.length;
  if (carrito.length == 0) {
    localStorage.clear();
  }
}

function whatsapp() {
  document.getElementById("fecha").style.display = "block";
  const result = [];
  carrito.forEach((item)=>{
    if(!result.includes(item)){
      result.push(item);
    }
  })
  let wsp = "";
  for(let elements of result) {
    wsp += `${elements.cantidad} ${elements.nombre}; 
`;
  }
  let btnEnviar = document.getElementById(`fechaEvento`);
  btnEnviar.addEventListener(`click`, ()=> {
    let fechaSeleccionada = document.getElementById("fechaSeleccionada").value;
    wsp = `Hola! Necesitaría saber disponibilidad para el: ${fechaSeleccionada} de: ${wsp} TOTAL: $${precioTotal.innerText}`;
    document.getElementById("fecha").style.display = "none";
    carrito = [];
    localStorage.clear();
    window.open(`https://wa.me/543834322324?text=${wsp}`);
    location.reload();
  })
}