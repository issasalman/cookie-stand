'use strict';
let hours = [];
for (let i = 6; i < 13; i++) {
    hours.push(i + "Am");

}
for (let i = 1; i < 8; i++) {
    hours.push(i + "pm");

}


// this is from w3Schooles
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let shop = [];
// console.log(shop);

function Shop(location, min, max, avg) {

    this.location = location,
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.randCust = [];
    this.avgCookiesperHour = [];
    shop.push(this);
}

let Seattle = new Shop("Seattle", 23, 65, 6.3);
let Tokyo = new Shop('Tokyo', 3, 24, 1.2);
let Dubai = new Shop('Dubai', 11, 38, 3.7);
let Paris = new Shop('Paris', 20, 38, 2.3);
let Lima = new Shop('Lima', 2, 16, 4.6);





Shop.prototype.getRandCust = function () {

    for (let i = 0; i < hours.length; i++) {

        this.randCust.push(random(this.min, this.max));
    }
}

Shop.prototype.avgcookie = function () {

    for (let i = 0; i < hours.length; i++) {

        this.avgCookiesperHour.push(Math.floor(this.randCust[i] * this.avg));
    }

}
let th;
let tr;
let td;
let  parent = document.getElementById('seatle');
let  table = document.createElement('table');
    parent.appendChild(table);
function header() {
    tr = document.createElement('tr');
    table.appendChild(tr);
    th = document.createElement('th');
    tr.appendChild(th);
    th.textContent = ""

    for (let i = 0; i < 14; i++) {
        th = document.createElement('th');
        tr.appendChild(th);
        th.textContent = hours[i]

    }
    th = document.createElement('th');
    tr.appendChild(th);
    th.textContent = "Daily Location Total"
}

header();

Shop.prototype.render = function () {
    tr = document.createElement('tr');
    table.appendChild(tr);
    td = document.createElement('td');
    tr.appendChild(td);

    td.textContent = this.location
    let sum=0
    for (let i = 0; i < 14; i++) {
        
        // console.log(this.avgCookiesperHour[i]);
        td = document.createElement('td');
        tr.appendChild(td);
        td.textContent = this.avgCookiesperHour[i]
       sum=sum+this.avgCookiesperHour[i]
        
    }
    
     
        let totalsum=document.createElement('th');
        tr.appendChild(totalsum);
        totalsum.textContent=sum
        
    
}

let ftr
function footer() {
    let total;
    
    let mega = 0
    ftr = document.createElement('tr');
    table.appendChild(ftr);
    th = document.createElement('th');
    ftr.appendChild(th);

    th.textContent = `Totals`


    for (let j = 0; j < hours.length; j++) {

        total = 0
        for (let x = 0; x < shop.length; x++) {

            total += shop[x].avgCookiesperHour[j]
            mega += shop[x].avgCookiesperHour[j]

        }
        th = document.createElement('th');
        ftr.appendChild(th);
        th.textContent = total;

    }
    th = document.createElement('th');
    ftr.appendChild(th);
    th.textContent = mega;
}

for (let i = 0; i < shop.length; i++) {
   
    shop[i].getRandCust();
    shop[i].avgcookie();

    shop[i].render();
    

}

   

let form=document.getElementById('form');
form.addEventListener('submit',formSubmitter);

function formSubmitter(event) {
    event.preventDefault();
   
    let location=event.target.location.value; 
    let min=parseInt(event.target.min.value);
    let max=parseInt(event.target.max.value);
    let avg=parseFloat(event.target.avg.value);
    let newLocation = new Shop(location, min, max, avg);
    
    
    
    ftr.textContent = ` `
    
    
    newLocation.getRandCust()
    newLocation.avgcookie()
    newLocation.render()
    console.log(newLocation.randCust); 

footer();
}







footer();


