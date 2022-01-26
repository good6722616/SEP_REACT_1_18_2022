/******************map method *******************/
Array.prototype.Map = function(callback) {
    const resultArray = [];
    for (let index = 0; index < this.length; index++) {
        resultArray.push(callback(this[index], index, this));
    }
    return resultArray;
}



/*************filter method***************/
Array.prototype.Fliter =  function (fun) {
    var filtered = [];
    for(let i = 0; i < this.length; i++) {
      if (fun(this[i], i, this)) filtered.push(this[i]);
    }
    return filtered;
};



  /****************reduce method*******************/
Array.prototype.Reduce = function (cb, initValue) {
const array = this;
let acc = initValue ? initValue : array[0];
let startIndex = initValue ? 0 : 1;
for (let i = startIndex, len = array.length; i < len; i++) {
    acc = cb(acc, array[i], i, array)
}
return acc
}
  

  /*************every method ********************/
Array.prototype.Every = function(callback, context) {
    for (var i = 0; i < this.length; i++) {
        if (!callback.call(context, this[i], i, this))
            return false;
    }
    return true;
};

/*********some method *************/
Array.prototype.Some = function(callback, context) {
    for (var i = 0; i < this.length; i++) {
        if (callback.call(context, this[i], i, this))
            return true;
    }
    return false;
};
