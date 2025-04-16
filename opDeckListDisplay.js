let tempParent = document.getElementById("opDiv")
tempParent.style.backgroundColor = '#457B9D'
tempParent.style.height= '840px'
tempParent.style.width= '700px'
deckList = tempParent.getAttribute('deckList').split(/\r?\n/);

for (let i = 0; i < deckList.length; i++) {
    let tempCont = document.createElement("div")
    tempCont.style.position = "relative";
    tempCont.style.textAlign = "center";
    tempCont.style.display = 'inline-block';


    let temp = document.createElement("img")
    temp.src="https://en.onepiece-cardgame.com/images/cardlist/card/" + deckList[i].substring(2) + ".png"
    temp.style.height = '210px'
    temp.style.width = '140px'

    let tempText = document.createElement("div")
    tempText.style.position = 'absolute';
    tempText.style.top = '95%';
    tempText.style.left = '50%';
    tempText.style.transform = 'translate(-50%, -50%)';
    tempText.style.fontSize = '40px';
    tempText.style.color = 'White';
    tempText.innerHTML = deckList[i].substring(0,2);

    tempCont.appendChild(temp)
    tempCont.appendChild(tempText)

    tempParent.appendChild(tempCont)

}
