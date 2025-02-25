const multiplicationForm = document.querySelector("#multiplication-form");  
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator");
const multiplicationTable = document.querySelector(".multiplication-operations");
const button = document.querySelector("#button");
const text = document.querySelector(".multiplication-operations")

const createTable = (number, multiplicatorNumber) => {
    multiplicationTable.innerHTML = "";
    
    for (i = 1; i <= multiplicatorNumber; i++) {
        const result = number * i;
      
    const template = `<div class= "row"> 
            <div class="operation">${number} x ${i} = </div>
            <div class="result">${result}</div>
        </div>`;

        const parse = new DOMParser();
        const htmlTemplate = parse.parseFromString(template, "text/html");
        const row = htmlTemplate.querySelector(".row");
        multiplicationTable.appendChild(row);

      }   
    };









button.addEventListener("click", (e) => {
    e.preventDefault();

    const multiplicationNumber = +numberInput.value;

    const multiplicatorNumber = +multiplicationInput.value;
    
    if (!multiplicationNumber || !multiplicatorNumber) return;
    
    createTable(multiplicationNumber, multiplicatorNumber);
    });

