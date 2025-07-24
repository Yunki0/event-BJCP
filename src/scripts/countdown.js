document.querySelectorAll('.countdown').forEach(function(el) {
    el.setAttribute('aria-live', 'polite');
    const targetDate = new Date(el.dataset.date);
    const article = el.closest('article');
    function updateCountdown() {
        const now = new Date();
        const diff = targetDate - now;
        // Si l'événement est passé depuis plus de 24h
        if (diff <= -24 * 60 * 60 * 1000) {
            el.textContent = "Événement terminé !";
            if (article) article.classList.add('event-termine');
            return;
        }
        // Si l'événement est en cours ou vient de commencer
        if (diff <= 0) {
            el.textContent = "Événement commencé !";
            if (article) article.classList.remove('event-termine');
            return;
        }
        if (article) article.classList.remove('event-termine');
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        function pad(n) { return n < 10 ? '0' + n : n; }
        el.textContent = `${days}j ${pad(hours)}h ${pad(minutes)}m ${pad(seconds)}s`;
    }
    updateCountdown();
    setInterval(updateCountdown, 1000);
});