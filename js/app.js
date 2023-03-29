function change_the_image(image){

if(image[`target`].getAttribute(`src`) === `/images/399.png`){

    image[`target`].setAttribute(`src`, `https://www.serebii.net/swordshield/pokemon/399.png`);

}else{

    image[`target`].setAttribute(`src`, `/images/399.png`);
}

};

let change_image = document.querySelectorAll(`.page_span`);

for(counter = 0; counter < change_image.length; counter = counter +1){

change_image[counter].addEventListener(`click`, change_the_image)


};



function button_clicker(){

    Cookies.set(`button_clicked`, `yes`);
};

let cookies_getter = document.querySelector(`#clickme`);
cookies_getter.addEventListener(`click`, button_clicker);

let clicked = Cookies.get(`button_clicked`);

if (clicked === undefined){

cookies_getter.insertAdjacentHTML(`afterend`, `<h1>please click the button</h1>`);

}else{

    cookies_getter.insertAdjacentHTML(`afterend`, `<h1>Good job making a cookie</h1>`);
};


function cookie_remover(){


    Cookies.remove(`button_clicked`);
    
};


let cookies_killer = document.querySelector(`#donotclick`);
cookies_killer.addEventListener(`click`, cookie_remover);



function select_color(details){

    Cookies.set(`chosen_color`, details[`target`].getAttribute(`cookie_color`));
};

let colorbutton = document.querySelectorAll(`.colorbutton`);
for(let counter = 0; counter < colorbutton.length; counter = counter +1){

colorbutton[counter].addEventListener(`click`, select_color);

}