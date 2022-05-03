
export class PasswordChecked{

    static isChecked(input: HTMLInputElement):boolean{

        if(input.checked) return true
        
        return false
    }
}