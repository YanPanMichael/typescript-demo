for (var i = 0; i < 10; i++)  {
    setTimeout(function() {
      console.log('var, ', i)
    }, 100 * i)
}

for (var i = 0; i < 10; i++)  {
  (function(j){
    setTimeout(function() {
      console.log('var, gai, ', j)
    }, 100 * j)
  })(i)
}

for (let i = 0; i < 10; i++)  {
    setTimeout(function() {
      console.log('let, ', i)
    }, 100 * i)
}