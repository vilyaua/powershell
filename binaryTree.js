var tree = {
    name: "root",
    left: {
        name: "1",
        left: {
            name: "1",
            left: {
                name: "1"
            },
            right: {
                name: "0"
            }
        },
        right: {
            name: "0",
            left: {
                name: "1"
            }
        }
    },
    right: {
        name: "1",
        left: {
            name: "1"
        },
        right: {
            name: "0",
            left: {
                name: "1"
            }
        }
    }
}

function revert(node) {
    if (!node) {
        return
    }
    var right = revert(node.right);
    var left = revert(node.left);
    node.left = right;
    node.right = left;
    return node
}

console.log("Original")
console.log(JSON.stringify(tree, null, '\t'))

console.log("Modified")
var treeModified = revert(tree)
console.log(JSON.stringify(treeModified, null, '\t'));