/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {

    let adjList = new Map();
    let indegree = new Array(numCourses).fill(0);
    let queue = [];
    let result = [];
    
    for(let i = 0; i < prerequisites.length; i++) {
        let [course, pre] = prerequisites[i];
        if(!adjList.has(pre)) {
            adjList.set(pre, []);
        }
        adjList.get(pre).push(course);
        indegree[course]++;
    }
    
    for(let i = 0; i < numCourses; i++) {
        if(indegree[i] === 0) {
            queue.push(i);
        }
    }
    
    while(queue.length) {
        let course = queue.shift();
        result.push(course);
        if(adjList.has(course)) {
            for(let nextCourse of adjList.get(course)) {
                indegree[nextCourse]--;
                if(indegree[nextCourse] === 0) {
                    queue.push(nextCourse);
                }
            }
        }
    }
    
    return result.length === numCourses ? result : [];
    
};