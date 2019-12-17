var deck = {
    suits: ['hearts', 'spades', 'clubs', 'diamand'],
    cards: Array(52),
    createCardPicker: function () {
        var that = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return {
                suit: that.suits[pickedSuit],
                card: pickedCard % 13
            };
        };
    }
};
var cardPicker = deck.createCardPicker();
var card = cardPicker();
console.log(card.suit, card.card);
