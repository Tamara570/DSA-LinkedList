/*Walk through the binary search tree code in the curriculum and understand it well.
Then write a BinarySearchTree class with its core functions (insert(), remove(), find()) 
from scratch.

*Create a binary search tree called BST and insert 3,1,4,6,9,2,5,7 into your tree. 
    Compare your result with the result from the 1st exercise.

*Create a binary search tree called BST and insert E A S Y Q U E S T I O N into your tree.
    Compare your result with the result from the 1st exercise.*/


class BinarySearchTree {
    constructor(key = null, value = null, parent = null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }

    insert(key, value) {
        //if the tree is empty then this key will be the root node of the tree
        if (this.key === null) {
            this.key = key;
            this.value = value;
        }

        //if the tree already exists, start at the root and compare it to the key you want to insert

        //if the new key is less than the node key, put it on the left side
        else if (key < this.key) {
            //if the node doesn't have a left child, add new node as left child
            if (this.left === null) {
                this.left = new BinarySearchTree(key, value, this);
            }

            //if the node does have a left child, recurse
            else {
                this.left.insert(key, value);
            }
        }

        //if the new key is greater than the node key, put it on the right side
        else {
            if (this.right === null) {
                this.right = new BinarySearchTree(key, value, this)
            }

            else {
                this.right.insert(key, value);
            }
        }
    }

    find(key) {
        //IF this item is found at the root, then return the value
        if (this.key === key) {
            return this.value;
        }

        else if (key < this.key && this.left) {
            return this.left.find(key);
        }

        else if (key > this.key && this.right) {
            return this.right.find(key);
        }
        // You have searched the tree and the item is not in the tree
        else {
            throw new Error('Key Error');
        }
    }

    remove(key) {
        if (this.key == key) {
            if (this.left && this.right) {
                const successor = this.right._findMin();
                this.key = successor.key;
                this.value = successor.value;
                successor.remove(successor.key);
            }
            /* If the node only has a left child, 
               then you replace the node with its left child */
            else if (this.left) {
                this._replaceWith(this.left);
            }
            /* And similarly if the node only has a right child 
               then you replace it with its right child */
            else if (this.right) {
                this._replaceWith(this.right);
            }
            /* If the node has no children then
               simply remove it and any references to it 
               by calling "this._replaceWith(null)" */
            else {
                this._replaceWith(null);
            }
        }
        else if (key < this.key && this.left) {
            this.left.remove(key);
        }
        else if (key > this.key && this.right) {
            this.right.remove(key);
        }
        else {
            throw new Error('Key Error');
        }
    }
}

