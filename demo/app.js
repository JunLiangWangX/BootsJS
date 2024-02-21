const {PriorityQueue}=require('../dist/priority-queue')

let priorityQueue=new PriorityQueue();
priorityQueue.enqueue('1',1)
priorityQueue.enqueue('1',5)
priorityQueue.enqueue('1',9)
console.info(priorityQueue.length)
console.info(priorityQueue.top)
console.info(priorityQueue.isEmpty)
console.info(priorityQueue.dequeue())
console.info(priorityQueue.top)

console.info('-----------------------------')
let priorityQueue2=new PriorityQueue(true);
priorityQueue2.enqueue('1',1)
priorityQueue2.enqueue('1',5)
priorityQueue2.enqueue('1',9)
console.info(priorityQueue2.length)
console.info(priorityQueue2.top)
console.info(priorityQueue2.isEmpty)
console.info(priorityQueue2.dequeue())
console.info(priorityQueue2.top)
