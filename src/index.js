
// You should implement your task here.

module.exports = function towelSort (arr) {
    let array=[];
    if(arr==null){
        return []
    }
    for(let i=0;i<arr.length;i++){
      if(i%2==0){
      for(let j=0;j<arr[i].length;j++){
        array.push(arr[i][j])
      }
      }
      else{
        for(let j=arr[i].length-1;j>=0;j--){
          array.push(arr[i][j])
        }
      }
      }
      return array
    }
