function aplicarTema(tema) {
    const escuro = tema === 'escuro';

    const caminho = location.pathname.includes('/pages/')
        ? '../assets/icons/'
        : 'assets/icons/';

    document.body.classList.toggle('dark-theme', escuro);

    const bolinha = document.querySelector('.bolinha');

    if (bolinha) {
        bolinha.classList.toggle('deslizar', escuro);
    }

    // Ícones do menu
    document.querySelectorAll('.img-menu').forEach(icone => {
        const src = icone.getAttribute('src');

        if (!src) return;

        let nome = src.split('/').pop();
        nome = nome.replace(/-dark\.png$/, '.png');

        if (escuro) {
            nome = nome.replace(/\.png$/, '-dark.png');
        }

        icone.src = caminho + nome;
    });

    // Ícones que mudam ao passar o mouse
    document.querySelectorAll('.img-hover').forEach(icone => {
        const src = icone.getAttribute('src');

        if (!src) return;

        let nome = src.split('/').pop();
        nome = nome.replace(/-dark-hover\.png$/, '-hover.png');

        if (escuro) {
            nome = nome.replace(/-hover\.png$/, '-dark-hover.png');
        }

        icone.src = caminho + nome;
    });

    // Ícones específicos
    const icones = [
        ['instagram', 'instagram.png', 'instagram-branco.png'],
        ['behance', 'behance.png', 'behance-branco.png'],
        ['site-pessoal', 'internet.png', 'internet-branco.png'],
        ['youtube', 'youtube.png', 'youtube-branco.png'],
        ['local-img', 'localizacao.png', 'localizacao-dark.png'],
        ['link-img', 'link.png', 'link-dark.png'],
        ['imagem-editar', 'edit.png', 'edit-dark.png']
    ];

    icones.forEach(([seletor, claro, escuroIcone]) => {
        const elemento = seletor.endsWith('-img')
            ? document.querySelector('.' + seletor)
            : document.getElementById(seletor);

        if (elemento) {
            elemento.src = caminho + (escuro ? escuroIcone : claro);
        }
    });

    // Ícones de curtir
    document.querySelectorAll('.icone-curtir').forEach(icone => {
        const ativo = icone.src.includes('gostei-ativo');

        const nome = escuro
            ? (ativo ? 'gostei-ativo-dark.png' : 'gostei-dark.png')
            : (ativo ? 'gostei-ativo.png' : 'gostei.png');

        icone.src = caminho + nome;
    });

    // Ícones de salvar
    document.querySelectorAll('.icone-salvar').forEach(icone => {
        const ativo = icone.src.includes('salvar-ativo')
            || icone.src.includes('salvo-dark');

        const nome = escuro
            ? (ativo ? 'salvo-dark.png' : 'salvar-dark.png')
            : (ativo ? 'salvar-ativo.png' : 'salvar.png');

        icone.src = caminho + nome;
    });

    const profissao = localStorage.getItem('profissao') || 'fotografo';

    if (typeof atualizarIconeTrabalhos === 'function') {
        atualizarIconeTrabalhos(profissao);
    }
}

function mudar() {
    const temaAtual = document.body.classList.contains('dark-theme')
        ? 'claro'
        : 'escuro';

    localStorage.setItem('tema', temaAtual);
    aplicarTema(temaAtual);
}

// Recupera o tema salvo
aplicarTema(localStorage.getItem('tema') || 'claro');