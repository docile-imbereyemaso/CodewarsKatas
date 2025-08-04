class Cuboid {
  // TODO: Program Me
  constructor(length,width,height){
    this.length = length;
    this.width = width;
    this.height = height;
  }

  get surfaceArea(){
    return 2*(this.length*this.width+ this.length*this.height +this.height*this.width)
  }

  get volume(){
    return this.length *this.height*this.width
  }
}
class Cube extends Cuboid {
  // Don't forget to make a call to super ;)

  constructor(length){
    super(length);
    this.width = length;
    this.height = length;
  }
  get surfaceArea(){
    return 6*(this.length*this.length);
  }
  get volume(){
    return this.length*this.length*this.length
  }
}

const cuboid = new Cuboid(1,2,3);
console.log(cuboid);
console.log(cuboid.surfaceArea);
console.log(cuboid.volume);

const cube = new Cube(1);
console.log(cube);
console.log(cube.surfaceArea);
console.log(cube.volume);