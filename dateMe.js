var objectPeople;
objectPeople = [];
var iArray = [];
var names = ["Kajeen", "Lisa", "Chris", "Oliver", "Mr Y", "Zolfi"];
var age = [21, 33, 23, 25, 22, 29];
var hobby = ["playing violin", "drawing", "singing", "travelling", "feeding animals", "eating"];
var img = ["img/frau1.jpg", "img/frau2.jpg", "img/frau3.jpg", "img/mann1.jpg", "img/mann2.jpg", "img/mann3.jpg"];
var Person = /** @class */ (function () {
    //gender: string;
    function Person(firstName, age, hobby, img) {
        this.firstName = firstName;
        this.age = age;
        this.hobby = hobby;
        //this.favourit = favourit;
        this.img = img;
        //this.gender = gender;
        //objectPeople.push(this);
    }
    return Person;
}());
function creationPerson() {
    for (var i = 0; i < 6; i++) {
        var profil = new Person(names[i], age[i], hobby[i], img[i]);
        objectPeople.push(profil);
        //console.table(profil);
    }
    ;
}
function createCard() {
    var b = "";
    for (var i = 0; i < objectPeople.length; i++) {
        iArray.push(i);
        b += "\n    <div class=\"card mb-3\" >\n        <img src=\"" + objectPeople[i].img + "\" class=\"card-img-top\" alt=\"...\">\n        <div class=\"card-body\">\n            <h5 class=\"card-title\">" + objectPeople[i].firstName + "</h5>\n            <p class=\"card-text\"> " + objectPeople[i].firstName + " is " + objectPeople[i].age + " years old, and loves " + objectPeople[i].hobby + "</p>\n            <a id=\"" + objectPeople[i].firstName + "\" class=\"btn btn-primary\">add to your favorites</a>\n        </div>\n     </div>\n  ";
    }
    ;
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
