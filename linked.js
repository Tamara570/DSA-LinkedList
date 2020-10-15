//Create a linked list class and its core functions: insertFirst, insertLast, remove, find
/*class LinkedList {
    constructor(head) {
        this.head = null;
    }

    insertFirst (item) {
        this.head = new _Node(item, this.head);
    }

    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null)
        }
    }

    remove(item) {
        //if list is empty
        if (!this.head) {
            return null
        }
        //if node to be removed is head, make next node head
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }

        let currentNode = this.head;
        let previousNode = this.head;

        while ((currentNode !== null) && (currentNode.value !== item)) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        if (currentNode === null) {
            console.log('Item not found')
            return;
        }
        previousNode.next = currentNode.next;
    }

    find(item) {
        let currentNode = this.head
        //if list is empty
        if (!this.head) {
            return null;
        }
        while (currentNode.value !== item) {
            //return null if its the end of the list and item not found
            if (currentNode.next === null) {
                return null
            }
            else {
                currentNode = currentNode.next;
            }
        }
        return currentNode;
    }
};*/


//Creating a singly linked list
class _Node {
    constructor(value, next) {
        this.value = value
        this.next = next
    }
}

class SLL {
    constructor(head) {
        this.head = null;
    }
    insertFirst (item) {
        this.head = new _Node(item, this.head);
    }
    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null)
        }
    }

    remove(item) {
        //if list is empty
        if (!this.head) {
            return null
        }
        //if node to be removed is head, make next node head
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }

        let currentNode = this.head;
        let previousNode = this.head;

        while ((currentNode !== null) && (currentNode.value !== item)) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        if (currentNode === null) {
            console.log('Item not found')
            return;
        }
        previousNode.next = currentNode.next;
    }

    find(item) {
        let currentNode = this.head
        //if list is empty
        if (!this.head) {
            return null;
        }
        while (currentNode.value !== item) {
            //return null if its the end of the list and item not found
            if (currentNode.next === null) {
                return null
            }
            else {
                currentNode = currentNode.next;
            }
        }
        return currentNode;
    }

}
const node = new _Node("Apollo", null)
const ll = new SLL(node)

ll.insertFirst('Starbuck');
ll.insertFirst('Husker');
ll.insertFirst('Helo');
ll.insertFirst('Boomer');
ll.insertFirst('Apollo');

ll.insertLast('Tauhida');

console.log(ll.head.value)
console.log(ll.head.next.value)
console.log(ll.head.next.next.value)
console.log(ll.head.next.next.next.value)
console.log(ll.head.next.next.next.next.value)
console.log(ll.head.next.next.next.next.next.value)