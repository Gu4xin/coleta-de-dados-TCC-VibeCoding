document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.pasta-card');
    const modal = document.getElementById('recipe-modal');
    const closeBtn = document.querySelector('.close-btn');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');

    const details = {
        'carbonara': { title: 'Spaghetti alla Carbonara', desc: 'Um clássico romano. Nossa carbonara não leva creme de leite! Usamos apenas gemas frescas, queijo pecorino ralado na hora, pimenta preta tostada e guanciale crocante.' },
        'pesto': { title: 'Penne al Pesto Genovese', desc: 'O verdadeiro sabor de Gênova. Manjericão fresco esmagado no pilão de mármore com azeite extravirgem, alho, pinoli torrado e uma mistura de Parmigiano e Fiore Sardo.' },
        'pomodoro': { title: 'Ravioli di Ricotta', desc: 'Nossa massa fresca recheada artesanalmente com ricota de ovelha, banhada em um molho rústico de tomates doces San Marzano cozidos lentamente por 6 horas.' }
    };

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const type = card.getAttribute('data-pasta');
            modalTitle.textContent = details[type].title;
            modalDesc.textContent = details[type].desc;
            modal.classList.add('active');
        });
    });

    closeBtn.addEventListener('click', () => modal.classList.remove('active'));
    
    // Fechar modal clicando fora
    modal.addEventListener('click', (e) => {
        if(e.target === modal) modal.classList.remove('active');
    });

    // Scroll suave do botão hero
    document.getElementById('explore-btn').addEventListener('click', () => {
        document.querySelector('.menu-section').scrollIntoView({ behavior: 'smooth' });
    });
});