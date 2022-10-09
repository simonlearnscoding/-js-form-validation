//object Prototype

function getConstraints(obj) {
    switch (obj.input.id) {
        case("password"):
            return passwordValidator
    }
    //to do return function that will go through all constraints

}
function passwordValidator(object) {
    const checkFunctions = object.checkFunctions //TO DO: this
    const obj = Object.assign({},
        checkFunctions.containsNumber(),
        checkFunctions.containsSymbols(),
        checkFunctions.lowerChar(),
        checkFunctions.upperChar())
    return obj
}
function messages(obj) {
    return {
        passwordsUnequal: `your password confirmation does not match the password\n`,
        tooShort(num) {return `input needs to be at least ${num} characters long \n`},
        tooLong(num) {return`input cannot be longer then ${num} characters\n`},
        pleaseEnter() {return `please enter a value`},
        lowerChar: `${this.name} needs at least one Lowercase Letter \n`,
        upperChar: ` ${obj.getInfo.name} needs at least one Uppercase Letter\n`,
        containsNumber: `${obj.getInfo.name} needs to contain at least one Number\n`,
        containsSymbols: `${obj.getInfo.name} needs to contain at least one Symbol\n`,}
}
function copyProperties(propertyArray, target) {
    const obj = {}
    for (property of propertyArray) {
        console.log(property)
        Object.assign(obj, {[property] : target[property]})
    }
    return obj

}
function getTwoMessages(obj) {
    const object = copyProperties(['passwordsUnequal', 'pleaseEnter', 'lowerChar'], messages(obj))
    return object
}

function getInfo() {
    return {
    MinLength(input) {
        return input.getAttribute('minlength')},
    MaxLength(input){
        return input.getAttribute('maxlength')},
    name(input){
        return input.id}}
    }

const regex = {
        lowerChar: /[a-z]/,
        upperChar: /[A-Z]/,
        containsNumber: /[0-9]/,
        // containsEightChar: new RegExp("^(?=.{8,})"),
        containsSymbols: /[\!\@\#\$\%\^\&\*\(\)\_\+\.\,\;\:\-]/
    }

function checkFunctions() {
    return {
        lowerChar(input) {
            return this.containsNoRegex(input, obj.regex.lowerChar)
        },
        upperChar(input) {
            return this.containsNoRegex(input, obj.regex.upperChar)
        },
        containsNumber(input) {
            return this.containsNoRegex(input, obj.regex.containsNumber)
        },
        containsSymbols(input) {
            return this.containsNoRegex(input, obj.regex.containsSymbols)
        },
        containsNoRegex(input, regex) {
            if (input.value.search(regex) < 0) {
                return true
            }
        },
        setPassWordToMatch() {
            if (validityArray.length === 0) {
                passwordSet = input.value
            }
        }
    }}

function parentFactory(input) {

    const obj = {}
    obj.input = input
    obj.name = input.id
    obj.getInfo = getInfo(obj)
    obj.messages = getTwoMessages(obj)
//
//     obj.constraints = getConstraints(obj)
//
//
//     console.log(obj)
//
//
//
//     }
//
//     const mainFactory = parentFactory(input)
//     const funCreate = specifyObjectType(mainFactory)
//     const obj = funCreate(mainFactory)
    return obj}
//

//TODO: create password object

const element = document.getElementById('password')
const simon = parentFactory(element)

console.log(simon.messages.pleaseEnter())
console.log(simon.messages.pleaseEnter())
console.log(simon.messages.lowerChar)



 