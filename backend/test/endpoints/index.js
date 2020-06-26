let server = require('./startup.test');
let close = require('./close.test');
let  {startCredentialPlan} = require("./credential");
let  {startTagPlan} = require("./tag");
let  {startMessagePlan} = require("./message");

startCredentialPlan();
startTagPlan();
startMessagePlan();
close(server);