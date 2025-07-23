class Editor {
    constructor(container) {
        this.container = container;
        this.code = '';
    }

    init() {
        this.createEditor();
    }

    createEditor() {
        const textarea = document.createElement('textarea');
        textarea.style.width = '100%';
        textarea.style.height = '300px';
        textarea.addEventListener('input', (event) => {
            this.code = event.target.value;
        });
        this.container.appendChild(textarea);
    }

    setCode(code) {
        this.code = code;
        const textarea = this.container.querySelector('textarea');
        if (textarea) {
            textarea.value = code;
        }
    }

    getCode() {
        return this.code;
    }
}

export default Editor;