class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let num = 0;
    let current = this;

    while (current.creator) {
      current = current.creator;
      num++;
    }
    return num;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    if (this.creator === null) {
      return true;
    } else if (vampire.creator == null) {
      return false;
    } else {
      return this.creator.isMoreSeniorThan(vampire.creator);
    }
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {}
}

const original = new Vampire("original", 0);
const ansel = new Vampire("Ansel", 1);
const bart = new Vampire("Bart", 1);
original.addOffspring(ansel);
original.addOffspring(bart);
const elgort = new Vampire("Elgort", 2);
const sarah = new Vampire("Sarah", 2);
ansel.addOffspring(elgort);
ansel.addOffspring(sarah);
const andrew = new Vampire("Andrew", 3);
elgort.addOffspring(andrew);

module.exports = Vampire;
