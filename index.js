'use strict';

var db, dd;

function get() {
  var result;

  db || (db = document.body);
  dd || (dd = document.documentElement);

  if (window.pageYOffset !== void 0) {
    result = window.pageYOffset;
  } else {
    result = dd.scrollTop || db.parentNode.scrollTop || db.scrollTop;
  }

  return result;
}

function set(value) {
  db || (db = document.body);
  dd || (dd = document.documentElement);

  db.scrollTop = value;
  dd.scrollTop = value;
}

module.exports = {
  get: get,
  set: set
};
