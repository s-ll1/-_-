function loginCheck() {
	user1 = {
		name: "root",
		psw: "1234"
	}
	users = [user1]
	var nameInput = document.getElementById("username");
	var pwdInput = document.getElementById("password");
	var hb1 = document.getElementById("helpBlock1");
	var hb2 = document.getElementById("helpBlock2");
	var hb3 = document.getElementById("helpBlock3");
	var chk = document.getElementById("remember-psw")
	//获取用户名和密码
	var uname = nameInput.value;
	var pwd = pwdInput.value;
	//判断是否为空
	if (!uname) {
		hb1.style.display = 'block';
	} else if (!pwd) {
		hb2.style.display = 'block';
	} else { //登录成功
		hb1.style.display = 'none'
		hb2.style.display = 'none'
		for (var i = 0; i < users.length; i++) {
			if (uname == users[i]['name'] && pwd == users[i]['psw']) {
				if(chk.checked){
					setCookie(uname, pwd, 7);
				}else{
					clearCookie()
				}
				window.location.href = 'main.html?name=' + uname + '&psw=' + pwd;
				hb3.style.display = 'none'
			} else {
				hb3.style.display = 'block';
			}
		}
	}

}
//设置cookie
function setCookie(c_name, c_pwd, exdays) {
		var exdate = new Date(); //获取时间
		exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays); //保存的天数
		//字符串拼接cookie
		window.document.cookie = "userName" + "=" + c_name + ";path=/;expires=" + exdate.toGMTString();
		window.document.cookie = "userPwd" + "=" + c_pwd + ";path=/;expires=" + exdate.toGMTString();
	}
	//清除cookie
function clearCookie(){
		this.setCookie("", "", -1); //修改2值都为空，天数为负1天就好了
	}
