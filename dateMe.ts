let objectPeople: Array<Person>;
objectPeople = [];

let iArray = [];

let names: Array<string>= ["Kajeen","Lisa","Chris","Oliver","Mr Y","Zolfi"];
let age: Array<number>= [21,33,23,25,22,29];
let hobby: Array<string>= ["playing violin","drawing","singing","travelling","feeding animals","eating"];
let img: Array<string>= ["img/frau1.jpg","img/frau2.jpg","img/frau3.jpg","img/mann1.jpg","img/mann2.jpg","img/mann3.jpg"];



class Person { 
   firstName: string;
   age: number;
   hobby: string;
   //favourit: boolean;
   img: string;
   //gender: string;

    constructor(firstName, age, hobby, img) {
       this.firstName = firstName;
       this.age = age;
       this.hobby = hobby;
       //this.favourit = favourit;
       this.img = img;
       //this.gender = gender;
       //objectPeople.push(this);

   }
// 
 }

function creationPerson(){
 for (let i = 0; i<6; i++){
   let profil = new Person( names[i], age[i], hobby[i], img[i])
   objectPeople.push(profil);
   //console.table(profil);
 };

}

function createCard(){
  var b = "";
  for (let i=0; i < objectPeople.length; i++) {
   iArray.push(i);
  b += `
    <div class="card mb-3" >
        <img src="${objectPeople[i].img}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${objectPeople[i].firstName}</h5>
            <p class="card-text"> ${objectPeople[i].firstName} is ${objectPeople[i].age} years old, and loves ${objectPeople[i].hobby}</p>
            <a id="${objectPeople[i].firstName}" class="btn btn-primary">add to your favorites</a>
        </div>
     </div>
  `;
      
  };  
document.getElementById('cardsDiv').innerHTML = b;
}



creationPerson();
console.table(objectPeople);
createCard();

// function clickMe(i,id){
//   let id = ${objectPeople[i].firstName};
//     b= `
//     <div class="card mb-3" >
//         <img src="${objectPeople[i].img}" class="card-img-top" alt="...">
//         <div class="card-body">
//             <h5 class="card-title">${objectPeople[i].firstName}</h5>
//             <p class="card-text"> ${objectPeople[i].firstName} is ${objectPeople[i].age} years old, and loves ${objectPeople[i].hobby}</p>
//             <a id="${objectPeople[i].firstName}" class="btn btn-primary">add to your favorites</a>
//         </div>
//      </div>
//   `;

//   document.getElementById(id).addEventListener("click", function(){
//     document.getElementById("favouritPersons").innerHTML = b;
//   })
// }
