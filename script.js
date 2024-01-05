const billTotal = document.getElementById('billTotalInput')
const tipTotal = document.getElementById('tipInput')
const peopleCount = document.getElementById('numberOfPeople')
const perPersonTotal = document.getElementById('perPersonTotal')


let numberOfPeople = Number(peopleCount.innerText);

function calculateBill() {
let billAmount = Number(billTotal.value);
let tipPercentange = Number(tipTotal.value) / 100;
let tipAmount = billAmount * tipPercentange;

let totalBillAmount = billAmount + tipAmount;

let totalperPerson = (totalBillAmount / numberOfPeople).toFixed(2);

perPersonTotal.innerText = `$${totalperPerson}`

}

const increasePeople = () =>{
  numberOfPeople++;
  peopleCount.innerText = numberOfPeople;
  calculateBill();
}
const decreasePeople = () =>{

  if(numberOfPeople <= 1){
    return
  }
  numberOfPeople--;
  peopleCount.innerText = numberOfPeople;
  calculateBill();
}
