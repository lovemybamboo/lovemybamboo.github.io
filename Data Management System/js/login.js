/**
 * Created by Mr.LuoBo on 2014/9/14.
 */

function validation(){
    var username=document.getElementById("input_username").value;
    var password=document.getElementById("input_password").value;
    Messenger.options = {
        extraClasses: 'messenger-fixed messenger-on-top',
        theme: 'flat'
    };
    var flag=true;
    if(username==""){
        Messenger().post({
            message: "用户名不能为空，请输入用户名!",
            type: 'error',
            showCloseButton: true
        });
        flag=false;
        return flag;
    }
    if(password==""){
        Messenger().post({
            message: "密码不能为空，请输入密码!",
            type: 'error',
            showCloseButton: true
        });
        flag=false;
        return flag;
    }
    return flag;
}
