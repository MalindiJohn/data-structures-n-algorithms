/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {

    let adjList = new Array(numCourses).fill(0).map(() => []);

    for (let i = 0; i < prerequisites.length; i++) {
        let [course, pre] = prerequisites[i];
        adjList[pre].push(course);
    }

    let visited = new Array(numCourses).fill(false);
    let recStack = new Array(numCourses).fill(false);

    for (let i = 0; i < numCourses; i++) {
        if (!visited[i]) {
            if (isCyclic(i, adjList, visited, recStack)) {
                return false;
            }
        }
    }

    return true;
    
};