const { PriorityQueue } = require('../dist/priority-queue');
const BootsJS=require('../dist/index');


test('test PriorityQueue class', () => {
    /**
     * ---- Node
     * -------- Global Import(全局引入)
     * const BootsJS = require('boots-js');
     * -------- Import on Demand(按需引入)
     * const { PriorityQueue } = require('boots-js/priority-queue');
     * 
     * ---- Es6 Module
     * -------- Global Import(全局引入)
     * import BootsJS = from 'boots-js'
     * -------- Import on Demand(按需引入)
     * import { PriorityQueue } = from 'boots-js/priority-queue'
     * 
     */

    let priorityQueue = new PriorityQueue();
    priorityQueue.enqueue('1', 1)
    priorityQueue.enqueue('1', 5)
    priorityQueue.enqueue('1', 9)
    expect(priorityQueue.length).toBe(3);
    expect(priorityQueue.top.priority).toBe(9);
    expect(priorityQueue.dequeue())
    expect(priorityQueue.top.priority).toBe(5)

    let ascPriorityQueue = new BootsJS.PriorityQueue(true);
    ascPriorityQueue.enqueue('1', 1)
    ascPriorityQueue.enqueue('1', 5)
    ascPriorityQueue.enqueue('1', 9)
    expect(ascPriorityQueue.length).toBe(3);
    expect(ascPriorityQueue.top.priority).toBe(1);
    expect(ascPriorityQueue.dequeue())
    expect(ascPriorityQueue.top.priority).toBe(5)
    
});