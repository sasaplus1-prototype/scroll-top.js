'use strict';

var db, dd;

function get() {
  var result;

  if (window.pageYOffset !== void 0) {
    result = window.pageYOffset;
  } else {
    db || (db = document.body);
    dd || (dd = document.documentElement);

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
