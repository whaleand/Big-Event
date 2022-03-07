$(function () {
  // 导入layui
  let layer = layui.layer

  // 登录和注册的切换

  $('#link_reg').on('click', function () {
    $('.login-box').hide()
    $('.reg-box').show()
  })
  $('#link_login').on('click', function () {
    $('.login-box').show()
    $('.reg-box').hide()
  })


  const pswReg = /^[\S]{6,12}$/

  // 登录提交时检测表格输入内容
  $('.login-box form').on('submit', function (e) {
    e.preventDefault();

    // 用户名不为空
    let username = $('.login-name').val()
    if (username.length == 0) {
      $('.username').addClass("has-error")
      layer.msg('用户名不能为空！')
      return
    }
    // 密码必须6-12位，且无空格
    let psw = $('.login-password').val()
    if (pswReg.test(psw) === false) {
      // e.preventDefault();
      $('.password').addClass("has-error")
      layer.msg('密码必须6-12位，且无空格')
      return
    }
    

    // 发送ajax请求，接口不行啊
    // $.ajax({
    //   method:'post',
    //   url:'http://ajax.frontend.itheima.net/api/login',
    //   data:{username:username,password:psw},
    //   success:(res)=>{
    //     if(res.status!==0){
    //       return layer.msg('登录失败！')
    //     }
    //     layer.msg('登录成功！')
    //     把登录成功的token保存到localStorage
    //     localStorage.setItem('token',res.token)
    //   }
    // })
    // 跳转到后台主页
    location.href='/index.html'

  })

  // 注册时表单内容检测,和ajax请求
  $('.reg-box form').on('submit', function (e) {
    e.preventDefault();

    // 用户名不为空
    let username = $('.reg-box input[name=username]').val()
    if (username.length == 0) {
      $('.username').addClass("has-error")
      layer.msg('用户名不能为空！')
      return
    } else {
      $('.username').removeClass("has-error")

    }

    let psw0 = $('.reg-box input[name=password]').val()
    let psw1 = $('.reg-box input[name=password1]').val()

    if (pswReg.test(psw0) === false) {
      $('.password').addClass("has-error")
      layer.msg('密码必须6-12位，且无空格')
      return
    } else if (psw1 !== psw0) {
      // 再次输入的密码
      $('.password').addClass("has-error")
      layer.msg('两次密码输入不一致！')
      return
    } else {
      $('.password').removeClass("has-error")
    }



    // 表单没问题，开始注册
    layer.msg('注册成功。请登录！')
    // 模拟人点击行为，跳转到登录页面
    $('#link_login').click()

    // 接口用不了！
    // $.post('http://ajax.frontend.itheima.net/api/reguser',{
    //   username:username,
    //   password:psw0
    // },function(res){
    //   if(res.status!==0){
    //     return console.log(res.message);
    //   }
    //   console.log('注册成功！')
    // })
  })
})