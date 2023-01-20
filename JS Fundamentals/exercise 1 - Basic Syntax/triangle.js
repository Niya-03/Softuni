function triangle(num){

    for(let i = 1; i <= num; i ++){

        let string = "";
        //console.log(i+string);

        for(let j = 1; j <= i ; j++){
            
            string+=i;
            string+= " ";
        }

         console.log(string);
         
    }
}

triangle(7)