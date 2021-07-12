'use strict';
let hours =[];
for (let i = 6; i <13; i++) {
    hours.push(i+"Am"); 
    
}
for (let i = 1; i <8; i++) {
    hours.push(i+"pm"); 
    
}


// this is from w3Schooles
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }


    
  
    let  seattle={
    name:"seattle",
    min:23,
    max:65,
    avg:6.3,
    randCust:[],
    avgCookiesperHour:[],
   
    getRandCust:function (){
        for (let i = 0; i < hours.length; i++) {
            
            this.randCust.push(random(this.min,this.max)); 
           
           
        }},
    
      avgcookie:function()   {
        for (let i = 0; i < 14; i++) {
            this.avgCookiesperHour.push(this.randCust[i]*this.avg); 
            
        }
            }
        
    }

seattle.getRandCust();
seattle.avgcookie();


console.log(seattle.randCust);
console.log(seattle.avgCookiesperHour);


seattle.render=function () {
let parent=document.getElementById('seatle');
console.log(parent);
let hElement=document.createElement('h3');
parent.appendChild(hElement);
hElement.textContent=`Seattle`
let ulElement=document.createElement('ul');
parent.appendChild(ulElement);


for (let i = 0; i < 14; i++) {
    // create i
   let liElement= document.createElement('li');

    // append li
    ulElement.appendChild(liElement);

    // text content:
    liElement.textContent=`${hours[i]}      ${this.avgCookiesperHour[i]}       Cookies`;

    if (i==13) {
        let Total=0
        for (let j = 0; j < 14; j++) {
           
           Total=this.avgCookiesperHour[j]+Total
            
        }
         liElement= document.createElement('li');
         ulElement.appendChild(liElement);
         liElement.textContent=`Total is ${Total}`


    
}
}
}
seattle.render();




let tokyo={
min:3,
max:24,
avg:1.2,
randCust:[],
avgCookiesperHour:[],
getRandCust:function(){
for (let i = 0; i < hours.length; i++) {
     this.randCust.push(random(this.min,this.max));
    
}

},
avgcookie:function(){
for (let i = 0; i < hours.length; i++) {
    this.avgCookiesperHour.push(this.randCust[i]*this.avg);
    
}


}

}

tokyo.getRandCust();
tokyo.avgcookie();
console.log(tokyo.randCust);
console.log(tokyo.avgCookiesperHour);



tokyo.render=function () {
    let parent=document.getElementById('seatle');
    console.log(parent);
    let hElement=document.createElement('h3');
parent.appendChild(hElement);
hElement.textContent=`Tokyo`
    let ulElement=document.createElement('ul');
    parent.appendChild(ulElement);
    
    for (let i = 0; i < 14; i++) {
        // create i
       let liElement= document.createElement('li');
    
        // append li
        ulElement.appendChild(liElement);
    
        // text content:
        liElement.textContent=`${hours[i]}      ${this.avgCookiesperHour[i]}       Cookies`;


        if (i==13) {
            let Total=0
            for (let j = 0; j < 14; j++) {
               
               Total=this.avgCookiesperHour[j]+Total
                
            }
             liElement= document.createElement('li');
             ulElement.appendChild(liElement);
             liElement.textContent=`Total is ${Total}`
    
    
        
    }
        
    }
    
    }
    tokyo.render();
    



    
let Dubai={
    min:11,
    max:38,
    avg:3.7,
    randCust:[],
    avgCookiesperHour:[],
    getRandCust:function(){
    for (let i = 0; i < hours.length; i++) {
         this.randCust.push(random(this.min,this.max));
        
    }
    
    },
    avgcookie:function(){
    for (let i = 0; i < hours.length; i++) {
        this.avgCookiesperHour.push(this.randCust[i]*this.avg);
        
    }
    
    
    }
    
    }
    
    Dubai.getRandCust();
    Dubai.avgcookie();
    console.log(Dubai.randCust);
    console.log(Dubai.avgCookiesperHour);
    
    
    
    Dubai.render=function () {
        let parent=document.getElementById('seatle');
        console.log(parent);
        let hElement=document.createElement('h3');
        parent.appendChild(hElement);
        hElement.textContent=`Dubai`
        let ulElement=document.createElement('ul');
        parent.appendChild(ulElement);
        
        for (let i = 0; i < 14; i++) {
            // create i
           let liElement= document.createElement('li');
        
            // append li
            ulElement.appendChild(liElement);
        
            // text content:
            liElement.textContent=`${hours[i]}      ${this.avgCookiesperHour[i]}       Cookies`;
    
    
            if (i==13) {
                let Total=0
                for (let j = 0; j < 14; j++) {
                   
                   Total=this.avgCookiesperHour[j]+Total
                    
                }
                 liElement= document.createElement('li');
                 ulElement.appendChild(liElement);
                 liElement.textContent=`Total is ${Total}`
        
        
            
        }
            
        }
        
        }
        Dubai.render();








        
    
let paris={
    min:20,
    max:38,
    avg:2.3,
    randCust:[],
    avgCookiesperHour:[],
    getRandCust:function(){
    for (let i = 0; i < hours.length; i++) {
         this.randCust.push(random(this.min,this.max));
        
    }
    
    },
    avgcookie:function(){
    for (let i = 0; i < hours.length; i++) {
        this.avgCookiesperHour.push(this.randCust[i]*this.avg);
        
    }
    
    
    }
    
    }
    
    paris.getRandCust();
    paris.avgcookie();
    console.log(paris.randCust);
    console.log(paris.avgCookiesperHour);
    
    
    
    paris.render=function () {
        let parent=document.getElementById('seatle');
        console.log(parent);
        let hElement=document.createElement('h3');
        parent.appendChild(hElement);
        hElement.textContent=`paris`
        let ulElement=document.createElement('ul');
        parent.appendChild(ulElement);
        
        for (let i = 0; i < 14; i++) {
            // create i
           let liElement= document.createElement('li');
        
            // append li
            ulElement.appendChild(liElement);
        
            // text content:
            liElement.textContent=`${hours[i]}      ${this.avgCookiesperHour[i]}       Cookies`;
    
    
            if (i==13) {
                let Total=0
                for (let j = 0; j < 14; j++) {
                   
                   Total=this.avgCookiesperHour[j]+Total
                    
                }
                 liElement= document.createElement('li');
                 ulElement.appendChild(liElement);
                 liElement.textContent=`Total is ${Total}`
        
        
            
        }
            
        }
        
        }
        paris.render();




            
let Lima={
    min:2,
    max:16,
    avg:4.6,
    randCust:[],
    avgCookiesperHour:[],
    getRandCust:function(){
    for (let i = 0; i < hours.length; i++) {
         this.randCust.push(random(this.min,this.max));
        
    }
    
    },
    avgcookie:function(){
    for (let i = 0; i < hours.length; i++) {
        this.avgCookiesperHour.push(this.randCust[i]*this.avg);
        
    }
    
    
    }
    
    }
    
    Lima.getRandCust();
    Lima.avgcookie();
    console.log(Lima.randCust);
    console.log(Lima.avgCookiesperHour);
    
    
    
    Lima.render=function () {
        let parent=document.getElementById('seatle');
        console.log(parent);
        let hElement=document.createElement('h3');
        parent.appendChild(hElement);
        hElement.textContent=`Lima`
        let ulElement=document.createElement('ul');
        parent.appendChild(ulElement);
        
        for (let i = 0; i < 14; i++) {
            // create i
           let liElement= document.createElement('li');
        
            // append li
            ulElement.appendChild(liElement);
        
            // text content:
            liElement.textContent=`${hours[i]}      ${this.avgCookiesperHour[i]}       Cookies`;
    
    
            if (i==13) {
                let Total=0
                for (let j = 0; j < 14; j++) {
                   
                   Total=this.avgCookiesperHour[j]+Total
                    
                }
                 liElement= document.createElement('li');
                 ulElement.appendChild(liElement);
                 liElement.textContent=`Total is ${Total}`
        
        
            
        }
            
        }
        
        }
        Lima.render();
        
        