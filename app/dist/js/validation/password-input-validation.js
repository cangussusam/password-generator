import { PasswordMensage } from "../view/password-mensage.js";
export class InputValidation {
    static inputLength(input, mensage) {
        if (input.value.length == 0 || parseInt(input.value) > 50 || parseInt(input.value) == 0) {
            PasswordMensage.inputError(true, mensage);
            return false;
        }
        return true;
    }
    static inputChecked(number, mensage) {
        if (number == 0) {
            PasswordMensage.inputError(false, mensage);
            return false;
        }
        return true;
    }
    static inputRes(input, mensage) {
        if (input.value.length == 0) {
            PasswordMensage.resError(mensage);
            return false;
        }
        return true;
    }
}
