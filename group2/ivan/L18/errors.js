function errorFactory(errorConstructor) {
  errorConstructor.prototype = Object.create(Error.prototype);
  errorConstructor.prototype.constructor = errorConstructor;
}

function FieldValidationError(message, target) {
  var error = Error.call(this, message);
  this.name = this.constructor.name;
  this.message = error.message;
  this.target = target;
  this.stack = error.stack;
}

errorFactory(FieldValidationError);