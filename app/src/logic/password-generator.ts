

//48-57 - number
//97-122 - lowercase
//65-90 - uppercase

import { Values } from "../interfaces/password-values-interface.js"

export class PasswordGenerator{

    public create(length: number){

        let result = ''
        let letters = Object.values(this.values).flat().join('')

        for(let i=0;i<length;i++){
            result += letters.charAt(Math.floor(Math.random() * letters.length))
        }

        return result
    }

    private genChar(min:number, max:number){
        let array = []
        const length = max-min
        for(let i=0; i<=length;i++) array.push(String.fromCharCode(min+i))
        
        return array
    }

    public values: Values = {
        "numbers": this.genChar(48,57),
        "lowercase": this.genChar(97,122),
        "uppercase": this.genChar(65,90),
        "symbols": ['@','*','$','#','_','-']
    }

}


