const Node = require('./node');
class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this.length =0;

    }

    append(data) {
        let node = new Node(data);
        if(this.length!=0){
            node.prev = this._tail;
            this._tail.next = node;
            this._tail = node;
            this.length++;
        }
        else{
            this._head = node;
            this._tail = node;
            this.length++;
        }
        return this;
    }

    head() {
        if(this._head ==null){
            return null;
        }
        else{
            return this._head.data;
        }
       
    }

    tail() {
        if(this._tail == null){
            return null
        }
        else{ return this._tail.data;}
    }

    at(index) {
        let node = this._head;
        for(let i = 0; i < this.length; i++){
            if(i == index){
                return node.data;
            }
            else{
                node = node.next;
            }
        }
    }

    insertAt(index, data) {
        let buf = this._head;
        let index_buf = 1;

        let node = new Node(data);
        while (buf != null) {
          
          buf = buf.next;
          if (index_buf == index) {
            buf.prev.next = node;
            node.prev = buf.prev;
            node.next = buf;
            buf.prev = node;

            this.length++;
          }
          index_buf++;
        }
        return this;
      }
    isEmpty() {
        if(this.length==0){
            return true;
        }
        else{
            return false;
        }
    }

    isEmpty() {
        if(this.length==0){
            return true;
        }
        else{
            return false;
        }
    }

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;
        return this;
    }

    deleteAt(index) {
        let buf = this._head;
      let buf_index = 0;
      while (buf != null) {
        if (buf_index == index) {
            
          if (buf == this._head && buf == this._tail) {

            this._head = null;
            this._tail = null;
            this.length = 0;
            return this;
          }
          if (buf == this._head) {

            this._head = this._head.next;
            this._head.prev = null;
          } 
          else if (buf == this._tail) {

            this._tail = this._tail.prev;
            this._tail.next = null;
          }
           else {

            buf.prev.next = buf.next;
            buf.next.prev = buf.prev;
          }
        }
        buf_index++;
        buf = buf.next;
      }
      this.length--;
      return this;
    }

    reverse() {
       let buf = [];
       let node = this._head;
       for(let i = 0; i <this.length ; i++){
         buf[i] = node.data;
        node = node.next;
       }
       buf.reverse();
       node = this._head;
       for(let i = 0; i <this.length ; i++){
         node.data = buf[i];
         node = node.next;
       }
       return this;
    }

    indexOf(data) {
        let node = this._head;
        for(let i = 0; i < this.length ; i++){
            if(node.data == data){
                return i;
            }
            else{
                node = node.next;
            }
        }
        return -1;
    }
}
module.exports = LinkedList;
