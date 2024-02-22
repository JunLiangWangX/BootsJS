// import demand(按需导入)
const { PriorityQueue } = require('../dist/priority-queue');
// global import(全局导入)
const EnhanceJS=require('../dist/index');

/**
 * 浏览器环境
 * 按需
 * <script src='../dist/priority-queue'></script>
 * 全局
 * <script src='../dist/index'></script>
 * 
 * <script>
 * let priorityQueue = new window.EnhanceJS.PriorityQueue();
 * </script>
 */

test('test PriorityQueue Class', () => {
    let priorityQueue = new PriorityQueue();
    priorityQueue.enqueue('1', 1)
    priorityQueue.enqueue('1', 5)
    priorityQueue.enqueue('1', 9)
    expect(priorityQueue.length).toBe(3);
    expect(priorityQueue.top.priority).toBe(9);
    expect(priorityQueue.dequeue())
    expect(priorityQueue.top.priority).toBe(5)

    let ascPriorityQueue = new EnhanceJS.PriorityQueue(true);
    ascPriorityQueue.enqueue('1', 1)
    ascPriorityQueue.enqueue('1', 5)
    ascPriorityQueue.enqueue('1', 9)
    expect(ascPriorityQueue.length).toBe(3);
    expect(ascPriorityQueue.top.priority).toBe(1);
    expect(ascPriorityQueue.dequeue())
    expect(ascPriorityQueue.top.priority).toBe(5)
    
});