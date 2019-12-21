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
var deck2 = {
    suits: ['hearts', 'spades', 'clubs', 'diamand'],
    cards: Array(52),
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return {
                suit: _this.suits[pickedSuit],
                card: pickedCard % 13
            };
        };
    }
};
var cardPicker = deck.createCardPicker();
var card = cardPicker();
console.log(card.suit, card.card);
var Handler = /** @class */ (function () {
    function Handler() {
        var _this = this;
        this.onClicked = function (e) {
            _this.type = e.type;
        };
    }
    return Handler;
}());
var h = new Handler();
var uiElement = {
    addClickhandler: function () { }
};
uiElement.addClickhandler(h.onClicked);
