var Roll2Win = artifacts.require("./Roll2Win.sol");
//var Amazon = artifacts.require("./Amazon.sol");

module.exports = function(deployer) {
  deployer.deploy(Roll2Win);
  //deployer.deploy(Amazon);
};
