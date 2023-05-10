// The objective of the game is
//  * to match all pairs of cards.
//  *
//  * * To play the game:
//  * * 1. Player clicks on two cards.
//  * * 2. If the cards match, they will remain open.
//  * * 3. If the cards do not match, they will close after 500ms.
//  * * 4. End goal is to open all pairs of cards.
//  *
//  * If a card is already open, nothing will happen when clicked.
//  */

const cardsData = [
  {
    id: 1,
    cardName: "card1",
    isOpen: false,
  },
  {
    id: 2,
    cardName: "card2",
    isOpen: false,
  },
  {
    id: 1,
    cardName: "card1",
    isOpen: false,
  },
  {
    id: 3,
    cardName: "card3",
    isOpen: false,
  },
  {
    id: 2,
    cardName: "card2",
    isOpen: false,
  },
  {
    id: 4,
    cardName: "card4",
    isOpen: false,
  },
  {
    id: 3,
    cardName: "card3",
    isOpen: false,
  },
  {
    id: 4,
    cardName: "card4",
    isOpen: false,
  },
];

const checkList = (card1, card2) => {
  if (card1.isOpen && card2.isOpen) return;
  else if (card1.id === card2.id) {
    // if cards are matched, isOpen=true
    card1.isOpen = true;
    card2.isOpen = true;
  } else if (card1.id !== card2.id) {
    // if cards donot match, close both cards = isOpen=false
    card1.isOpen = false;
    card2.isOpen = false;
  }
};

// open all cards at the end
const checkAllOpen = (list) => {
  let allOpen = false;
  list.forEach((item) => {
    if (item.isOpen !== true) {
      allOpen = false;
    } else {
      allOpen = true;
    }
  });
};

const cardMapping = (list) => {
  const mappedCardList = list?.map((card, idx) => {
    if (idx === list.length - 1) return;
    checkList(card, list[idx + 1]);
    checkAllOpen(list);
  });
  return mappedCardList;
};

cardMapping(cardsData);
