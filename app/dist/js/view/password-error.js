export class PasswordMensage {
    static inputError(boolean, mensage) {
        if (boolean) {
            mensage.innerHTML = 'Insert a number between 1 and 50.';
        }
        else {
            mensage.innerHTML = 'Select at least one input above.';
        }
    }
    static resError(mensage) {
        mensage.innerHTML = "It's no possible to copy a blank input.";
    }
    static resSuccess(mensage) {
    }
}
