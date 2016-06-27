'use strict';

var db = document.body,
    dd = document.documentElement;

function get() {
  var result;

  if (window.pageYOffset !== void 0) {
    result = window.pageYOffset;
  } else {
    result = dd.scrollTop || db.parentNode.scrollTop || db.scrollTop;
  }

  return result;
}

function set(value) {
  db.scrollTop = value;
  dd.scrollTop = value;
}

module.exports = {
  get: get,
  set: set
};
