function chatLogger(commands) {
    let index = 0;
    let command = commands[index];
    let chat = [];

    while (command !== "end") {
        command = command.split(" ");

        let chatCommand = command[0];
        switch (chatCommand) {
            case "Chat":
                let messageToAdd = command[1];
                chat.push(messageToAdd);
                break;

            case "Delete":
                let messageToDelete = command[1];

                if (chat.includes(messageToDelete)) {
                    let indexToDelete = chat.indexOf(messageToDelete);
                    chat.splice(indexToDelete, 1);
                }
                break;

            case "Edit":
                let messageToBeEdited = command[1];
                let editedMessage = command[2];

                if (chat.includes(messageToBeEdited)) {
                    let indexToBeEdited = chat.indexOf(messageToBeEdited);
                    chat.splice(indexToBeEdited, 1, editedMessage);
                }
                break;

            case "Pin":
                let messageToBePinned = command[1];

                if (chat.includes(messageToBePinned)) {
                    let indexOfPinned = chat.indexOf(messageToBePinned);
                    let toPin = chat.splice(indexOfPinned, 1);
                    let stringToPin = toPin[0];
                    chat.push(stringToPin);
                }
                break;

            case "Spam":
                for (let i = 1; i < command.length; i++) {
                    let spamMessage = command[i];
                    chat.push(spamMessage);
                }
                break;

        }

        index++
        command = commands[index];
    }

    return chat.join("\n");
}

console.log(chatLogger((["Chat John",
    "Spam Let's go to the zoo",
    "Edit zoo cinema",
    "Chat tonight",
    "Pin John",
    "end"])

))