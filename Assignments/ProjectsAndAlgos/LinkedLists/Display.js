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
    findSum() {
            //We first have to tell our train attendant that we want them to start at the front of the train
            let runner=this.head
            let sum=0
            //Since a Linked List does not know how many nodes is within it, we will not be able to use a for loop to             iterate, instead we'll use a while
            //Also we need to tell them when to stop otherwise they will just run off the end of the train
            while(runner !== null){
                //Since the runner is set to the current node, its value will be equal to the value of the node they                 are currently on
                sum+=runner.data
                //Tell our attendant to move to the next car
                runner=runner.next
            }
            return sum
        }

    contains(value) {
            // is "value" to be found anywhere in this list?
            let runner = this.head
            // let next = runner.next;
            
            while(runner) {
                if (runner.data == value) {

                    return true;
                }

                    runner = runner.next;

                
            }

                return false;



        }

        // contains(value) {
        //     var runner = this.head;
        //     while(runner) {
        //         if(runner.value === value) {
        //             return true;
        //         }
        //         runner = runner.next;
        //     }
        //     return false;
        // }

        length() {
            
            let runner = this.head;
            let count = 0;

            while(runner) {
                count++;
                runner = runner.next;
            }
            return count;
        }

        display() {

            var list = "";

            if(!this.head) {
                return "";
            }

            list += this.head.data;

            let runner = this.head.next;
            
            while(runner) {
                list += " " + runner.data;
                runner = runner.next;
            }
            return list;
        }
}

var myLinkedList = new LinkedList();
var myNode = new Node(10);
var myNode2 = new Node(8);
var myNode3 = new Node(5);
var myNode4 = new Node(1);
var myNode5 = new Node(7);

// myLinkedList.addFront(3);
myLinkedList.addFront(9);
// myLinkedList.addFront(6);
// myLinkedList.addFront(2);


myLinkedList.head = myNode;
myNode.next = myNode2;
myNode2.next = myNode3;
myNode3.next = myNode4;
myNode4.next = myNode5;

console.log(myLinkedList);
console.log(myNode);
console.log(myNode2);

var test = myLinkedList.contains(9);

console.log(test);

var test2 = myLinkedList.length();

console.log(test2);

console.log(myLinkedList.display());