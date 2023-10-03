class Computer {
  constructor(manufacturer, model) {
      this.manufacturer = manufacturer;
      this.model = model;
      this.isPoweredOn = false;
  }

  powerOn() {
      if (!this.isPoweredOn) {
          this.isPoweredOn = true;
          // Please pay attention on operation adding implemented on string!
          // Investigate the topic - Operations in JavaScript!
          console.log(this.manufacturer + " " + this.model + " is now powered on.");
      } else {
          console.log(
            this.manufacturer + " " + this.model + " is already powered on."
          );
      }
  }

  powerOff() {
     if (this.isPoweredOn) {
        this.isPoweredOn = false;
        console.log(this.manufacturer + " " + this.model + " is now powered off.");
      } else {
        console.log(
          this.manufacturer + " " + this.model + " is already powered off."
      );
    }
  }
}

const myComp = new Computer('myHome', 'room');
myComp.powerOn();
myComp.powerOff();