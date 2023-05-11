window.onload = function(){
    PlayAudio();
};
function PlayAudio(){
    document.getElementById("musica").play();
    const main_1 = document.querySelector(".main__1");
    const boton = document.querySelector("#boton");
    boton.addEventListener("click",function(){
        
        main_1.classList.remove("hidden");

    });
}