// function getUserInfo(){
//   $.ajax({
//     method:'GET',
//     url:'/my/userinfo',
//     headers:{
//       Authorization:localStorage.getItem('token')||''
//     },
//     success: function(res){
//       // console.log(res);
//       // 定义渲染头像的函数
          // renderAvater()
          
//     },
//}
//   })
// }

$(function () {
  // getUserInfo()
  var layer = layui.layer
  $('.btnCl').on('click', function () {
    layer.confirm('确定退出吗？', { icon: 3, title: '提示' }, function (index) {
        // 清除token
      localStorage.removeItem('token')
      // 跳转到登录
      location.href = '/login.html'
      // 关闭confirm询问框
      layer.close(index)
    }
    )

  })
})