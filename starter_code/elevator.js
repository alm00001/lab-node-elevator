class Elevator {
  constructor() {
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.requests = [];
    this.direction = "up";
    this.interval;
    this.waitingList = [];
    this.passengers = [];
  }

  start() {
    this.interval = setInterval(() => {this.update();}, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
  }
  update() {
    this.log();
  }

  passengersEnter(person) {
    this.passengers.push(person);
    this.requests.push(person.destinationFloor);
    console.log(`${person.name} has enter the elevator`);
  }
  passengersLeave(person) {
    console.log(`${person.name} has exit the elevator`);
  }

  floorUp() {
    this.floor < this.MAXFLOOR ? (
      this.floor += 1
    ) : (
      this.direction = "down",
      console.log("You are at the last Floor")

    );

    this.passengers.forEach((e, i) => {
      if (e.destinationFloor == this.floor) {
        this.passengersLeave(e);
        this.passengers.splice(i, 1);
      }
    });

    this.waitingList.forEach((e, i) => {
      if (e.originFloor == this.floor) {
        this.passengersEnter(e);
        this.waitingList.splice(i, 1);
      }
    });
  }

  floorDown() {
    this.floor > 0 ? (
      this.floor--
    ) : (
      this.direction = "up",
      console.log("You are at the bottom")
    );

    this.passengers.forEach((e, i) => {
      if (e.destinationFloor == this.floor) {
        this.passengersLeave(e);
        this.passengers.splice(i, 1);
      }
    });

    this.waitingList.forEach((e, i) => {
      if (e.originFloor == this.floor) {
        this.passengersEnter(e);
        this.waitingList.splice(i, 1);
      }
    });
  }

  call(person) {
    this.waitingList.push(person);
    this.requests.push(person.originFloor);
  }

  log() {
    console.log(`Direction: ${this.direction}| Floor: ${this.floor}`);
  }
}

module.exports = Elevator;
