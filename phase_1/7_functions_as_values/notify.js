const notifyByEmail = (email) => {
    return `Email sent to: ${email}`;
}

const notifyByText = (text) => {
    return `Text sent to: ${text}`;
}

const notify = (contact_details, notificationMethod) => {
    return notificationMethod(contact_details);
}

module.exports = { notifyByEmail, notifyByText, notify };