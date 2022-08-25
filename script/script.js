const buttonMen = document.querySelector('.header__button-gender_men');
const buttonWomen = document.querySelector('.header__button-gender_women');
const body = document.body;


let gender = 'women';

const changeToMen = () => {
    
    if(gender == 'women'){
        body.classList.add('men');
        body.classList.remove('women');
        gender = 'men';
        console.log(gender);
    } 

};

const changeToWomen = () => {
    if((gender == 'men')){
        body.classList.add('women');
        body.classList.remove('men');
        gender = 'women';
    }
    
};

buttonMen.addEventListener('click', changeToMen);
buttonWomen.addEventListener('click', changeToWomen);




