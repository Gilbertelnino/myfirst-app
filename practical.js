class HospitalEmployee {
    constructor(name) {
      this._name = name;
      this._remainingVacationDays = 20;
    }
    
    get name() {
      return this._name;
    }
    
    get remainingVacationDays() {
      return this._remainingVacationDays;
    }
    
    takeVacationDays(daysOff) {
      this._remainingVacationDays -= daysOff;
    }
    static generatePassword(){
      return Math.floor(Math.random() *10000)
    }
  }
  
  class Nurse extends HospitalEmployee {
    constructor(name, certifications) {
      super(name);
      this._certifications = certifications;
    } 
    
    get certifications() {
      return this._certifications;
    }
    
    addCertification(newCertification) {
      this.certifications.push(newCertification);
    }
     
  }
  
  const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
  nurseOlynyk.takeVacationDays(5);
  console.log(nurseOlynyk.remainingVacationDays);
  nurseOlynyk.addCertification('Genetics');
  console.log(nurseOlynyk.certifications);
  console.log(HospitalEmployee.generatePassword());
  */
 class Media {
  constructor(title){
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title(){
    return this._title;
  }
  get isCheckedOut(){
    return this._isCheckedOut;
  }
  get ratings(){
    return this._ratings;
  }
  set isCheckedOut(value){
    this._isCheckedOut = value;
  }
  toggleCheckOutStatus(){
     this._isCheckedOut = !this._isCheckedOut;
  }
  getAverageRating(){
    let sumOfRatings = this.ratings.reduce((accumulator, rating) => accumulator + rating);
    return sumOfRatings / this.ratings.length;
    
  }
  addRating(value){
    this.ratings.push(value);
  }
}

class Book extends Media {
  constructor(author,title,pages){
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get author(){
    return this._author;
  }
  get pages(){
    return this._pages;
  }
}
class Movie extends Media {
  constructor(director,title,runTime){
    super(title);
    this._director = director;
    this._runTime = runTime
  }
  get director(){
    return this._director;
  }
  get runTime(){
    return this._runTime
  }
}
const historyOfEverything = new Book('Bill Bryson','A Short History of Nearly Everything',544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating())
const speed = new Movie('Jan de Bont','Speed',116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut)
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());
 /*24.
Call .getAverageRating() on speed. Log the result to the console.

25.
Nice work! If you’ve made it this far, you clearly have a strong understanding of class syntax and inheritance.

If you would like to continue working on this project, we have listed some avenues to build on your existing progress.

Add more properties to each class (movieCast, songTitles, etc.)
Create a CD class that extends Media.
In .addRating(), make sure input is between 1 and 5.
Create a method called shuffle for the CD class. The method returns a randomly sorted array of all the songs in the songs property.
Create class called Catalog that holds all of the Media items in our library. */
//let myArr = ['gilbert','eric','gun','nyamurereraicyoimanayamumpereye', 'ndatimana'];

/*function countChange (money,coins){
  let moneyChange = 12;
  let coinsDominations = [];
  for(let i=0; i<coins.length;i++){
    let amount = money + coins[i];
    if(amount < moneyChange){
      countChange(money,coins[i])
    } else if (amount === moneyChange){
      console.log(amount)
      coinsDominations.push(amount)
    } else {console.log('error')}
  }

};*/
/*function countChange (money,coins) {
  function countChangeSub(money,coins,n) {
    if(money==0) {
      return 1;
    }
    else if(money<0 || coins.length ==n){
       return 0;
    }
    return countChangeSub(money-coins[n],coins,n) + countChangeSub(money,coins,n+1);
  }
  
  return countChangeSub(money,coins,0);
}
console.log(countChange(10,[5,2,3]));*/
var o = new F();
o.constructor === F