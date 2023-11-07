function createCard(face, suite) {
    const cardFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const cardSuites = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663',
    }

    const isCardFaceValid = cardFaces.includes(face);
    const isCardSuiteValid = Object.keys(cardSuites).includes(suite);

    if (isCardFaceValid && isCardSuiteValid) {
        return {
            face,
            suite,
            toString() {
                return `${face}${cardSuites[suite]}`;
            }
        }
    }else {
        throw new Error('Error');
    }
}

const card = createCard('A', 'S');
const card2 = createCard('1', 'C');

card.toString();
card2.toString();







//    // First, validate the suit
//    if (suit !== 'S' && suit !== 'H' && suit !== 'D' && suit !== 'C') {
//     throw new Error("Invalid suit");
// }

// if (number < 1 || number > 

// // Convert suit to the corresponding Unicode character
// switch (suit) {
//     case 'S':
//         suit = '\u2660';
//         break;
//     case 'H':
//         suit = '\u2665';
//         break;
//     case 'D':
//         suit = '\u2666';
//         break;
//     case 'C':
//         suit = '\u2663';
//         break;
// }

// return {
//     number: number,
//     suit: suit,
//     buildCard: () => {
//         return number + suit;
//     },
// };