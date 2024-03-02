function setBackgroundImage(elementClass, imagePath, hoverImagePath) {
    var cards = document.getElementsByClassName(elementClass);
    for (var i = 0; i < cards.length; i++) {
        cards[i].style.backgroundImage = "url('" + imagePath + "')";
        cards[i].onmouseover = function() {
            this.style.backgroundImage = "url('" + hoverImagePath + "')";
        }
        cards[i].onmouseout = function() {
            this.style.backgroundImage = "url('" + imagePath + "')";
        }
    }
}

var cards = [
    { class: "card1", image: "images/aang1.jpg", hoverImage: "images/aang.gif" },
    { class: "card2", image: "images/katara.jpg", hoverImage: "images/katara.gif" },
    { class: "card3", image: "images/zuko.jpg", hoverImage: "images/zuko.gif" },
    { class: "card4", image: "images/toph.jpg", hoverImage: "images/toph.gif" },
    { class: "card5", image: "images/sokka.jpg", hoverImage: "images/sokka.gif" },
    { class: "card6", image: "images/appa.jpg", hoverImage: "images/appa.gif" },
    { class: "card7", image: "images/momo.jpg", hoverImage: "images/momo.gif" },
    { class: "card8", image: "images/iroh.jpg", hoverImage: "images/iroh.gif" },
    { class: "card9", image: "images/azula.jpg", hoverImage: "images/azula.gif" },
    { class: "card10", image: "images/suki.jpg", hoverImage: "images/suki.gif" },
    { class: "card11", image: "images/mai.jpg", hoverImage: "images/mai.gif" },
    { class: "card12", image: "images/tylee.jpg", hoverImage: "images/tylee.gif" },
   
];

for (var i = 0; i < cards.length; i++) {
    setBackgroundImage(cards[i].class, cards[i].image, cards[i].hoverImage);
}