//正则匹配 //匹配成功返回true
//正则去掉两段的空格
let trims = (str) => {
  var reg = /^\s*$/;
  return reg.test(str);
}
//验证只能输入数字
let isNumber = (str) => {
  var reg = /^[0-9]*$/;
  return reg.test(str);
}
//邮箱验证
let isEmail = (str) => {
  var reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  return reg.test(str);
}
//手机验证
let isPhone = (str) => {
  var reg = /^1(3|4|5|7|8)\d{9}$/;
  return reg.test(str);
}
//电话验证
let isTel = (str) => {
  var reg = /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/;
  return reg.test(str);
}

//身份验证identity 15-18位
let identity = (str) => {
  let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
  return reg.test(str);
}
//验证邮编编号
let isPost = (str) => {
  var reg = /[1-9]{1}(\d+){5}/;
  return reg.test(str);
}
//验证年龄18-90
let isold = (str) => {
  var reg = /^(1[89]|[2-8][0-9]|90)$/;
  return reg.test(str);
}
//验证密码 (以字母开头，长度在6~18之间，只能包含字母、数字和下划线)
let isPass = (str) => {
  var reg = /^[a-zA-Z]\w{5,17}$/;
  return reg.test(str);
}
//验证密码 强 (必须包含大小写字母和数字的组合，不能使用特殊字符，长度在8-10之间)
let isPassT = (str) => {
  var reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$/;
  return reg.test(str);
}
//钱   
let isMony = (str) => {
  var reg = /^([0-9]+|[0-9]{1,3}(,[0-9]{3})*)(.[0-9]{1,2})?$/;
  return reg.test(str);
}
//验证qq好
let isQQ = (str) => {
  var reg = /[1-9][0-9]{4,}/;
  return reg.test(str);
}
module.exports = {
  trims: trims,
  isPhone: isPhone,
  isNumber: isNumber,
  isPass: isPass,
}