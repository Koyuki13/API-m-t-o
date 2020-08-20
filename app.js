let ville = 'Orléans';
recupererTemperature(ville);

let changerDeVille = document.querySelector('#changer');
changerDeVille.addEventListener('click', () => {
    ville = prompt('Quelle ville souhaitez-vous voir?')
    recupererTemperature(ville);
});

function recupererTemperature(ville) {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=54eb61546e9bb0f5378a54d876919153&units=metric';
    let requete = new XMLHttpRequest();
    requete.open('GET', url);
    requete.responseType = 'json';
    requete.send();

    requete.onload = function() {
        if(requete.readyState === XMLHttpRequest.DONE) {
            if(requete.status === 200) {
            let reponse = requete.response;
            let temperature = reponse.main.temp;
            let ville = reponse.name;
            document.querySelector('#temperature_label').textContent = temperature;
            document.querySelector('#ville').textContent = ville;
            }
            else {
            alert('Un problème est intervenu, merci de revenir plus tard'); 
            }
        }
    }
}