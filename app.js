document.addEventListener('DOMContentLoaded' ,()=>{

    const cardArray=[
        {
            name:'fries',
            img: 'images/fries.png'
        },{
            name:'hotdog',
            img: 'images/hotdog.png'
        },{
            name:'ice-cream',
            img: 'images/ice-cream.png'
        },{
            name:'pizza',
            img: 'images/pizza.png'
        },{
            name:'milkshake',
            img: 'images/milkshake.png'
        }, {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },{
            name:'fries',
            img: 'images/fries.png'
        },{
            name:'hotdog',
            img: 'images/hotdog.png'
        },{
            name:'ice-cream',
            img: 'images/ice-cream.png'
        },{
            name:'pizza',
            img: 'images/pizza.png'
        },{
            name:'milkshake',
            img: 'images/milkshake.png'
        }, {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        }

    ]

    cardArray.sort(()=>0.5-Math.random());
    const grid= document.querySelector('.grid');
    const resultDisplay= document.querySelector('#result');
    let cardsChosen=[];
    let cardsChosenId=[];
    let cardsWon=[];



    //create board
    function createBoard(){

       // const grid= document.querySelector('.grid');


        for(let i=0;i<cardArray.length; i++){
            const card =document.createElement('img');
            card.setAttribute('class','objCard');
            card.setAttribute('src','/images/blank.png');
            card.setAttribute('data-id',i);
            card.addEventListener('click',flipCard);
            grid.appendChild(card);




            //window.document='index.html';

        }
    }

    function reset(){
        console.log("aea");
        let cards = document.querySelectorAll('.objCard').forEach(el => el.remove());

        cardArray.sort(()=>0.5-Math.random());

        resultDisplay.textContent = 0;
        cardsChosen=[];
        cardsChosenId=[];
        cardsWon=[];


        createBoard();

    }

    function checkForMatch(){
        const cards= document.querySelectorAll('img');
        const optionOneId=cardsChosenId[0];
        const optionTwoId=cardsChosenId[1];

        if(optionOneId==optionTwoId){
            cards[optionOneId].setAttribute('src','images/blank.png');
            cards[optionTwoId].setAttribute('src','images/blank.png');
            alert('AVISO: SELECCIONASTE LA MISMA IMAGEN!');

        }
        else if(cardsChosen[0]=== cardsChosen[1]){
            alert( 'AVISO: ENCONTRASTE SU PAR!')
            cards[optionOneId].setAttribute('src','images/white.png');
            cards[optionTwoId].setAttribute('src','images/white.png');

            cards[optionOneId].removeEventListener('click',flipCard);
            cards[optionOneId].removeEventListener('click',flipCard);

            cardsWon.push(cardsChosen);
        }else{
            cards[optionOneId].setAttribute('src','images/blank.png');
            cards[optionTwoId].setAttribute('src','images/blank.png');

            alert('AVISO: Lo siento, intenta otra vez');
        }
        cardsChosen=[]
        cardsChosenId=[]
        resultDisplay.textContent=cardsWon.length;
        if (cardsWon.length === cardArray.length /2){
            resultDisplay.textContent =' GANASTE!!';

            var botonreinicio= document.getElementById('boton');


            botonreinicio.hidden=false;

            botonreinicio.onclick = function(){ reset()}


        }
    }

    function flipCard(){

        let cardId= this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src',cardArray[cardId].img);
        if (cardsChosen.length ===2){
            setTimeout(checkForMatch,500);
        }
    }


    createBoard();

})