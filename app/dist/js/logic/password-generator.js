export class PasswordGenerator {
    constructor() {
        this.values = {
            "numbers": this.genChar(48, 57),
            "lowercase": this.genChar(97, 122),
            "uppercase": this.genChar(65, 90),
            "symbols": ['@', '*', '$', '#', '_', '-']
        };
    }
    create(length) {
        let result = '';
        let letters = Object.values(this.values).flat().join('');
        for (let i = 0; i < length; i++) {
            result += letters.charAt(Math.floor(Math.random() * letters.length));
        }
        return result;
    }
    genChar(min, max) {
        let array = [];
        const length = max - min;
        for (let i = 0; i <= length; i++)
            array.push(String.fromCharCode(min + i));
        return array;
    }
}
