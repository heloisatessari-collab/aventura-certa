const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', () => {

        // passo atual
        const atual = document.querySelector('.ativo');

        // identifica o próximo passo
        const proximoPasso = 'passo-' + button.getAttribute('data-proximo');

        // troca a tela
        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    });
});
