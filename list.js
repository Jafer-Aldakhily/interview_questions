class Node {
    constructor(val)
    {
        this.val = val
        this.next = null 
    }
}


class LinkedList{
    constructor()
    {
        this.head = null
        this.tail = null
        this.length = 0
    }

// A -> b
    push = (val) => {
        const newNode = new Node(val)
        if(!this.head)
        {
            this.head = newNode
            this.tail = this.head
        }else{
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }

    checkWord = () => {
        let word = ""
        let currentHead = this.head
        word += currentHead.val
        while(currentHead.next !== null)
        {
            word += currentHead.next.val
            currentHead = currentHead.next
        }
        
       const result =  this.reverseWord(word)
       return result
    }

    reverseWord = (word) => 
    {
        // moom
        let splitWord = word.split("") // ['m','o','o','m']
        splitWord.reverse(); // [m,o,o,m]
        let joinedWord = splitWord.join("") // moom
        
        if(word == joinedWord) // moom == moom it is true
        {
            return true
        }else{
            return false
        }
    }


}


let list = new LinkedList
const word = "moom"
for (let i = 0; i < word.length; i++) {
    list.push(word[i])
}

// console.log(list);
console.log(list.checkWord());



