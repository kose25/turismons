const parser = new DOMParser();
const htmlString = "<div class='border-bottom pb-4 mb-5'> <div class='row gx-md-5'> <div class='col-md-4 mb-4'> <div class='bg-image hover-overlay ripple shadow-2-strong rounded-5' data-mdb-ripple-color='light'> <img src='' class='img-fluid' load='lazy'> </div> </div> <div class='col-md-8 mb-4'> <h4><strong></strong></h4> <p class='text-muted content'> </p> <div class='row mt-2'> <div class='col-md-auto'> <a role='button' class='text-info'> <i class='fas fa-phone'></i> </a> </div> <div class='col-md-auto'> <a role='button' class='text-secondary'> <i class='far fa-envelope'></i> </a> </div> <div class='col-md-auto'> <a class='text-danger location' data-mdb-toggle='collapse' href='#collapseExample' role='button' aria-expanded='false' aria-controls='collapseExample'> <i class='fas fa-map-marker-alt'></i> Ubicacion </a> </div> <div class='col-md-auto'> <a class='text-warning' data-mdb-toggle='popover' title='' data-mdb-content='' role='button' data-mdb-original-title='Horario'> <i class='far fa-clock'></i> Horario </a> </div> </div> <div class='row'> <div class='collapse mt-3' id='collapseExample'> <iframe src='' width='400' height='300' style='border:0;' allowfullscreen='' loading='lazy'></iframe> </div> </div> </div> </div> </div>";
const htmlIglesias = "<div class='border-bottom pb-4 mb-5'> <div class='row gx-md-5'> <div class='col-md-4 mb-4'> <div class='bg-image hover-overlay ripple shadow-2-strong rounded-5' data-mdb-ripple-color='light'> <img src='' class='img-fluid'> <a href='#!'> <div class='mask' style='background-color: rgba(251, 251, 251, 0.15);'></div> </a> </div> </div> <div class='col-md-8 mb-4'> <span class='badge bg-danger px-2 py-1 shadow-1-strong mb-3 d-none'>News of the day</span> <h4><strong></strong></h4> <p class='text-muted content'></p> <div class='row mt-2'> <div class='col-md-auto d-none'> <a role='button' class='text-info'> <i class='fas fa-phone'></i> phone </a> </div> <div class='col-md-auto d-none'> <a role='button' class='text-secondary'> <i class='far fa-envelope'></i> email </a> </div> <div class='col-md-auto'> <a class='text-danger location' data-mdb-toggle='collapse' href='#collapseExample' role='button' aria-expanded='false' aria-controls='collapseExample'> <i class='fas fa-map-marker-alt'></i> Ubicacion </a> </div> <div class='col-md-auto d-none'> <a class='text-warning' data-mdb-toggle='popover' title='Horario' data-mdb-content='Horario' role='button'> <i class='far fa-clock'></i> horario </a> </div> </div> <div class='row'> <div class='collapse mt-3' id='collapseExample'> <iframe src='' width='400' height='300' style='border:0;' allowfullscreen='' loading='lazy'></iframe> </div> </div> </div> </div> </div>";


const section = document.getElementById('ex1-pills-1');

//console.log(doc.getElementsByTagName('img'))

const requestURL = './json/pamplona.json';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    const museos = request.response['museos'];
    loadMuseos(museos);
}

function loadMuseos(jsonObj) {

    for (let index = 0; index < jsonObj.length; index++) {
        var doc = parser.parseFromString(htmlString, 'text/html');
        var realDoc = doc.body.firstChild;
        var foto = realDoc.childNodes[1].childNodes[1].childNodes[1].childNodes[1];
        var nombre = realDoc.childNodes[1].childNodes[3].childNodes[1].childNodes[0];
        var descripcion = realDoc.childNodes[1].childNodes[3].childNodes[1].nextSibling.nextSibling;
        var telefono = descripcion.nextSibling.nextSibling.childNodes[1].childNodes[1].childNodes[2];
        var correo = descripcion.nextSibling.nextSibling.childNodes[3].childNodes[1].childNodes[2];
        var horario = descripcion.nextSibling.nextSibling.childNodes[7].childNodes[1];
        var ubicacion = realDoc.childNodes[1].childNodes[3].childNodes[7].childNodes[1].childNodes[1];
        ubicacion.setAttribute('src', jsonObj[index]['ubicacion']);
        horario.setAttribute('data-mdb-content', jsonObj[0]['horario']);
        correo.textContent = jsonObj[index]['correo'];
        telefono.textContent = jsonObj[index]['telefono'];
        nombre.textContent = jsonObj[index]['nombre'];
        descripcion.textContent = jsonObj[index]['descripcion'];
        foto.setAttribute('src', jsonObj[index]['foto']);
        //console.log(ubicacion);
        section.append(realDoc);
        //console.log(realDoc);

    }

}

function loadIglesias() {

}

