/**
 * Created with JetBrains WebStorm.
 * User: Luo Bo
 * Date: 14-9-1
 * Time: 下午9:45
 * To change this template use File | Settings | File Templates.
 */
$(document).ready(function () {

    initTable();
    $(".form_datetime").datetimepicker({
        language:"zh-CN",
        format: "yyyy-mm-dd hh:ii",
        autoclose: true,
        todayBtn: true,
        startDate: "2013-02-14 10:00",
        minuteStep: 10
    });
});
function initTable(){
    $('#dataTables-data-result').dataTable();
}