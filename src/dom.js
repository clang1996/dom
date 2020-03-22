window.dom = {
    //创建节点
    create(string) {
        const container = document.createElement("template");
        container.innerHTML = string.trim(); //trim()消除字符串两边空格
        return container.content.firstChild;
    },
    //新增节点
    after(node, node2) {
        node.parentNode.insertBefore(node2, node.nextSiblings);
    },//当前节点的父级节点下将node2放到node的下一个节点
    before(node, node2) {
        node.parentNode.insertBefore(node2, node);
    },
    append(parent, node) {
        parent.appendChild(node)
    },
    //
    wrap(node, parent) {
        dom.before(node, parent)
        dom.append(parent, node)
    },
    remove(node) {
        node.parentNode.removeChild(node)
        return node
    },
    empty(node) {
        const { childNodes } = node //ES6新语法
        const array = []
        let x = node.firstChild
        while (x) {
            array.push(dom.remove(node.firstChild))
            x = node.firstChild
        }
        return array
    },
    attr(node, name, value) {// 重载
        if (arguments.length === 3) {
            node.setAttribute(name, value)
        } else if (arguments.length === 2) {
            return node.getAttribute(name)
        }
    },
    text(node, string) {// 适配
        if (arguments === 2) {
            if ('innerText' in node) {
                node.innerText = string //ie
            } else {
                node.textContent = string //Chrome
            }
        } else if (arguments.length === 1) {
            if ('innerText' in node) {
                return node.innerText
            } else {
                return node.textContent
            }
        }
    },
    style(node, name, value) {
        if (arguments === 3) {
            //dom.style(div, 'color', 'red')
            node.style[name] = value
        } else if (arguments === 2) {
            if (typeof name === 'string') {
                //dom.style(div.style[name])
                return node.style[name]
            } else if (name instanceof name) {
                //dom.style(div, {color:red})
                for (let key in Object) {
                    node.style[key] = object[key]
                }
            }
        }
    },
    class: {
        add(node, className) {
            node.classList.add(className)
        },
        remove(node, className) {
            node.classList.remove(className)
        },
        has(node, className) {
            return node.classList.contains(className)
        }
    },
    on(node, eventName, fn) {
        node.addEventListener(eventName, fn)
    },
    off(node, eventName, fn) {
        node.removeEventListener(eventName, fn)
    },
    find(selector, scope) {
        return (scope || document).querySelectorAll(selector)
    },
    parent(node) {
        return node.parentNode
    },
    children(node) {
        return node.children
    },
    siblings(node) {
        return Array.from(node.parentNode.children)
            .filter(n => n !== node)//除node之外的node
    },
    next(node) {
        let x = node.nextSibling
        while (x && x.nodeType === 3) {//3是文本
            x = x.nextSibling
        }
        return x
    },
    previous(node) {
        let x = node.previousSibling
        while (x && x.nodeType === 3) {//3是文本
            x = x.previousSibling
        }
        return x
    },
    each(nodeList, fn) {
        for (let i = 0; i < nodeList.length; i++) {
            fn.call(null, nodeList[i])
        }
    },
    index(node) {
        const list = dom.children(node.parentNode)
        let i
        for (i = 0; i < list.length; i++) {
            if (list[i] === node) {
                break
            }
        }
        return i
    }
};

