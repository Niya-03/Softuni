function cinema(input) {
    let index = 0;
    let command = input[index];
    let studentCounter = 0;
    let standardCounter = 0;
    let kidCounter = 0;
    let totalTicketsCounter = 0;

    while (command !== "Finish") {
        let movieName = command;
        index++;
        let freeSpaces = Number(input[index]);
        index++;

        let ticketType = input[index];
        let ticketCounter = 0;

        while (ticketType !== "End") {
            ticketCounter++;
            switch (ticketType) {
                case "student": studentCounter++; break;
                case "standard": standardCounter++; break;
                case "kid": kidCounter++; break;
            }

            if (ticketCounter >= freeSpaces) {
                break;
            }

            index++;
            ticketType = input[index];
        }

        totalTicketsCounter += ticketCounter;
        let resultSingleFilm = ticketCounter / freeSpaces * 100;

        console.log(`${movieName} - ${resultSingleFilm.toFixed(2)}% full.`);
        index++;
        command = input[index];
    }

    console.log(`Total tickets: ${totalTicketsCounter}`);
    console.log(`${(studentCounter / totalTicketsCounter * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standardCounter / totalTicketsCounter * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kidCounter / totalTicketsCounter * 100).toFixed(2)}% kids tickets.`);
}