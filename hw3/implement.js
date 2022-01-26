/******************map method *******************/
Array.prototype.myMap= function(cb, context) {
    let newArr = [];
    let self = this;
    //this refers to invoked array
    for (let i=0; i<self.length; i++) {
    //Push each cb return value to newArr
      newArr.push(cb.call(context, self[i], i, self))
    }
    return newArr;
  }
  let arr = [1, 2, 3,4, 5];
  let result = arr.myMap(function(item) {
   console.log(this)
    //[1, 2, 3]
    return item*2;
  }, [1, 2, 3])
  //result [2, 4, 6, 8, 10]


/*************filter method***************/
Array.prototype.myFilter = function(cb, context) {
    let newArr = [];
    let self = this;
    //this refers to invoked array
    for (let i=0; i<self.length; i++) {
        //Push the cb value true to newArr
      let result = cb.call(context, self[i], i, self);
      if (result) {
        newArr.push(arr[i])
      }
    }
    return newArr;
  }

  let arr = [1, 2, 3,4, 5];
  let result = arr.myFilter(function(item) {
    console.log(this)
    //[1, 2, 3]
    return item > 2;
  }, [1, 2, 3])


  /****************reduce method*******************/
  Array.prototype.myReduce = function (cb, initValue) {
    const array = this;
    let acc = initValue ? initValue : array[0];
    let startIndex = initValue ? 0 : 1;
    for (let i = startIndex, len = array.length; i < len; i++) {
      acc = cb(acc, array[i], i, array)
    }
    return acc
  }
  

  /*************every method ********************/
  Array.prototype.myEvery= function(cb, context) {
    let self = this;
    
    for (let i=0; i<self.length; i++) {
    //Return false if one cb value is false and true otherwise
      let result = cb.call(context, self[i], i, self)
      if (!result) {
        return false
      } 
    }
    return true;
  }
  let arr = [1, 2, 3,4, 5];
  let result = arr.myEvery(function(item) {
    console.log(this)
    //【1， 2， 3】
    return item > 1;
  }, [1, 2, 3])


/*********some method *************/
Array.prototype.mySome= function(cb, context) {
    let self = this;
    
    for (let i=0; i<self.length; i++) {
      let result = cb.call(context, self[i], i, self)
      if (result) {
        return true
      } 
    }
    return false;
  }
  let arr = [1, 2, 3,4, 5];
  let result = arr.mySome(function(item) {
    console.log(this)
    //【1， 2， 3】
    return item > 1;
  }, [1, 2, 3])
