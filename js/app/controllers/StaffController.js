function StaffController() {
	this.name = 'real name';
	this.email = 'real email';
	this.phone = 'real phone'
};

angular
	.module('app')
	.controller('StaffController', StaffController);