
export class PasswordMensage{

    static inputError(boolean: boolean, mensage: HTMLParagraphElement){
        if(boolean){
            mensage.classList.add('error')
            mensage.innerHTML = 'Insert a number between 1 and 50.'
        }else{
            mensage.classList.add('error')
            mensage.innerHTML = 'Select at least one input above.'
        }
    }

    static resError(mensage: HTMLParagraphElement){
        mensage.classList.remove('transition')
        mensage.classList.add('error')
        mensage.innerHTML = "It's no possible to copy a blank input."
    }

    static resSuccess(mensage: HTMLParagraphElement){
        mensage.classList.remove('error')
        mensage.classList.remove('transition')
        mensage.innerHTML = "Copied!"

        setTimeout(() => mensage.classList.add('transition') ,50)
        setTimeout(() => mensage.innerHTML = '',5050)
    }

    static success(mensage: HTMLParagraphElement){
        mensage.classList.remove('error')
        mensage.innerHTML = 'Password created successfully.'
    }
}