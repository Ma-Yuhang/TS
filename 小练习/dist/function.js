"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printDeck = exports.createDeck = void 0;
const enum_1 = require("./enum");
function createDeck() {
    const deck = [];
    const marks = Object.values(enum_1.Mark);
    const colors = Object.values(enum_1.Color);
    for (const m of marks) {
        for (const c of colors) {
            deck.push({
                color: c,
                mark: m,
                getString() {
                    return this.color + this.mark;
                },
            });
        }
    }
    deck.push({
        type: 'small',
        getString() {
            return '大王';
        }
    });
    deck.push({
        type: 'big',
        getString() {
            return '小王';
        }
    });
    return deck;
}
exports.createDeck = createDeck;
function printDeck(deck) {
    let result = '';
    deck.map((card, i) => {
        result += card.getString() + '\t';
        if ((i + 1) % 4 === 0) {
            result += '\n';
        }
    });
    return result;
}
exports.printDeck = printDeck;
