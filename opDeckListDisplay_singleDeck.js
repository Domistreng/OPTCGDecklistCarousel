let tempParents = document.getElementsByClassName("opDiv")

let tempParent = tempParents[0]
// CHANGE: position: absolute;
tempParent.style.backgroundColor = 'Black'
tempParent.style.position = 'absolute'
tempParent.style.top = '0px'
tempParent.style.cursor = 'pointer';

tempParent.onclick = async function() {

    currentParent = tempParent

    navigator.clipboard.writeText(currentParent.getAttribute('deckList'));

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
