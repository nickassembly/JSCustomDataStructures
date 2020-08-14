class LinkedList {
    constructor() {
        this.head = null; // first element of list
        this.tail = null; // last element of list
    }

    append(value) {
        const newNode = {
            value: value,
            next: null
        }

        if (this.tail) {
            this.tail.next = newNode;
        }
        this.tail = newNode;

        if (!this.head) {
            this.head = newNode;
        }
    }

    prepend(value) {
        const newNode = {
            value: value,
            next: this.head
        }

        this.head = newNode;
        if (!this.tail) {
            this.tail = newNode;
        }
    }

    insertAfter(value, afterValue) {
        const existingNode = this.find(afterValue);

        if (existingNode) {
            const newNode = {
                value: value,
                next: existingNode.next
            }
            existingNode.next = newNode;

        }
    }

    find(value) {
        if (!this.head) {
            return null;
        }

        let curNode = this.head;

        while (curNode) {
            if (curNode.value === value) {
                return curNode;
            }
            curNode = curNode.next;
        }
        return null;
    }

    delete(value) {
        if (!this.head) {
            return null;
        }

        while (this.head && this.head.value === value) {
            this.head = this.head.next;
        }

        let curNode = this.head;

        while (curNode.next) {
            if (curNode.next.value === value) {
                curNode.next = curNode.next.next;
            } else {
                curNode = curNode.next;
            }
        }

        if (this.tail.value === value) {
            this.tail = curNode;
        }
    }

    toArray() {
        const elements = [];

        let curNode = this.head;
        while (curNode) {
            elements.push(curNode);
            curNode = curNode.next;
        }
        return elements;
    }
}

const linkedList1 = new LinkedList();
linkedList1.append(1);
linkedList1.append("hello world");
linkedList1.append("hello world");
linkedList1.append(true);
linkedList1.append(18.51);
linkedList1.append('hello there');
linkedList1.prepend('First Value');
linkedList1.prepend('First Value');

console.log(linkedList1.toArray());

linkedList1.delete("hello world");
linkedList1.delete('First Value');
linkedList1.delete(18.51);

console.log(linkedList1.toArray());
console.log(linkedList1.find('Max'));
console.log(linkedList1.find(true));

linkedList1.insertAfter('new value - 1', true);
linkedList1.insertAfter('new value - 2', 'hello there');
console.log(linkedList1.toArray());