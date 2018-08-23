
const utilities  = {
printIfError:(expectedRc, jsonResponse) => {
  if(expectedRc != jsonResponse.responseCode){
    console.error(jsonResponse);
  }
},
low:function(text){
  return text.toLowerCase();
},
compare:function(text, regexPattern){
  var regexp = new RegExp(regexPattern);
  const doesMatch = regexp.test(text);
  if(!doesMatch){
    console.error('Failed to compare : ')
    console.error(text);
    console.error('With :');
    console.error(regexPattern);
  }
  return doesMatch;
}
}
module.exports = utilities;
