function tickets(arr, sortCriteria) {
    class Ticket {
        destination;
        price;
        status;

        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let ticketArr = [];

    for (const data of arr) {
        let [destination, price, status] = data.split('|');
        ticketArr.push(new Ticket(destination, Number(price), status));
    }

    ticketArr = ticketArr.sort((a, b) => {
        if (sortCriteria == 'price') {
            return a[sortCriteria] - b[sortCriteria];
        } else {
            return a[sortCriteria].localeCompare(b[sortCriteria]);
        }

    })

    return ticketArr;

}

tickets(['Philadelphia|96|available',

    'New York City|95.99|available',

    'New York City|95.99|sold',

    'Boston|126.20|departed'],

    'price')