function checkSpam (str) {
  var str = str.toLowerCase();
  return str.indexOf('spam') > -1 || str.indexOf('sex') > -1 ? true : false;
};