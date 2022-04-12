class Node {
    constructor(data) {
        this.data = data;
        this.next = null;              
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    addFront(val) {
        // Creating a new node object with the value provided
        let new_node = new Node(val);
    
        // Checking to see if the current list does not have a head node (if the list is empty)
        // If the list is empty, place the new node as the head 
        if(!this.head) {
            this.head = new_node;
            return this;
        }
        // If the list is not empty, assign the head to be the next node to the new node (Blue Arrow in picture above)
        new_node.next = this.head;
        // Then finally assign the new_node to be the new head of the list (Red Arrow in picture above)
        this.head = new_node;
        return this;
    }




    removeFront() {
        if(this.head != null) {
            // Value of this.head that we're going to remove
            var removedNode = this.head;
            
            // Moves the head to the 2nd node, will then become the new head of the list after removing Node from the front.
            this.head = removedNode.next;

            // Removing the Node from the front.
            removedNode.next = null;
            return this.head;
        }
        else {
            return null;
        }
    }

    front() {
        
        if(this.head != null) {
            return this.head.value;
        }
        else {
            return null;
        }
    }


}

// Empty list
var myLinkedList = new LinkedList();
var myNode = new Node(10);
var myNode2 = new Node(8);

myLinkedList.addFront(3);
myLinkedList.addFront(9);
myLinkedList.addFront(6);
myLinkedList.addFront(2);


myLinkedList.head = myNode;
myNode.next = myNode2;

console.log(myLinkedList);
console.log(myNode);
console.log(myNode2);
