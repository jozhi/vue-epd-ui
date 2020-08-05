/**
 * 显示隐藏代码
 * @param {
 * }
 */
const toggleCode = () => {
  const toggle = document.querySelector('#contPart')
  
  // 以下为点击事件
  function toggleCodeHeight(target){
    let codeHeight = ''
    // 如果第一次点击，初始化赋值
    if(target.dataset.height){
      codeHeight = target.dataset.height
    }else{
      target.dataset.height = target.offsetHeight+'px'
      codeHeight = target.offsetHeight+'px'
    }
    if(target.style.height === ''){
      target.style.height = codeHeight
    }

    // 延时解决第一次没有动画的bug
    setTimeout(()=>{
      // 控制显示隐藏逻辑
      if( target.style.height == '0px' ){
        target.style.height = codeHeight
      }else{
        target.style.height = '0px'
      }
    },0)
  }

  // 底部显示隐藏按钮
  toggle && toggle.addEventListener("click", function(e){
    if(e.target.className === 'toggleCode'){
      toggleCodeHeight(e.target.previousElementSibling.previousElementSibling)
    }
  },false)
  // 右上角显示隐藏按钮
  toggle && toggle.addEventListener("click", function(e){
    if(e.target.className === 'toggleHand'){
      toggleCodeHeight(e.target.parentElement.previousElementSibling)
    }
  },false)

  // 初始化 codeWrap ，进入页面先隐藏代码
  const codeWraps = toggle.querySelectorAll('.codeWrap')
  codeWraps.forEach(function(item){
    let offsetHeight = item.offsetHeight+'px'
    item.dataset.height = offsetHeight
    item.style.height = offsetHeight
    setTimeout(function(){
      item.style.height = '0px'
    },0)
  })

}

export default {
  toggleCode,  // 获取当前时间或者转换时间
}