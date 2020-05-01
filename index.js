function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const Circle1 = new Function('radius', `
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
`);

Circle.call({}, 1);

const circleAnother = new Circle(1);