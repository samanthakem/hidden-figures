let elements = document.getElementsByTagName('*');

const data = {
    "blacklist": "blocklist",
    "whitelist": "safelist",
    "master": "primary",
    "slave": "secondary"
}

for (let i = 0; i < elements.length; i++) {
    let element = elements[i];
    for (let j = 0; j < element.childNodes.length; j++) {
        let node = element.childNodes[j];
        if (node.nodeType === 3) { // text type
            replaceText(node);
        }
    }
}

function replaceText(node) {
    let value = node.nodeValue;
    Object.keys(data).forEach((key) => {
        value = value.replace(new RegExp(key, 'gi'), data[key]);
    })
    node.nodeValue = value;
}
