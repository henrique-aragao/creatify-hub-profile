function escolherProfissao() {
  let botoes = document.querySelectorAll('.btn-perfil');

  botoes.forEach(botao => {
    botao.addEventListener('click', () => {
      let profissao = botao.dataset.profissao;

      localStorage.setItem('profissao', profissao);
    });
  });
}

escolherProfissao();

function verificarProfissao() {
  let profissaoEscolhida = localStorage.getItem('profissao');

  if (profissaoEscolhida === 'fotografo') {
    fotografo();
  } else if (profissaoEscolhida === 'designer') {
    designer();
  } else if (profissaoEscolhida === 'ilustrador') {
    ilustrador();
  }
}

if (document.getElementById('plano-fundo')) {
  verificarProfissao();
}