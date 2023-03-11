class Node{
    constructor(value){
        this.value = value;
        this.left =null
        this.right = null
    }
}
class BinarySearchTree{
    constructor(){
        this.root = null
    }
    isEmpty(){
        return this.root === null
    }
    insert(value){
        const newNode = new Node(value,this.left,this.right)
        if(this.isEmpty()){
            this.root = newNode
        }else{
            this.insertNode(this.root,newNode)
        }
    }
    insertNode(root,newNode){
        if(newNode.value < root.value){
            if(root.left === null){
                root.left = newNode
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(root.right === null){
                root.right = newNode
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }search(root,value){
        if(!root){
            return false
        }else{
            if(root.value === value){
                return true
            }else if(value<root.value){
                return this.search(root.left,value)
            }else{
                return this.search(root.right,value)
            }
        }
    }
    preOrder(root){
        if(root){
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
}
inOrder(root){
    if(root){
        this.inOrder(root.left)
        console.log(root.value)
        this.inOrder(root.right)
    }
}
postOrder(root){
    if(root){
        this.postOrder(root.left)
        this.postOrder(root.right)
        console.log(root.value)
    }
}

    
}

const bst = new BinarySearchTree()

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)
bst.insert(12)

console.log(bst.search(bst.root,10))
console.log(bst.search(bst.root,50))
bst.preOrder(bst.root)
bst.inOrder(bst.root)
const numbers = [1, 2, 3, 4, 5, 6];
const result = sumOfEvenNumbers(numbers);
console.log(result); // Output: 12


var stack = [], node, ii;
stack.push(root);

while (stack.length > 0) {
    node = stack.pop();
    if (node.title == 'randomNode_1') {
        // Found it!
        return node;
    } else if (node.children && node.children.length) {
        for (ii = 0; ii < node.children.length; ii += 1) {
            stack.push(node.children[ii]);
        }
    }
}

// Didn't find it. Return null.
return null;