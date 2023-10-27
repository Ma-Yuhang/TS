"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deck = void 0;
const enum_1 = require("./enum");
class Deck {
    constructor(cards) {
        this.cards = [];
        if (cards) {
            this.cards = cards;
        }
        else {
            this.init();
        }
    }
    init() {
        const marks = Object.values(enum_1.Mark);
        const colors = Object.values(enum_1.Color);
        for (const m of marks) {
            for (const c of colors) {
                this.cards.push({
                    color: c,
                    mark: m,
                    getString() {
                        return this.color + this.mark;
                    },
                });
            }
        }
        this.cards.push({
            type: 'small',
            getString() {
                return '大王';
            },
        });
        this.cards.push({
            type: 'big',
            getString() {
                return '小王';
            },
        });
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
    getRandom(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    /**
     * 发牌
     */
    publish() {
        let player1, player2, player3, desktop;
        player1 = this.takeCards(17);
        player2 = this.takeCards(17);
        player3 = this.takeCards(17);
        desktop = this.takeCards(3);
        return {
            player1,
            player2,
            player3,
            desktop,
        };
    }
    takeCards(n) {
        const cards = [];
        for (let i = 0; i < n; i++) {
            cards.push(this.cards.shift());
        }
        return new Deck(cards);
    }
}
exports.Deck = Deck;
