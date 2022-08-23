class Queue{
    constructor(keyValue)
    {
        this.items = []
        this.keyValue = keyValue
        this.length = 0
    }

    push = (val) => {
        // code
        this.items.push(val)
        this.length++
    }

    reOrderQueue = () => {
        let i = 0
        let count = 0
        let reverseArray = []
        let targetIndex = 0
        while(this.length !== 0)
        {
            if(this.items[i] == this.keyValue)
            {  
                let targetIndex = this.items.indexOf(this.items[i])
                for(let x = 0; x < targetIndex ; x++)
                {
                    reverseArray[x] =  this.items[x]
                    count++
                }

                while(count > 0){
                    this.items.shift()
                    count--
                } 
                reverseArray.reverse()    
            }
            i++
            this.length--
        }
        this.sortFunction(targetIndex,reverseArray)
    }
    
    sortFunction = (targetIndex,reverseArray) => {
        let arr = [...this.items]
        arr.splice(targetIndex + reverseArray.length - 1,0,...reverseArray)
        console.log(arr);

        
        
    }
}

let q = new Queue(3)
q.push(1)
q.push(2)
q.push(3)
q.push(4)
q.push(5)
console.log(q.items);
q.reOrderQueue();










