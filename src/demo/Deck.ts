interface Card {
  suit: string,
  card: number,
}

interface Deck {
  suits: string[],
  cards: number[],
  createCardPicker: () => () => Card
}


const deck: Deck = {
  suits: ['hearts', 'spades', 'clubs', 'diamand'],
  cards: Array<number>(52),
  createCardPicker: function(this:Deck) {
    let that = this;
    return function() {
      let pickedCard = Math.floor(Math.random() * 52);
      let pickedSuit = Math.floor(pickedCard / 13);

      return {
        suit: that.suits[pickedSuit],
        card: pickedCard % 13
      }
    }
  }
}

const deck2: Deck = {
  suits: ['hearts', 'spades', 'clubs', 'diamand'],
  cards: Array<number>(52),
  createCardPicker: function(this:Deck) {
    return () => {
      let pickedCard = Math.floor(Math.random() * 52);
      let pickedSuit = Math.floor(pickedCard / 13);

      return {
        suit: this.suits[pickedSuit],
        card: pickedCard % 13
      }
    }
  }
}

const cardPicker = deck.createCardPicker();
const card = cardPicker();
console.log(card.suit, card.card)

interface UIElement {
  addClickListener(onclick : (this:void, e:Event) => void): void
}

class Hander {
  type!: string;
  onClickBad = (e: Event) => {
    this.type = e.type
  }
}