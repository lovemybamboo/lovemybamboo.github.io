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
    scale = window_width / 1440;
    $("#item-table-div").css("width", window_width * 0.66);
    $("#item-table").css("width", window_width * 0.66);
    $(".item-item").css("width", window_width * 0.66 / 4);
    $(".area").css("height", scale * 800);
    second_height = 200 + $("#info-cn").height() + 20 + $("#info-en").height() + 200 + $("#item-table-div").height() + 100;
    table_width=($("#info-en").width()-90*4)/6*2+$("#info-en").width();
    $("#item-table-div").css("width",table_width);
    $("#item-table").css("width",table_width);
    $(".item-td-img").css("width",table_width/4);
    $(".item-td-text").css("width",table_width/4);
    $("#second").css("height", second_height);

    $("#five-img").css("height",scale*505) ;
    $("#five-content").css("margin-top",scale*(100));
    $("#five-content").css("margin-bottom",scale*(80));
    $("#third").css("height",$("#five-img").height()+$("#five-content").height()+scale*(180));

    $("#forth").css("height", scale * 800);

    $("#person-table-div").css("padding-top",170*scale);
    $("#person-tr").css("padding-bottom",50*scale);
    $(".person-td").css("height", scale * 200);
    $(".person-td").css("weight", scale * 200);
    for (var i = 1; i < 11; i++) {
        var person = "#person-" + i;
        $(person).css("height", scale * 200);
        $(person).css("weight", scale * 200);
        if(i==5 || i==10){
            if(i==10){
                $(".person-td-"+i).css("padding-top", scale * 50);
            }
            continue;
        }
        $(".person-td-"+i).css("padding-right", scale * 35);

        if(i>5){
            $(".person-td-"+i).css("padding-top", scale * 50);
        }
    }

    $("#fifth").css("height", scale * 500);
    $("#join-img-div").css("top", scale * 800 * 2 + $("#third").height()+$("#second").height() + scale * 500 * 0.6);
    $("#email-div").css("top", scale * 800 * 2 +$("#third").height()+ $("#second").height() + scale * 500 * 0.7);

    $("#join-div").css("margin-right",120+window_width*scale*0.12);
    $("#footer").css("margin-top",(scale * 500 -(scale * 500 * 0.6+100+18))*0.9);



}
function navFunction() {
    //导航栏特效-鼠标触发第二个
    $("#nav-vision-img").mouseover(function () {
        $("#nav-vision-img").attr("src", "./image/nav/vision-choosed.png");
        $("#nav-group-img").attr("src", "./image/nav/group-unchoosed.png");

        $("#nav-group-img").css("position", "relative");
        $("#nav-group-img").css("left", "2.5px");
        $("#nav-group-img").css("top", "0px");


        $("#nav-vision-img").css("left", "0px");
        $("#nav-interaction-img").css("top", "-3px");
        $("#nav-public-relation-img").css("top", "-3px");
    });
    $("#nav-vision-img").mouseleave(function () {
        $("#nav-vision-img").attr("src", "./image/nav/vision-unchoosed.png");
        $("#nav-group-img").attr("src", "./image/nav/group-choosed.png");

        $("#nav-group-img").css("position", "static");


        $("#nav-vision-img").css("left", "2.5px");

        $("#nav-interaction-img").css("top", "-3px");
        $("#nav-public-relation-img").css("top", "-3px");

    });

    //导航栏特效-鼠标触发第三个
    $("#nav-interaction-img").mouseover(function () {
        $("#nav-interaction-img").attr("src", "./image/nav/interaction-choosed.png");
        $("#nav-group-img").attr("src", "./image/nav/group-unchoosed.png");

        $("#nav-group-img").css("position", "relative");
        $("#nav-group-img").css("left", "2.5px");
        $("#nav-group-img").css("top", "0px");

        $("#nav-interaction-img").css("position", "relative");
        $("#nav-interaction-img").css("left", "0px");
        $("#nav-vision-img").css("top", "0px");
        $("#nav-public-relation-img").css("top", "-3px");
    });
    $("#nav-interaction-img").mouseleave(function () {
        $("#nav-interaction-img").attr("src", "./image/nav/interaction-unchoosed.png");
        $("#nav-group-img").attr("src", "./image/nav/group-choosed.png");

        $("#nav-group-img").css("position", "static");


        $("#nav-interaction-img").css("position", "relative");
        $("#nav-interaction-img").css("left", "2.5px");
        $("#nav-vision-img").css("top", "-3px");
        $("#nav-public-relation-img").css("top", "-3px");

    });

    //导航栏特效-鼠标触发第四个
    $("#nav-public-relation-img").mouseover(function () {
        $("#nav-public-relation-img").attr("src", "./image/nav/public-relation-choosed.png");
        $("#nav-group-img").attr("src", "./image/nav/group-unchoosed.png");

        $("#nav-group-img").css("position", "relative");
        $("#nav-group-img").css("left", "2.5px");
        $("#nav-group-img").css("top", "0px");

        $("#nav-public-relation-img").css("position", "relative");
        $("#nav-public-relation-img").css("left", "0px");
        $("#nav-vision-img").css("top", "0px");
        $("#nav-interaction-img").css("top", "0px");
    });
    $("#nav-public-relation-img").mouseleave(function () {
        $("#nav-public-relation-img").attr("src", "./image/nav/public-relation-unchoosed.png");
        $("#nav-group-img").attr("src", "./image/nav/group-choosed.png");

        $("#nav-group-img").css("position", "static");


        $("#nav-public-relation-img").css("position", "relative");
        $("#nav-public-relation-img").css("left", "2.5px");
        $("#nav-vision-img").css("top", "-3px");
        $("#nav-interaction-img").css("top", "-3px");

    });
}
function imageFunction() {
    $("#join-img-click").mouseover(function () {
        $("#join-img-click").animate({opacity: '1'},2000);
    });
    $("#join-img-click").mouseleave(function () {
        $("#join-img-click").animate({opacity: '0'},2000);
    });

    $("#item-1").mouseover(function () {
        $("#item-1").attr("src", "./image/main/7-light.png");

    });
    $("#item-1").mouseleave(function () {
        $("#item-1").attr("src", "./image/main/7-dark.png");
    });
    $("#item-2").mouseover(function () {
        $("#item-2").attr("src", "./image/main/24-light.png");

    });
    $("#item-2").mouseleave(function () {
        $("#item-2").attr("src", "./image/main/24-dark.png");
    });
    $("#item-3").mouseover(function () {
        $("#item-3").attr("src", "./image/main/360-light.png");

    });
    $("#item-3").mouseleave(function () {
        $("#item-3").attr("src", "./image/main/360-dark.png");
    });
    $("#item-4").mouseover(function () {
        $("#item-4").attr("src", "./image/main/100-light.png");

    });
    $("#item-4").mouseleave(function () {
        $("#item-4").attr("src", "./image/main/100-dark.png");
    });
    //同事展示
    $("#person-1").mouseover(function () {
        $("#person-1").attr("src", "./image/main/person/person-1-2.jpg");

    });
    $("#person-1").mouseleave(function () {
        $("#person-1").attr("src", "./image/main/person/person-1-1.jpg");
    });
    $("#person-2").mouseover(function () {
        $("#person-2").attr("src", "./image/main/person/person-2-2.jpg");

    });
    $("#person-2").mouseleave(function () {
        $("#person-2").attr("src", "./image/main/person/person-2-1.jpg");
    });
    $("#person-3").mouseover(function () {
        $("#person-3").attr("src", "./image/main/person/person-3-2.jpg");

    });
    $("#person-3").mouseleave(function () {
        $("#person-3").attr("src", "./image/main/person/person-3-1.jpg");
    });
    $("#person-4").mouseover(function () {
        $("#person-4").attr("src", "./image/main/person/person-4-2.jpg");

    });
    $("#person-4").mouseleave(function () {
        $("#person-4").attr("src", "./image/main/person/person-4-1.jpg");
    });
    $("#person-5").mouseover(function () {
        $("#person-5").attr("src", "./image/main/person/person-5-2.jpg");

    });
    $("#person-5").mouseleave(function () {
        $("#person-5").attr("src", "./image/main/person/person-5-1.jpg");
    });
    $("#person-6").mouseover(function () {
        $("#person-6").attr("src", "./image/main/person/person-6-2.jpg");

    });
    $("#person-6").mouseleave(function () {
        $("#person-6").attr("src", "./image/main/person/person-6-1.jpg");
    });
    $("#person-7").mouseover(function () {
        $("#person-7").attr("src", "./image/main/person/person-7-2.jpg");

    });
    $("#person-7").mouseleave(function () {
        $("#person-7").attr("src", "./image/main/person/person-7-1.jpg");
    });
    $("#person-8").mouseover(function () {
        $("#person-8").attr("src", "./image/main/person/person-8-2.jpg");

    });
    $("#person-8").mouseleave(function () {
        $("#person-8").attr("src", "./image/main/person/person-8-1.jpg");
    });
    $("#person-9").mouseover(function () {
        $("#person-9").attr("src", "./image/main/person/person-9-2.jpg");

    });
    $("#person-9").mouseleave(function () {
        $("#person-9").attr("src", "./image/main/person/person-9-1.jpg");
    });
    $("#person-10").mouseover(function () {
        $("#person-10").attr("src", "./image/main/person/person-10-2.jpg");

    });
    $("#person-10").mouseleave(function () {
        $("#person-10").attr("src", "./image/main/person/person-10-1.jpg");
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
}

jQuery(document).ready(function () {
    selfAdaption();
    navFunction();
    $(window).resize(function () {
        selfAdaption();
    });
    imageFunction();
    tipsFunction();
});