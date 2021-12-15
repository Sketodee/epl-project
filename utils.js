export const clubDetails = document.getElementById("clubDetails");
export const clubData = document.getElementById("clubDataflex");
export const clubLink = document.querySelectorAll(".clubLink")
export const search = document.getElementById("search"); 


export function getClub() {
    fetch("details.json")
    .then((res) => { 
        return res.json()
    })
    .then((clubs)=> {
        let output = "";
        clubs.forEach((club)=> {
         output += `
        <div class = "flex-item">
            <div class="club-img-container">
                <img  class="stadium-img" src="${club.stadiumImage}" alt="arsenal logo">
            </div>
            <div class="flex-item-text" style="background-color:${club.color}; color:${club.themeColor}">
                <img class="club-img"  src="${club.logo}" alt=" logo">
                <h3> ${club.clubName} </h3>
                <p> ${club.ground}</p>
                <div > 
                <p id="${club.userId}"><a style="color: ${club.themeColor};" href="#">Club Profile </a></p>
                </div>
            </div>
        </div>
        `
        clubData.innerHTML = output;
        clubData.addEventListener("click", getId)
        })
    })


    
}

// window.addEventListener("DOMContentLoaded", getClub) - the following line has been called in app.js file




export const allClubs = (searchText) => {
    fetch("details.json")
    .then((res) => { 
        return res.json()
    })
    .then((clubs)=> {
    //Get matches to text input 
        let matches = clubs.filter(club=> {
            const regex = new RegExp(`^${searchText}`, 'gi');
            return club.clubName.match(regex);
        });
        // console.log(matches)
        let output = "";
        matches.forEach((club)=> {
         output += `
        <div class = "flex-item">
            <div class="club-img-container">
                <img class="stadium-img" src="${club.stadiumImage}" alt="arsenal logo">
            </div>
            <div class="flex-item-text" style="background-color:${club.color}; color:${club.themeColor}">
            <img class="club-img"  src="${club.logo}" alt="arsenal logo">
            <h3> ${club.clubName} </h3>
            <p> ${club.ground}</p>
            <p><a style="color: ${club.themeColor};" href="">Club Profile </a></p>
            </div>
        </div>
        `
        clubData.innerHTML = output;
        })
    })
}

// search.addEventListener('input', () => allClubs(search.value)) - the following line has been called in app.js file
// window.addEventListener("DOMContentLoaded", getClub) - the following line has been called in app.js file

export function getId(e) {
    console.log(e.target.parentElement.id);
    window.location.href = "clubdetails.html";
}