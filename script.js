class calculator {
    constructor(previous, actual) {
      this.previous = previous;
      this.actual = actual;
      this.Clear();
    }
    Clear(){
        this.actualOperand ='';
        this.previousOperand='';
        this.actualoperation = '';
    }
    apendNumber(number){
        if(number === '.' && this.actualOperand.includes('.')) return
        this.actualOperand = this.actualOperand.toString() + number.toString();
    }
    Operation(opera){
        if(this.actualOperand ==='')return
        if(this.previousOperand !== ''){
            this.Result();
        }
        this.actualoperation =opera;
        this.previousOperand=this.actualOperand;
        this.actualOperand='';

    }
    Erase(){
        this.actualOperand =this.actualOperand.toString().slice(0,-1);
    }
    
    Result(){
        let res
        let first = parseFloat(this.previousOperand);
        let second = parseFloat(this.actualOperand);
        if(isNaN(first)||isNaN(second))return
        switch (this.actualoperation){
            case '+':
                res=first+second;
                break;
            case '-':
                res=first-second;
                break
            case '÷':
                res=first/second;
                break
            case 'x':
                res=first*second;
                break
        }
        this.actualOperand=res;
        this.previousOperand='';
        this.actualoperation='';
    }
    update(){
        this.actual.innerText= this.actualOperand
        if(this.actualoperation != null){
            console.log("hola");
            this.previous.innerText=`${this.previousOperand} ${this.actualoperation}`
        }
    }
  }
const numbers = document.querySelectorAll(".number");
const operation = document.querySelectorAll(".operacion");
const previous = document.querySelector(".previous");
const actual = document.querySelector(".actual");
const clear = document.querySelector(".clear");
const erase = document.querySelector(".delete");
const equal = document.querySelector(".equal");

let calcu = new calculator(previous,actual);

numbers.forEach(button => {
    button.addEventListener('click',() =>{
        calcu.apendNumber(button.innerText);
        calcu.update();
    })
    
});
operation.forEach(button => {
    button.addEventListener('click',() =>{
        calcu.Operation(button.innerText);
        calcu.update();
    })
    
});
clear.addEventListener('click',()=> {
    calcu.Clear();
    calcu.update();
});
erase.addEventListener('click',()=> {
    calcu.Erase();
    calcu.update();
});
equal.addEventListener('click',()=>{
    calcu.Result();
    calcu.update();
})