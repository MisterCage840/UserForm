import "./style.css";

const select = document.querySelector("select");
const form = document.querySelector("form");
const email = document.querySelector("#email");
const submitBtn = document.querySelector("button");
const zipCode = document.querySelector("#zipCode");
const pass = document.querySelector("#password");
const confirmPass = document.querySelector("#confirmPass");

email.addEventListener("input", (event) => {
  showEmailError();
});

zipCode.addEventListener("input", (event) => {
  showZipError();
});

pass.addEventListener("input", (event) => {
  showPassError();
});

confirmPass.addEventListener("input", (event) => {
  showConfirmPassError();
});

form.addEventListener("submit", (event) => {
  if (!email.validity.valid) {
    showEmailError();
    event.preventDefault();
  } else if (!zipCode.validity.valid) {
    showZipError();
    event.preventDefault();
  } else if (!pass.validity.valid) {
    showPassError();
    event.preventDefault();
  } else if (!confirmPass.validity.valid) {
    showConfirmPassError();
    event.preventDefault();
  } else return;
});

function showEmailError() {
  if (email.validity.valueMissing)
    email.setCustomValidity("Please enter an email address");
  else if (email.validity.typeMismatch)
    email.setCustomValidity("Email address need to be in the correct format");
  else email.setCustomValidity("");
}

function showZipError() {
  if (zipCode.validity.valueMissing)
    zipCode.setCustomValidity("Please enter a zip code");
  else if (zipCode.validity.patternMismatch)
    zipCode.setCustomValidity("Please enter a proper zip code");
  else zipCode.setCustomValidity("");
}

function showPassError() {
  if (pass.validity.valueMissing)
    pass.setCustomValidity(
      "Please enter a password that is more than 8 characters",
    );
  else if (pass.value.length < 8)
    pass.setCustomValidity("Please enter more than 8 character for a password");
  else pass.setCustomValidity("");
}

function showConfirmPassError() {
  if (confirmPass.validity.valueMissing)
    confirmPass.setCustomValidity("Please enter the matching password");
  else if (confirmPass.value != pass.value)
    confirmPass.setCustomValidity("Passwords do not match");
  else confirmPass.setCustomValidity("");
}
const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo (Congo-Brazzaville)",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czechia (Czech Republic)",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini (fmr. Swaziland)",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Holy See",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea (North)",
  "Korea (South)",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar (Burma)",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Macedonia (fmr. Macedonia)",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine State",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
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
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States of America",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

countries.forEach((country) => {
  const countryElement = document.createElement("option");
  countryElement.value = country;
  countryElement.textContent = country;
  select.appendChild(countryElement);
});
