var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];
        if (node.nodeType === 3) {
            replaceContent(node);
        }
    }
}

function replaceContent (node) {
    let value = node.nodeValue;
    console.log(value);
    value = value.replace(/Blacklist/gi, 'blocklist');
    value = value.replace(/blacklist/gi, 'blocklist');
    node.nodeValue = value;
}
