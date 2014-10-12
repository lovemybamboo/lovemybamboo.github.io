/**
 * Created with JetBrains WebStorm.
 * User: Luo Bo
 * Date: 14-6-23
 * Time: 下午7:41
 * To change this template use File | Settings | File Templates.
 */
function selfAdaption() {
    //获得浏览器宽度
    window_width = $(window).width();
    var scale = window_width / 1440;
    //每个区域-自适应
    $(".area").css("height", scale * 800);
    //合作客户-自适应
    $("#clients-table-div").css("width", window_width);
    $("#clients-table").css("width", window_width);
    $(".client-item").css("width", window_width / 4);
    $(".client-item").css("height", 85*scale);
    $(".client-item-img").css("width", 200*scale);
    $(".client-item-img").css("height", 80*scale);
    $("#client-tips").css("height", 168 * scale);
    for (i = 1; i < 6; i++) {
        id = "#client-" + i;
        $(id).attr("src", "image/interaction/logo/client-" + i + ".png");
    }
    var second_height = 200 + $("#info-cn").height() + 20 + $("#info-en").height() + 100 + $("#info-color").height() + 40 + $("#client-tips").height() + 50 + $(".client-item").height() + 4 + 80 + 60;
    $("#second").css("height", second_height);

    //案例展示-自适应
    $(".show-img").css("width", window_width / 4);
    $(".show-img").css("height", 360 * scale);
    $(".show").css("height", 360 * scale);
    $("#case").css("height", scale * 80);
    $(".click").css("width", 150 * scale);
    $(".click").css("height", 150 * scale);
    $(".click").css("margin-top", (360 * scale - 150 * scale) / 2);
    for (i = 1; i < 9; i++) {
        id = "#img-" + i;
        $(id).css("background-image", "url(image/interaction/case/" + i + "-dark.png)");
    }

    //底部-自适应
    $("#forth").css("height", window_width / 1440 * 500);
    $("#join-img-div").css("top", $("#first").height() + $("#second").height() + $("#third").height() + $("#forth").height() * 0.6);
    $("#email-div").css("top", $("#first").height() + $("#second").height() + $("#third").height() + $("#forth").height() * 0.7);
    $("#join-div").css("margin-right",120+window_width*scale*0.12);
    $("#footer").css("margin-top",(scale * 500 -(scale * 500 * 0.6+100+18))*0.9);
}
function navFunction() {
    //导航栏特效-鼠标触发第一个
    $("#nav-group-img").mouseover(function () {
        $("#nav-group-img").attr("src", "./image/nav/group-choosed.png");
        $("#nav-interaction-img").attr("src", "./image/nav/interaction-unchoosed.png");
        $("#nav-group-img").css("top", "-3px");
        $("#nav-vision-img").css("top", "-6px");
        $("#nav-interaction-img").css("left", "2.5px");
        $("#nav-interaction-img").css("top", "-6px");
        $("#nav-public-relation-img").css("top", "-6px");
    });
    $("#nav-group-img").mouseleave(function () {
        $("#nav-group-img").attr("src", "./image/nav/group-unchoosed.png");
        $("#nav-interaction-img").attr("src", "./image/nav/interaction-choosed.png");

        $("#nav-vision-img").css("top", "-3px");
        $("#nav-interaction-img").css("top", "-6px");
        $("#nav-interaction-img").css("left", "0px");
        $("#nav-public-relation-img").css("top", "-6px");

    });

    //导航栏特效-鼠标触发第二个
    $("#nav-vision-img").mouseover(function () {
        $("#nav-vision-img").attr("src", "./image/nav/vision-choosed.png");
        $("#nav-interaction-img").attr("src", "./image/nav/interaction-unchoosed.png");

        $("#nav-interaction-img").css("left", "2.5px");
        $("#nav-interaction-img").css("top", "-6px");

        $("#nav-vision-img").css("top", "-6px");
        $("#nav-vision-img").css("left", "0px");

    });
    $("#nav-vision-img").mouseleave(function () {
        $("#nav-vision-img").attr("src", "./image/nav/vision-unchoosed.png");
        $("#nav-interaction-img").attr("src", "./image/nav/interaction-choosed.png");

        $("#nav-vision-img").css("top", "-3px");
        $("#nav-vision-img").css("left", "2.5px")

        $("#nav-interaction-img").css("left", "0px");
        //$("#nav-vision-img").css("top","-3px");
        //$("#nav-public-relation-img").css("top","-3px");

    });

    //导航栏特效-鼠标触发第四个
    $("#nav-public-relation-img").mouseover(function () {
        $("#nav-public-relation-img").attr("src", "./image/nav/public-relation-choosed.png");
        $("#nav-interaction-img").attr("src", "./image/nav/interaction-unchoosed.png");

        $("#nav-interaction-img").css("position", "relative");
        $("#nav-interaction-img").css("left", "2.5px");
        $("#nav-interaction-img").css("top", "-3px");

        $("#nav-public-relation-img").css("position", "relative");
        $("#nav-public-relation-img").css("left", "0px");
        $("#nav-vision-img").css("top", "-3px");
    });
    $("#nav-public-relation-img").mouseleave(function () {
        $("#nav-public-relation-img").attr("src", "./image/nav/public-relation-unchoosed.png");
        $("#nav-interaction-img").attr("src", "./image/nav/interaction-choosed.png");

        $("#nav-interaction-img").css("top", "-6px");
        $("#nav-interaction-img").css("left", "0px");
        $("#nav-public-relation-img").css("position", "relative");
        $("#nav-public-relation-img").css("left", "2.5px");
        //$("#nav-vision-img").css("top","-3px");


    });
}
function imageFunction() {
    //获得浏览器宽度
    var window_width = $(window).width();
    //获得图片宽度
    var image_width = window_width / 4;

    $(".show-img").mouseover(function () {
        var id = $(this).attr("id");
        id = id.substring(4);
        var imagePath = "image/interaction/case/" + id + "-light.png"
        $("#img-" + id).css("background-image", "url(image/interaction/case/" + id + "-light.png)");
        $("#click-" + id).css("visibility", "visible");
        $(".show-img").css("max-width", image_width);
    });
    $(".show-img").mouseleave(function () {
        var id = $(this).attr("id");
        id = id.substring(4);
        var imagePath = "image/interaction/case/" + id + "-dark.png"
        $("#img-" + id).css("background-image", "url(image/interaction/case/" + id + "-dark.png)");
        $("#click-" + id).css("visibility", "hidden");
        $(".show-img").css("max-width", image_width);
    });
    $("#join-img-click").mouseover(function () {
        $("#join-img-click").animate({opacity: '1'},2000);
    });
    $("#join-img-click").mouseleave(function () {
        $("#join-img-click").animate({opacity: '0'},2000);
    });
}
function clickCase(){
    $(".click").click(function(){
        var id = $(this).attr("id");
        var scale = window_width / 1440;
        var width=parseInt(1000*scale);
        $("#show-modal-dialog").css("width",width+5);
        $("#show-modal-body").css("width",width+5);
        $("#show-modal-img").css("width", width);
        $("#show-modal-body").css("padding",0);
        id = id.substring(6);
        var imagePath = "image/interaction/case/" + id + "-case.jpg";
        $("#show-modal-img").attr("src", imagePath);


        $('#show-modal').modal();
    });
}
function clickLeft(imgNumber) {
    $("#control-left").click(function () {
        //获得个图片的src
        for (var i = 1; i < 6; i++) {
            var item = "#client-" + i;
            var src = $(item).attr("src");
            src = src.substring(src.lastIndexOf("-") + 1, src.indexOf("."));
            var img_id = parseInt(src) + 1;
            if (img_id > imgNumber) {
                img_id = img_id % imgNumber;
            }
            $(item).fadeIn("fast");
            $(item).attr("src", "image/interaction/logo/client-" + img_id + ".png");
            $(item).show();

        }
    });
}
function clickRight(imgNumber) {
    $("#control-right").mouseover(function () {
        $("#control-left").css("background-color", "#dcdddd");
        $("#control-right").css("background-color", "#007d4e");
    });
    $("#control-right").mouseleave(function () {
        $("#control-left").css("background-color", "#007d4e");
        $("#control-right").css("background-color", "#dcdddd");
    });
    $("#control-right").click(function () {
        //获得个图片的src
        for (var i = 5; i > 0; i--) {
            var item = "#client-" + i;
            var src = $(item).attr("src");
            src = src.substring(src.lastIndexOf("-") + 1, src.indexOf("."));
            var img_id = parseInt(src) - 1;
            if (img_id < 1) {
                img_id = imgNumber - img_id;
            }
            $(item).fadeIn("fast");
            $(item).attr("src", "image/interaction/logo/client-" + img_id + ".png");

            $(item).show();

        }
    });
}
function addBookmark() {
    var ctrl = (navigator.userAgent.toLowerCase()).indexOf('mac') != -1 ? 'Command/Cmd' : 'CTRL';
    try {
        if (document.all) { //IE类浏览器
            try {
                window.external.toString(); //360浏览器不支持window.external，无法收藏
                window.alert("国内开发的360浏览器等不支持主动加入收藏。\n您可以尝试通过浏览器菜单栏 或快捷键 ctrl+D 试试。");
            }
            catch (e) {
                try {
                    window.external.addFavorite(window.location, document.title);
                }
                catch (e) {
                    window.external.addToFavoritesBar(window.location, document.title);  //IE8
                }
            }
        }
        else if (window.sidebar) { //firfox等浏览器
            window.sidebar.addPanel(document.title, window.location, "");
        }
        else {
            alert('您的浏览器暂不支持自动添加收藏，您可以尝试通过快捷键' + ctrl + ' + D 加入到收藏夹~');
        }
    }
    catch (e) {
        window.alert("因为IE浏览器存在bug，添加收藏失败！\n解决办法：在注册表中查找\n HKEY_CLASSES_ROOT\\TypeLib\\{EAB22AC0-30C1-11CF-A7EB-0000C05BAE0B}\\1.1\\0\\win32 \n将 C:\\WINDOWS\\system32\\shdocvw.dll 改为 C:\\WINDOWS\\system32\\ieframe.dll ");
    }
}

function tipsFunction() {
    $("#copyrightAffirm").click(function () {
        $('#copyrightAffirmModal').modal();
    });
    $("#exception").click(function () {
        $('#exceptionModal').modal();
    });
    $("#privacyPolicy").click(function () {
        $('#privacyPolicyModal').modal();
    });
    $("#addFavorite").click(function () {
        $('#addFavoriteModal').modal();
    });
    $("#confirmButton").click(function () {
        $('#addFavoriteModal').modal('toggle');
        addBookmark();
    });
    $("#join-img-click").click(function () {
        $('#joinusModal').modal();
    });
}
jQuery(document).ready(function () {
    selfAdaption();
    navFunction();
    $(window).resize(function () {
        selfAdaption();
    });
    imageFunction();
    clickLeft(7);
    clickRight(7);
    tipsFunction();
    clickCase();
});