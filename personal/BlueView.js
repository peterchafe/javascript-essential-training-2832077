class BlueView {
  constructor(name, rangeGate) {
    this.name = name;
    this.rangeGate = rangeGate;
  }
  setMinimum(minimum) {
    this.rangeGate.minimum = minimum;
  }
  setMaximum(maximum) {
    this.rangeGate.maximum = maximum;
  }
}

export default BlueView;
