window.addEventListener("load", solve);

function solve() {
    const inputs = {
        numOfTickets: document.getElementById('num-tickets'),
        seatingPreference: document.getElementById('seating-preference'),
        fullName: document.getElementById('full-name'),
        email: document.getElementById('email'),
        phoneNumber: document.getElementById('phone-number'),
    }

    const purchaseBtn = document.getElementById('purchase-btn');
    const ticketPreviewList = document.getElementById('ticket-preview');
    const ticketPurchase = document.getElementById('ticket-purchase');
    const bottomContent = document.getElementsByClassName('bottom-content')[0];
    purchaseBtn.addEventListener('click', onPurchaseClick);

    function onPurchaseClick(event) {
        for (const key in inputs) {
            if (inputs[key].value == "") {
                return;
            }
        }

        const numOfTickets = Number(inputs.numOfTickets.value);
        const seatingPreference = inputs.seatingPreference.value;
        const fullName = inputs.fullName.value;
        const email = inputs.email.value;
        const phoneNumber = inputs.phoneNumber.value;

        const result = createPreview(numOfTickets, seatingPreference, fullName, email, phoneNumber);
        ticketPreviewList.appendChild(result);
        
        // purchaseBtn.parentElement.reset();

        for (const key in inputs) {
            inputs[key].value = "" ;
            
        }
        purchaseBtn.disabled = true;
    }
    

    function createPreview(numOfTickets, seatingPreference, fullName, email, phoneNumber) {
        const element = createInfo(numOfTickets, seatingPreference, fullName, email, phoneNumber, 'ticket-purchase');

        const editBtn = e('button', 'Edit');
        editBtn.className = 'edit-btn';
        editBtn.addEventListener('click', () => onEditClick(numOfTickets, seatingPreference, fullName, email, phoneNumber));

        const nextBtn = e('button', 'Next');
        nextBtn.className = 'next-btn';
        nextBtn.addEventListener('click', onNextClick.bind(null,numOfTickets, seatingPreference, fullName, email, phoneNumber));

        let btnContainer = e('div');
        btnContainer.className = 'btn-container';

        btnContainer.appendChild(editBtn);
        btnContainer.appendChild(nextBtn);

        element.appendChild(btnContainer);

        return element;
    }

    function onEditClick(numOfTickets, seatingPreference, fullName, email, phoneNumber) {
        inputs.numOfTickets.value = numOfTickets;
        inputs.seatingPreference.value= seatingPreference;
        inputs.fullName.value= fullName;
        inputs.email.value= email;
        inputs.phoneNumber.value= phoneNumber;
    
        ticketPreviewList.textContent = '';
        purchaseBtn.disabled = false;

    }

    function onNextClick(numOfTickets, seatingPreference, fullName, email, phoneNumber){
        const result = createBuyConfirm(numOfTickets, seatingPreference, fullName, email, phoneNumber);
        

        ticketPurchase.appendChild(result);
        ticketPreviewList.textContent = '';
    }

    function createBuyConfirm(numOfTickets, seatingPreference, fullName, email, phoneNumber){
        let element = createInfo(numOfTickets, seatingPreference, fullName, email, phoneNumber, 'ticket-purchase');
       
        let art = element.querySelector('article');
        const buyBtn = e('button', 'Buy');
        buyBtn.className = 'buy-btn';
        buyBtn.addEventListener('click', buyTicket);
        art.appendChild(buyBtn);

        return element;
    }

    function buyTicket(){
    
        ticketPurchase.textContent ='';
        h2 = e('h2', 'Thank you for your purchase!');
        backBtn = e('button', 'Back');
        backBtn.className = 'back-btn';
        backBtn.addEventListener('click', reload)

        bottomContent.appendChild(h2);
        bottomContent.appendChild(backBtn);
    }

    function reload() {
        window.location.reload();
    }

    function createInfo(numOfTickets, seatingPreference, fullName, email, phoneNumber, className) {
        let list = e('li');
        let article = e('article');
        list.className = className;

        article.appendChild(e('p', `Count: ${numOfTickets}`));
        article.appendChild(e('p', `Preference: ${seatingPreference}`));
        article.appendChild(e('p', `To: ${fullName}`));
        article.appendChild(e('p', `Email: ${email}`));
        article.appendChild(e('p', `Phone Number: ${phoneNumber}`));

        list.appendChild(article);

        return list;
    }

    function e(type, content) {
        const element = document.createElement(type);

        if (content) {
            element.textContent = content;
        }

        return element;
    }
}
