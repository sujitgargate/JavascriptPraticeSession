class Node{
    Node(data) //constructur
    {
        let d=data;
        this.next=null;
    }
}

class linkedList{
    Node()
    {
        this.head=null;
        this.size=0;
    }

    add(data) {

        var node=new this.Node(data);
        var current;

        if(this.head==null)
        this.head=node;
        else{
            current=this.head;

        while(current.next){
            current=current.next;
        }
        current.next=next;
    }
    this.size++;

}

printList(){
    var curr=this.head;
    var str='';
    while(curr){
        str+=curr.data +'';
        curr=curr.next;

    }
    console.log(str);
}
}

var ll=new linkedList();
ll.add(10);

ll.printList();


