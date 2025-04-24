const delay = ms => new Promise(res => setTimeout(res, ms));

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

    tempParent.onclick = async function() {
        
        currentParent = tempParents[currentDisp]

        navigator.clipboard.writeText(currentParent.getAttribute('deckList'));
        var e = window.event;

        var posX = e.clientX;
        var posY = e.clientY;

        var position = currentParent.getBoundingClientRect();
        var x = position.left;
        var y = position.top;

        posX -= x
        posY -= y

        // var d = document.getElementById('body');
        var linkCopy = document.createElement('p')
        linkCopy.style.position = "absolute";
        linkCopy.style.left = posX+'px';
        linkCopy.style.top = posY+'px';
        linkCopy.style.fontSize = '20px';
        linkCopy.style.backgroundColor = 'White';
        linkCopy.innerHTML = "Link Copied";

        currentParent.appendChild(linkCopy)

        await delay(1000);
        currentParent.removeChild(linkCopy)

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
        tempText.style.top = '90%';
        tempText.style.left = '50%';
        tempText.style.transform = 'translate(-50%, -50%)';
        tempText.style.fontSize = '40px';
        tempText.style.color = 'Black';
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