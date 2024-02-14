function editElement() {
    function edit(ref, match, replacer){
        const pattern = new RegExp(match, 'g');
        const test = ref.textContent;
        const result = test.replace(pattern, replacer);
        ref.textContent = result;
    }
}