import { PasswordController } from "./controller/password-controller.js";

const controller = new PasswordController

const submitButton = document.querySelector('#submit')
if(submitButton){
    submitButton.addEventListener('click', function(){
        controller.generatePassword()
    })
}

const copyClipboard = document.querySelector('.res__clipboard')
if(copyClipboard){
    copyClipboard.addEventListener('click', function(){
        controller.copy()
    })
}
  