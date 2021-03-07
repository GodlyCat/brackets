module.exports = function check(str, bracketsConfig) {
  let len =str.length
  for(let i = 0; i<=len; i++){
    bracketsConfig.map((item)=>{
      str=str.replace(item[0]+item[1],"")
    })
  }
  if(str) return false
    else return true
}
