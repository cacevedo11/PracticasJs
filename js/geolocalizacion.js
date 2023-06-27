const d = document,
    n = navigator;


export default function getGeolacation(id){

    const $id = d.getElementById(id),
        options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };

        const success = position => {
            let coords = position.coords;
            // console.log(position)

            $id.innerHTML= `
            <p>Tu posicion actual es:</p>
            <ul>
                <li>Latitud: <b>${coords.latitude}</b></li>
                <li>Longitud:<b>${coords.longitude}</b></li>
                <li>Precision: <b>${coords.accuracy}</b> metros</li>
            </ul>
            <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},15z" target="_blank" rel="noopener">Ver en Google Maps</a>`
        };
        const error = (err)=>{
            $id.innerHTML("beforebegin", `<p>Sucedio el siguiente error:<mark>${err}</mark> por favor activar permisos de camara</p>`)
            console.log(`Error: ${err.code}: ${err.message}`)
        };
        n.geolocation.getCurrentPosition(success, error, options)

        // asi como existe getCurrentPosition tambien existe un objeto watchCurrentPosition que no s arroja la posicion actual del usuario si se esta moviendo





    
   
}