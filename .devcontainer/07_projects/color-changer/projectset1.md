#Projects related to DOM

##project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

#solution code

##project1

#Project1

const buttons=document.querySelectorAll('.button');
const body=document.querySelector("body");

buttons.forEach(function(button){
    button.addEventListener('click',function(e){
        if(e.target.id='grey'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id='white'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id='blue'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id='yellow'){
            body.style.backgroundColor=e.target.id;
        }
    })
})

