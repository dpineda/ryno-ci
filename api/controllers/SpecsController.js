/**
 * SpecsController
 *
 * @description :: Server-side logic for managing specs
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var fs = require("fs");
var exec = require('child_process').exec;
var path = "./specs";

module.exports = {
	list: function (req, res) {
	    return res.json(fs.readdirSync(path));
	},
	execute: function ( req, res){
		var spec = req.param("id");
		var command = "jasmine-node " + path + "/" + spec; 
		var child = exec(command, function (error, stdout, stderr) {
			if(error) {
	   			return res.json({"result":error + " : " + stdout + " : " + stderr});	
	   		} else {
	   			return res.json({"result":stdout});
	   		}
	   });
		
	}
	
};

