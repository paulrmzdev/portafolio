let imagenes = document.querySelectorAll('.galery-img');
let modal = document.querySelector('.modal');
let img = document.querySelector('#modal-img');
let btn = document.querySelector('#modal-button');


for (let i = 0; i < imagenes.length; i++){
    imagenes[i].addEventListener('click', function(e){
        modal.classList.toggle('modal-open');
        img.setAttribute('src', e.target.src);
    });
}

btn.addEventListener('click' ,function(){
    modal.classList.toggle('modal-open');
});