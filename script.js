class Room {
    constructor(name, length, width, available = true, capacity = 15){
        this.name = name;
        this.length = length;
        this.width = width;
        this.available = available;
        this.capacity = capacity;
    }

    getArea(){
        return (this.length * this.width);
    }
    getPerimeter(){
        return (2 * (this.length + this.width));
    }
}

let room1 = new Room("Sun", 30, 20);
let room2 = new Room("Green", 15, 20);
room2.available = false;
room2.capacity = 18;

console.log(room1);
console.log(room1.getArea());
console.log(room1.getPerimeter());
console.log(room2);
console.log(room2.getArea());
console.log(room2.getPerimeter());
