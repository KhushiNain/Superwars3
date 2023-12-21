const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// getting random strength
const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
}


// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = players.map((player,i) =>{ 
        return{
            name: player,
            strength: getRandomStrength(),
            image:  "images/super-"+(i+1)+".png",
            type: i % 2 == 0 ? 'hero' : 'villain'}
    })
    return detailedPlayers;
}

const buildPlayers = (players, type) => {
    if (type === "hero") {
        let fragment = players.filter(player => player.type === "hero").map(hero => 
            `<div class="player">
             <img src="${hero.image}">
             <div class="name">${hero.name}</div>
             <div class="strength">${hero.strength}</div>
             </div>`
             ).join('');
        return fragment;
    }
    else{
        let fragment = players.filter(player => player.type === "villain").map(villain => 
            `<div class="player">
             <img src="${villain.image}">
             <div class="name">${villain.name}</div>
             <div class="strength">${villain.strength}</div>
             </div>`
             ).join('');
        return fragment;
    }
};

// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
}
window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}