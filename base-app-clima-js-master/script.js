let apy_Key = "56faa739215de79fc24ae7a900f16b91"
let Kelvin_diference = 273.15
let urlBase = "https://api.openweathermap.org/data/2.5/weather"

    
document.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudadEntrada').value
    
    if (ciudad){
        DatosClima(ciudad)
    }
})

function DatosClima(ciudad){
    fetch(`${urlBase}?q=${ciudad}&appid=${apy_Key}`)
        .then(response => response.json())
        .then(response => mostrarDatos(response))
}

function mostrarDatos(response){
    const divDatos = document.getElementById('datosClima')
    divDatos.innerHTML=""
    
    const ciudadNombre = response.name
    const paisNombre = response.sys.country
    const temperatura = response.main.temp
    const humedadCiudad = response.main.humidity
    const descripcion = response.weather[0].description
    const icono = response.weather[0].icon

    const ciudadTitulo = document.createElement('h2')            // ----------------
    ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}`  // ----------------

    const ciudadTemp = document.createElement('h3')
    ciudadTemp.textContent = ` La Temperatura es ${Math.floor(temperatura-Kelvin_diference)}°C `
    
    const iconoInfo = document.createElement('img')
    iconoInfo.src=  `https://openweathermap.org/img/wn/${icono}@2x.png`

    const humedad = document.createElement('h3')
    humedad.textContent = ` La Humedad es Del ${humedadCiudad} % `

    const ciudadDes = document.createElement('h4')
    ciudadDes.textContent = ` La Descripcion Metereologica es : ${descripcion} `


    divDatos.appendChild(ciudadTitulo) // ----------------
    divDatos.appendChild(iconoInfo)
    divDatos.appendChild(ciudadTemp)
    divDatos.appendChild(humedad)   
    divDatos.appendChild(ciudadDes)
}
