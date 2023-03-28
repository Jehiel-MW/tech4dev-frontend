class MoneyCalculator {
  constructor(totalMoney, year) {
    this.S = 1800;
    this.A = 18;
    this.Ms = 12000;
    this.T = totalMoney;
    this.E = year;
    this.Ne = Math.ceil((this.E - this.S + 1) / 2);
    this.No = Math.floor((this.E - this.S + 1) / 2);
    this.Te = this.Ne * this.Ms;
    this.To = this.No * this.Ms + (50 * this.No) * (this.No * this.A + this.No ** 2);
    this.Rn = this.T - this.Te - this.To;
    if (this.Rn > 0) {
      this.G = this.Rn;
    } else {
      this.D = Math.abs(this.Rn);
    }
  }

  getOutput() {
    if (this.Rn > 0) {
      return `Yes! He will live a carefree life and will have ${this.G.toFixed(2)} dollars left.`;
    } else {
      return `He will need ${this.D.toFixed(2)} dollars to survive.`;
    }
  }
}

function calculate() {
  const totalMoney = document.getElementById('total-money').value;
  const year = document.getElementById('year').value;
  const calculator = new MoneyCalculator(totalMoney, year);
  console.log(calculator.getOutput());
}

