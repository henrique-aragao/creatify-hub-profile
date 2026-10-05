const popup = document.getElementById('bio-popup');

function abrirPopup() {
  popup.showModal();
}

function fecharPopup() {
  popup.close();
}

function seguir(){
    let seguindo = document.getElementById('btn-seguir')

    seguindo.innerHTML ='Seguindo'
}

function salvar() {
    let nomeBio = document.getElementById('bio-nome');
    let nomePerfil = document.getElementById('nome');

    nomePerfil.innerHTML = String(nomeBio.value);

    return fecharPopup();
}