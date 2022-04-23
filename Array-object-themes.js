//import { getConfig } from "./api"; // импорт модуля (подключения)
const getConfig = () => {
  return [
    {
      type: 'Email',
      contentType: [
        {
          name: 'email1',
          code: 'e1'
        },
        {
          name: 'email2',
          code: 'e2'
        },
        {
          name: 'email3',
          code: 'e3'
        },
        {
          name: 'email4',
          code: 'e4'
        },
      ]
    },
    {
      type: 'Message',
      contentType: [
        {
          name: 'Message1',
          code: 'm1'
        },
        {
          name: 'Message2',
          code: 'm2'
        },
        {
          name: 'Message3',
          code: 'm3'
        },
        {
          name: 'Message4',
          code: 'm4'
        },
      ]
    },
  ];
}
const vForm = document.getElementById('form')
const vInput = document.getElementById('input-search')

vForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let searchValue = vInput.value; //Cat
  console.log('Submit array', array)

  let newArray = array.filter(element => element.apiCode.includes(searchValue))
  console.log('Submit newArray', newArray)
})

const content = {
  name: 'RIAT',
  subtype: 'rio',
  updateTiming: 'dasdasdds',
  type: 'Message',
}

const array = [
  {
    apiCode: "AdoptAPet",
  "Description": "Resource to help get pets adopted",
  "Auth": "apiKey",
  "HTTPS": true,
  "Cors": "yes",
  "Link": "https://www.adoptapet.com/public/apis/pet_list.html",
  "Category": "Animals"
},
  {
    apiCode: "Axolotl",
    "Description": "Collection of axolotl pictures and facts",
    "Auth": "",
    "HTTPS": true,
    "Cors": "no",
    "Link": "https://theaxolotlapi.netlify.app/",
    "Category": "Animals"
  },
  {
    apiCode: "Cat Facts",
    "Description": "Daily cat facts",
    "Auth": "",
    "HTTPS": true,
    "Cors": "no",
    "Link": "https://alexwohlbruck.github.io/cat-facts/",
    "Category": "Animals"
  },
  {
    apiCode: "Cataas",
    "Description": "Cat as a service (cats pictures and gifs)",
    "Auth": "",
    "HTTPS": true,
    "Cors": "no",
    "Link": "https://cataas.com/",
    "Category": "Animals"
  },
  {
    apiCode: "Cats",
    "Description": "Pictures of cats from Tumblr",
    "Auth": "apiKey",
    "HTTPS": true,
    "Cors": "no",
    "Link": "https://docs.thecatapi.com/",
    "Category": "Animals"
  },
  {
    apiCode: "Dog Facts",
    "Description": "Random dog facts",
    "Auth": "",
    "HTTPS": true,
    "Cors": "yes",
    "Link": "https://dukengn.github.io/Dog-facts-API/",
    "Category": "Animals"
  },]

const config = getConfig();

config.forEach(element => {
  if (element.type === content.type){
    console.log(element.type)
  }
})

//const array = [
//  {name: 'Voropay', age: 23}, //0
//  {name: 'Cat', age: 13}, //1
//  {name: 'Chepka', age: 120} //2
//];
//
//for(let i=0; i < array.length; i++) {
//  //i=2 array[2] - {name: 'Chepka', age: 120}
//  console.log(`Name: ${array[i].name}, Age: ${array[i].age}`); // array[i] - element
//};



const personArray = [
  {name: 'Voropay', age: 23, spec: 'programming'},
  {name: 'Cat', age: 13, spec: 'agro'},
  {name: 'Chepka', age: 120, spec: 'bio'}
];
// name - input field with type text
// age select/input on ur choice
// spec select

//Create new form, for adding new person in array
