function search() {
   debugger
   let towns = document.getElementById("towns").children;
   towns.style = "none";
   let pattern = document.getElementById("searchText").value;
   let matches = 0;
   let result = document.getElementById("result");

   for(let i = 0; i < towns.length; i++){
      let town = towns[i];
      if(town.textContent.includes(pattern)){
         matches++;
         town.style = "font-weight:bold; text-decoration:underline"
      }
   }

   result.textContent = `${matches} matches found`;
}
