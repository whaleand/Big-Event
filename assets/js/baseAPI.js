// 每次调用ajax先调用该文件
// 配置根路径的
$.ajaxPrefilter(function(options){
  options.url='xxx'+options.url
  // 做路径拼接
})
