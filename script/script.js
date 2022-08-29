const buttonMen = document.querySelector('.header__button-gender_men');
const buttonWomen = document.querySelector('.header__button-gender_women');
const cardText = document.querySelector('.card__text');
const cardImage = document.querySelector('.card__image');
const buttonText = document.querySelector('.header__button-change_text');
const buttonImage = document.querySelector('.header__button-change_image');
const body = document.body;

const state = {
    gender: body.classList.contains('women') ? 'women' : 'men'
};

const getRandomArr = (arr) => {
    
    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
      }       
    return arr[Math.round(getRandomArbitrary(0, arr.length-1))];
};

const getData = () => {
   return fetch('db.json').then(response => response.json());
};

const getDataToCard = () => {
    getData().then(data => {
        state.text = getRandomArr(data.text[state.gender]);
        state.photo = getRandomArr(data.photo[state.gender]);

            if (state.photo.includes('black')) {
                cardText.style.color = 'white';
            } else cardText.style.color = 'black';

        cardText.innerHTML = state.text.replaceAll('\n', '<br>');
        cardImage.src = `img/${state.photo}`;
    });
   console.log(state);
};



const changeToMen = () => {
    
    if(state.gender == 'women'){
        body.classList.add('men');
        body.classList.remove('women');
        state.gender = 'men';
        getDataToCard();
    } 

};

const changeToWomen = () => {
    if((state.gender == 'men')){
        body.classList.add('women');
        body.classList.remove('men');
        state.gender = 'women';
        getDataToCard();
    }
    
};

const changeText = () => {
   getData().then(data => {
    state.text = getRandomArr(data.text[state.gender]);
   
    cardText.innerHTML = state.text.replaceAll('\n', '<br>');
   });
};

const changeImage = () => {
    getData().then(data => {
        state.photo = getRandomArr(data.photo[state.gender]);
        if (state.photo.includes('black')) {
            cardText.style.color = 'white';
        } else cardText.style.color = 'black';
        cardImage.src = `img/${state.photo}`;
    });
 };

buttonMen.addEventListener('click', changeToMen);
buttonWomen.addEventListener('click', changeToWomen);
buttonText.addEventListener('click', changeText);
buttonImage.addEventListener('click', changeImage);

const cardWrapper = document.querySelector('.card_wrapper');
cardWrapper.addEventListener('dblclick', () => {
    const newWindow = window.open(
    '',
    '',
    'width = 840, height = 520')
    
    html2canvas(cardWrapper).then(canvas => {
        canvas.style.maxWidth = '100%';
        canvas.style.height = 'auto';
        newWindow.document.body.prepend(canvas);
    })
})


// document.querySelector("#capture").addEventListener('dblclick', html2canvas(document.querySelector("#capture")).then(canvas => {
//     document.body.appendChild(canvas);
// }));


getDataToCard();







