const aprobado = document.getElementById('aprobado');
const noAprobado = document.getElementById('no-aprobado');
const reapr = document.getElementById('reapr');
const reaprNoProcede = document.getElementById('reapr-no-procede');
const domicilio = document.getElementById('domicilio');
const telefono = document.getElementById('telefono');
const agenda = document.getElementById('agenda');
const reaprOkSocioBz = document.getElementById('reapr-ok-socio-bz');
const red = document.getElementById('red');


const inputSocio = document.getElementById('socio');
const inputLider = document.getElementById('lider');

const txtestimado = mostrarFecha() + " Estimad@ ";

const txtInicial = " agradecemos nos contacte por este medio y ofrecemos una disculpa por el tiempo de espera, en respuesta a su solicitud de servicio le informamos que "

const txtSiProcede = " su requerimiento fue procesado y su crédito se encuentra aprobado.";

const txtNoProcede = " su requerimiento no pudo ser procesado ya que se le está generando una nueva llamada y no tenemos respuesta a nuestro llamado telefónico para la validación de datos.";

const txtReaprSiProcede = " su requerimiento fue procesado y la reapertura de su crédito se encuentra aprobada.";

const txtReaprNoProcede = "la reapertura de su código no procede por la siguiente información detallada. "

const txtDomicilio = "se procede con la actualización de dirección según planilla de servicios adjunta.";

const txtTelefono = "el cambio de número telefónico fue procesado, pero no tenemos respuesta a las llamadas telefónicas que se les está generando para la respectiva validación de datos.";

const txtAgendamiento = "se programa llamada telefónica para la verificación de datos a las ";

const txtReaprOkSocioBz = "la reapertura de su código si procede, pero se le está generando una llamada para la respectiva validación de datos y no tenemos respuesta a nuestro llamado.";

const txtRed = "su requerimiento no puede ser procesado ya que al momento se verifica el análisis de red actualizado ";

let respFinal;
let buro;
let horaProgramada;

function clearInputSocioLider() {
    inputSocio.value = "";
    inputLider.value = "";
}

function respuestasLider() {
    let lider = convertidorMayuscula(inputLider.value);
    let socio = convertidorMayuscula(inputSocio.value);

    if (aprobado.checked) {
        respFinal = txtestimado + lider + txtInicial + "su requerimiento fue procesado y crédito del código " + socio + " se encuentra aprobado.";
    } else if (noAprobado.checked) {
        respFinal = txtestimado + lider + txtInicial + "su requerimiento no pudo ser procesado ya que se le está generando una nueva llamada al código " + socio + " y no tenemos respuesta a nuestro llamado telefónico para la validación de datos."
    } else if (reapr.checked) {
        respFinal = txtestimado + lider + txtInicial + "la reapertura del código " + socio + " se encuentra aprobado.";
    } else if (reaprNoProcede.checked) {
        buro = convertidorMayuscula(prompt("Detalle el buró de crédito"));
        respFinal = txtestimado + lider + txtInicial + "la reapertura del código " + socio + " no procede por la siguiente información detallada. " + buro;
    } else if (domicilio.checked) {
        respFinal = txtestimado + lider + txtInicial + "se procede con la actualización de dirección del código " + socio + " según planilla de servicios adjunta.";
    } else if (telefono.checked) {
        respFinal = txtestimado + lider + txtInicial + "se procede con la actualización del número telefónico del código " + socio + ", pero no tenemos respuesta a las llamadas telefónicas que se les está generando para la respectiva validación de datos.";
    } else if (agenda.checked) {
        horaProgramada = prompt("Ingrese la hora solicitada.")
        respFinal = txtestimado + lider + txtInicial + "se programa llamada telefónica para la verificación de datos del código " + socio + " a las " + horaProgramada + " del día de hoy según su requerimiento.";
    } else if (reaprOkSocioBz.checked) {
        respFinal = txtestimado + lider + txtInicial + "la reapertura del código " + socio + " si procede, pero se le está generando una llamada para la respectiva validación de datos y no tenemos respuesta a nuestro llamado.";
    } else if (red.checked) {
        respFinal = txtestimado + lider + txtInicial + txtRed + "del código " + socio + " al cual pertenece y la red mantiene los cupos elevados.";
    } else {
        alert("Por favor debe seleccionar una respuesta.");
    };
    clearInputSocioLider();
    return document.getElementById('mostrar-resp').innerHTML = respFinal;

};

function respuestaSocio() {
    let socio = convertidorMayuscula(inputSocio.value);
    if (aprobado.checked) {
        respFinal = txtestimado + socio + txtInicial + txtSiProcede;
    } else if (noAprobado.checked) {
        respFinal = txtestimado + socio + txtInicial + txtNoProcede;
    } else if (reapr.checked) {
        respFinal = txtestimado + socio + txtInicial + txtReaprSiProcede;
    } else if (reaprNoProcede.checked) {
        buro = convertidorMayuscula(prompt("Detalle el buró de crédito"));
        respFinal = txtestimado + socio + txtInicial + txtReaprNoProcede + buro;
    } else if (domicilio.checked) {
        respFinal = txtestimado + socio + txtInicial + txtDomicilio;
    } else if (telefono.checked) {
        respFinal = txtestimado + socio + txtInicial + txtTelefono;
    } else if (agenda.checked) {
        horaProgramada = prompt("Ingrese la hora solicitada.")
        respFinal = txtestimado + socio + txtInicial + txtAgendamiento + horaProgramada + " del día de hoy según su requerimineto.";
    } else if (reaprOkSocioBz.checked) {
        respFinal = txtestimado + socio + txtInicial + txtReaprOkSocioBz;
    } else if (red.checked) {
        respFinal = txtestimado + socio + txtInicial + txtRed + "al cual pertenece y la red mantiene los cupos elevados.";
    } else {
        alert("Por favor debe seleccionar una respuesta.");
    };
    clearInputSocioLider();
    return document.getElementById('mostrar-resp').innerHTML = respFinal;
};

function valdiarCheckEmpresarios() {
    const checkSocio = document.getElementById('check-socio');
    const checkLider = document.getElementById('check-lider');
    if (checkSocio.checked) {
        respuestaSocio();
    } else if (checkLider.checked) {
        respuestasLider();
    } else {
        alert("Seleccione para quien es la respuesta.");
    };
};

// con está función convertimos el primer caracter de una palabra a mayuscula 
function convertidorMayuscula(mayus) {
    let palabra;
    palabra = mayus.split(" ").map(letraMayuscula => {
        return letraMayuscula[0].toUpperCase() + letraMayuscula.slice(1).toLowerCase();
    });
    // colocamos un espacio para separar cada palabra
    return palabra.join(" ");
};

// funcion para mostrar la fecha actual en el script
function mostrarFecha() {
    let fecha = new Date();
    let dia = fecha.getDate();
    let mes = fecha.getMonth() + 1;
    let year = fecha.getFullYear();
    // aumentamos el cero si el mes tiene un digito
    mes = ('0' + mes).slice(-2);
    let fechaActual = `${dia}/${mes}/${year}`;
    return fechaActual;
};


function inicarScript() {
    let btnResp = document.getElementById('btn-resp');
    btnResp.addEventListener('click', valdiarCheckEmpresarios);
};


window.addEventListener('load', inicarScript);