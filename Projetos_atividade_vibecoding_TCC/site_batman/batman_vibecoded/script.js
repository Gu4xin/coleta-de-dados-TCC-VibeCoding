document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('signal-btn');
    const overlay = document.getElementById('bat-signal-overlay');
    
    btn.addEventListener('click', () => {
        overlay.classList.toggle('active');
        if (overlay.classList.contains('active')) {
            btn.textContent = "Sinal Ativado - Ele está vindo";
        } else {
            btn.textContent = "Ativar Bat-Sinal";
        }
    });
});