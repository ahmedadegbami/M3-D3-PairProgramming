// 1) When pressing on Load Images button, load the pictures from https://api.pexels.com/v1/search?query=[your-query]

fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem", {
    headers: {
        Authorization: "Bearer [563492ad6f917000010000013f2896b62ab44486bb25056553521451]"
    }
}).then(response => response.json())
.then(info => {
    info.data.forEach(photoUrl => {
        console.log(photoUrl)

        let cardNode = document.querySelectorAll('.card')
        let svgNode = document.querySelectorAll('.bd-placeholder-img')


        for (let i = 0; i < cardNode.length; i++) {

            let imgNode = document.createElement('img')
            imgNode.setAttribute("src", "france.jpg");
            imgNode.setAttribute("style", "height: 225px");
            
            cardNode[i].replaceChild(imgNode, svgNode[i])
            
        }
    })




}).catch(err => console.log(err))


// let svgNode = document.querySelectorAll('.bd-placeholder-img')[0]
// console.log(svgNode)

// let cardNode = document.querySelectorAll('.card')[0]
// console.log(cardNode)

// let imgNode = document.createElement('img')
// imgNode.setAttribute("src", "france.jpg");
// imgNode.setAttribute("style", "height: 225px");

// cardNode.replaceChild(imgNode, svgNode)