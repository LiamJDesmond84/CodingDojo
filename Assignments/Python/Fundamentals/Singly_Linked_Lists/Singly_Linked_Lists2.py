

class Node:
    def __init__(self, val):
        self.value = val
        self.next = None

class LinkList:
    def __init__(self):
        self.head = None
    def add_to_Front(self,val):
        new_Node = Node(val)
        current_head = self.head
        new_Node.next = current_head
        self.head = new_Node
        return self
    def print_values(self):
        runner = self.head
        while (runner != None):
            print(runner.value)
            runner = runner.next
    def return_to_Back(self, val):
        if self.head == None:
            self.add_to_Front(self, val)
            return self
        new_Node = Node(val)
        runner = self.head
        while (runner != None):
            runner = runner.next
        runner = new_Node
        return self
    def remove_from_Front(self,val):
        if self.head != None:
            self.head = self.head.next
            return self
    def remove_from_Back(self,val):
        if self.head.next != None:
            temp = self.head
            self.head = self.head.next
            temp = None
            return self
        else:
            temp = self.head
            while(temp.next != None):
                temp = temp.next
            lastNode = temp.next
            temp.next = None
            lastNode = None
            return self

my_list = LinkList()
my_list.add_to_Front("are").add_to_Front("Linked lists").return_to_Back("fun!").remove_from_Front("one").remove_from_Back("two").print_values()    # chaining, yeah!