
const d = document,
    n = navigator;


export default function webCam(id){
    const $video = d.getElementById(id);

    if(n.mediaDevices.getUserMedia){
        n.mediaDevices.getUserMedia({video: true, audio:false}).then(stream =>{
            // console.log(stream);
            $video.srcObject = stream;
            $video.play();
        }).catch( (err) => {
            $video.insertAdjacentHTML("beforebegin", `<p>Sucedio el siguiente error:<mark>${err}</mark> por favor activar permisos de camara</p>`)
            console.log(`Sucedio el siguiente error: ${err}`)
        });
    }
   
}


