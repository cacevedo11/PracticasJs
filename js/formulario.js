const d = document;
const w = window;


export default function responsiveTester (form){
     
    const $form =d.getElementById(form);

    let ventana;

    d.addEventListener("submit", (e)=>{
       if(e.target === $form){
        e.preventDefault();
        ventana = w.open($form.direccion.value, "tester", `innerWIDTH=${$form.ancho.value}, innerHEIGHT=${$form.alto.value}`);
       }
    })

    d.addEventListener("click", (e)=>{
        if(e.target === $form.cerrar) ventana.close();
    })
}