/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {

    function helper(left, right) {
        if (left > right) {
            return null;
        }

        let mid = Math.floor(left + (right - left) / 2);
        let root = new TreeNode(nums[mid]);

        root.left = helper(left, mid - 1);
        root.right = helper(mid + 1, right);

        return root;
    }

    return helper(0, nums.length - 1);
    
};

// testing the function
console.log(sortedArrayToBST([-10,-3,0,5,9]));
// TreeNode {
//   val: 0,
//   left: TreeNode {
//     val: -3,
//     left: TreeNode { val: -10, left: null, right: null },
//     right: null
//   },
//   right: TreeNode { val: 9, left: TreeNode { val: 5, left: null, right: null }, right: null }

console.log(sortedArrayToBST([1,3]));
// TreeNode { val: 3, left: TreeNode { val: 1, left: null, right: null }, right: null }

console.log(sortedArrayToBST([1]));
// TreeNode { val: 1, left: null, right: null }

console.log(sortedArrayToBST([1,2,3,4,5,6,7,8,9,10]));
// TreeNode {
//   val: 5,
//   left: TreeNode {
//     val: 2,
//     left: TreeNode { val: 1, left: null, right: null },
//     right: TreeNode { val: 3, left: null, right: null }
//   },
//   right: TreeNode {
//     val: 8,
//     left: TreeNode { val: 6, left: null, right: TreeNode { val: 7, left: null, right: null } },
//     right: TreeNode { val: 9, left: null, right: TreeNode { val: 10, left: null, right: null } }
//   }
// }

console.log(sortedArrayToBST([1,2,3,4,5,6,7,8,9,10,11]));
// TreeNode {
//   val: 6,
//   left: TreeNode {
//     val: 3,
//     left: TreeNode {
//       val: 2,
//       left: TreeNode { val: 1, left: null, right: null },
//       right: null
//     },
//     right: TreeNode { val: 4, left: null, right: TreeNode { val: 5, left: null, right: null } }
//   },
//   right: TreeNode {
//     val: 9,
//     left: TreeNode {
//       val: 8,
//       left: TreeNode { val: 7, left: null, right: null },
//       right: null
//     },
//     right: TreeNode { val: 10, left: null, right: TreeNode { val: 11, left: null, right: null } }
//   }
// }

console.log(sortedArrayToBST([1,2,3,4,5,6,7,8,9,10,11,12]));
// TreeNode {
//   val: 7,
//   left: TreeNode {
//     val: 3,
//     left: TreeNode {
//       val: 2,
//       left: TreeNode { val: 1, left: null, right: null },
//       right: null
//     },
//     right: TreeNode { val: 5, left: TreeNode { val: 4, left: null, right: null }, right: TreeNode { val: 6, left: null, right: null } }

console.log(sortedArrayToBST([1,2,3,4,5,6,7,8,9,10,11,12,13]));
// TreeNode {
//   val: 7,
//   left: TreeNode {
//     val: 3,
//     left: TreeNode {
//       val: 2,
//       left: TreeNode { val: 1, left: null, right: null },
//       right: null
//     },
//     right: TreeNode { val: 5, left: TreeNode { val: 4, left: null, right: null }, right: TreeNode { val: 6, left: null, right: null } }
//   },
//   right: TreeNode {
//     val: 10,
//     left: TreeNode {
//       val: 9,
//       left: TreeNode { val: 8, left: null, right: null },
//       right: null
//     },
//     right: TreeNode { val: 12, left: TreeNode { val: 11, left: null, right: null }, right: TreeNode { val: 13, left: null, right: null } }
//   }
// }
