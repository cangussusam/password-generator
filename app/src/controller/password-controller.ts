import { PasswordGenerator } from "../logic/password-generator.js"
import { PasswordChecked } from "../validation/password-checked-validation.js"
import { InputValidation } from "../validation/password-input-validation.js"
import { PasswordMensage } from "../view/password-mensage.js"
import { PasswordOutput } from "../view/password-output.js"


export class PasswordController{

    private passLength = document.querySelector('#password__length') as HTMLInputElement
    private lowercase = document.querySelector('#include__lowercase') as HTMLInputElement
    private uppercase = document.querySelector('#include__uppercase') as HTMLInputElement 
    private numbers = document.querySelector('#include__numbers') as HTMLInputElement
    private symbols = document.querySelector('#include__symbols') as HTMLInputElement
    private output = document.querySelector('.res__input') as HTMLInputElement
    private infoMensage = document.querySelector('.info__paragraph') as HTMLParagraphElement
    private resMensage = document.querySelector('.res__paragraph') as HTMLParagraphElement
    private resContainer = document.querySelector('.res.container') as HTMLElement

    public generatePassword(){
        if(!InputValidation.inputLength(this.passLength, this.infoMensage)){
            this.resContainer.classList.add('remove')
            return
        }
        
        this.infoMensage.innerHTML = ''
        this.validCheck()
    }

    public copy(){
        if(!InputValidation.inputRes(this.output, this.resMensage)) return

        PasswordMensage.resSuccess(this.resMensage)
        navigator.clipboard.writeText(this.output.value)
    }

    private validCheck(){
        const gen = new PasswordGenerator

        if(!PasswordChecked.isChecked(this.lowercase)) delete gen.values.lowercase
        
        if(!PasswordChecked.isChecked(this.uppercase)) delete gen.values.uppercase
        
        if(!PasswordChecked.isChecked(this.numbers)) delete gen.values.numbers
        
        if(!PasswordChecked.isChecked(this.symbols)) delete gen.values.symbols
        

        if(!InputValidation.inputChecked(Object.keys(gen.values).length, this.infoMensage)) {
            this.resContainer.classList.add('remove')
            return
        }
        PasswordMensage.success(this.infoMensage)
        PasswordOutput.viewPassword(this.output, gen.create(parseInt(this.passLength.value)))
    }
    
}
