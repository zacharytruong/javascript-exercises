const removeFromArray = function(arr1, num0, num1 = '', num2 = '', num3 = '') {
    const arr2 = [num0, num1, num2, num3];
    arr2.forEach(compareValues);
    function compareValues(arr2Value){
        arr1.forEach(removeValue);
        function removeValue(arr1Value, arr1Index){
            if (arr1Value === arr2Value) arr1.splice(arr1Index, 1);
        }
    }
    return arr1;
}

// Do not edit below this line
module.exports = removeFromArray;
