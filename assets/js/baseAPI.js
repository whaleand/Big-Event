// 每次调用ajax先调用该文件
// 配置根路径的
$.ajaxPrefilter(function (options) {
  options.url = 'http://ajax.frontend.itheima.net' + options.url
  // 做路径拼接

  // 统一为有权限的接口设置headers
  if (options.url.indexOf('/my/') !== -1) {
    options.headers = {
      Authorization: localStorage.getItem('token') || ''
    }
  }
  // 全局统一挂载complete回调函数
  // 不论成功失败都会调用,调用有权限的接口验证是否认证成功
  options.complete = (res) => {
    if (res.responseJSON.status == 1 && res.responseJSON === '身份认证失败') {
      localStorage.removeItem('token')
      location.href = './login.html'
    }
  }

})
