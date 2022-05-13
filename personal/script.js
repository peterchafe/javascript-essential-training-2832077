import BlueView from "./BlueView.js";
import Constraint from "./Constraint.js";
import RangeGate from "./RangeGate.js";

let main = document.getElementById("main");

function incrementMinimum() {
  if (blueView.rangeGate.minimum + 1 <= blueView.rangeGate.maximum) {
    blueView.rangeGate.minimum++;
    UpdateUI();
  }
}

function decrementMinimum() {
  if (blueView.rangeGate.minimum - 1 >= blueView.rangeGate.constraint.minimum) {
    blueView.rangeGate.minimum--;
    UpdateUI();
  }
}

function incrementMaximum() {
  if (blueView.rangeGate.maximum + 1 <= blueView.rangeGate.constraint.maximum) {
    blueView.rangeGate.maximum++;
    UpdateUI();
  }
}

function decrementMaximum() {
  if (blueView.rangeGate.maximum - 1 >= blueView.rangeGate.minimum) {
    blueView.rangeGate.maximum--;
    UpdateUI();
  }
}

function UpdateUI() {
  main.innerHTML =
    "Main Section" +
    "<br>Name: " +
    blueView.name +
    "<br>Start: " +
    blueView.rangeGate.minimum +
    "<br>End: " +
    blueView.rangeGate.maximum;
}

const blueView = new BlueView(
  "BlueView 1",
  new RangeGate(10, 90, new Constraint(0, 100))
);

document
  .getElementById("btnIncrementMinimum")
  .addEventListener("click", incrementMinimum, false);
document
  .getElementById("btnDecrementMinimum")
  .addEventListener("click", decrementMinimum, false);
document
  .getElementById("btnIncrementMaximum")
  .addEventListener("click", incrementMaximum, false);
document
  .getElementById("btnDecrementMaximum")
  .addEventListener("click", decrementMaximum, false);

console.log("constraint:", blueView);
UpdateUI();

blueView.setMinimum(15);
blueView.setMaximum(85);

UpdateUI();

incrementMinimum();

UpdateUI();
