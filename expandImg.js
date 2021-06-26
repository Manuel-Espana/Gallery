let modal = document.getElementById('mymodal');
let imgs = document.getElementsByClassName('images');
let modalImg = document.getElementById('image_modal');
let caption = document.getElementById('caption');
let close = document.getElementsByClassName('close')[0];

Array.from(imgs).forEach(img => {
    img.onclick = function(){
        modal.style.display = 'block'; //Muestra el modal
        modalImg.src = this.src; //Toma la imagen actual del for y lo inserta en el modal
        caption.innerHTML = this.alt; //Toma el alt de la img actual y inserta en el modal
    }
});

close.onclick = function(){
    modal.style.display = 'none'; //Oculta el modal
}

