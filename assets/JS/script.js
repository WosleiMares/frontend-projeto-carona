
var usuario = document.getElementById('usuario');
var senha = document.getElementById('senha');

usuario.addEventListener('focus',() => {
    usuario.style.borderColor = "#4F7B7B"
});

usuario.addEventListener('blur', () =>{
    usuario.style.borderColor = "#ccc"
});


senha.addEventListener('focus',()=>{
    senha.style.borderColor = "#4f7b7b"
});

senha.addEventListener('blur', ()=>{
    senha.style.borderColor = "#ccc"
});


