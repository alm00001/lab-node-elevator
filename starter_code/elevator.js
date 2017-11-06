class Elevator {
  constructor() {
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.requests = [];
    this.direction = "up";
    this.interval;
    this.waitingList = [];
    this.passengers =[];
  }

  start() {
    this.interval = setInterval(() => {this.update();},1000);
  }

  stop() {
    clearInterval(this.intervalId);
  }
  update() {
    this.log();
    //lista de plantas a las que el ascensor tiene que servir

  }

  _passengersEnter() {

  }
  _passengersLeave() {

  }

  floorUp() {
    this.floor<this.MAXFLOOR ? this.floor++ : this.floor = this.floor;
  //  waitingListforEach(){};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //if waitinlist contain a person with atribute person.origin floor === this floor then add the person in  passenger array, delete the passenger from the waiting list, add the destination floor f the passenger to the elevarto request and show "Julia has enter the elevator"
    //check passengers collection and if a passenger destination floor matches de current floor, delete de person from the passengers array and show "Julia has left the elevator"
  }

  floorDown() {
    this.floor>0 ? this.floor-- : this.floor = this.floor;
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
