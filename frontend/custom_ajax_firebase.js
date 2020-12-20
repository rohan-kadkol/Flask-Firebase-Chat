/**
 * Get a list of mesages whenever the Firestore db changes
 * @param {(messages:Array<object>) => null} onChange function(messages) to call when a change is detected in the Firestore db
 * @returns {null}
 */
function sendGetMessages(onChange) {
    db.collection("messages").orderBy('timestamp', 'desc').onSnapshot((querySnapshot) => {
        var messages = [];

        querySnapshot.forEach((doc) => {
            messages.push({
                'ID': doc.id,
                'message': doc.data()['message'],
                'sender': doc.data()['sender']
            });
        });

        onChange(messages);
    });
}

/**
 * Add a message to Firestore
 * @param {string} message contents of the message to add
 * @param {string} sender sender of the message
 * @returns {Promise<object>} JSON object with a success param
 */
async function sendPostMessage(message, sender) {
    return new Promise(async resolve => {
        await db.collection("messages").add({
            message: message,
            sender: sender,
            timestamp: firebase.firestore.Timestamp.now()
        })
            .then(function () {
                console.log('insert successful');
                resolve({ 'success': true });
            })
            .catch(function (error) {
                console.log(error);
                resolve({ 'success': false });
            });
    });
}

/**
 * Delete a message from Firestore
 * @param {number} ID ID of the message to delete
 * @returns {Promise<object>} JSON object with a success param
 */
async function sendDeleteMessage(ID) {
    return new Promise(async resolve => {
        // TODO (1): db.collection('messages').doc(ID).delete()
        // TODO (2): .delete().then(function () {})
        // TODO (3): Within the function, resolve({ 'success': true });
        // TODO (4): .delete().then(function () {}) .catch(function () {})
        // TODO (5): Within the function, resolve({ 'success': false });
    });
}

/**
 * Update a message on Firestore
 * @param {number} ID ID of the message to update
 * @param {string} message new message
 * @returns {Promise<object>} JSON object with a success param
 */
async function sendPatchMessage(ID, message) {
    return null;
}