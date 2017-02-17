var $ = require('jquery');

var Person = require('./modules/Person');

class Adult extends Person {
    payTaxes(){
        colsole.log(this.name + "now owes $0 in taxes.");
      
    }
}


var john = new Person("John Doe", "blue");
john.greet();

var jane = new Person("Jane Smith", "reddish");
jane.greet();
jane.payTaxes();



