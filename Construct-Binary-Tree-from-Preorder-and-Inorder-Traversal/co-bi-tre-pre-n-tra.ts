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

};