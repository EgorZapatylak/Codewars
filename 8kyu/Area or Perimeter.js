//You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

const areaOrPerimeter = function(l , w) {
    if (l === w) {
        console.log(l*l);
    } else {
        console.log(l*2 + w*2);
    }
};

areaOrPerimeter(3,3);
areaOrPerimeter(6,10);