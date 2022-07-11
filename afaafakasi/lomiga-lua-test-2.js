// https://stackoverflow.com/questions/30267973/how-to-repeat-div-element-n-times-in-html

function multiplyNode(node, count, deep) {
    for (var i = 0, copy; i < count - 1; i++) {
        copy = node.cloneNode(deep);
        node.parentNode.insertBefore(copy, node);
    }
}

multiplyNode(document.querySelector('.box'), 2000, true);
