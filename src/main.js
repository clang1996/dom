//增
const div = dom.create("   <td>hi</td>");
console.log('hello');

const div2 = dom.create(" <div>new</div>");
console.log('hi');

const div3 = dom.create('<div id="parent"></div>')
dom.wrap(test, div3);

//删除
const nodes = dom.empty(window.empty)
console.log(nodes)

//改和读
dom.attr(test, 'title', 'Hi,boys')
const title = dom.attr(test, 'title')
console.log(`title: ${title}`)

dom.text(test, '你好，这是新的内容')
dom.text(test)

dom.style(test, { border: '1px, solid red', color: 'blue' })
dom.style(test, 'border')
dom.style(test, 'border', '1px, solid red')

dom.class.add(test, 'red')
dom.class.remove(test, 'red')


const fn = () => {
    console.log('点击')
}
dom.on(test, 'click', fn)
dom.off(test, 'click', fn)

const testDiv = dom.find('#test')[0]
const test2 = dom.find('#test2')[0]



const s2 = dom.find('#s2')[0]
console.log(dom.siblings(s2))
console.log(dom.next(s2))
console.log(dom.previous(s2))

const t = dom.find('#travel')[0]
dom.each(dom.children(t), (n) => dom.style(n, 'color', 'red'))

console.log(dom.index(s2))