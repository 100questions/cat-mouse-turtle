function Cat(){
	console.log('meo meo');
	console.log('test reset hard')
	this.stomach = [];
}

Cat.prototype.eat = function(animal) {
	this.stomash.push(animal);
};

module.exports = Cat;