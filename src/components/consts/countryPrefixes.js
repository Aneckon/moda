const countryPrefixes = [
  {
    "label": "United Kingdom (+44)",
    "value": "+44",
    "mobileNumberLength": 10
  },
  {
    "label": "United States (+1)",
    "value": "+1",
    "mobileNumberLength": 10
  },
  {
      "label": "Afghanistan (+93)",
      "value": "+93",
      "mobileNumberLength": 9
  },
  {
      "label": "Albania (+355)",
      "value": "+355",
      "mobileNumberLength": 9
  },
  {
      "label": "Algeria (+213)",
      "value": "+213",
      "mobileNumberLength": 9
  },
  {
      "label": "Andorra (+376)",
      "value": "+376",
      "mobileNumberLength": 6
  },
  {
      "label": "Angola (+244)",
      "value": "+244",
      "mobileNumberLength": 9
  },
  {
      "label": "Antigua and Barbuda (+1 268)",
      "value": "+1 268",
      "mobileNumberLength": 10
  },
  {
      "label": "Argentina (+54)",
      "value": "+54",
      "mobileNumberLength": 10
  },
  {
      "label": "Armenia (+374)",
      "value": "+374",
      "mobileNumberLength": 8
  },
  {
      "label": "Australia (+61)",
      "value": "+61",
      "mobileNumberLength": 9
  },
  {
      "label": "Austria (+43)",
      "value": "+43",
      "mobileNumberLength": 11
  },
  {
      "label": "Azerbaijan (+994)",
      "value": "+994",
      "mobileNumberLength": 9
  },
  {
      "label": "Bahamas (+1 242)",
      "value": "+1 242",
      "mobileNumberLength": 10
  },
  {
      "label": "Bahrain (+973)",
      "value": "+973",
      "mobileNumberLength": 8
  },
  {
      "label": "Bangladesh (+880)",
      "value": "+880",
      "mobileNumberLength": 10
  },
  {
      "label": "Barbados (+1 246)",
      "value": "+1 246",
      "mobileNumberLength": 10
  },
  {
      "label": "Belarus (+375)",
      "value": "+375",
      "mobileNumberLength": 9
  },
  {
      "label": "Belgium (+32)",
      "value": "+32",
      "mobileNumberLength": 9
  },
  {
      "label": "Belize (+501)",
      "value": "+501",
      "mobileNumberLength": 7
  },
  {
      "label": "Benin (+229)",
      "value": "+229",
      "mobileNumberLength": 8
  },
  {
      "label": "Bhutan (+975)",
      "value": "+975",
      "mobileNumberLength": 8
  },
  {
      "label": "Bolivia (+591)",
      "value": "+591",
      "mobileNumberLength": 8
  },
  {
      "label": "Bosnia and Herzegovina (+387)",
      "value": "+387",
      "mobileNumberLength": 8
  },
  {
      "label": "Botswana (+267)",
      "value": "+267",
      "mobileNumberLength": 8
  },
  {
      "label": "Brazil (+55)",
      "value": "+55",
      "mobileNumberLength": 11
  },
  {
      "label": "Brunei (+673)",
      "value": "+673",
      "mobileNumberLength": 7
  },
  {
      "label": "Bulgaria (+359)",
      "value": "+359",
      "mobileNumberLength": 9
  },
  {
      "label": "Burkina Faso (+226)",
      "value": "+226",
      "mobileNumberLength": 8
  },
  {
      "label": "Burundi (+257)",
      "value": "+257",
      "mobileNumberLength": 8
  },
  {
      "label": "Cambodia (+855)",
      "value": "+855",
      "mobileNumberLength": 9
  },
  {
      "label": "Cameroon (+237)",
      "value": "+237",
      "mobileNumberLength": 9
  },
  {
      "label": "Canada (+1)",
      "value": "+1",
      "mobileNumberLength": 10
  },
  {
      "label": "Cape Verde (+238)",
      "value": "+238",
      "mobileNumberLength": 7
  },
  {
      "label": "Central African Republic (+236)",
      "value": "+236",
      "mobileNumberLength": 8
  },
  {
      "label": "Chad (+235)",
      "value": "+235",
      "mobileNumberLength": 8
  },
  {
      "label": "Chile (+56)",
      "value": "+56",
      "mobileNumberLength": 9
  },
  {
      "label": "China (+86)",
      "value": "+86",
      "mobileNumberLength": 11
  },
  {
      "label": "Colombia (+57)",
      "value": "+57",
      "mobileNumberLength": 10
  },
  {
      "label": "Comoros (+269)",
      "value": "+269",
      "mobileNumberLength": 7
  },
  {
      "label": "Congo (Democratic Republic of the) (+243)",
      "value": "+243",
      "mobileNumberLength": 9
  },
  {
      "label": "Congo (Republic of the) (+242)",
      "value": "+242",
      "mobileNumberLength": 9
  },
  {
      "label": "Costa Rica (+506)",
      "value": "+506",
      "mobileNumberLength": 8
  },
  {
      "label": "Croatia (+385)",
      "value": "+385",
      "mobileNumberLength": 9
  },
  {
      "label": "Cuba (+53)",
      "value": "+53",
      "mobileNumberLength": 8
  },
  {
      "label": "Cyprus (+357)",
      "value": "+357",
      "mobileNumberLength": 8
  },
  {
      "label": "Czech Republic (+420)",
      "value": "+420",
      "mobileNumberLength": 9
  },
  {
      "label": "Denmark (+45)",
      "value": "+45",
      "mobileNumberLength": 8
  },
  {
      "label": "Djibouti (+253)",
      "value": "+253",
      "mobileNumberLength": 8
  },
  {
      "label": "Dominica (+1 767)",
      "value": "+1 767",
      "mobileNumberLength": 10
  },
  {
      "label": "Dominican Republic (+1 809)",
      "value": "+1 809",
      "mobileNumberLength": 10
  },
  {
      "label": "East Timor (+670)",
      "value": "+670",
      "mobileNumberLength": 7
  },
  {
      "label": "Ecuador (+593)",
      "value": "+593",
      "mobileNumberLength": 9
  },
  {
      "label": "Egypt (+20)",
      "value": "+20",
      "mobileNumberLength": 10
  },
  {
      "label": "El Salvador (+503)",
      "value": "+503",
      "mobileNumberLength": 8
  },
  {
      "label": "Equatorial Guinea (+240)",
      "value": "+240",
      "mobileNumberLength": 9
  },
  {
      "label": "Eritrea (+291)",
      "value": "+291",
      "mobileNumberLength": 7
  },
  {
      "label": "Estonia (+372)",
      "value": "+372",
      "mobileNumberLength": 9
  },
  {
      "label": "Eswatini (+268)",
      "value": "+268",
      "mobileNumberLength": 8
  },
  {
      "label": "Ethiopia (+251)",
      "value": "+251",
      "mobileNumberLength": 9
  },
  {
      "label": "Fiji (+679)",
      "value": "+679",
      "mobileNumberLength": 7
  },
  {
      "label": "Finland (+358)",
      "value": "+358",
      "mobileNumberLength": 10
  },
  {
      "label": "France (+33)",
      "value": "+33",
      "mobileNumberLength": 9
  },
  {
      "label": "Gabon (+241)",
      "value": "+241",
      "mobileNumberLength": 9
  },
  {
      "label": "Gambia (+220)",
      "value": "+220",
      "mobileNumberLength": 8
  },
  {
      "label": "Georgia (+995)",
      "value": "+995",
      "mobileNumberLength": 9
  },
  {
      "label": "Germany (+49)",
      "value": "+49",
      "mobileNumberLength": 10
  },
  {
      "label": "Ghana (+233)",
      "value": "+233",
      "mobileNumberLength": 9
  },
  {
      "label": "Greece (+30)",
      "value": "+30",
      "mobileNumberLength": 10
  },
  {
      "label": "Grenada (+1 473)",
      "value": "+1 473",
      "mobileNumberLength": 10
  },
  {
      "label": "Guatemala (+502)",
      "value": "+502",
      "mobileNumberLength": 8
  },
  {
      "label": "Guinea (+224)",
      "value": "+224",
      "mobileNumberLength": 8
  },
  {
      "label": "Guinea Bissau (+245)",
      "value": "+245",
      "mobileNumberLength": 7
  },
  {
      "label": "Guyana (+592)",
      "value": "+592",
      "mobileNumberLength": 7
  },
  {
      "label": "Haiti (+509)",
      "value": "+509",
      "mobileNumberLength": 8
  },
  {
      "label": "Honduras (+504)",
      "value": "+504",
      "mobileNumberLength": 8
  },
  {
      "label": "Hungary (+36)",
      "value": "+36",
      "mobileNumberLength": 9
  },
  {
      "label": "Iceland (+354)",
      "value": "+354",
      "mobileNumberLength": 7
  },
  {
      "label": "India (+91)",
      "value": "+91",
      "mobileNumberLength": 10
  },
  {
      "label": "Indonesia (+62)",
      "value": "+62",
      "mobileNumberLength": 10
  },
  {
      "label": "Iran (+98)",
      "value": "+98",
      "mobileNumberLength": 10
  },
  {
      "label": "Iraq (+964)",
      "value": "+964",
      "mobileNumberLength": 10
  },
  {
      "label": "Ireland (+353)",
      "value": "+353",
      "mobileNumberLength": 9
  },
  {
      "label": "Israel (+972)",
      "value": "+972",
      "mobileNumberLength": 9
  },
  {
      "label": "Italy (+39)",
      "value": "+39",
      "mobileNumberLength": 10
  },
  {
      "label": "Jamaica (+1 876)",
      "value": "+1 876",
      "mobileNumberLength": 10
  },
  {
      "label": "Japan (+81)",
      "value": "+81",
      "mobileNumberLength": 10
  },
  {
      "label": "Jordan (+962)",
      "value": "+962",
      "mobileNumberLength": 9
  },
  {
      "label": "Kazakhstan (+7)",
      "value": "+7",
      "mobileNumberLength": 10
  },
  {
      "label": "Kenya (+254)",
      "value": "+254",
      "mobileNumberLength": 9
  },
  {
      "label": "Kiribati (+686)",
      "value": "+686",
      "mobileNumberLength": 5
  },
  {
      "label": "Korea (North) (+850)",
      "value": "+850",
      "mobileNumberLength": 9
  },
  {
      "label": "Korea (South) (+82)",
      "value": "+82",
      "mobileNumberLength": 10
  },
  {
      "label": "Kosovo (+383)",
      "value": "+383",
      "mobileNumberLength": 8
  },
  {
      "label": "Kuwait (+965)",
      "value": "+965",
      "mobileNumberLength": 8
  },
  {
      "label": "Kyrgyzstan (+996)",
      "value": "+996",
      "mobileNumberLength": 9
  },
  {
      "label": "Laos (+856)",
      "value": "+856",
      "mobileNumberLength": 8
  },
  {
      "label": "Latvia (+371)",
      "value": "+371",
      "mobileNumberLength": 8
  },
  {
      "label": "Lebanon (+961)",
      "value": "+961",
      "mobileNumberLength": 8
  },
  {
      "label": "Lesotho (+266)",
      "value": "+266",
      "mobileNumberLength": 8
  },
  {
      "label": "Liberia (+231)",
      "value": "+231",
      "mobileNumberLength": 7
  },
  {
      "label": "Libya (+218)",
      "value": "+218",
      "mobileNumberLength": 9
  },
  {
      "label": "Liechtenstein (+423)",
      "value": "+423",
      "mobileNumberLength": 7
  },
  {
      "label": "Lithuania (+370)",
      "value": "+370",
      "mobileNumberLength": 8
  },
  {
      "label": "Luxembourg (+352)",
      "value": "+352",
      "mobileNumberLength": 9
  },
  {
      "label": "Madagascar (+261)",
      "value": "+261",
      "mobileNumberLength": 9
  },
  {
      "label": "Malawi (+265)",
      "value": "+265",
      "mobileNumberLength": 9
  },
  {
      "label": "Malaysia (+60)",
      "value": "+60",
      "mobileNumberLength": 9
  },
  {
      "label": "Maldives (+960)",
      "value": "+960",
      "mobileNumberLength": 7
  },
  {
      "label": "Mali (+223)",
      "value": "+223",
      "mobileNumberLength": 8
  },
  {
      "label": "Malta (+356)",
      "value": "+356",
      "mobileNumberLength": 8
  },
  {
      "label": "Marshall Islands (+692)",
      "value": "+692",
      "mobileNumberLength": 7
  },
  {
      "label": "Mauritania (+222)",
      "value": "+222",
      "mobileNumberLength": 8
  },
  {
      "label": "Mauritius (+230)",
      "value": "+230",
      "mobileNumberLength": 8
  },
  {
      "label": "Mexico (+52)",
      "value": "+52",
      "mobileNumberLength": 10
  },
  {
      "label": "Micronesia (+691)",
      "value": "+691",
      "mobileNumberLength": 7
  },
  {
      "label": "Moldova (+373)",
      "value": "+373",
      "mobileNumberLength": 8
  },
  {
      "label": "Monaco (+377)",
      "value": "+377",
      "mobileNumberLength": 8
  },
  {
      "label": "Mongolia (+976)",
      "value": "+976",
      "mobileNumberLength": 8
  },
  {
      "label": "Montenegro (+382)",
      "value": "+382",
      "mobileNumberLength": 9
  },
  {
      "label": "Morocco (+212)",
      "value": "+212",
      "mobileNumberLength": 9
  },
  {
      "label": "Mozambique (+258)",
      "value": "+258",
      "mobileNumberLength": 9
  },
  {
      "label": "Myanmar (+95)",
      "value": "+95",
      "mobileNumberLength": 9
  },
  {
      "label": "Namibia (+264)",
      "value": "+264",
      "mobileNumberLength": 9
  },
  {
      "label": "Nauru (+674)",
      "value": "+674",
      "mobileNumberLength": 7
  },
  {
      "label": "Nepal (+977)",
      "value": "+977",
      "mobileNumberLength": 10
  },
  {
      "label": "Netherlands (+31)",
      "value": "+31",
      "mobileNumberLength": 9
  },
  {
      "label": "New Zealand (+64)",
      "value": "+64",
      "mobileNumberLength": 10
  },
  {
      "label": "Nicaragua (+505)",
      "value": "+505",
      "mobileNumberLength": 8
  },
  {
      "label": "Niger (+227)",
      "value": "+227",
      "mobileNumberLength": 8
  },
  {
      "label": "Nigeria (+234)",
      "value": "+234",
      "mobileNumberLength": 10
  },
  {
      "label": "North Macedonia (formerly Macedonia) (+389)",
      "value": "+389",
      "mobileNumberLength": 8
  },
  {
      "label": "Norway (+47)",
      "value": "+47",
      "mobileNumberLength": 8
  },
  {
      "label": "Oman (+968)",
      "value": "+968",
      "mobileNumberLength": 8
  },
  {
      "label": "Pakistan (+92)",
      "value": "+92",
      "mobileNumberLength": 10
  },
  {
      "label": "Palau (+680)",
      "value": "+680",
      "mobileNumberLength": 7
  },
  {
      "label": "Palestine (+970)",
      "value": "+970",
      "mobileNumberLength": 9
  },
  {
      "label": "Panama (+507)",
      "value": "+507",
      "mobileNumberLength": 8
  },
  {
      "label": "Papua New Guinea (+675)",
      "value": "+675",
      "mobileNumberLength": 7
  },
  {
      "label": "Paraguay (+595)",
      "value": "+595",
      "mobileNumberLength": 9
  },
  {
      "label": "Peru (+51)",
      "value": "+51",
      "mobileNumberLength": 9
  },
  {
      "label": "Philippines (+63)",
      "value": "+63",
      "mobileNumberLength": 10
  },
  {
      "label": "Poland (+48)",
      "value": "+48",
      "mobileNumberLength": 9
  },
  {
      "label": "Portugal (+351)",
      "value": "+351",
      "mobileNumberLength": 9
  },
  {
      "label": "Qatar (+974)",
      "value": "+974",
      "mobileNumberLength": 8
  },
  {
      "label": "Romania (+40)",
      "value": "+40",
      "mobileNumberLength": 10
  },
  {
      "label": "Russia (+7)",
      "value": "+7",
      "mobileNumberLength": 10
  },
  {
      "label": "Rwanda (+250)",
      "value": "+250",
      "mobileNumberLength": 9
  },
  {
      "label": "Saint Kitts and Nevis (+1 869)",
      "value": "+1 869",
      "mobileNumberLength": 10
  },
  {
      "label": "Saint Lucia (+1 758)",
      "value": "+1 758",
      "mobileNumberLength": 10
  },
  {
      "label": "Saint Vincent and the Grenadines (+1 784)",
      "value": "+1 784",
      "mobileNumberLength": 10
  },
  {
      "label": "Samoa (+685)",
      "value": "+685",
      "mobileNumberLength": 7
  },
  {
      "label": "San Marino (+378)",
      "value": "+378",
      "mobileNumberLength": 8
  },
  {
      "label": "Sao Tome and Principe (+239)",
      "value": "+239",
      "mobileNumberLength": 7
  },
  {
      "label": "Saudi Arabia (+966)",
      "value": "+966",
      "mobileNumberLength": 9
  },
  {
      "label": "Senegal (+221)",
      "value": "+221",
      "mobileNumberLength": 9
  },
  {
      "label": "Serbia (+381)",
      "value": "+381",
      "mobileNumberLength": 9
  },
  {
      "label": "Seychelles (+248)",
      "value": "+248",
      "mobileNumberLength": 7
  },
  {
      "label": "Sierra Leone (+232)",
      "value": "+232",
      "mobileNumberLength": 8
  },
  {
      "label": "Singapore (+65)",
      "value": "+65",
      "mobileNumberLength": 8
  },
  {
      "label": "Slovakia (+421)",
      "value": "+421",
      "mobileNumberLength": 9
  },
  {
      "label": "Slovenia (+386)",
      "value": "+386",
      "mobileNumberLength": 8
  },
  {
      "label": "Solomon Islands (+677)",
      "value": "+677",
      "mobileNumberLength": 7
  },
  {
      "label": "Somalia (+252)",
      "value": "+252",
      "mobileNumberLength": 8
  },
  {
      "label": "South Africa (+27)",
      "value": "+27",
      "mobileNumberLength": 9
  },
  {
      "label": "South Sudan (+211)",
      "value": "+211",
      "mobileNumberLength": 9
  },
  {
      "label": "Spain (+34)",
      "value": "+34",
      "mobileNumberLength": 9
  },
  {
      "label": "Sri Lanka (+94)",
      "value": "+94",
      "mobileNumberLength": 9
  },
  {
      "label": "Sudan (+249)",
      "value": "+249",
      "mobileNumberLength": 9
  },
  {
      "label": "Suriname (+597)",
      "value": "+597",
      "mobileNumberLength": 7
  },
  {
      "label": "Sweden (+46)",
      "value": "+46",
      "mobileNumberLength": 9
  },
  {
      "label": "Switzerland (+41)",
      "value": "+41",
      "mobileNumberLength": 9
  },
  {
      "label": "Syria (+963)",
      "value": "+963",
      "mobileNumberLength": 9
  },
  {
      "label": "Taiwan (+886)",
      "value": "+886",
      "mobileNumberLength": 9
  },
  {
      "label": "Tajikistan (+992)",
      "value": "+992",
      "mobileNumberLength": 9
  },
  {
      "label": "Tanzania (+255)",
      "value": "+255",
      "mobileNumberLength": 9
  },
  {
      "label": "Thailand (+66)",
      "value": "+66",
      "mobileNumberLength": 9
  },
  {
      "label": "Togo (+228)",
      "value": "+228",
      "mobileNumberLength": 8
  },
  {
      "label": "Tonga (+676)",
      "value": "+676",
      "mobileNumberLength": 7
  },
  {
      "label": "Trinidad and Tobago (+1 868)",
      "value": "+1 868",
      "mobileNumberLength": 10
  },
  {
      "label": "Tunisia (+216)",
      "value": "+216",
      "mobileNumberLength": 8
  },
  {
      "label": "Turkey (+90)",
      "value": "+90",
      "mobileNumberLength": 10
  },
  {
      "label": "Turkmenistan (+993)",
      "value": "+993",
      "mobileNumberLength": 8
  },
  {
      "label": "Tuvalu (+688)",
      "value": "+688",
      "mobileNumberLength": 6
  },
  {
      "label": "Uganda (+256)",
      "value": "+256",
      "mobileNumberLength": 9
  },
  {
      "label": "Ukraine (+380)",
      "value": "+380",
      "mobileNumberLength": 9
  },
  {
      "label": "United Arab Emirates (+971)",
      "value": "+971",
      "mobileNumberLength": 9
  },
  {
      "label": "Uruguay (+598)",
      "value": "+598",
      "mobileNumberLength": 8
  },
  {
      "label": "Uzbekistan (+998)",
      "value": "+998",
      "mobileNumberLength": 9
  },
  {
      "label": "Vanuatu (+678)",
      "value": "+678",
      "mobileNumberLength": 7
  },
  {
      "label": "Vatican City (+379)",
      "value": "+379",
      "mobileNumberLength": 8
  },
  {
      "label": "Venezuela (+58)",
      "value": "+58",
      "mobileNumberLength": 10
  },
  {
      "label": "Vietnam (+84)",
      "value": "+84",
      "mobileNumberLength": 10
  },
  {
      "label": "Yemen (+967)",
      "value": "+967",
      "mobileNumberLength": 9
  },
  {
      "label": "Zambia (+260)",
      "value": "+260",
      "mobileNumberLength": 9
  },
  {
      "label": "Zimbabwe (+263)",
      "value": "+263",
      "mobileNumberLength": 9
  }
]

export default countryPrefixes
