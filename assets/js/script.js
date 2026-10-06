let fraseConteudo = document.getElementById('frase-conteudo')
 fraseConteudo.innerHTML = `"A vida é feita de pequenos
 momentos que merecem ser 
 eternizados."`

const popup = document.getElementById('bio-popup');

function abrirPopup() {
  popup.showModal();
}

function fecharPopup() {
  popup.close();
}

function seguir(){
  let seguindo = document.getElementById('btn-seguir');
  let seguidores = document.getElementById('num-seguidores');
  let segui = document.getElementById('segui');
  let total = Number(seguidores.textContent);
  
  if(seguindo.textContent === 'Seguir'){
    total = total + 1
    
    seguindo.textContent = 'Seguindo';
    seguidores.textContent = total
    segui.textContent = seguidores.textContent
    setTimeout(() => {
        seguindo.textContent = 'Deixar de seguir';
    }, 500);

  }else if(seguindo.textContent === 'Deixar de seguir'){
    total = total - 1

    seguindo.textContent = 'Seguir';
    seguidores.textContent = total
    segui.textContent = seguidores.textContent
  }
} 

function salvar() {
  let nomePerfil = document.getElementById('nome');
  let nomeBio = document.getElementById('bio-nome');
  nomePerfil.textContent = nomeBio.value;

  let profissaoPerfil = document.getElementById('profissao');
  let profissaoBio = document.getElementById('profi');
  profissaoPerfil.textContent = profissaoBio.selectedOptions[0].textContent;

  console.log(profissaoBio.value);

  if(profissaoBio.value === 'fotografo'){
    fotografo();

  } else if(profissaoBio.value === 'designer') {
    designer();

  }else if(profissaoBio.value === 'ilustrador'){
    ilustrador();
  }

  let bioPerfil = document.getElementById('bio');
  let bioEditar = document.getElementById('textoBio');
  bioPerfil.textContent = bioEditar.value;

  let estadoPerfil = document.getElementById('localizacao');
  let estadoBio = document.getElementById('estado');
  estadoPerfil.textContent = estadoBio.selectedOptions[0].textContent;

  let trabalhoPerfil = document.getElementById('trabalhos');
  let trabalhoBio = document.getElementById('especifica');
  trabalhoPerfil.textContent = trabalhoBio.value;

  let siteperfil = document.getElementById('link-projeto');
  let siteBio = document.getElementById('site');
  siteperfil.textContent = siteBio.value;

  return fecharPopup();
}

function fotografo(){
  // Imagem de fundo
  let planoFundo = document.getElementById('plano-fundo');
  planoFundo.src = 'assets/img/fotografo-fundo.jpg';

  // Foto do perfil
  let fotoPerfil = document.getElementById('trocar-foto');
  fotoPerfil.src = 'assets/img/avatar-fotografo.png';

  //Cor de fundo do perfil
  let fotoFundo = document.getElementById('fotos');
  fotoFundo.style.backgroundColor = '#E9E2D6';

  // Nome do perfil
  let nome = document.getElementById('nome');
  nome.textContent = 'Henrique Lins';

  // Biografia do perfil
  let bio = document.getElementById('bio');
  bio.textContent ="Apaixonado por capturar momentos reais e transformar em histórias visuais. Fotografia é a minha forma de ver o mundo.";

  // Estado do perfil
  let localizacao = document.getElementById('localizacao');
  localizacao.textContent = 'São Paulo, SP';

  // Tipo de projetos feitos
  let trabalhos = document.getElementById('trabalhos');
  trabalhos.textContent = 'Fotografia de natureza, urbana e retratos';

  // Link de site pessoal
  let linkProjeto = document.getElementById('link-projeto');
  linkProjeto.textContent = 'henriquelins.com';

  // Imagem de fundo da frase
  let fraseFoto = document.getElementById('img-frase');
  fraseFoto.src ='assets/img/fotografo-frase.jpg';

  // Frase motivacional
  let fraseConteudo = document.getElementById('frase-conteudo');
  fraseConteudo.innerHTML = `"A vida é feita de pequenos
 momentos que merecem ser 
 eternizados."`;


 // Imagem dos cards
 let card1 = document.getElementById('card1');
 card1.src = "assets/img/fotografo-natureza-1.jpg";

 let card2 = document.getElementById('card2');
 card2.src = "assets/img/fotografo-urbano-2.jpg";

 let card3 = document.getElementById('card3');
 card3.src = "assets/img/fotografo-retrato-1.jpg";

 let card4 = document.getElementById('card4');
 card4.src = "assets/img/fotografo-urbano-1.jpg";

 let card5 = document.getElementById('card5');
 card5.src = "assets/img/fotografo-retrato-2.jpg";

 let card6 = document.getElementById('card6');
 card6.src = "assets/img/fotografo-natureza-2.jpg";

 // Titulo dos cards
 let titulo1 = document.getElementById('titulo1');
 titulo1.textContent = 'Montanhas do Sul';

 let titulo2 = document.getElementById('titulo2');
 titulo2.textContent = 'São Paulo em Movimento';

 let titulo3 = document.getElementById('titulo3');
 titulo3.textContent = 'Luz e Sombra';

 let titulo4 = document.getElementById('titulo4');
 titulo4.textContent = 'Novos Caminhos';

 let titulo5 = document.getElementById('titulo5');
 titulo5.textContent = 'Luz Natural do Deserto';

 let titulo6 = document.getElementById('titulo6');
 titulo6.textContent = 'Campo de Flores';
}

function designer(){
  // Imagem de fundo
  let planoFundo = document.getElementById('plano-fundo');
  planoFundo.src = 'assets/img/designer-fundo.jpg';

  // Foto do perfil
  let fotoPerfil = document.getElementById('trocar-foto');
  fotoPerfil.src = 'assets/img/avatar-designer.png';

  //Cor de fundo do perfil
  let fotoFundo = document.getElementById('fotos');
  fotoFundo.style.backgroundColor = '#DAD1C4';

  // Nome do perfil
  let nome = document.getElementById('nome');
  nome.textContent = 'Rafael Martins';

  // Biografia do perfil
  let bio = document.getElementById('bio');
  bio.textContent ="Transformo ideias em imagens, criando identidades visuais que comunicam, conectam e dão personalidade a cada projeto.";

  // Estado do perfil
  let localizacao = document.getElementById('localizacao');
  localizacao.textContent = 'Paraná, PR';

  // Tipo de projetos feitos
  let trabalhos = document.getElementById('trabalhos');
  trabalhos.textContent = 'Identidade visual, branding e design editorial';

  // Link de site pessoal
  let linkProjeto = document.getElementById('link-projeto');
  linkProjeto.textContent = 'rafaelmartins.com';

  // Imagem de fundo da frase
  let fraseFoto = document.getElementById('img-frase');
  fraseFoto.src ='assets/img/designer-frase.jpg';

  // Frase motivacional
  let fraseConteudo = document.getElementById('frase-conteudo');
  fraseConteudo.innerHTML = `"Ideias ganham forma quando 
  criatividade e design se 
  encontram."`;

  // Imagem dos cards
 let card1 = document.getElementById('card1');
 card1.src = "assets/img/designer1.jpg";

 let card2 = document.getElementById('card2');
 card2.src = "assets/img/designer2.jpg";

 let card3 = document.getElementById('card3');
 card3.src = "assets/img/designer3.jpg";

 let card4 = document.getElementById('card4');
 card4.src = "assets/img/designer4.jpg";

 let card5 = document.getElementById('card5');
 card5.src = "assets/img/designer5.jpg";

 let card6 = document.getElementById('card6');
 card6.src = "assets/img/designer6.jpg";

 // Titulo dos cards
 let titulo1 = document.getElementById('titulo1');
 titulo1.textContent = 'Essência da Marca';

 let titulo2 = document.getElementById('titulo2');
 titulo2.textContent = 'Nova Identidade';

 let titulo3 = document.getElementById('titulo3');
 titulo3.textContent = 'Entre Páginas';

 let titulo4 = document.getElementById('titulo4');
 titulo4.textContent = 'Forma & Sabor';

 let titulo5 = document.getElementById('titulo5');
 titulo5.textContent = 'Conexão Visual';

 let titulo6 = document.getElementById('titulo6');
 titulo6.textContent = 'Ideias em Destaque';
}

function ilustrador(){
  // Imagem de fundo
  let planoFundo = document.getElementById('plano-fundo');
  planoFundo.src = 'assets/img/ilustra-fundo.jpg';

  // Foto do perfil
  let fotoPerfil = document.getElementById('trocar-foto');
  fotoPerfil.src = 'assets/img/avatar-ilustrador.png';

  //Cor de fundo do perfil
  let fotoFundo = document.getElementById('fotos');
  fotoFundo.style.backgroundColor = '#DAD1C4';

  // Nome do perfil
  let nome = document.getElementById('nome');
  nome.textContent = 'Marina Oliveira';

  // Biografia do perfil
  let bio = document.getElementById('bio');
  bio.textContent ="Transformo ideias em imagens cheias de personalidade, explorando cores, formas e detalhes para contar histórias através da arte.";

  // Estado do perfil
  let localizacao = document.getElementById('localizacao');
  localizacao.textContent = 'Minas Gerais, MG';

  // Tipo de projetos feitos
  let trabalhos = document.getElementById('trabalhos');
  trabalhos.textContent = 'Ilustração editorial, personagens e arte digital';

  // Link de site pessoal
  let linkProjeto = document.getElementById('link-projeto');
  linkProjeto.textContent = 'marinaoliveira..com';

  // Imagem de fundo da frase
  let fraseFoto = document.getElementById('img-frase');
  fraseFoto.src ='assets/img/ilustra-frase.jpg';

  // Frase motivacional
  let fraseConteudo = document.getElementById('frase-conteudo');
  fraseConteudo.innerHTML = `"Cada traço conta uma história, 
  cada cor dá vida a uma ideia,
  cada ilustração cria um novo mundo."`;

  // Imagem dos cards
 let card1 = document.getElementById('card1');
 card1.src = "assets/img/ilustracao1.png";

 let card2 = document.getElementById('card2');
 card2.src = "assets/img/ilustracao2.jpg";

 let card3 = document.getElementById('card3');
 card3.src = "assets/img/ilustracao3.jpg";

 let card4 = document.getElementById('card4');
 card4.src = "assets/img/ilustracao4.png";

 let card5 = document.getElementById('card5');
 card5.src = "assets/img/ilustracao5.jpg";

 let card6 = document.getElementById('card6');
 card6.src = "assets/img/ilustracao6.jpg";

 // Titulo dos cards
 let titulo1 = document.getElementById('titulo1');
 titulo1.textContent = 'Entre Mundos';

 let titulo2 = document.getElementById('titulo2');
 titulo2.textContent = 'Palavras Ilustradas';

 let titulo3 = document.getElementById('titulo3');
 titulo3.textContent = 'Cores da Imaginação';

 let titulo4 = document.getElementById('titulo4');
 titulo4.textContent = 'Pequenos Sonhos';

 let titulo5 = document.getElementById('titulo5');
 titulo5.textContent = 'Uma História em Traços';

 let titulo6 = document.getElementById('titulo6');
 titulo6.textContent = 'Além do Horizonte';
}

function ver(){
  let verCard = document.querySelectorAll('.invisivel');
  let oculto = document.getElementById('btn-ver');

  if(oculto.textContent === 'Ver mais →'){
    verCard.forEach(card => {
      card.style.display = 'block';
    });

    oculto.textContent = '← Ver menos';
  }else {
    verCard.forEach(card => {
      card.style.display = 'none';
    });
    
    oculto.textContent = 'Ver mais →';
  }
}


const bio = document.getElementById('bio');
const textarea = document.getElementById('trocar-bio');

textarea.placeholder = bio.textContent.trim();

function trocar(){
  let bioAtual = document.getElementById('bio');
  let mudarBio = document.getElementById('trocar-bio');

  if (mudarBio.value.trim() === '') {
    return;
  }
  
  bioAtual.textContent = mudarBio.value;
  mudarBio.placeholder = bioAtual.textContent;
  mudarBio.value = '';
}