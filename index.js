 const input = document.getElementById("test")
 const input2= document.getElementById("test2")
 function validateInput(input) {
     this.hasBeenFocused = false
     input.addEventListener("focusout", () => {
         if(!input.checkValidity()) {
             input.classList.add('false')
             checkTheValidity(input)
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
     }
     function validityMessage(input, validity) {
         const messages = {
             notValid : `please enter a valid ${input.id} \n`,
             tooShort : `input needs to be at least ${getMinLength(input)} characters long \n`,
             tooLong : `input cannot be longer then ${getMaxLength(input)} characters\n`,
             pleaseEnter : `please enter ${input.id}`
         }

         const Checks = {
             eMail() {
                 const validityArray =  []
                 if (validity.valueMissing) {
                     validityArray.push(messages.pleaseEnter)
                     return validityArray}
                 if (validity.typeMismatch) {validityArray.push(messages.notValid) }
                 if (validity.tooShort) {validityArray.push(messages.tooShort) }
                 return validityArray
             },
             test2() {
                 const validityArray =  []

                 if (validity.valueMissing) {
                     validityArray.push(messages.pleaseEnter)
                     return validityArray}
                 if (validity.tooShort) {validityArray.push(messages.tooShort) }
                 return validityArray
             }
         }
         const validityArray = Checks[input.id](input);

         if(validityArray.length === 0) {
             input.classList.remove('false')
         }
         return validityArray.join('')

         function getMinLength(input) {return input.getAttribute('minlength')}
         function getMaxLength(input) {return input.getAttribute('maxlength')}

     }
 }
 validateInput(input)
 validateInput(input2)


 const form = document.getElementById('Form')
 Array.from(form.children).forEach(element => validateInput(element))
