/**
 * Created by Mr.LuoBo on 2014/10/2.
 */
$(document).ready(function () {

    initTable();

});
function initTable(){
    $('#dataTables-data-result').dataTable();
    $(".form_datetime").datetimepicker({
        language:"zh-CN",
        format: "yyyy-mm-dd hh:ii",
        autoclose: true,
        todayBtn: true,
        startDate: "2013-02-14 10:00",
        minuteStep: 10
    });
}