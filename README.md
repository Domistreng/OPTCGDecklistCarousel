# IN DEVELOPMENT
#### Need to copy code rom multideck -> md & single

# OPTCGDecklistDisplay
### HTML + JS

## This is designed to present a display of your one piece decklist as copied directly from the  [sim](https://www.dropbox.com/scl/fo/7mtqq7b0wemrsij8j7xbh/ALGfOqaenr_QTuGKA0Vf2vY?rlkey=k7xvkp0o6salh1034ga94l9r2&e=1&dl=0).

## HTML file of guide: [index.html](https://github.com/Domistreng/OPTCGDecklistDisplayJS/blob/main/index.html) will display usage + implementation of both multiple decklists with a scroller.

# Starting code:

~~~
<head>
    <title>One Piece Decklist Demo:</title>
</head>

<body id="body">
    <h1>One Piece Decklist Demo (Multiple Decklists):</h1>
    <div style= "display: flex; flex-direction: row; text-align: center; height: 700px">
    </div>
</body>
~~~

### Inside the body inside of the div we will now add the div displaying the decks. 

~~~
<div style= "flex: 14; display: flex; justify-content: center; align-items: center; text-align: center; position: relative;">
</div>
~~~

### Inside that div add your decklists as displayed, if you are only using a single decklist it does not matter what id you title them as.

~~~
    <div id=op0 class="opDiv" deckList="1xOP08-098
2xEB01-052
4xOP05-101
4xOP05-105
4xOP05-106
4xOP05-110
3xOP06-113
4xOP06-114
4xOP08-099
4xOP08-109
4xOP08-110
2xOP05-115
4xOP08-115
3xOP10-116
4xOP05-117"></div>
    <div id=op1 class="opDiv" deckList="1xOP04-019
3xOP04-024
4xOP04-028
1xOP04-031
4xOP04-032
3xOP05-032
4xOP10-062
4xOP10-066
2xOP10-071
2xOP10-072
4xEB01-019
4xOP04-036
2xOP04-037
2xOP04-038
2xOP07-075
2xOP07-076
2xOP10-078
3xOP10-080
2xOP05-040"></div>
~~~

### Do not indent the other lines for each card, they must be split only by a line break or the images of cards will not display.

## Only follow if you are using multiple decklists:

### Above the divs classes as opDiv but inside of the previous div, add the left button and after the opDivs add the right button.

~~~
<button id="opPrevButton" style = "flex: 1; font-size: 50px; color: black; height: 100%;">
    &lt;
</button>

<div id=op0 class="opDiv" ------- />
<div id=op0 class="opDiv" ------- />

<button id="opNextButton" style = "flex: 1; font-size: 50px; color: black">
    &gt;
</button>
~~~

# [Finished code](https://github.com/Domistreng/OPTCGDecklistDisplayJS/blob/main/index.html):

~~~
<head>
    <title>One Piece Decklist Demo:</title>
</head>

<body id="body">
    <h1>One Piece Decklist Demo (Multiple Decklists):</h1>
    <div style= "display: flex; flex-direction: row; text-align: center; height: 700px">
        <button id="opPrevButton" style = "flex: 1; font-size: 50px; color: black; height: 100%;">
            &lt;
        </button>
        <div style= "flex: 14; display: flex; justify-content: center; align-items: center; text-align: center; position: relative;">
            
            <div id=op0 class="opDiv" deckList="1xOP08-098
2xEB01-052
4xOP05-101
4xOP05-105
4xOP05-106
4xOP05-110
3xOP06-113
4xOP06-114
4xOP08-099
4xOP08-109
4xOP08-110
2xOP05-115
4xOP08-115
3xOP10-116
4xOP05-117"></div>
            <div id=op1 class="opDiv" deckList="1xOP04-019
3xOP04-024
4xOP04-028
1xOP04-031
4xOP04-032
3xOP05-032
4xOP10-062
4xOP10-066
2xOP10-071
2xOP10-072
4xEB01-019
4xOP04-036
2xOP04-037
2xOP04-038
2xOP07-075
2xOP07-076
2xOP10-078
3xOP10-080
2xOP05-040"></div>
        </div>
        <button id="opNextButton" style = "flex: 1; font-size: 50px; color: black">
            &gt;
        </button>
        <script src="opDeckListDisplay_multipleDecks.js"></script>
    </div>

</body>
~~~


## Use the script labeled [opDeckListDisplay_multipleDecks.js](https://github.com/Domistreng/OPTCGDecklistDisplayJS/blob/main/opDeckListDisplay_multipleDecks.js) for implementation of multiple decks and use [opDeckListDisplay_singleDeck.js](https://github.com/Domistreng/OPTCGDecklistDisplayJS/blob/main/opDeckListDisplay_singleDeck.js) for implementation of a signle deck.
