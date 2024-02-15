function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   const searched = document.getElementById("searchField");

   const rows = Array.from(document.querySelectorAll("tbody tr"));


   function onClick() {
      let searchedText = searched.value;
      for (let row of rows) {
         let rowdata = Array.from(row.querySelectorAll("td"));
         for (let data of rowdata) {

            if (data.textContent.includes(searchedText)) {
               row.classList.add("select");
               break;
            } else {
               row.classList.remove("select");
            }
         }
      }
      searched.value = "";
   }
}