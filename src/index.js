/**
 * @param preferences - an preferences of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences) {
  var trianglesArray = [],
      countOfTriangles = 0; 
  
  for(var i=0; i < preferences.length; i++){
    var n = i + 1,
        k = preferences[n - 1],
        m = preferences[k - 1];
        
      if(trianglesArray.indexOf(n) < 0 && k != n){
        
        if(preferences[m - 1] == n){         
         countOfTriangles = countOfTriangles + 1;
         trianglesArray.push(n,k,m);  
        }
      }      
  }  
  return countOfTriangles;
};
