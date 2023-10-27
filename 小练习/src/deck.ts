import { Mark, Color } from './enum';
import { Card, Joker, NormalCard } from './type';

interface PublishRes {
  player1: Deck;
  player2: Deck;
  player3: Deck;
  desktop: Deck;
}

export class Deck {
  private cards: Card[] = [];
  constructor(cards?: Card[]) {
    if (cards) {
      this.cards = cards;
    } else {
      this.init();
    }
  }

  private init() {
    const marks = Object.values(Mark);
    const colors = Object.values(Color);
    for (const m of marks) {
      for (const c of colors) {
        this.cards.push({
          color: c,
          mark: m,
          getString() {
            return this.color + this.mark;
          },
        } as NormalCard);
      }
    }
    this.cards.push({
      type: 'small',
      getString() {
        return '大王';
      },
    } as Joker);
    this.cards.push({
      type: 'big',
      getString() {
        return '小王';
      },
    } as Joker);
  }
  print() {
    let result = '';
    this.cards.map((card, i) => {
      result += card.getString() + '\t';
      if ((i + 1) % 4 === 0) {
        result += '\n';
      }
    });
    console.log(result);
  }

  /**
   * 洗牌
   */
  shuffle() {
    for (let i = 0; i < this.cards.length; i++) {
      const targetIndex = this.getRandom(0, this.cards.length);
      let temp = this.cards[targetIndex];
      this.cards[targetIndex] = this.cards[i];
      this.cards[i] = temp;
    }
  }

  /**
   * 生成随机数
   */
  private getRandom(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  /**
   * 发牌
   */
  publish(): PublishRes {
    let player1: Deck, player2: Deck, player3: Deck, desktop: Deck;
    player1 = this.takeCards(17)
    player2 = this.takeCards(17)
    player3 = this.takeCards(17)
    desktop = this.takeCards(3)
    return {
      player1,
      player2,
      player3,
      desktop,
    };
  }

  private takeCards(n: number): Deck {
    const cards: Card[] = [];
    for (let i = 0; i < n; i++) {
      cards.push(this.cards.shift() as Card);
    }
    return new Deck(cards);
  }
}
