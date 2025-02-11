// MAP Polyfill

Array.prototype.Mymap = function (cb){
  let arr = [];
  for(let i = 0; i < this.length; i++){
    arr.push(cb(this[i], i, this));
  }
  return arr;
}

// FILTER Polyfill

Array.prototype.Myfilter = function (cb){
  let arr = [];
  for(let i = 0; i < this.length; i++){
    if(cb(this[i], i, this)){
      arr.push(this[i]);
    }
  }
  return arr;
}

// REDUCE Polyfill

Array.prototype.Myreduce = function (cb, initialValue){
  let accumulator = initialValue
  for(let i = 0 ; i < this.length; i++){
    accumulator = accumulator?  cb(accumulator, this[i], i, this): this[i]
  }
  return accumulator;
}

// FOREACH Polyfill

Array.prototype.MyforEach = function (cb){
  for(let i = 0; i < this.length; i++){
    cb(this[i], i, this);
  }
}

// SPLICE Polyfill

Array.prototype.Mysplice = function (index, deleteCount, ...items){
  let removed = [];
  if(deleteCount === 0){
    return this;
  }
  for(let i = index; i < index + deleteCount; i++){
    removed.push(this[i]);
  }
  this.splice(index, deleteCount);
  this.push(...items);
  return removed;
}

// Call Polyfill

Function.prototype.Mycall = function (context= {}, ...args){
  if(typeof this !== 'function'){
    throw new Error(this + 'This is not a Callable');
  }
  context.fn = this;
  const result = context.fn(...args); // Execute and capture the result
  delete context.fn; // Clean up
  return result;
}

// Apply Polyfill

Function.prototype.Myapply = function (context={}, args=[]){
  if(typeof this !== 'function'){
    throw new Error(this + 'This is not a Callable');
  }
  if(!Array.isArray(args)){
    throw new Error(this + 'This is not a Array');
  }
  context.fn = this;
  const result = context.fn(...args); // Execute and capture the result
  delete context.fn; // Clean up
  return result;
}

// Bind Polyfill

Function.prototype.Mybind = function (context, ...args) {
  if (typeof this !== 'function') {
    throw new Error(this + ' is not callable');
  }

  return function (...innerArgs) {
    context.fn = this;
    const result = context.fn(...args, ...innerArgs);
    delete context.fn; // Clean up
    return result;
  };
};


// Once Polyfill

const once = (func, context) => {
  let ran;
  return function () {
    if (func) {
      ran = func.apply(context || this, arguments);
      func = null
    }
    return ran
  };
};

// Memoize Polyfill

const memoize = (func, context) => {
  let cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (!cache[key]) {
      cache[key] = func.call(context || this, ...args);
    }
      return cache[key];
  };
};

// Debounce Polyfill

const debounce = (cb, delay) => {
  let timer;
  return function (...args) {
    if(timer) clearTimeout(timer);
    timer = setTimeout(() => cb(...args), delay);
  };
};

// Throttle Polyfill

const throttle = (cb, delay) => {
  let last = 0;
  return function (...args) {
    const now = Date.now();
    if (now - last > delay) {
      last = now;
      cb(...args);
    }
  };
};


// Api hit in context API

// import React, { createContext, useState, useEffect, useContext } from 'react';

// interface DataContextType {
//   data: any[];
//   loading: boolean;
// }

// const DataContext = createContext<DataContextType | undefined>(undefined);

// export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [data, setData] = useState<any[]>([]);
//   const [loading, setLoading] = useState<boolean>(false);

//   const fetchData = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const jsonData = await response.json();
//       setData(jsonData);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <DataContext.Provider value={{ data, loading }}>
//       {children}
//     </DataContext.Provider>
//   );
// };

// export const useDataContext = (): DataContextType => {
//   const context = useContext(DataContext);
//   if (!context) {
//     throw new Error('useDataContext must be used within a DataProvider');
//   }
//   return context;
// };
