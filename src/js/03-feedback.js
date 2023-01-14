import throttle from "lodash.throttle";

const FEEDBACK_FORM = "feedback-form-state";
const formEl = document.querySelector(".feedback-form");
const inputEmail = document.querySelector("input");
const textareaEl = document.querySelector("textarea");

formEl.addEventListener("submit", onEnterForm);
formEl.addEventListener("input", throttle(onGetValueForm,500));


const formData = {
    email: "",
    message: "",
}


function onGetValueForm(event) {
    formData.email = inputEmail.value;
    formData.message = textareaEl.value;
    const parseString = JSON.stringify(formData);
    localStorage.setItem(FEEDBACK_FORM,parseString)
}

// //  1@mail.com
function onEnterForm(event) {
    event.preventDefault();
    if (inputEmail.value === "" || textareaEl.value === "") {
        alert("Заполните все поля")
    } else {
        event.target.reset();
        console.log(formData)
    }

    localStorage.removeItem(FEEDBACK_FORM);
}

getLocalValue()

function getLocalValue() {
    const dataObj = localStorage.getItem(FEEDBACK_FORM);
    const valueObj = JSON.parse(dataObj);
    if (dataObj) {
        inputEmail.value = valueObj.email;
        textareaEl.value = valueObj.message;
    }
}



































