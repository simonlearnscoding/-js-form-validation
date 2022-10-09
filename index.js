const input = document.getElementById("test")
const input2= document.getElementById("test2")
const countryList = [
     "Afghanistan",
     "Albania",
     "Algeria",
     "American Samoa",
     "Andorra",
     "Angola",
     "Anguilla",
     "Antarctica",
     "Antigua and Barbuda",
     "Argentina",
     "Armenia",
     "Aruba",
     "Australia",
     "Austria",
     "Azerbaijan",
     "Bahamas (the)",
     "Bahrain",
     "Bangladesh",
     "Barbados",
     "Belarus",
     "Belgium",
     "Belize",
     "Benin",
     "Bermuda",
     "Bhutan",
     "Bolivia (Plurinational State of)",
     "Bonaire, Sint Eustatius and Saba",
     "Bosnia and Herzegovina",
     "Botswana",
     "Bouvet Island",
     "Brazil",
     "British Indian Ocean Territory (the)",
     "Brunei Darussalam",
     "Bulgaria",
     "Burkina Faso",
     "Burundi",
     "Cabo Verde",
     "Cambodia",
     "Cameroon",
     "Canada",
     "Cayman Islands (the)",
     "Central African Republic (the)",
     "Chad",
     "Chile",
     "China",
     "Christmas Island",
     "Cocos (Keeling) Islands (the)",
     "Colombia",
     "Comoros (the)",
     "Congo (the Democratic Republic of the)",
     "Congo (the)",
     "Cook Islands (the)",
     "Costa Rica",
     "Croatia",
     "Cuba",
     "Curaçao",
     "Cyprus",
     "Czechia",
     "Côte d'Ivoire",
     "Denmark",
     "Djibouti",
     "Dominica",
     "Dominican Republic (the)",
     "Ecuador",
     "Egypt",
     "El Salvador",
     "Equatorial Guinea",
     "Eritrea",
     "Estonia",
     "Eswatini",
     "Ethiopia",
     "Falkland Islands (the) [Malvinas]",
     "Faroe Islands (the)",
     "Fiji",
     "Finland",
     "France",
     "French Guiana",
     "French Polynesia",
     "French Southern Territories (the)",
     "Gabon",
     "Gambia (the)",
     "Georgia",
     "Germany",
     "Ghana",
     "Gibraltar",
     "Greece",
     "Greenland",
     "Grenada",
     "Guadeloupe",
     "Guam",
     "Guatemala",
     "Guernsey",
     "Guinea",
     "Guinea-Bissau",
     "Guyana",
     "Haiti",
     "Heard Island and McDonald Islands",
     "Holy See (the)",
     "Honduras",
     "Hong Kong",
     "Hungary",
     "Iceland",
     "India",
     "Indonesia",
     "Iran (Islamic Republic of)",
     "Iraq",
     "Ireland",
     "Isle of Man",
     "Israel",
     "Italy",
     "Jamaica",
     "Japan",
     "Jersey",
     "Jordan",
     "Kazakhstan",
     "Kenya",
     "Kiribati",
     "Korea (the Democratic People's Republic of)",
     "Korea (the Republic of)",
     "Kuwait",
     "Kyrgyzstan",
     "Lao People's Democratic Republic (the)",
     "Latvia",
     "Lebanon",
     "Lesotho",
     "Liberia",
     "Libya",
     "Liechtenstein",
     "Lithuania",
     "Luxembourg",
     "Macao",
     "Madagascar",
     "Malawi",
     "Malaysia",
     "Maldives",
     "Mali",
     "Malta",
     "Marshall Islands (the)",
     "Martinique",
     "Mauritania",
     "Mauritius",
     "Mayotte",
     "Mexico",
     "Micronesia (Federated States of)",
     "Moldova (the Republic of)",
     "Monaco",
     "Mongolia",
     "Montenegro",
     "Montserrat",
     "Morocco",
     "Mozambique",
     "Myanmar",
     "Namibia",
     "Nauru",
     "Nepal",
     "Netherlands (the)",
     "New Caledonia",
     "New Zealand",
     "Nicaragua",
     "Niger (the)",
     "Nigeria",
     "Niue",
     "Norfolk Island",
     "Northern Mariana Islands (the)",
     "Norway",
     "Oman",
     "Pakistan",
     "Palau",
     "Palestine, State of",
     "Panama",
     "Papua New Guinea",
     "Paraguay",
     "Peru",
     "Philippines (the)",
     "Pitcairn",
     "Poland",
     "Portugal",
     "Puerto Rico",
     "Qatar",
     "Republic of North Macedonia",
     "Romania",
     "Russian Federation (the)",
     "Rwanda",
     "Réunion",
     "Saint Barthélemy",
     "Saint Helena, Ascension and Tristan da Cunha",
     "Saint Kitts and Nevis",
     "Saint Lucia",
     "Saint Martin (French part)",
     "Saint Pierre and Miquelon",
     "Saint Vincent and the Grenadines",
     "Samoa",
     "San Marino",
     "Sao Tome and Principe",
     "Saudi Arabia",
     "Senegal",
     "Serbia",
     "Seychelles",
     "Sierra Leone",
     "Singapore",
     "Sint Maarten (Dutch part)",
     "Slovakia",
     "Slovenia",
     "Solomon Islands",
     "Somalia",
     "South Africa",
     "South Georgia and the South Sandwich Islands",
     "South Sudan",
     "Spain",
     "Sri Lanka",
     "Sudan (the)",
     "Suriname",
     "Svalbard and Jan Mayen",
     "Sweden",
     "Switzerland",
     "Syrian Arab Republic",
     "Taiwan",
     "Tajikistan",
     "Tanzania, United Republic of",
     "Thailand",
     "Timor-Leste",
     "Togo",
     "Tokelau",
     "Tonga",
     "Trinidad and Tobago",
     "Tunisia",
     "Turkey",
     "Turkmenistan",
     "Turks and Caicos Islands (the)",
     "Tuvalu",
     "Uganda",
     "Ukraine",
     "United Arab Emirates (the)",
     "United Kingdom of Great Britain and Northern Ireland (the)",
     "United States Minor Outlying Islands (the)",
     "United States of America (the)",
     "Uruguay",
     "Uzbekistan",
     "Vanuatu",
     "Venezuela (Bolivarian Republic of)",
     "Viet Nam",
     "Virgin Islands (British)",
     "Virgin Islands (U.S.)",
     "Wallis and Futuna",
     "Western Sahara",
     "Yemen",
     "Zambia",
     "Zimbabwe",
     "Åland Islands"
 ];
// let passwordSet = ''


const prototypeObject = {

    getInfo : {

        MinLength(input) {
            return input.getAttribute('minlength')
        },
        MaxLength(input){
            return input.getAttribute('maxlength')
        },
        name(input){
            return input.id
        }
    },
    messages : {

        passwordsUnequal: `your password confirmation does not match the password\n`,
        notValid: `please enter a valid ${this.getInfo.name(input)} \n`,
        tooShort: `input needs to be at least ${getInfo.MinLength(input)} characters long \n`,
        tooLong: `input cannot be longer then ${getInfo.MaxLength(input)} characters\n`,
        pleaseEnter: `please enter ${getInfo.name}`,
        lowerChar: `${getInfo.name} needs at least one Lowercase Letter \n`,
        upperChar: ` ${getInfo.name} needs at least one Uppercase Letter\n`,
        containsNumber: `${getInfo.name} needs to contain at least one Number\n`,
        containsSymbols: `${getInfo.name} needs to contain at least one Symbol\n`,
    },
    regex : {
        lowerChar: /[a-z]/,
        upperChar: /[A-Z]/,
        containsNumber: /[0-9]/,
        // containsEightChar: new RegExp("^(?=.{8,})"),
        containsSymbols: /[\!\@\#\$\%\^\&\*\(\)\_\+\.\,\;\:\-]/
    },
    checkFunctions : {
        lowerChar(input) {
            return this.containsNoRegex(input, regex.lowerChar)
        },
        upperChar(input) {
            return this.containsNoRegex(input, regex.upperChar)
        },
        containsNumber(input) {
            return this.containsNoRegex(input, regex.containsNumber)
        },
        containsSymbols(input) {
            return this.containsNoRegex(input, regex.containsSymbols)
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
    }
}

function validateFactory(input) {

    const proto = (Object.create(prototypeObject))

    const object = Object.assign(proto, specifyObjectType(input, proto))


    function specifyObjectType(input, object) {
        switch (input.id, object) {
            case("password"):
                return passwordValidator(input)
        }
    }

    return object
}

function passwordValidator(input){

    obj.req = Object.assign({},
        obj.containsNumber(),
        obj.containsSymbols(),
        obj.lowerChar(),
        obj.upperChar())

    return obj
}

function validateInput(input) {


    const requirementsNeeded = {

        eMail() {
            const validityArray = []
            if (validity.valueMissing) {
                validityArray.push(messages.pleaseEnter)
                return validityArray
            }
            if (validity.typeMismatch) {
                validityArray.push(messages.notValid)
            }
            return validityArray
        },
        ZIP() {
            const validityArray = []
            if (validity.tooShort) {
                validityArray.push(messages.tooShort)
            }


            return validityArray
        },
        Country() {
            const validityArray = []
            if (validity.valueMissing) {
                validityArray.push(messages.pleaseEnter)
                return validityArray
            }

            if (validity.tooShort) {
                validityArray.push(messages.tooShort)
            }
            return validityArray
        },
        password(input) {
            obj = Object.assign({},
                checkFunctions.containsNumber(),
                checkFunctions.containsSymbols(),
                checkFunctions.lowerChar(),
                checkFunctions.upperChar())
            return obj


            // const validityArray = []
            // Object.entries(this.regex).forEach(([key, value]) => { // TODO: add to anki
            //     if(input.value.search(value) < 0) {
            //         validityArray.push(messages[key])
            //     }
        },
        confirmPassword(input) {
            const validityArray = []
            if (input.value !== password) {
                validityArray.push(messages.passwordsUnequal)
            }
            return validityArray
        }
    }
    this.hasBeenFocused = false
    input.addEventListener("focusout", () => {
        checkTheValidity(input)
        if(!this.hasBeenFocused) {
            input.addEventListener("input", () => {
                checkTheValidity(input)
            })
        }

        this.hasBeenFocused = true
    })


    function checkTheValidity(input) {
        const message = validityMessage(input, input.validity)
        if(message !== '') {
            input.classList.add('false')
            input.setCustomValidity(message);
            input.reportValidity()
            return false
        }
        return true
    }
    function validityMessage(input, ) {
        CheckIfRequirementsMet(input)



        function CheckIfRequirementsMet(input) {
            const validityArray = []
            const conditions = requirementsNeeded[input.id]
            console.log(conditions)


        }

    }
//     const validityArray = Checks(input);
//     if(validityArray.length === 0) {
//         input.classList.remove('false')
//     }
//
//     // return validityArray.join('')
//
//     function getMinLength(input) {return input.getAttribute('minlength')}
//     function getMaxLength(input) {return input.getAttribute('maxlength')}
//
// }
}


// const form = document.getElementById('form')
//  const Inputs = document.querySelectorAll('#form input');
 // Array.from(Inputs).forEach(element => validateInput(element))
const password = document.getElementById('password');
validateFactory(password);