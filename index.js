let cantidad = document.getElementById("cantidad")
let resultado = document.getElementById("resultado")
let boton = document.getElementById("boton")
let de = document.getElementById("de")
let a = document.getElementById("a")
const peseta = 166.386
 


 boton.addEventListener('click', ()=>{
    

if(de.value==0&&a.value==1){
     resultado.innerHTML= `${cantidad.value*peseta} pesetas`
} 

else if(de.value==1&&a.value==0){
    resultado.innerHTML= `${cantidad.value/peseta} €`
}



})
    
 
        



   
