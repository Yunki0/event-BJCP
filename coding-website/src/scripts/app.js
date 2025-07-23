document.addEventListener('DOMContentLoaded', () => {
    const editorContainer = document.getElementById('editor');
    const editor = new Editor(editorContainer);
    editor.init();

    const saveButton = document.getElementById('save-button');
    saveButton.addEventListener('click', () => {
        const code = editor.getCode();
        // Logic to save the code (e.g., send to server or local storage)
        console.log('Code saved:', code);
    });
});