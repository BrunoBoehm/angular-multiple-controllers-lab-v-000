function ContactController(){
	this.name = 'Name';
	this.email = 'Email';
	this.phone = 'Phone';

	var vm = this;
	// view model

	this.changeName = function(){
		vm.name = "Something Else!"
	};
};

angular
	.module('app')
	.controller('ContactController', ContactController);