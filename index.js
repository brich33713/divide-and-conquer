function countZeroes(arr){
    if(arr[0] === 0) return arr.length
    if(arr[arr.length-1] === 1) return 0

    while(arr[0] !== 0 && arr[arr.length-1] !== 1 && arr.length !== 0){
        if(arr[Math.floor(arr.length/2)] === 1 && arr[Math.floor(arr.length/2)+1] === 0){
            arr.splice(0,Math.floor(arr.length/2)+1)
        } else if(arr[Math.floor(arr.length/2)] === 0 && arr[Math.floor(arr.length/2)-1] === 1){
            arr.splice(0,Math.floor(arr.length/2))
        } else if(arr[Math.floor(arr.length/2)] === 1 && arr[Math.floor(arr.length/2)+1] === 1){
            arr.splice(0,Math.floor(arr.length/2)+2)
        } else {
            arr.shift()
        }
    }

    return arr.length
}

function sortedFrequency(arr,tar){
    if(arr[0] === tar && arr[arr.length-1] === tar) return arr.length

    while((arr[0] !== tar || arr[arr.length-1] !== tar) && arr.length !== 0){
        //not and target to right
        if(arr[Math.floor(arr.length/2)] !== tar && arr[Math.floor(arr.length/2)+1] === tar){
            arr.splice(0,Math.floor(arr.length/2)+1)
        } 

        //yes and not to left
        else if(arr[Math.floor(arr.length/2)] === tar && arr[Math.floor(arr.length/2)-1] !== tar){
            arr.splice(0,Math.floor(arr.length/2))
        } 

        //yes and not to right
        else if(arr[Math.floor(arr.length/2)] === tar && arr[Math.floor(arr.length/2)+1] !== tar){
            arr.splice(Math.floor(arr.length/2)+1)
        }
        
        //not and not to the right
        else if(arr[Math.floor(arr.length/2)] !== tar && arr[Math.floor(arr.length/2)+1] !== tar){
            arr.splice(Math.floor(arr.length/2),Math.floor(arr.length/2)+2)
        } 
        
        //yes and to the right yes and to the left yes
        else if(arr[0] === tar){
            arr.pop()
        }

        else {
            arr.shift()
        }
    }
    
    if(arr.length === 0){
        return -1
    } else {
        return arr.length
    }
}

function findRotatedIndex(arr,tar){
    if(arr[arr.length-1] !== tar){
        while(arr[arr.length-1] !== tar && arr.length !== 1){
            if(arr[Math.round(arr.length/2)] > tar){
                arr.splice(Math.round(arr.length/2))
            } else if (arr[Math.round(arr.length/2)] < tar){
                arr.pop()
            } else {
                arr.splice(Math.round(arr.length/2))
            }
        }
    }

    if(arr.length === 1 && arr[0] !== tar){
        console.log(-1)
        return -1
    } else {
        console.log(arr.length-1)
        return arr.length-1
    }
}





function findRotationCount(arr){
    if(arr[0] < arr[arr.length-1]) return 0
    while(arr[0] > arr[arr.length-1]){
        console.log(arr)
        if((arr[Math.floor(arr.length/2)] < arr[Math.floor(arr.length/2)+1]) && (arr[Math.floor(arr.length/2)] > arr[Math.floor(arr.length/2)-1])){
            
            arr.pop()
        } else {
            arr.splice(Math.floor(arr.length/2))
        }
    }
    return arr.length
}

function findFloor(arr,tar){
    if(arr[arr.length-1] <= tar) return arr[arr.length-1]
    if(arr[0] > tar ) return -1

    while(arr.length !== 0){
        if(arr[Math.floor(arr.length/2)] > tar){
            arr.splice(Math.floor(arr.length/2))
        }

        else if(arr[Math.floor(arr.length/2)] === tar){
            arr = [tar]
            break;
        } 
        
        else if (arr[Math.floor(arr.length/2)] < tar && arr[arr.length-1] <= tar){
            arr = [arr[arr.length-1]]
            break;
        }
    }

    if(arr.length === 0){
        return -1
    } else {
        return arr[0]
    }
}