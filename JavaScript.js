let JSP;

function SearchTheMovie(){
    let id = document.getElementById("INPUTSEARCH").value;
    const xhttp = new XMLHttpRequest();
    xhttp.onload  = function(){
        JSP= JSON.parse(this.responseText);
        console.log(JSP);
        display();
    }
    xhttp.open("GET", `https://api.tvmaze.com/search/shows?q=${id}`);
    xhttp.send();
}

display = () =>{
    document.getElementById("INPUTSEARCH").value = "";
    let MayankDaiya = ``;
    for(let image of JSP){
        MayankDaiya = `${MayankDaiya}<img src="${image.show.image.medium}" alt="">`
    }
    document.querySelector(".Movies-Box").innerHTML = MayankDaiya;
}

const ColorTheme = document.querySelectorAll(`[name="theme"]`);
console.log(ColorTheme);

const ThemeData = function(ColorTheme)
{
    localStorage.setItem('theme',ColorTheme);
}

ColorTheme.forEach(themeoption => {
    themeoption.addEventListener('click',()=>{
        storeTheme(themeoption.id);
    })
});

const ChangeAndApplyTheme = function()
{
    const activetheme = localStorage.getItem('theme');
    document.getElementById(activetheme).checked = true;
}

document.onload = ChangeAndApplyTheme();