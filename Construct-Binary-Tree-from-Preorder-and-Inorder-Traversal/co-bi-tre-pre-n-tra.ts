/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {

    let map = new Map<number, number>();

    for (let i = 0; i < inorder.length; i++) {
        map.set(inorder[i], i);
    }

    return buildTreeHelper(preorder, inorder, 0, 0, inorder.length - 1, map);

};

function buildTreeHelper(preorder: number[], inorder: number[], preStart: number, inStart: number, inEnd: number, map: Map<number, number>): TreeNode | null {

    if (preStart > preorder.length - 1 || inStart > inEnd) {
        return null;
    }

    let root = new TreeNode(preorder[preStart]);
    let inIndex = map.get(root.val)!;

    root.left = buildTreeHelper(preorder, inorder, preStart + 1, inStart, inIndex - 1, map);
    root.right = buildTreeHelper(preorder, inorder, preStart + inIndex - inStart + 1, inIndex + 1, inEnd, map);

    return root;

};

// testing the function
console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));
// expected TreeNode {
//     val: 3,
//     left: TreeNode { val: 9, left: null, right: null },
//     right: TreeNode {
//       val: 20,
//       left: TreeNode { val: 15, left: null, right: null },
//       right: TreeNode { val: 7, left: null, right: null }
//     }
//   }

console.log(buildTree([1, 2], [2, 1]));
// expected TreeNode {
//     val: 1,
//     left: null,
//     right: TreeNode { val: 2, left: null, right: null }
//   }

console.log(buildTree([1, 2, 3], [3, 2, 1]));
// expected TreeNode {
//     val: 1,
//     left: TreeNode { val: 2, left: null, right: null },
//     right: TreeNode { val: 3, left: null, right: null }
//   }

console.log(buildTree([1, 2, 3], [1, 2, 3]));
// expected TreeNode {
//     val: 1,
//     left: null,
//     right: TreeNode {
//       val: 2,
//       left: null,
//       right: TreeNode { val: 3, left: null, right: null }
//     }
//   }

console.log(buildTree([1, 2, 3], [3, 2, 1]));
// expected TreeNode {
//     val: 1,
//     left: TreeNode { val: 2, left: null, right: null },
//     right: TreeNode { val: 3, left: null, right: null }
//   }

console.log(buildTree([1, 2, 3], [2, 3, 1]));
// expected TreeNode {
//     val: 1,
//     left: TreeNode { val: 2, left: null, right: TreeNode { val: 3, left: null, right: null } },
//     right: null
//   }

console.log(buildTree([1, 2, 3], [1, 3, 2]));
// expected TreeNode {
//     val: 1,
//     left: null,
//     right: TreeNode {
//       val: 2,
//       left: TreeNode { val: 3, left: null, right: null },
//       right: null
//     }
//   }

console.log(buildTree([1, 2, 3], [2, 1, 3]));
// expected TreeNode {
//     val: 1,
//     left: TreeNode { val: 2, left: null, right: null },
//     right: TreeNode { val: 3, left: null, right: null }
//   }

console.log(buildTree([1, 2, 3], [2, 3, 1]));
// expected TreeNode {
//     val: 1,
//     left: TreeNode { val: 2, left: null, right: TreeNode { val: 3, left: null, right: null } },
//     right: null
//   }

console.log(buildTree([1, 2, 3], [3, 1, 2]));
// expected TreeNode {
//     val: 1,
//     left: null,
//     right: TreeNode {
//       val: 2,
//       left: TreeNode { val: 3, left: null, right: null },
//       right: null
//     }
//   }

console.log(buildTree([1, 2, 3], [3, 2, 1]));
// expected TreeNode {
//     val: 1,
//     left: TreeNode { val: 2, left: null, right: null },
//     right: TreeNode { val: 3, left: null, right: null }
//   }


