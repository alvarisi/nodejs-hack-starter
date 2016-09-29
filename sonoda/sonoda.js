var eventEmitter = new require('events').EventEmitter();
var sonoda = function() {};

sonoda.prototype = Object.create(require('events').EventEmitter.prototype);

sonoda.prototype.start = function() {
    var express = require('express');
    var app = express();
    var bodyParser = require('body-parser');
    var self = this;

    app.use(bodyParser.json());

    app.post('/testcall', function(req, res) {
        console.log("test %j", req.body);
        self.testcall(req.body, res);
    });

    //BRI Tbank
    app.post('/bri/merchant/register', function(req, res) {
        console.log("req %j", req.body);

    });

    var server = app.listen(3000, function() {
        var figlet = require('figlet');

        figlet('SONODA', function(err, data) {
            if (err) {
                console.log('Something went wrong...');
                console.dir(err);
                return;
            }
            console.log(data)
            console.log("Sonoda is up and running!! have a nice day!");

            return;
        });

        return;
    });

    return;
}

sonoda.prototype.testcall = function(query, res) {
    //call function here to facade
    var asyncTask = require('async');
    var sonodaFacade = require("./sonoda-facade.js");

    asyncTask.waterfall([
        function(callback) {
            sonodaFacade.on("success", function(response) {
                return callback(null, response);
            });

            sonodaFacade.on("error", function(err) {
                return callback(err, null);
            });

            sonodaFacade.register(query);
        }
    ], function(err, result) {
        self.responseGeneration(res, err, result);
        return;
    });

    return;


}

sonoda.prototype.responseGeneration = function(res, err, result){
    if (err) {
        var response = {
            success : '0',
            data : '{}',
            message : err
        };
        return res.status(500).json(response);
    } else {
        var response = {
                    success : '0',
                    data : result,
                    message : "success"
                };
        return res.json(response);
    }
}

sonoda.prototype.regiterMerchant = function(params, res) {

    var asyncTask = require('async');
    var sonodaFacade = require("./sonoda-facade.js");

    asyncTask.waterfall([
        function(callback) {
            sonodaFacade.on("success", function(response) {
                return callback(null, response);
            });

            sonodaFacade.on("error", function(err) {
                return callback(err, null);
            });

            sonodaFacade.regiterMerchant(params);
        }
    ], function(err, result) {
        self.responseGeneration(res, err, result);
        return;
    });

    return;
}

sonoda.prototype.registrasiTBank = function(params, res) {

    var asyncTask = require('async');
    var sonodaFacade = require("./sonoda-facade.js");

    asyncTask.waterfall([
        function(callback) {
            sonodaFacade.on("success", function(response) {
                return callback(null, response);
            });

            sonodaFacade.on("error", function(err) {
                return callback(err, null);
            });

            sonodaFacade.registrasiTBank(params);
        }
    ], function(err, result) {
        self.responseGeneration(res, err, result);
        return;
    });

    return;
}

sonoda.prototype.infoSaldoTBank = function(params, res) {

    var asyncTask = require('async');
    var sonodaFacade = require("./sonoda-facade.js");

    asyncTask.waterfall([
        function(callback) {
            sonodaFacade.on("success", function(response) {
                return callback(null, response);
            });

            sonodaFacade.on("error", function(err) {
                return callback(err, null);
            });

            sonodaFacade.infoSaldoTBank(params);
        }
    ], function(err, result) {
        self.responseGeneration(res, err, result);
        return;
    });

    return;
}

sonoda.prototype.inquiryBelanjaTBank = function(params, res) {

    var asyncTask = require('async');
    var sonodaFacade = require("./sonoda-facade.js");

    asyncTask.waterfall([
        function(callback) {
            sonodaFacade.on("success", function(response) {
                return callback(null, response);
            });

            sonodaFacade.on("error", function(err) {
                return callback(err, null);
            });

            sonodaFacade.inquiryBelanjaTBank(params);
        }
    ], function(err, result) {
        self.responseGeneration(res, err, result);
        return;
    });

    return;
}

sonoda.prototype.requestTokenTBank = function(params, res) {

    var asyncTask = require('async');
    var sonodaFacade = require("./sonoda-facade.js");

    asyncTask.waterfall([
        function(callback) {
            sonodaFacade.on("success", function(response) {
                return callback(null, response);
            });

            sonodaFacade.on("error", function(err) {
                return callback(err, null);
            });

            sonodaFacade.requestTokenTBank(params);
        }
    ], function(err, result) {
        self.responseGeneration(res, err, result);
        return;
    });

    return;
}

sonoda.prototype.topUpTBank = function(params, res) {

    var asyncTask = require('async');
    var sonodaFacade = require("./sonoda-facade.js");

    asyncTask.waterfall([
        function(callback) {
            sonodaFacade.on("success", function(response) {
                return callback(null, response);
            });

            sonodaFacade.on("error", function(err) {
                return callback(err, null);
            });

            sonodaFacade.topUpTBank(params);
        }
    ], function(err, result) {
        self.responseGeneration(res, err, result);
        return;
    });

    return;
}

sonoda.prototype.transferTBank = function(params, res) {

    var asyncTask = require('async');
    var sonodaFacade = require("./sonoda-facade.js");

    asyncTask.waterfall([
        function(callback) {
            sonodaFacade.on("success", function(response) {
                return callback(null, response);
            });

            sonodaFacade.on("error", function(err) {
                return callback(err, null);
            });

            sonodaFacade.transferTBank(params);
        }
    ], function(err, result) {
        self.responseGeneration(res, err, result);
        return;
    });

    return;
}


sonoda.prototype.belanjaTBank = function(params, res) {

    var asyncTask = require('async');
    var sonodaFacade = require("./sonoda-facade.js");

    asyncTask.waterfall([
        function(callback) {
            sonodaFacade.on("success", function(response) {
                return callback(null, response);
            });

            sonodaFacade.on("error", function(err) {
                return callback(err, null);
            });

            sonodaFacade.belanjaTBank(params);
        }
    ], function(err, result) {
        self.responseGeneration(res, err, result);
        return;
    });

    return;
}

sonodaFacade.prototype.gantiPINTBank = function(params) {
    var sonodaCore = require('./sonoda-core.js');
    var self = this;

    sonodaCore.gantiPINTBank(params);

    sonodaCore.on("success", function(response) {
        self.success(response);
    });

    sonodaCore.on("error", function(err) {
        self.error(err);
    });
}

module.exports = new sonoda();