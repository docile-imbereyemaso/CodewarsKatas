class Cuboid {
  // TODO: Program Me
  constructor(length,width,height){
    this.length = length;
    this.width =width;
    this.height = height
  }

  get surfaceArea(){
    return 6*(this.length*this.length)
  }
  get volume(){
    return this.length *this.length * this.length
  }
}
class Cube extends Cuboid {
  // Don't forget to make a call to super ;)
}

const cube = new Cuboid(2,3,4);
console.log(cube.surfaceArea);
console.log(cube.volume);