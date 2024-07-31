/**
 * priority queue.(优先级队列)
 * 
 * ```ts
 * // -------- Global Import(全局引入)
 * const BootsJS = require('boots-js/cjs'); // CommandJS
 * import BootsJS from 'boots-js' // Es6 Module
 * let ascPriorityQueue = new BootsJS.PriorityQueue(true);
 * 
 * // -------- Import on Demand(按需引入)
 * const  PriorityQueue  = require('boots-js/cjs/priority-queue'); // CommandJS
 * import  PriorityQueue  from 'boots-js/priority-queue' // Es6 Module
 * let priorityQueue = new PriorityQueue();
 *  ```
 * @module
 */

/**
 * queue item object(队列项对象)
 */
interface queueItem {
  /**
   * Enqueued elements(入队的元素)
   */
  element: any;
  /**
   * Priority(优先级)
   */
  priority: number;
}
export default class PriorityQueue {
  #isAsc: boolean;
  #heap: any[];
  /**
   * Constructor.(构造函数)
   * @param {*} isAscOrder Whether to sort in ascending order, the default is descending order.(是否升序排序,默认降序)
   * @example
   * let priorityQueue = new PriorityQueue();
   */  
  constructor(isAscOrder: boolean = false) {
    this.#isAsc = isAscOrder;
    this.#heap = [];
  }
  /**
   * Current number of queue elements.(当前队列元素数量)
   * @example
   * let priorityQueue = new PriorityQueue();
   * priorityQueue.length  //0
   */  
  get length(): number {
    return this.#heap.length;
  }
  /**
   * Is the queue empty.(当前队列是否为空)
   * @example
   * let priorityQueue = new PriorityQueue();
   * priorityQueue.isEmpty  //true
   */ 
  get isEmpty(): boolean {
    return this.length === 0;
  }
  /**
   * Get the top element of the queue.(获取队顶元素)
   * @example
   * let priorityQueue = new PriorityQueue();
   * priorityQueue.enqueue('1', 1)
   * priorityQueue.top  //{element:'1',priority:1}
   */
  get top(): queueItem {
    return this.#heap[0];
  }
  /**
   * Add elements to the queue and sort them according to priority.(将元素添加到队列中并根据优先级排序)
   * @param {*} element   元素
   * @param {*} priority  优先级
   * @example
   * let priorityQueue = new PriorityQueue();
   * priorityQueue.enqueue('1', 1)
   * priorityQueue.enqueue({
   *   a:'1',
   *   b:'2'
   * }, 2)
   */
  enqueue(element: any, priority: number) {
    this.#heap.push({
      element: element,
      priority: priority,
    });
    this.#heapifyUp();
  }
  /**
   * Dequeue the highest or lowest priority element.(将优先级最高或最低的元素出队)
   * @example
   * let priorityQueue = new PriorityQueue();
   * priorityQueue.enqueue('1', 1)
   * priorityQueue.enqueue('1', 5)
   * priorityQueue.dequeue()  //{element:'1',priority:5}
   */
  dequeue(): queueItem | undefined {
    if (this.isEmpty) return undefined;
    if (this.#heap.length === 1) return this.#heap.pop();
    let node = this.#heap[0];
    this.#heap[0] = this.#heap.pop();
    this.#heapifyDown();
    return node;
  }

  #swap(i: number, j: number) {
    let temp = this.#heap[i];
    this.#heap[i] = this.#heap[j];
    this.#heap[j] = temp;
  }
  #heapifyUp() {
    let index = this.#heap.length - 1;
    while (index > 0) {
      let rootIndex = Math.floor((index - 1) / 2);
      if (
        (this.#isAsc &&
          this.#heap[index].priority < this.#heap[rootIndex].priority) ||
        (!this.#isAsc &&
          this.#heap[index].priority > this.#heap[rootIndex].priority)
      ) {
        this.#swap(index, rootIndex);
        index = rootIndex;
      } else break;
    }
  }
  #heapifyDown() {
    let index = 0;
    while (index * 2 + 1 < this.#heap.length) {
      let minChildIndex = index * 2 + 1,
        rightChildIndex = index * 2 + 2;
      if (
        this.#heap[rightChildIndex] != undefined &&
        ((this.#isAsc &&
          this.#heap[rightChildIndex].priority <
          this.#heap[minChildIndex].priority) ||
          (!this.#isAsc &&
            this.#heap[rightChildIndex].priority >
            this.#heap[minChildIndex].priority))
      ) {
        minChildIndex = rightChildIndex;
      }
      if (
        (this.#isAsc &&
          this.#heap[index].priority > this.#heap[minChildIndex].priority) ||
        (!this.#isAsc &&
          this.#heap[index].priority < this.#heap[minChildIndex].priority)
      ) {
        this.#swap(index, minChildIndex);
        index = minChildIndex;
      } else break;
    }
  }
}
