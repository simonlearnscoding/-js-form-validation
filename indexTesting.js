function objectFactory(input) {
    const obj = {}
    obj.input = input
    obj.name = input.id
    obj.restrictions = getConstraints(obj)
    obj.hasBeenFocused = false
    input.addEventListener("focusout", () => {
        checkTheValidity(obj)
        if(!obj.hasBeenFocused) {
            input.addEventListener("input", () => {
                checkTheValidity(obj)
            })
        }

        obj.hasBeenFocused = true
    })



    return obj
}
function checkTheValidity(object) {
    const message = validityMessage(object)
    if(message !== '') {
        object.input.classList.add('false')
        object.input.setCustomValidity(message);
        object.input.reportValidity()
        return false
    }

    object.input.setCustomValidity("");
    object.input.reportValidity()
    object.input.classList.remove('false')
    return true

    function validityMessage(obj) {
        const validityArray = []
        for (const [key, condition]of Object.entries(obj.restrictions.functions)) {

            if(condition(obj.input))
            {
                const response = obj.restrictions.messages[key]
                validityArray.push(response)
            }
        }
        console.log(validityArray)
        return validityArray.join('')
    }
}
function getConstraints(obj) {
    const newObject = {}

    const checkfunctions = {

        regex : {
            lowerchar: /[a-z]/,
            upperchar: /[A-Z]/,
            containsnumber: /[0-9]/,
            // containseightchar: new regexp("^(?=.{8,})"),
            containssymbols: /[\!\@\#\$\%\^\&\*\(\)\_\+\.\,\;\:\-]/
        },
        containsnoregex(input, regex) {
             console.log(input.value)
            if (input.value.search(regex) < 0) {
                return true
            } return false
        },
        lowerchar() {
            return (input)  => {return this.containsnoregex(input, this.regex.lowerchar)}
        },
        upperchar() {
            return(input) => {return this.containsnoregex(input, this.regex.upperchar)}
        },
        containsnumber() {
            return(input) => {return this.containsnoregex(input, this.regex.containsnumber)}
        },
        containssymbols() {
            return(input) => {return this.containsnoregex(input, this.regex.containssymbols)}
        },


        setpasswordtomatch() { //to do:take care of this function
            if (validityarray.length === 0) {
                passwordset = input.value
            }
        }
    }
    const messages = {
        passwordsunequal: `your password confirmation does not match the password\n`,
        tooshort(num) {return `input needs to be at least ${num} characters long \n`},
        toolong(num) {return`input cannot be longer then ${num} characters\n`}, //to do.get number
        pleaseenter() {return `please enter a value`},
        lowerchar() {return`${obj.name} needs at least one lowercase letter \n`},
        upperchar(name){return ` ${obj.name} needs at least one uppercase letter\n`},
        containsnumber(name){ return `${obj.name} needs to contain at least one number\n`},
        containssymbols(name) {return `${obj.name} needs to contain at least one symbol\n`},
    }
    function getinfo() {
        return {
            minlength(input) {
                return input.getattribute('minlength')},
            maxlength(input){
                return input.getattribute('maxlength')},
            name(input){
                return input.id}}
    }


    const arrays ={
        "password" : ["lowerchar", "upperchar", "containsnumber", "containssymbols"]
    }
    const restrictionsarray = arrays[obj.input.id]
    newObject.messages =  copyproperties(restrictionsarray, messages)
    newObject.functions =  copyproperties(restrictionsarray,  checkfunctions)
    return newObject
    function copyproperties(propertyarray, target) {
        const obj = {}
        for (property of propertyarray) {
            console.log(property)
            Object.assign(obj, {[property] : target[property]()})
        }
        return obj
    }


}

const element = document.getElementById('password')
const simon = objectFactory(element)
console.log(simon)
console.log(simon.restrictions.functions)