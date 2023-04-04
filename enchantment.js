// As a magician-to-be, Elyse needs to practice some basics. She has a stack of cards that she wants to manipulate.
// To make things a bit easier she only uses the cards 1 to 10 so her stack of cards can be represented by an array of numbers. The position of a certain card corresponds to the index in the array. That means position 0 refers to the first card, position 1 to the second card etc.
// Note
// All functions should update the array of cards and then return the modified array - a common way of working known as the Builder pattern, which allows you to nicely daisy-chain functions together.
// 1. Retrieve a card from a stack
// To pick a card, return the card at index position from the given stack.

const stack = [1, 2, 5, 9, 8, 3, 6, 4, 7, 10]

function getItem(cards, position) {
  return cards[position]
}
console.log(getItem(stack, 2)) // -> 5

// Perform some sleight of hand and exchange the card at index position with the replacement card provided. Return the adjusted stack.
// const position = 2;
// const replacementCard = 6;
// setItem([1, 2, 4, 1], position, replacementCard);
// => [1, 2, 6, 1]

// Shouldn't this be array.splice()? - in order to just move the card
function setItem(cards, position, replacementCard) {
  cards[position] = replacementCard;
  return cards
}

console.log(setItem(stack, 2, 6))

// Make a card appear by inserting a new card at the top of the stack. Return the adjusted stack.
const newCard = 8;
function insertItemAtTop(cards, newCard) {
    cards.push(newCard);
    return cards
};
console.log(insertItemAtTop(stack, newCard))

// Make a card disappear by removing the card at the given position from the stack. Return the adjusted stack.
const place = 3;
function removeItem(cards, position) {
    cards.splice(position, 1);
    return cards
};
console.log(removeItem(stack, place));

// Make a card disappear by removing the card at the top of the stack. Return the adjusted stack.
// removeItemFromTop([3, 2, 6, 4, 8]);
function removeItemFromTop(cards) {
    cards.pop();
    return cards
};
console.log(removeItemFromTop(stack));

// Make a card appear by inserting a new card at the bottom of the stack. Return the adjusted stack.
const newCard = 8;
// insertItemAtBottom([5, 9, 7, 1], newCard);
function insertItemAtBottom(cards, newCard) {
    cards.unshift(newCard)
    return cards;
};
console.log(insertItemAtBottom(stack, newCard));

// Make a card disappear by removing the card at the bottom of the stack. Return the adjusted stack.
// removeItemAtBottom([8, 5, 9, 7, 1]);
function removeItemAtBottom(cards) {
    cards.shift();
    return cards;
};
console.log(removeItemAtBottom(stack));

// Check whether the size of the stack is equal to stackSize or not.
const stackSize = 4;
// checkSizeOfStack([3, 2, 6, 4, 8], stackSize);
function checkSizeOfStack(cards, stackSize) {
    if (cards.length == stackSize) {
        return true
    } else {
        return false
    }
};
console.log(checkSizeOfStack(stack, stackSize));
