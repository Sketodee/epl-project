import * as utils from './utils.js'

function getClub() {
    fetch("details.json")
    .then((res) => { 
        return res.json()
    })
    .then((clubs)=> {
       clubs.forEach(club => {
           console.log(club)
       });
    })
}

getClub()
utils.getClub()

utils.clubDetails.innerHTML= `<h2>whow</h2>`

