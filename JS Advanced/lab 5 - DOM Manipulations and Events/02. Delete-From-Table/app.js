function deleteByEmail() {
    const query = document.querySelector('input[name="email"]').value;
    const rows = document.querySelectorAll('#customers tbody tr');
    const result = document.getElementById("result");
    let arr = Array.from(rows);
    let match = arr.find((a) => a.children[1].textContent == query);
    let deleted = false;

    if (match !== undefined) {
        match.remove();
        deleted = true;
    } 

    if(deleted){
        result.textContent = "Deleted.";
    }else{
        result.textContent = "Not found.";
    }
}