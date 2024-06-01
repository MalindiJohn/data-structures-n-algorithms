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