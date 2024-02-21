/*
 * @Description: priority queue(优先级队列)
 * @Author: JunLiangWang
 * @Date: 2024-02-21 14:40:51
 * @LastEditors: JunLiangWang
 * @LastEditTime: 2024-02-21 17:30:31
 */

/**
 * Queue element data structure(队列元素数据结构)
 */
interface queueItem {
    /**
     * Enqueued elements(入队的元素)
     */
    element: any,
    /**
     * Priority(优先级)
     */
    priority: number
}

export default (function () {

    const heap: any[] = []
    let isAsc: boolean = false
    function swap(i: number, j: number) {
        let temp = heap[i]
        heap[i] = heap[j]
        heap[j] = temp
    }
    function heapifyUp() {
        let index = heap.length - 1
        while (index > 0) {
            let rootIndex = Math.floor((index - 1) / 2)
            if ((isAsc&&heap[index].priority < heap[rootIndex].priority)||(!isAsc&&heap[index].priority > heap[rootIndex].priority)) {
                swap(index, rootIndex)
                index = rootIndex
            }
            else break;
        }
    }
    function heapifyDown() {
        let index = 0
        while (index * 2 + 1 < heap.length) {
            let minChildIndex = index * 2 + 1,
                rightChildIndex = index * 2 + 2
            if (heap[rightChildIndex] != undefined && ((isAsc&&heap[rightChildIndex].priority < heap[minChildIndex].priority)||!isAsc&&heap[rightChildIndex].priority > heap[minChildIndex].priority)) {
                minChildIndex = rightChildIndex
            }
            if ((isAsc&&heap[index].priority > heap[minChildIndex].priority)||(!isAsc&&heap[index].priority < heap[minChildIndex].priority)) {
                swap(index, minChildIndex)
                index = minChildIndex
            }
            else break;
        }
    }
    class PriorityQueue {
        /**
         * @description: constructor(构造函数)
         * @param {*} isAscOrder Whether to sort in ascending order, the default is descending order(是否升序排序,默认降序)
         */
        constructor(isAscOrder: boolean = false) {
            isAsc = isAscOrder
        }
        /**
         * @description: current number of queue elements(当前队列元素数量)
         */
        get length(): number {
            return heap.length
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
            return heap[0]
        }
        /**
         * @description: Add elements to the queue and sort them according to priority(将元素添加到队列中并根据优先级排序)
         * @param {*} element   元素
         * @param {*} priority  优先级
         */
        enqueue(element: any, priority: number) {
            heap.push({
                element: element,
                priority: priority
            })
            heapifyUp()
        }
        /**
         * @description: Dequeue the highest or lowest priority element(将优先级最高或最低的元素出队)
         */
        dequeue(): queueItem | undefined {
            if (this.isEmpty) return undefined
            if (heap.length === 1) return heap.pop()
            let node = heap[0]
            heap[0] = heap.pop()
            heapifyDown()
            return node
        }

    }
    return PriorityQueue
}())
