const fs = require("fs");

// J = 11, Q = 12, K = 13 and A = 1
// (S = Spades, H = Hearts, D = Diamonds and C = Clubs).
// spades = 4, hearts = 3, diamonds = 2 and clubs = 1

const FACE_VALUES = {
  ...[...Array(11)].map((_, i) => i),
  J: 11,
  Q: 12,
  K: 13,
  A: 1,
};
delete FACE_VALUES[0]; // delete zero value card

const SUIT_VALUES = {
  S: 4,
  H: 3,
  D: 2,
  C: 1,
};

(async () => {
  const argv = process.argv.slice(2);
  let _in, _out;
  for (let i = 0; i < argv.length; i++) {
    _in = argv[i] == "--in" ? argv[i + 1] : _in;
    _out = argv[i] == "--out" ? argv[i + 1] : _out;
  }
  try {
    const lines = getLines(_in);
    const winner = parseGame(lines);
    // console.log({ winner });
    fs.writeFileSync(_out, `${winner.name}:${winner.score}`);
  } catch (e) {
    // console.log("ERROR");
    fs.writeFileSync(_out, `ERROR`);
  }
})();

function getLines(_inFile) {
  const lines = fs.readFileSync(_inFile, "utf-8").split("\n");
  if (lines.length > 5) throw new Error("Invalid number of players");
  return lines;
}

function parseGame(lines) {
  let winner = { score: 0, suitScore: 0 };

  lines.map((line) => {
    let [name, cards] = line.split(":");
    cards = cards.split(",");

    if (cards.length !== 5) throw new Error("Invalid number of cards");

    let faceScore = 0;
    let suitScore = 0;

    // console.log(name);
    cards.map((card) => {
      const { [card.length - 1]: S } = card;
      const F = card.replace(S, "");
      faceScore += FACE_VALUES[F];
      suitScore += SUIT_VALUES[S];
      //   console.log({ card, F, faceScore, S, suitScore });
      if (Number.isNaN(faceScore) || Number.isNaN(suitScore)) {
        throw new Error("Invalid Card Values");
      }
    });
    winner = checkWin(winner, { name, faceScore, suitScore });
  });
  return winner;
}

function checkWin(winner, { name, faceScore, suitScore }) {
  if (faceScore > winner.score) {
    return { name, score: faceScore, suitScore: suitScore };
  }
  if (faceScore == winner.score) {
    if (suitScore == winner.suitScore) {
      return { ...winner, name: winner.name + "," + name };
    }
    if (suitScore > winner.suitScore) {
      return { name, score: faceScore, suitScore: suitScore };
    } else {
      return winner;
    }
  }
  return winner;
}
