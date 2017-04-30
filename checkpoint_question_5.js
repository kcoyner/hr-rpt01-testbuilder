const os = require('os');
const _ = require(`${os.homedir()}/.npm-global/lib/node_modules/underscore/underscore.js`);

/* Given this array of objects describing your collection of github stickers,
 * what underbar function(s) can you use to return an array containing only
  * those stickers where you have fewer than 5? each, filter, reduce, map?
*/

var githubStickers = [
  {
    name: "Octocat",
    qty: 12
  }, 
  {
    name: "Luchadortocat",
    qty: 2
  }, 
  {
    name: "Gracehoppertocat",
    qty: 5
  }
];

/*  using _.each  */
let mapResult = [];
var mapOut = _.map(githubStickers, function(num){
  if (num.qty < 5) {
    mapResult.push(num);
  }
});
/* ------------- */


/*  using _.filter  */
var filterOut = _.filter(githubStickers, function(num){return num.qty < 5;});
/* ------------- */


/*  using _.reduce  */
var reduceOut = _.reduce(githubStickers, function(memo, num){ 
  if (num.qty < 5) {
    memo.push(num);
  }
  return memo;
}, []);
/* ------------- */


/*  using _.each  */
let eachResult = [];
_.each(githubStickers, function(num){
  if (num.qty < 5){
    eachResult.push(num);
  }
  return eachResult;
});
/* ------------- */


console.log(mapResult);
console.log(filterOut);
console.log(reduceOut);
console.log(eachResult);


