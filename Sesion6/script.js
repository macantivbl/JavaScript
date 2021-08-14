const Vec = function(x, y) {
    this.x = x;
    this.y = y;
}

Vec.prototype.plus = function(vector){
    return [this.x+vector.x,this.y+vector.y]
}

Vec.prototype.minus= function(vector){
    return [this.x-vector.x,this.y-vector.y]
}

Vec.prototype.length= function(){
    return Math.sqrt((this.x ** 2) + (this.y ** 2))
}

const vec1 = new Vec(1, 2);
const vec2 = new Vec(2, 3);

console.log(vec2)
console.log(vec1.plus(vec2)); // Vec { x: 3, y: 5 }
console.log(vec1.minus(vec2)); // Vec { x: -1, y: -1 }
console.log(vec1.length()); // 2.23606797749979


const Group = function() {
    this.arrAux = []
}

Group.from = function(arr){
    const group = new Group();
    arr.forEach(element => {
        group.add(element);
    });
    return group;
}

Group.prototype.add = function(arr) {
    this.arrAux.push(arr);
}

Group.prototype.has = function(value) {
    return this.arrAux.includes(value);
}


const group = Group.from([1, 2, 3, 4, 5]);

console.log(group); // Group { members: [ 1, 2, 3, 4, 5 ] }
console.log(group.has(5)); // true
console.log(group.has(10)); // false
  
group.add(10);
console.log(group.has(10)); // true

const Triangle = function(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
}

Triangle.prototype.getPerimeter = function (){  
    return (this.a + this.b + this.c)
}

const triangle = new Triangle(1, 2, 3);
  
console.log(triangle); // Triangle { a: 1, b: 2, c: 3 }
console.log(triangle.getPerimeter()); // 6
