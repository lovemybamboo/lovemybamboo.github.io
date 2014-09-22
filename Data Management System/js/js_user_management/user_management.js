/**
 * Created with JetBrains WebStorm.
 * User: Luo Bo
 * Date: 14-8-31
 * Time: 下午4:11
 * To change this template use File | Settings | File Templates.
 */
$(document).ready(function () {
    startFunction();
    initTable();
    buttonClickEvents();
});
function initTable(){
    $('#dataTables-function-management').dataTable();
    $('#dataTables-function-set').dataTable();
    $('#dataTables-user-query').dataTable();
}
function startFunction(){
    var startList=$(".panel-footer") ;
    for(var i=0;i<4;i++){
        var item_id=startList[i].getAttribute("id") ;
        var target_div="#"+item_id.substring(0,item_id.lastIndexOf("-"));
        $(target_div).hide();
    }
    $(".panel-footer").click(function (){
        var id=this.getAttribute("id");
        var startList=$(".panel-footer") ;
        for(var i=0;i<4;i++){
            var item_id=startList[i].getAttribute("id") ;
            var target_div="#"+item_id.substring(0,item_id.lastIndexOf("-"));
            if(id == item_id){
                $(target_div).show();
            }else {
                $(target_div).hide();
            }
        }
    });
}
function createUserJudge(){
    var targetList=[
        "input-user-name",
        "input-duty"
    ];
    var info=[
        "用户名称不能为空！",
        "职务不能为空!",
        "密码不能为空!" ,

        "两次输入的密码不正确！"
    ];
    var flag=true;
    Messenger.options = {
        extraClasses: 'messenger-fixed messenger-on-top',
        theme: 'flat'
    };
    for(var i=0;i<targetList.length;i++){
        var content=document.getElementById(targetList[i]).value;
        if(content==""){
            Messenger().post({
                message: info[i],
                type: 'error',
                showCloseButton: true
            });
            flag=false;
        }
    }
    if(document.getElementById("input-password").value!="" && document.getElementById("input-confirm-password").value=="" ) {
        Messenger().post({
            message: "确认密码不能为空!",
            type: 'error',
            showCloseButton: true
        });
        flag=false;
    }
    if(document.getElementById("input-password").value=="" && document.getElementById("input-confirm-password").value!="" ) {
        Messenger().post({
            message: "密码不能为空!",
            type: 'error',
            showCloseButton: true
        });
        flag=false;
    }
    if(document.getElementById("input-password").value!="" && document.getElementById("input-confirm-password").value!="" ) {
        if(document.getElementById("input-password").value!= document.getElementById("input-confirm-password").value) {
        Messenger().post({
            message: "两次输入密码不一致!",
            type: 'error',
            showCloseButton: true
        });
        flag=false;
        }
    }
    return flag;

}
function buttonClickEvents(){
    $("#btn-create-user-confirm").click(function (){
        createUserJudge();
    });
    $("#btn-create-user-cancel").click(function (){
        $("div-create-user").hide();
    });
}