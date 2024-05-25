/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {

    let map = new Map();
    for (let i = 0; i < inorder.length; i++) {
        map.set(inorder[i], i);
    }

    function helper(preStart, inStart, inEnd) {
        if (preStart > preorder.length - 1 || inStart > inEnd) {
            return null;
        }

        let root = new TreeNode(preorder[preStart]);
        let inIndex = map.get(root.val);
        let leftSize = inIndex - inStart;

        root.left = helper(preStart + 1, inStart, inIndex - 1);
        root.right = helper(preStart + leftSize + 1, inIndex + 1, inEnd);

        return root;
    }

    return helper(0, 0, inorder.length - 1);
    
};

// testing the function
console.log(buildTree([3,9,20,15,7], [9,3,15,20,7])); 
// TreeNode {
//   val: 3,
//   left: TreeNode { val: 9, left: null, right: null },
//   right: TreeNode {
//     val: 20,
//     left: TreeNode { val: 15, left: null, right: null },
//     right: TreeNode { val: 7, left: null, right: null }
//   }

console.log(buildTree([1,2,3], [3,2,1]));
// TreeNode {
//   val: 1,
//   left: TreeNode { val: 2, left: TreeNode { val: 3, left: null, right: null }, right: null },
//   right: null
// }

console.log(buildTree([1,2,3,4,5], [3,2,4,1,5]));
// TreeNode {
//   val: 1,
//   left: TreeNode {
//     val: 2,
//     left: TreeNode { val: 3, left: null, right: null },
//     right: TreeNode { val: 4, left: null, right: null }
//   },
//   right: TreeNode { val: 5, left: null, right: null }
// }

console.log(buildTree([1,2,3,4,5,6,7], [3,2,4,1,6,5,7]));
// TreeNode {
//   val: 1,
//   left: TreeNode {
//     val: 2,
//     left: TreeNode { val: 3, left: null, right: null },
//     right: TreeNode { val: 4, left: null, right: null }
//   },
//   right: TreeNode {
//     val: 5,
//     left: TreeNode { val: 6, left: null, right: null },
//     right: TreeNode { val: 7, left: null, right: null }
//   }
// }

console.log(buildTree([1,2,3,4,5,6,7,8], [3,2,4,1,6,5,7,8]));
// TreeNode {
//   val: 1,
//   left: TreeNode {
//     val: 2,
//     left: TreeNode { val: 3, left: null, right: null },
//     right: TreeNode { val: 4, left: null, right: null }
//   },
//   right: TreeNode {
//     val: 5,
//     left: TreeNode { val: 6, left: null, right: null },
//     right: TreeNode { val: 7, left: null, right: TreeNode { val: 8, left: null, right: null } }
//   }
// }

console.log(buildTree([1,2,3,4,5,6,7,8,9], [3,2,4,1,6,5,7,8,9]));
// TreeNode {
//   val: 1,
//   left: TreeNode {
//     val: 2,
//     left: TreeNode { val: 3, left: null, right: null },
//     right: TreeNode { val: 4, left: null, right: null }
//   },
//   right: TreeNode {
//     val: 5,
//     left: TreeNode { val: 6, left: null, right: null },
//     right: TreeNode { val: 7, left: null, right: TreeNode { val: 8, left: null, right: TreeNode { val: 9, left: null, right: null } } }
//   }
// }

console.log(buildTree([1,2,3,4,5,6,7,8,9,10], [3,2,4,1,6,5,7,8,9,10]));
// TreeNode {
//   val: 1,
//   left: TreeNode {
//     val: 2,
//     left: TreeNode { val: 3, left: null, right: null },
//     right: TreeNode { val: 4, left: null, right: null }
//   },
//   right: TreeNode {
//     val: 5,
//     left: TreeNode { val: 6, left: null, right: null },
//     right: TreeNode { val: 7, left: null, right: TreeNode { val: 8, left: null, right: TreeNode { val: 9, left: null, right: TreeNode { val: 10, left: null, right: null } } } }
//   }
// }

console.log(buildTree([1,2,3,4,5,6,7,8,9,10,11], [3,2,4,1,6,5,7,8,9,10,11]));
// TreeNode {
//   val: 1,
//   left: TreeNode {
//     val: 2,
//     left: TreeNode { val: 3, left: null, right: null },
//     right: TreeNode { val: 4, left: null, right: null }
//   },
//   right: TreeNode {
//     val: 5,
//     left: TreeNode { val: 6, left: null, right: null },
//     right: TreeNode { val: 7, left: null, right: TreeNode { val: 8, left: null, right: TreeNode { val: 9, left: null, right: TreeNode { val: 10, left: null, right: TreeNode { val: 11, left: null, right: null } } } } }
//   }
// }

console.log(buildTree([1,2,3,4,5,6,7,8,9,10,11,12], [3,2,4,1,6,5,7,8,9,10,11,12]));
// TreeNode {
//   val: 1,
//   left: TreeNode {
//     val: 2,
//     left: TreeNode { val: 3, left: null, right: null },
//     right: TreeNode { val: 4, left: null, right: null }
//   },
//   right: TreeNode {
//     val: 5,
//     left: TreeNode { val: 6, left: null, right: null },
//     right: TreeNode { val: 7, left: null, right: TreeNode { val: 8, left: null, right: TreeNode { val: 9, left: null, right: TreeNode { val: 10, left: null, right: TreeNode { val: 11, left: null, right: TreeNode { val: 12, left: null, right: null } } } } } }
//   }
// }

