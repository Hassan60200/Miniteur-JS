let i = 3;

const titre = document.querySelector("h1");
titre.addEventListener("click", function () {
    const compte = setInterval(function () {
if(i > 0 ){
    titre.textContent = i;
}
else{
    titre.textContent = "Hyper Vitesse";
    clearInterval(compte);
}
console.log(i);
        i--;
    }, 1000);
});
