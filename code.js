let datosPersona = {
    nombre: "",
    edad: 0,
    ciudad: "",
    interesPorJs: "",
};

function obtenerDatosDelUsuario() {
    /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */

    document.getElementById("ver-mas").style.width = "100px";
    document.querySelector(".card-header").style.minWidth = "400px";
    document.querySelector("#card").style.minWidth = "400px";
    document.querySelectorAll(".card-header h3").forEach((h3) => {
        h3.style.width = "70%";
    });

    const YEAR = (new Date()).getFullYear();

    let nombre, anio, ciudad;
    /*	Si el usuario selecciona cancelar, deja de solicitar datos	*/
    nombre = prompt("Ingresá tu nombre.");
    if (nombre) {
        anio = prompt("Ingresá el año en que naciste.");
        if (anio) {
            ciudad = prompt("Ingresá la ciudad en donde vives.");
        }
    }

    /*	Si no puso cancelar cargo los datos	*/
    if (nombre && anio && ciudad) {
        datosPersona.nombre = nombre;
        datosPersona.edad = YEAR - anio;
        datosPersona.ciudad = ciudad;
        datosPersona.interesPorJs = confirm("¿Te interesa JavaScript?") ?
            "Sí" :
            "No";
    }
}

function renderizarDatosUsuario() {
    /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
    obtenerDatosDelUsuario();
    /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */

    if (datosPersona.nombre.length)
        document.getElementById("nombre").innerHTML = datosPersona.nombre;

    if (datosPersona.edad)
        document.getElementById("edad").innerHTML = datosPersona.edad;

    if (datosPersona.ciudad.length)
        document.getElementById("ciudad").innerHTML = datosPersona.ciudad;

    if (datosPersona.interesPorJs.length)
        document.getElementById("javascript").innerHTML = datosPersona.interesPorJs;
}

/* ------------------------- NO MODIFICAR ESTE ARRAY ------------------------ */
const listado = [{
        imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
        lenguajes: "HTML y CSS",
        bimestre: "1er bimestre",
    },
    {
        imgUrl: "https://image.flaticon.com/icons/png/512/919/919828.png",
        lenguajes: "Javascript",
        bimestre: "2do bimestre",
    },
    {
        imgUrl: "https://image.flaticon.com/icons/png/512/919/919851.png",
        lenguajes: "React JS",
        bimestre: "3er bimestre",
    },
];

function recorrerListadoYRenderizarTarjetas() {
    /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
    let fila = document.querySelector("#fila");

    if (!fila.innerHTML.length)
        listado.forEach((materia) => {
            fila.innerHTML += `
    <div class="caja">
    <img src=${materia.imgUrl} alt=${materia.lenguajes}>
    <p class="lenguajes">Lenguajes: ${materia.lenguajes}</p>
    <p class="bimestre">Bimestre: ${materia.bimestre}</p>
    </div>`;
        });
}

function mostrarYOcultarDescripcionCompleta() {
    /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
    document.querySelector(".sobre-mi").classList.toggle("sobre-mi-completo");
}