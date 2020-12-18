function sendAjaxRequest(url, type, body) {
    return new Promise(resolve => {
        try {
            $.ajax({
                url: url,
                type: type,
                headers: { 'Content-Type': 'application/json' },
                data: JSON.stringify(body),
                complete: function (response) {
                    console.log(response.responseJSON);
                    resolve(response.responseJSON);
                }
            });   
        } catch (error) {
            console.log(error);
        }
    });
}

async function sendGetMessages() {
    response = await sendAjaxRequest('/messages', 'GET', null);
    return response;
}

/**
 * Send a POST /messages request to add a message to the database
 */
async function sendPostMessage(message, sender) {
    response = await sendAjaxRequest('/messages', 'POST', {
        'message': message,
        'sender': sender
    });
    return response;
}

async function sendDeleteMessage(messageId) {
    response = await sendAjaxRequest('/messages', 'DELETE', {
        'ID': messageId
    });
    return response;
}