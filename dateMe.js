var objectPeople;
objectPeople = [];
var iArray = [];
//------------------------------------DATABASE---------------------------------------
var Gender;
(function (Gender) {
    Gender["woman"] = "woman";
    Gender["man"] = "man";
    Gender["divers"] = "divers";
})(Gender || (Gender = {}));
//Kontrolle über die Werte durch enum.
var names = ["Kajeen", "Lisa", "Chris", "Oliver", "Mr Y", "Zolfi"];
var city = ["Heaven", "Hell", "Athen", "Vienna", "Sofia", "Aleppo"];
var motto = ["Dancing like a queen!", "Pumpkin spice is the pumpkin spice of life...",
    "#nomakeup #nofilter #selfie #tgif", "Vinyl records an mixtapes only.", "Popped collars are for date nights only ;)", "Beards are like so hot!"];
var gender = [Gender.woman, Gender.divers, Gender.woman, Gender.man, Gender.man, Gender.divers];
var age = [21, 33, 23, 25, 22, 29];
var hobby = ["playing violin", "drawing", "singing", "travelling", "feeding animals", "eating"];
var img = ["img/frau1.jpg", "img/frau2.jpg", "img/frau3.jpg", "img/mann1.jpg", "img/mann2.jpg", "img/mann3.jpg"];
//------------------------------------DATABASE END---------------------------------------
var Person = /** @class */ (function () {
    function Person(firstName, motto, age, hobby, favourite, img, gender, city) {
        this.firstName = firstName;
        this.motto = motto;
        this.age = age;
        this.hobby = hobby;
        this.favourite = favourite;
        this.img = img;
        this.gender = gender;
        this.city = city;
    }
    return Person;
}());
function creationPerson() {
    for (var i = 0; i < 6; i++) {
        var profil = new Person(names[i], motto[i], age[i], hobby[i], false, img[i], gender[i], city[i]);
        objectPeople.push(profil);
    }
}
function createCard() {
    var visibleCards = "";
    var hiddenCards = "";
    for (var i = 0; i < objectPeople.length; i++) {
        iArray.push(i);
        visibleCards += "\n    <div id=\"upperCard" + i + "\" class=\"card mb-3\">\n        <img src=\"" + objectPeople[i].img + "\" class=\"card-img-top\" alt=\"face\">\n        <img id=\"starBtn" + i + "\" src=\"img/star.png\" class=\"star m-1 img-fluid\" alt=\"*\">\n        <div class=\"card-body\">\n            <h5 class=\"card-title\">" + objectPeople[i].firstName + "</h5>\n            <p class=\"card-text\">( " + objectPeople[i].gender + " ) <br> " + objectPeople[i].motto + "</p>\n        </div>\n        <button id=\"Btn" + i + "\" class=\"btn\">add to favorites</button>\n     </div>\n  ";
        hiddenCards += "\n    <div id=\"favCard" + i + "\" class=\"hiddenCard card mb-3 d-none\">\n        <img src=\"" + objectPeople[i].img + "\" class=\"card-img-top\" alt=\"face\">\n        <img id=\"YstarBtn" + i + "\" src=\"img/starYellow.png\" class=\"star m-1 img-fluid\" alt=\"*\">\n        <div class=\"card-body\">\n            <h5 class=\"card-title\">" + objectPeople[i].firstName + "</h5>\n            <p class=\"card-text\">( " + objectPeople[i].gender + " ) <br> " + objectPeople[i].motto + "</p>\n            <div class=\"detail\">\n                <p>Age: " + objectPeople[i].age + "</p>\n                <p>Hobby: " + objectPeople[i].hobby + "</p>\n                <p>City: " + objectPeople[i].city + "</p>\n                <button>@ me!</button>\n            </div>\n        </div>\n     </div>\n  ";
    }
    ;
    document.getElementById('cardsDiv').innerHTML = visibleCards;
    document.getElementById('favPersons').innerHTML = hiddenCards;
}
function clickMe(btn, i) {
    var fav = document.getElementById("favCard" + i);
    $(fav).toggleClass("d-none");
    var star = document.getElementById("starBtn" + i);
    var starSrc = "img/star.png";
    if (!objectPeople[i].favourite) {
        starSrc = "img/starYellow.png";
    }
    star.src = starSrc;
    objectPeople[i].favourite = !objectPeople[i].favourite;
}
function setEvent(i) {
    var starBtn = "starBtn" + i;
    var Btn = "Btn" + i;
    var YstarBtn = "YstarBtn" + i;
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
iArray.forEach(function (i) { setEvent(i); });
