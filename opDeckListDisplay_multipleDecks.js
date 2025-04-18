let tempParents = document.getElementsByClassName("opDiv")

for (let j = 0; j < tempParents.length; j ++) {
    tempParent = tempParents[j]
    // CHANGE: position: absolute;
    tempParent.style.backgroundColor = 'Black'
    tempParent.style.position = 'absolute'
    tempParent.style.top = '0px'
    tempParent.style.cursor = 'pointer';
    if (j != 0 ) {
        tempParent.style.display = 'none'
    }

    tempParent.onclick = function() {
        navigator.clipboard.writeText(tempParents[currentDisp].getAttribute('deckList'));
    }

    // Need to make multiple heights for mobile vs pc screen
    tempParent.style.height= '700px'
    tempParent.style.width= '1240px' 
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
        temp.style.marginTop = '10px'
        temp.style.marginLeft = '5px'
        temp.style.marginRight = '5px'

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
}

var currentDisp = 0;

document.getElementById('opNextButton').onclick = function() {
    tempParents[currentDisp].style.display = 'none'
    currentDisp += 1
    if (currentDisp == tempParents.length) {
        currentDisp = 0
    }
    tempParents[currentDisp].style.display = 'inline';
};

document.getElementById('opPrevButton').onclick = function() {
    tempParents[currentDisp].style.display = 'none'
    currentDisp -= 1
    if (currentDisp == -1) {
        currentDisp = tempParents.length - 1
    }
    tempParents[currentDisp].style.display = 'inline';
};