
function botReply(responseMessage) {
    $("#main-container").append(`<div class="bubble bot-output currentMessage">${responseMessage}</div></br>`);
    $(".currentMessage").hide().delay(850).fadeIn();
    $(".currentMessage").removeClass("currentMessage");
}

const greetings = ["Heyyy", "Howdy! 🤠", "HELLO! I'm alive!", "Hola tío!", "Hi there 👋"];
const feelings = ["Meh, I'm okay 😒", "Grrrreeeeaaat! 💯", "Thanks, I'm doing well!", "I feel like 💩", "All good here."];
const laughs = ["Come on. It's not that funny.", "😂 😂 😂", "I know right?!", "Jajaja!", "Ha 🙃"];
const goodbyes = ["See ya!", "Goodbye, my friend", "Have a nice day!", "Okay, till next time!", "Bye bye bye! 😋"];

function botAlgorithm(processMessage) {
    if (processMessage.includes("hello") || processMessage.includes("hi") || processMessage.includes("hey")) {
        botReply(greetings[Math.floor(Math.random() * greetings.length)]);
    }
    else if (processMessage.includes("how are you")) {
        botReply(feelings[Math.floor(Math.random() * feelings.length)]);
    }
    else if (processMessage.match(/\b(?:lol|lmao|haha)\b/)) {
        botReply(laughs[Math.floor(Math.random() * laughs.length)]);
    }
    else if (processMessage.includes("bye")) {
        botReply(goodbyes[Math.floor(Math.random() * goodbyes.length)]);
    }
}

$(document).ready(function () {
    $("#textbox").keypress(function (event) {
        if (event.which === 13 && $("#enter").prop("checked")) {
            $("#send").click();
            event.preventDefault();
        }
    });

    $("#send").click(function () {
        const userMessage = $("#textbox").val();
        $("#textbox").val("");
        $("#main-container").append(`<div class="bubble user-input">${userMessage}</div></br>`);
        $("#main-container").scrollTop($("#main-container").prop("scrollHeight"));
        const forBotProcess = userMessage.toLowerCase();
        botAlgorithm(forBotProcess);
    });
});
