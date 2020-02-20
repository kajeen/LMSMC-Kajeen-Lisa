let objectPeople: Array<Person>;
objectPeople = [];
let iArray = [];

//------------------------------------DATABASE---------------------------------------
enum Gender{
    woman= "woman",
    man = "man",
    divers = "divers"
}
//Kontrolle über die Werte durch enum.
let names: Array<string>= ["Kajeen","Lisa","Chris","Oliver","Mr Y","Zolfi"];
let city: Array<string>= ["Heaven","Hell","Athen","Vienna","Sofia","Aleppo"];
let motto: Array<string> = ["Dancing like a queen!", "Pumpkin spice is the pumpkin spice of life...",
"#nomakeup #nofilter #selfie #tgif", "Vinyl records an mixtapes only.", "Popped collars are for date nights only ;)", "Beards are like so hot!"];
let gender: Array<Gender>= [Gender.woman, Gender.divers, Gender.woman, Gender.man, Gender.man, Gender.divers];
let age: Array<number>= [21,33,23,25,22,29];
let hobby: Array<string>= ["playing violin","drawing","singing","travelling","feeding animals","eating"];
let img: Array<string>= ["img/frau1.jpg","img/frau2.jpg","img/frau3.jpg","img/mann1.jpg","img/mann2.jpg","img/mann3.jpg"];

//------------------------------------DATABASE END---------------------------------------

class Person {
    firstName: string;
    motto: string;
    age: number;
    hobby: string;
    favourite: boolean;
    img: string;
    gender: Gender;
    city: string;

    constructor(firstName, motto, age, hobby,favourite, img, gender, city) {
        this.firstName = firstName;
        this.motto = motto;
        this.age = age;
        this.hobby = hobby;
        this.favourite = favourite;
        this.img = img;
        this.gender = gender;
        this.city = city;
    }
}

function creationPerson(){
    for (let i = 0; i<6; i++){
        let profil = new Person( names[i], motto[i], age[i], hobby[i], false, img[i], gender[i], city[i])
        objectPeople.push(profil);
    }
}

function createCard(){
    var visibleCards = "";
    var hiddenCards = "";
    for (let i=0; i < objectPeople.length; i++) {
        iArray.push(i);
        visibleCards += `
    <div id="upperCard${i}" class="card mb-3">
        <img src="${objectPeople[i].img}" class="card-img-top" alt="face">
        <img id="starBtn${i}" src="img/star.png" class="star m-1 img-fluid" alt="*">
        <div class="card-body">
            <h5 class="card-title">${objectPeople[i].firstName}</h5>
            <p class="card-text">( ${objectPeople[i].gender} ) <br> ${objectPeople[i].motto}</p>
        </div>
        <button id="Btn${i}" class="btn">add to favorites</button>
     </div>
  `;

        hiddenCards += `
    <div id="favCard${i}" class="hiddenCard card mb-3 d-none">
        <img src="${objectPeople[i].img}" class="card-img-top" alt="face">
        <img id="YstarBtn${i}" src="img/starYellow.png" class="star m-1 img-fluid" alt="*">
        <div class="card-body">
            <h5 class="card-title">${objectPeople[i].firstName}</h5>
            <p class="card-text">( ${objectPeople[i].gender} ) <br> ${objectPeople[i].motto}</p>
            <div class="detail">
                <p>Age: ${objectPeople[i].age}</p>
                <p>Hobby: ${objectPeople[i].hobby}</p>
                <p>City: ${objectPeople[i].city}</p>
                <button>@ me!</button>
            </div>
        </div>
     </div>
  `;
    };
    document.getElementById('cardsDiv').innerHTML = visibleCards;
    document.getElementById('favPersons').innerHTML = hiddenCards;
}

function clickMe(btn, i){
    let fav = document.getElementById("favCard"+i);
    $(fav).toggleClass("d-none");
    
    let star = document.getElementById("starBtn" + i);
    let starSrc = "img/star.png";
    if (!objectPeople[i].favourite){
        starSrc = "img/starYellow.png";
    }
    star.src=starSrc;
    objectPeople[i].favourite = !objectPeople[i].favourite;
}

function setEvent(i) {
    let starBtn = "starBtn" + i;
    let Btn = "Btn" + i;
    let YstarBtn = "YstarBtn" + i;

    document.getElementById(starBtn).addEventListener("click", function () {
        clickMe(this, i);
    });
    document.getElementById(Btn).addEventListener("click", function () {
        clickMe(this, i);
    });
    document.getElementById(YstarBtn).addEventListener("click", function () {
        clickMe(this, i);
    });
    $("favCard" + i).toggle();
}


creationPerson();
createCard();
iArray.forEach((i)=>{setEvent(i)});
