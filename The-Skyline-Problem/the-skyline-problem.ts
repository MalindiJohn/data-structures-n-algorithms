function getSkyline(buildings: number[][]): number[][] {

    let events: number[][] = [];
    for (let building of buildings) {
        let [left, right, height] = building;
        events.push([left, height]);
        events.push([right, -height]);
    }

    events.sort((a, b) => a[0] - b[0] || b[1] - a[1]);

    let result: number[][] = [];
    let pq = new PriorityQueue<number>((a, b) => b - a);
    pq.push(0);

    let prev = 0;
    for (let [x, h] of events) {
        if (h > 0) {
            pq.push(h);
        } else {
            pq.delete(-h);
        }

        let curr = pq.peek();
        if (curr !== prev) {
            result.push([x, curr]);
            prev = curr;
        }
    }

    return result;

};

// PriorityQueue function
class PriorityQueue<T> {

    private heap: T[];
    private compare: (a: T, b: T) => number;

    constructor(compare: (a: T, b: T) => number) {
        this.heap = [];
        this.compare = compare;
    }

    private swap(i: number, j: number): void {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    private shiftUp(): void {
        let i = this.size() - 1;
        while (i > 0) {
            let parent = (i - 1) >> 1;
            if (this.compare(this.heap[i], this.heap[parent]) < 0) {
                break;
            }
            this.swap(i, parent);
            i = parent;
        }
    }

    private shiftDown(): void {
        let i = 0;
        while (i * 2 + 1 < this.size()) {
            let left = i * 2 + 1;
            let right = i * 2 + 2;
            let j = left;
            if (right < this.size() && this.compare(this.heap[right], this.heap[left]) > 0) {
                j = right;
            }
            if (this.compare(this.heap[i], this.heap[j]) > 0) {
                break;
            }
            this.swap(i, j);
            i = j;
        }
    }

    size(): number {
        return this.heap.length;
    }

    isEmpty(): boolean {
        return this.size() === 0;
    }

    peek(): T {
        return this.heap[0];
    }

    push(value: T): void {
        this.heap.push(value);
        this.shiftUp();
    }

    pop(): T {
        let result = this.heap[0];
        this.swap(0, this.size() - 1);
        this.heap.pop();
        this.shiftDown();
        return result;
    }

    delete(value: T): void {
        let index = this.heap.indexOf(value);
        if (index !== -1) {
            this.swap(index, this.size() - 1);
            this.heap.pop();
            this.shiftDown();
        }
    }

};

// testing the function
console.log(getSkyline([[2, 9, 10], [3, 7, 15], [5, 12, 12], [15, 20, 10], [19, 24, 8]]));
// [
//     [2, 10],
//     [3, 15],
//     [7, 12],
//     [12, 0],
//     [15, 10],
//     [20, 8],
//     [24, 0]
// ]

console.log(getSkyline([[0, 2, 3], [2, 5, 3]]));
// [
//     [0, 3],
//     [5, 0]
// ]

console.log(getSkyline([[1, 2, 1], [1, 2, 2], [1, 2, 3]]));
// [
//     [1, 3],
//     [2, 0]
// ]

console.log(getSkyline([[1, 2, 1], [1, 2, 2], [1, 2, 3], [2, 3, 1]]));
// [
//     [1, 3],
//     [2, 1],
//     [3, 0]
// ]

console.log(getSkyline([[1, 2, 1], [1, 2, 2], [1, 2, 3], [2, 3, 1], [2, 3, 2]]));
// [
//     [1, 3],
//     [2, 2],
//     [3, 0]
// ]

console.log(getSkyline([[1, 2, 1], [1, 2, 2], [1, 2, 3], [2, 3, 1], [2, 3, 2], [2, 3, 3]]));
// [
//     [1, 3],
//     [2, 3],
//     [3, 0]
// ]