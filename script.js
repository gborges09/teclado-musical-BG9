const teclas = document.querySelectorAll('.tecla');
let audioAtual = null;

teclas.forEach(tecla => {
    tecla.addEventListener('click', () => {
        const nomeSom = tecla.dataset.som;
        
        if (audioAtual) {
            audioAtual.pause();
            audioAtual.currentTime = 0;
        }

        audioAtual = new Audio(`som/${nomeSom}.mp3`);
        
        audioAtual.play().catch(err => {
            console.error('Erro ao reproduzir áudio:', err);
        });

        tecla.classList.add('ativo');
        setTimeout(() => {
            tecla.classList.remove('ativo');
        }, 200);
    });
});