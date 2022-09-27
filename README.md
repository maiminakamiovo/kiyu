# README

增删改查的一套文件 另含 react Hooks 出学习的 demo

子组件通过 ref 传值过来 通过 myRef.current.getFieldsValue()取到我子组件 from 表单提交的值

git commit -a -m "wqy" --no-verify 快速提交
git remote update origin --prune 重新拉去远程分支

<!-- 陆家嘴消防  -->

1.设置 loading 页面初始的时候设置一个 loading false 在 调取页面数据的时候设置 true 在成功或者失败之后再重新设置 true

    <>
      <Tooltip key="comment-basic-like" title="Like">
        <span onClick={like}>
          {createElement(action === 'like' ? LikeFilled : LikeOutlined)}
          <span className="commen-action">{likes}</span>
        </span>
      </Tooltip>
      <Tooltip key="comment-basic-dislike">
        <span onClick={disLike}>
          {createElement(action === 'liked' ? DislikeFilled : DislikeOutlined)}
          <span className="commen-action">{disLikes}</span>
        </span>
      </Tooltip>
      <span key="comment-basic-reply-to">Reply to</span>
    </>,

const nodeBy={ayy:"1"}
console.log( ayy in nodeBy) //true

对象中添加动态属性

const dy="name"
const item ={
[dy]:1
}
// 打印出的结果 item:{name:1}
console.log(item[dy]) // 1

// 使用动态键进行对象解构
const PersonDay={id:1,name:"vscode"}
const {name:one}=PersonDay
console.log(one) // "vscode"

// 使用动态键结构属性
const templates={
"hello":"hello hare",
"bye":"good bye"
}
const templateName="bye"
const {[templateName]:template}=templates
console.log(templates.template) // good bye

// 检测一个变量是否为 null undefined 时使用？？操作符
const foo=null??"hello"
console.log(foo) //hello
const too=0??"1"
console.log(too) //这里会输出 0 在 JavaScript 中 0 false 1 true
// 如果这里使用 || 操作符的话
const too=0||1
// 这里就会输出 0

// 将字符串转化成数字
const Str=“111221” // 这里是一个字符串但是经过下面操作 会将它转化成数字类型
console.log(+Str) // 这里输出数字类型的 111221
// 或者
console.log(Str-0) // 这里输出数字类型的 111221

// 将数字转化成字符串
const Sty=111
console.log(sty+"") // 这里输出字符串类型 111

// 检测所提供的日期是否为工作日
const isWeeKDay=(data)=>data.getDay()%6!==0
console.log(isWeeKDay(new Data(2022,8,24))) // true 因为今天是周三
console.log(isWeeKDay(new Data(2022,8,20))) // false 因为今天是周六

// 滚动到页面顶部
const toTop = () => window.scrollTo(0, 0);
toTop()



数组去重
let arr = [1,1,"1","1",true,true,"true",{},{},"{}",null,null,undefined,undefined]

// 方法1
let uniqueOne = Array.from(new Set(arr)) console.log(uniqueOne)

// 方法2
let uniqueTwo = arr => {
    let map = new Map(); //或者用空对象 let obj = {} 利用对象属性不能重复得特性
    let brr = []
    arr.forEach( item => {
        if(!map.has(item)) { //如果是对象得话就判断 !obj[item]
            map.set(item,true) //如果是对象得话就obj[item] =true 其他一样
            brr.push(item)
        }
    })
    return brr
}
console.log(uniqueTwo(arr))

//方法3
let uniqueThree = arr => {
    let brr = []
    arr.forEach(item => {
        // 使用indexOf 返回数组是否包含某个值 没有就返回-1 有就返回下标
        if(brr.indexOf(item) === -1) brr.push(item)
        // 或者使用includes 返回数组是否包含某个值 没有就返回false 有就返回true
        if(!brr.includes(item)) brr.push(item)
    })
    return brr
}
console.log(uniqueThree(arr))

//方法4
let uniqueFour = arr => {                                         
     // 使用 filter 返回符合条件的集合
    let brr = arr.filter((item,index) => {
        return arr.indexOf(item) === index
    })
    return brr
}
console.log(uniqueFour(arr))