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
            name:'blank',
            img: '/images/blank.png'
        },{
            name:'pizza',
            img: 'images/pizza.png'
        },{
            name:'white',
            img: 'images/white.png'
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
        for(let i=0;i<cardArray.length; i++){
            const card =document.createElement('img');
            card.setAttribute('src','/images/blank.png');
            card.setAttribute('data-id',i);
            card.addEventListener('click',flipCard);
            grid.appendChild(card);

        }
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
            resultDisplay.textContent =' AVISO: ENCONTRASTE TODAS LAS CARTAS, GANASTE!!';
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