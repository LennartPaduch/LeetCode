use std::cell::RefCell;
use std::rc::Rc;
impl Solution {
    pub fn inorder_traversal(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<i32> {
        let mut result = Vec::new();

        fn traverse(root: Option<Rc<RefCell<TreeNode>>>, result: &mut Vec<i32>) {
            if let Some(node) = root {
                traverse(node.borrow().left.clone(), result);
                result.push(node.borrow().val);
                traverse(node.borrow().right.clone(), result);
            } else {
                return;
            }
        }
        traverse(root, &mut result);
        result
    }
}
