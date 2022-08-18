let carrito = [];
const listaJuegos = document.getElementById("contenedor");
const listaCarrito = document.getElementById("carroLista");
const precioTotal = document.getElementById("total");

mostrarJuegos();

function mostrarJuegos() {
    arrayJuegos.forEach(juego => {
        let div = document.createElement(`div`);
        div.className = `container`;
        div.innerHTML = `<div class="card">
                            <div class="descript">
                            <img class="fotoCard" src="fotos/${juego.foto}">
                            <div class="descripcion">${juego.descripcion}</div>
                            </div>
                            <h4>Taurum</h4>
                            <div class="title">
                                <h2 class="titulo">${juego.juego}</h2>
                            </div>
                            <div class="precios">
                                <h3 class="pre">Precio:</h3>
                                <h3 class="pre">$${juego.precio}</h3>
                            </div>
                            <p><label></label><input class="cantidad" id="agregar${juego.juego}" type="number" min="1" max="999" value="1"></p>
                            <button class="btn" id="btn${juego.juego}">AGREGAR</button>
                        </div>`;
    listaJuegos.appendChild(div);
    let btnAgregar = document.getElementById(`btn${juego.juego}`);
    btnAgregar.addEventListener(`click`, ()=> {
        agregarCarrito(juego.juego);
        transicion();
    })
    })
}

function agregarCarrito(juego) {
    let estaEnCarrito = carrito.find(nombre => nombre.juego == juego);
    if(estaEnCarrito) {
        let agregar = document.getElementById(`agregar${juego}`);
        estaEnCarrito.cantidad = Number(estaEnCarrito.cantidad) + Number(agregar.value);
        let precioNuevo = estaEnCarrito.cantidad * estaEnCarrito.precio;
        document.getElementById(`cantidad${estaEnCarrito.juego}`).innerHTML = `<p id="cantidad${estaEnCarrito.cantidad}">${estaEnCarrito.cantidad}</p>`
        document.getElementById(`precioCarro${estaEnCarrito.juego}`).innerHTML = `<p id="precioCarro${estaEnCarrito.juego}">${precioNuevo}</p>`
        carrito.push(estaEnCarrito);
        let mandarPrecioNuevo = agregar.value * estaEnCarrito.precio;
        sumar(mandarPrecioNuevo);
    }else {
        let agregar = document.getElementById(`agregar${juego}`);
        let contenedor = document.createElement(`div`);
        contenedor.setAttribute("id", "todoCarrito");
        contenedor.innerHTML = "";
        listaCarrito.appendChild(contenedor);
        let juegoAgregar = arrayJuegos.find(el=> el.juego == juego);
        juegoAgregar.cantidad = agregar.value
        carrito.push(juegoAgregar);
        document.getElementById(`esconder`).style.display = "flex";
        document.getElementById("btnCarro").style.color = "red";
        document.getElementById("btnCarro").style.backgroundColor = "rgb(255, 200, 0)";
        mostrarCarrito(juegoAgregar);
    }
}

function mostrarCarrito(juegoAgregar) {
    let agregar = document.getElementById(`agregar${juegoAgregar.juego}`);
    agregar = agregar.value * juegoAgregar.precio;
    let div = document.createElement(`div`);
    div.setAttribute("id", "list");
    div.innerHTML = `<p id="cantidad${juegoAgregar.juego}">${juegoAgregar.cantidad}</p> <p id="tituloCarro${juegoAgregar.juego}">${juegoAgregar.juego} $</p><p id="precioCarro${juegoAgregar.juego}">${agregar}</p> <button class="btnEliminar" id="btnEliminar${juegoAgregar.juego}"><i class="fa-solid fa-trash-can"></i></button>`;
    document.getElementById("carroLista").appendChild(div);
    sumar(agregar);
    eliminarJuego(juegoAgregar);
}

function eliminarJuego(juegoBorrar) {
    let btnEliminar = document.getElementById(`btnEliminar${juegoBorrar.juego}`);
    btnEliminar.addEventListener(`click`,()=> { 
            restar(juegoBorrar);
            carrito = carrito.filter(el => el.juego !== juegoBorrar.juego);
            document.getElementById(`cantidad${juegoBorrar.juego}`).innerHTML = `<p id="cantidad${juegoBorrar.cantidad}">${juegoBorrar.cantidad}</p>`;
            btnEliminar.parentElement.remove();
    })
}

function sumar(total) {
    let numer = parseInt(precioTotal.innerText)
    numer += total;
    precioTotal.innerText = numer;
}

function restar(juegoEnCarrito) {
    let precio = document.getElementById(`precioCarro${juegoEnCarrito.juego}`).innerText;
    precioTotal.innerText = precioTotal.innerText - precio;
    if(precioTotal.innerText == 0) {
        document.getElementById(`esconder`).style.display = "none";
        let ocultar = document.getElementById("carroLista");
        ocultar.style.display = "none";
        document.getElementById("btnCarro").style.color = "white";
        document.getElementById("btnCarro").style.backgroundColor = "";
    }
}

function contadorCarro() {
    let cantidadCarro = carrito.length
    document.getElementById("contador").innerText = cantidadCarro;
  }

function transicion() {
    let entrarCarro = document.getElementById("btnCarro");
    entrarCarro.addEventListener(`click`, ()=> {
        let mostrar = document.getElementById("carroLista");
        mostrar.style.display = "block";
    })
    let salirCarro = document.getElementById("x");
    salirCarro.addEventListener(`click`, ()=> {
        let ocultar = document.getElementById("carroLista");
        ocultar.style.display = "none";
    })
}