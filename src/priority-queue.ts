/*
 * @Description: priority queue(优先级队列)
 * @Author: JunLiangWang
 * @Date: 2024-02-21 14:40:51
 * @LastEditors: JunLiangWang
 * @LastEditTime: 2024-02-22 17:26:56
 */

/**
 * Queue element data structure(队列元素数据结构)
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

export  class PriorityQueue {
  #isAsc: boolean ;
  #heap: any[];
  /**
   * @description: constructor(构造函数)
   * @param {*} isAscOrder Whether to sort in ascending order, the default is descending order(是否升序排序,默认降序)
   */
  constructor(isAscOrder: boolean = false) {
    this.#isAsc = isAscOrder;
    this.#heap = [];
  }
  /**
   * @description: current number of queue elements(当前队列元素数量)
   */
  get length(): number {
    return this.#heap.length;
  }
  /**
   * @description: Is the queue empty(当前队列是否为空)
   */
  get isEmpty(): boolean {
    return this.length === 0;
  }
  /**
   * @description: Get the top element of the queue(获取队顶元素)
   */
  get top(): queueItem {
    return this.#heap[0];
  }
  /**
   * @description: Add elements to the queue and sort them according to priority(将元素添加到队列中并根据优先级排序)
   * @param {*} element   元素
   * @param {*} priority  优先级
   */
  enqueue(element: any, priority: number) {
    this.#heap.push({
      element: element,
      priority: priority,
    });
    this.#heapifyUp();
  }
  /**
   * @description: Dequeue the highest or lowest priority element(将优先级最高或最低的元素出队)
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
