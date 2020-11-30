//1. Create a stack class
class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    push(data) {
        /* If the stack is empty, then the node will be the
           top of the stack */
        if (this.top === null) {
            this.top = new _Node(data, null);
            return this.top;
        }

        /* If the stack already has something, 
           then create a new node,
           add data to the new node, and
           have the pointer point to the top */
        const node = new _Node(data, this.top);
        this.top = node;
    }

    pop() {
        /* In order to remove the top of the stack, you have to point
           the pointer to the next item and that next item becomes the
           top of the stack */
        const node = this.top;
        this.top = node.next;
        return node.data;
    }

    peek(){
        //allows you to look at the top of the stack without removing it
        if (this.top === null) {
            return null;
        }
        const node = this.top;
        return node.data;
    }

    isEmpty() {
        //allows you to check if the stack is empty or not
        if (this.top === null) {
            return ;
        } else {
            return false;
        }
    }

    display() {
        //to display the stack
        if (this.top === null) {
            return null;
        }
        //itieration using while loop
        

    }
}
const node = new _Node("Kirk", this.top)
const starTrek = new Stack(node)

starTrek.push('Kirk')
starTrek.push('Spock')
starTrek.push('McCoy')
starTrek.push('Scotty')

starTrek.peek();
starTrek.isEmpty();
starTrek.display();



//Check for palindromes using a stack
function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    //reverse the word and compare to see if its true or false - use pop last in first out



}

// True, true, true, false
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));
