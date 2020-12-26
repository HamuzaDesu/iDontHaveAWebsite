var colours = [
    ["#315f72", "#f57e7e"],
    ["#33dbff", "#ff5733"],
    ["#CC378D", "#37CC76"],
    ["#718DEC", "#ECD071"],
    ["#EAB5C8", "#B5EAD7"]
]
var randomNumber = Math.floor(Math.random() * (colours.length))

// gets center text to cache
var text = document.getElementById("centreText")

//gets icons to cache
var githubIcon = document.getElementById('githubIcon')
var discordIcon = document.getElementById('discordIcon')

var icons = [githubIcon, discordIcon]

window.addEventListener("load", () => {

    // sets colours
    text.style.color = colours[randomNumber][1]
    document.body.style.background = colours[randomNumber][0]


    icons.forEach((item, i) => {
        //changes icon colour to text colour
        item.style.color = colours[randomNumber][1]
        item.style.transition = "all 500ms"
    });
})

icons.forEach((item, i) => {
    item.addEventListener("mouseenter", (event) => {
        event.target.style.color = "#000000"
        event.target.style.transition = "500ms"
    })
    item.addEventListener("mouseleave", event => {
        event.target.style.color = colours[randomNumber][1]
    })
});
