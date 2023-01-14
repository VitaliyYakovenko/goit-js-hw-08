import throttle from "lodash.throttle";

const FEEDBACK_FORM = "feedback-form-state";
const formEl = document.querySelector(".feedback-form");
const inputEmail = document.querySelector("input");
const textareaEl = document.querySelector("textarea");

formEl.addEventListener("submit", onEnterForm);
formEl.addEventListener("input", throttle(onGetValueForm,500));

const formData = {};


function onGetValueForm(event) {
    formData[event.target.name] = event.target.value;
    const string = JSON.stringify(formData);
    localStorage.setItem(FEEDBACK_FORM, string)
    
}

function onEnterForm(event) { 
    event.preventDefault();
    event.target.reset();
    localStorage.removeItem(FEEDBACK_FORM)
    console.log(formData);
}


const dataObj = localStorage.getItem(FEEDBACK_FORM)
function valueInpText(obj) {

    if (obj && inputEmail.name === "email") {
        inputEmail.value = JSON.parse(obj).email || "";
    }
    if (obj && textareaEl.name === "message") {
        textareaEl.value = JSON.parse(obj).message || "";
    }
}
valueInpText(dataObj)
























