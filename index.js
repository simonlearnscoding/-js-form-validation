 const input = document.getElementById("test")
 let hasBeenFocused = false

 input.addEventListener("focusout", () => {
     if(!input.checkValidity()) {
        checkTheValidity(input)
         input.classList.add('false')
       }
     if(!hasBeenFocused) {

         input.addEventListener("input", () => {
             checkTheValidity(input)

         })
     }
     hasBeenFocused = true
 })

 function checkTheValidity(input) {

     const message = validityMessage(input, input.validity)
     input.setCustomValidity(message);
     input.reportValidity()
     console.log('hi')
 }

 function validityMessage(input, validity) {
    const validityArray = []
    const messages = {
        notValid : `please enter a valid ${input.id} \n`,
        tooShort : `input needs to be at least ${getMinLength(input)} characters long \n`,
        tooLong : `input cannot be longer then ${getMaxLength(input)} characters\n`
    }

    if (validity.valueMissing) { return `please enter ${input.id}` }
    if (validity.typeMismatch) {validityArray.push(messages.notValid) }
    if (validity.tooShort) {validityArray.push(messages.tooShort) }
    return validityArray.join()

   function getMinLength(input) {return input.getAttribute('minlength')}
   function getMaxLength(input) {return input.getAttribute('maxlength')}

}