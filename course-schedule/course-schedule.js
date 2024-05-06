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

function isCyclic(node, adjList, visited, recStack) {
    if (recStack[node]) {
        return true;
    }
    
    if (visited[node]) {
        return false;
    }
    
    visited[node] = true;
    recStack[node] = true;
    
    for (let i = 0; i < adjList[node].length; i++) {
        if (isCyclic(adjList[node][i], adjList, visited, recStack)) {
            return true;
        }
    }
    
    recStack[node] = false;
    
    return false;
}