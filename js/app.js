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
console.log(shop);

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


// console.log(Seattle.avgCookiesperHour);
// console.log(shop[0].avgCookiesperHou);


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
let parent
let table
let td;
function header() {

    parent = document.getElementById('seatle');
    table = document.createElement('table');
    parent.appendChild(table);
    tr = document.createElement('tr');
    table.appendChild(tr);
    th = document.createElement('th');
    tr.appendChild(th);
    th.textContent = ""

    for (let i = 0; i < 14; i++) {
        th = document.createElement('th');
        tr.appendChild(th);
        th.textContent = `${hours[i]}`

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

    td.textContent = `${this.location}`
    let sum=0
    for (let i = 0; i < 14; i++) {
        
        console.log(this.avgCookiesperHour[i]);
        td = document.createElement('td');
        tr.appendChild(td);
        td.textContent = `${this.avgCookiesperHour[i]}`
       sum=sum+this.avgCookiesperHour[i]
        
    }
    
    for (let j = 0; j <1; j++) {
        let totalsum=document.createElement('th');
        tr.appendChild(totalsum);
        totalsum.textContent=sum
        
    }
}
// console.log(this.avgCookiesperHour= [i]);

function footer() {
    let total;
    let mega = 0
    tr = document.createElement('tr');
    table.appendChild(tr);
    th = document.createElement('th');
    tr.appendChild(th);

    th.textContent = `Total`


    for (let j = 0; j < 14; j++) {

        total = 0
        for (let x = 0; x < 5; x++) {

            total += shop[x].avgCookiesperHour[j]
            mega += shop[x].avgCookiesperHour[j]

        }
        th = document.createElement('th');
        tr.appendChild(th);
        th.textContent = total;

    }
    th = document.createElement('th');
    tr.appendChild(th);
    th.textContent = mega;
}

for (let i = 0; i < shop.length; i++) {
    // console.log(shop[i]);
    shop[i].getRandCust();
    shop[i].avgcookie();

    shop[i].render();
    // console.log(shop[i]);

}
footer();
   
