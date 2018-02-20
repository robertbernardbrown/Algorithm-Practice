class LinkedList{
  constructor(){
    this.head = null;
    this.last = null;
    this.length = 0;
  }
  
  add(data){
    var node = new Node(data);
    
    //if first node set head and tail
    if(!this.head){
      this.head = node;
      this.last = node;
    }
    else{
      this.last.next = node;
      this.last = node;
    }
    this.length++;
  }
  
  remove(index){
    var current = this.head;
    var prev;
    var count = 0;
    
    //iterate to the proper spot for removal, tracking previous and current node
    while(current.next && count != index){
      prev = count? current : null;
      current = current.next;
      count++;
    }
    
    //change previous to point to next and skip over current
    prev.next = current.next;
    this.length--;
    
    //if the last node was removed, update last reference
    if(index === this.length){
      this.last = prev;
    }   
  }
  
  search(index){
    var current = this.head;
    var count = 0;
    
    //iterate to the proper spot
    while (current.next && count != index){
      current = current.next;
      count++;
    }
    
    return current.data;
  }
  
  print(){
    var current = this.head;
    
    while(current != null){
      console.log(current.data);
      current = current.next;
    }
  }
}

class Node{
  constructor(data, next = null){
    this.data = data;
    this.next = next;
  }
}

var list = new LinkedList();
list.add(2);
list.add(4);
list.add(6);
list.add(3);
list.add(5);
list.add(7);
list.print();
console.log("-----");
list.remove(5);
list.print();
console.log("-----");
list.add(2);
list.add(4);
list.print()