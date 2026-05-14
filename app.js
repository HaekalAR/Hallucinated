const dateElement = document.getElementById("date");
const today = new Date();

const options = {
    weekday: 'long',
    year   : "numeric",
    month  : "long",
    day    : "numeric",
};

dateElement.textContent = today.toLocaleDateString("id-ID", options);