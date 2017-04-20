var Interswitch = require('interswitch');
var Constants = require('./Constants.js');
var BillPayment = function(clientId, clientSecret, env){
    if(!env) env = "SANDBOX";
    this.interswitch = new Interswitch(clientId, clientSecret, env);
}

BillPayment.prototype.get_billers = function(callback){
    this.interswitch.send({
        url:Constants.GET_BILLERS_URL, 
        method:Constants.GET
    }, 
    function(err, response, body){
        if(err) {
            callback(err);
        }
        else {
            callback(null, response);
        }
    });
};
module.exports = BillPayment;