let chosen_color = Cookies.get(`chosen_color`);
if(chosen_color === undefined){

    document.body.insertAdjacentHTML(`afterbegin`, `<h1>Error</h1>`);
}else{

    document.body.insertAdjacentHTML(`afterbegin`, `<div style="width: 50px; height: 50px; background-color: ${chosen_color}"></div>`);
}