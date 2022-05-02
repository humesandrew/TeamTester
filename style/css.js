const style = `
html, body {
    max-width: 100% !important;
    overflow-x: hidden !important;
}
body {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.banner-bar {
    background-color: purple;
    width: 100%;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20vh;
}
h1 {
   
    font-weight: bold;
    font-size: 6vw;
    text-shadow: 2px 5px 5px black;
}
p {
    
    position: relative;
    left: 12px;
}
h2 {
   
    position: relative;
    font-size: 17px;
    left: 12px;
}
.team-card {
    width: 250px;
    height: 50vh;
    margin-bottom: 5vh;
    background-color: tan;
    box-shadow: 2px 5px 5px black;
    border-radius: 20px;
}
.card-container {
    position: absolute;
    top: 26vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 60vw;
}
.card-top {
    background-color: green;
    border: 2px solid green;
    width: 246px;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
}
.card-bottom {
    display: flex;
    flex-direction: column;
    align-content: center;
}
`

module.exports = style;