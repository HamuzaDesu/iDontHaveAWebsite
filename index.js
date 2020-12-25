window.addEventListener("load", () => {
    var colours = [
        ["#315f72", "#f57e7e"],
        ["#33dbff", "#ff5733"],
        ["#CC378D", "#37CC76"],
        ["#718DEC", "#ECD071"],
        ["#EAB5C8", "#B5EAD7"]
    ]
    var randomNumber = Math.floor(Math.random() * (colours.length))

    var text = document.getElementById("centreText")

    text.style.color = colours[randomNumber][1]
    document.body.style.background = colours[randomNumber][0]
})
