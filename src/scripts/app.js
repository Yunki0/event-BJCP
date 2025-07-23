document.addEventListener('DOMContentLoaded', function() {
    const editorContainer = document.getElementById('editor');
    const editor = new Editor(editorContainer);
    editor.init();

    const saveButton = document.getElementById('save-button');
    saveButton.addEventListener('click', () => {
        const code = editor.getCode();
        // Logic to save the code (e.g., send to server or local storage)
        console.log('Code saved:', code);
    });

    document.querySelectorAll('.event-img').forEach(img => {
        img.addEventListener('click', function() {
            const modal = document.getElementById('img-modal');
            const modalImg = document.getElementById('img-modal-src');
            modal.style.display = 'flex';
            modalImg.src = this.src;
            modalImg.alt = this.alt;
        });
    });

    document.querySelector('.close-modal').onclick = function() {
        document.getElementById('img-modal').style.display = 'none';
    };

    document.getElementById('img-modal').onclick = function(e) {
        if (e.target === this) {
            this.style.display = 'none';
        }
    };
});