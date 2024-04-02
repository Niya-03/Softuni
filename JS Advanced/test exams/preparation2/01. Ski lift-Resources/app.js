window.addEventListener('load', solve);

function solve() {

    const inputs = {
        firstName: document.getElementById('first-name'),
        lastName: document.getElementById('last-name'),
        peopleCount: document.getElementById('people-count'),
        fromDate: document.getElementById('from-date'),
        daysCount: document.getElementById('days-count'),
    }

    const nextBtn = document.getElementById("next-btn");
    nextBtn.addEventListener("click", onNextClick);



    const ticketInfoList = document.querySelector(".ticket-info-list");
    const confirmTicket = document.querySelector(".confirm-ticket");
    const main = document.getElementById('main');
    const body = document.getElementsByTagName('body')[0];

    function onNextClick(event) {

        debugger;
        event.preventDefault();
        for (const key in inputs) {
            if (inputs[key].value == "") {
                return;
            }
        }

        const firstName = inputs.firstName.value;
        const lastName = inputs.lastName.value;
        const peopleCount = Number(inputs.peopleCount.value);
        const fromDate = inputs.fromDate.value;
        const daysCount = Number(inputs.daysCount.value);



        const result = createPreview(firstName, lastName, peopleCount, fromDate, daysCount);
        ticketInfoList.appendChild(result);

        nextBtn.parentElement.reset();
        nextBtn.disabled = true;
    }

    function createInfo(firstName, lastName, peopleCount, fromDate, daysCount, className) {
        let article = e("article");
        let list = e('li');

        list.className = className;

        article.appendChild(e('h3', `Name: ${firstName} ${lastName}`));
        article.appendChild(e('p', `From date: ${fromDate}`));
        article.appendChild(e('p', `For ${daysCount} days`));
        article.appendChild(e('p', `For ${peopleCount} people`))

        list.appendChild(article);

        return list;
    }

    function createPreview(firstName, lastName, peopleCount, fromDate, daysCount) {
        const element = createInfo(firstName, lastName, peopleCount, fromDate, daysCount, 'ticket');

        const editBtn = e('button', 'Edit');
        editBtn.className = 'edit-btn';
        editBtn.addEventListener('click', () => onEditClick(firstName, lastName, peopleCount, fromDate, daysCount));

        const continueBtn = e('button', 'Continue');
        continueBtn.className = 'continue-btn';
        continueBtn.addEventListener('click', onContinueClick.bind(null, firstName, lastName, peopleCount, fromDate, daysCount));

        element.appendChild(editBtn);
        element.appendChild(continueBtn);

        return element;
    }

    function onEditClick(firstName, lastName, peopleCount, fromDate, daysCount) {
        inputs.firstName.value = firstName;
        inputs.lastName.value = lastName;
        inputs.peopleCount.value = peopleCount;
        inputs.fromDate.value = fromDate;
        inputs.daysCount.value = daysCount;

        ticketInfoList.textContent = '';
        nextBtn.disabled = false;
    }

    function onContinueClick(firstName, lastName, peopleCount, fromDate, daysCount) {
        const result = createConfirmation(firstName, lastName, peopleCount, fromDate, daysCount);
        confirmTicket.appendChild(result);
        ticketInfoList.textContent = '';
    }

    function createConfirmation(firstName, lastName, peopleCount, fromDate, daysCount) {
        const element = createInfo(firstName, lastName, peopleCount, fromDate, daysCount, 'ticket-content');

        const confirmBtn = e('button', 'Confirm');
        confirmBtn.className = 'confirm-btn';
        confirmBtn.addEventListener('click', onFinishClick.bind(null, true));

        const cancelBtn = e('button', 'Cancel');
        cancelBtn.className = 'cancel-btn';
        cancelBtn.addEventListener('click', onFinishClick.bind(null, false));


        element.appendChild(confirmBtn);
        element.appendChild(cancelBtn);

        return element;

    }

    function onFinishClick(confirmed) {
        debugger
        if (confirmed) {
            body.removeChild(main);
            const thank = e('h1', 'Thank you, have a nice day!');
            thank.id = 'thank-you';

            const backBtn = e('button', "Back");
            backBtn.id = 'back-btn';
            backBtn.addEventListener('click', reload);

            body.appendChild(thank);
            body.appendChild(backBtn);
            //proveri za space mejdu ! i '
        } else {
            confirmTicket.textContent = '';
            nextBtn.disabled = false;
        }
    }

    function reload() {
        window.location.reload();
    }

    function e(type, content) {
        const element = document.createElement(type);

        if (content) {
            element.textContent = content;
        }

        return element;
    }
}




