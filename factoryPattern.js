var factory = {
	clothes: function() {
		this.personNum = 50;
		// console.log('There are ' + this.personNum + 'person');
	},
	shoose: function() {
		console.log('make shoose');
	},
	transport: function() {
		console.log('transport');
	},
	boos: function(item) {
		 return new factory[item]();
	}
};

var me = factory.boos('clothes');
console.log(me.personNum);