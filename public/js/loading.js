


//在页面未加载完毕之前显示的loading Html自定义内容
var _LoadingHtml = 
'<div id="loadingDiv" style="position:fixed;left:0;width:100%;height:100%;top:0;background:#2d303c url(../img/waitting.gif) center no-repeat;background-size:cotain;z-index:10000;"></div>'


document.write(_LoadingHtml);
 

 
//监听加载状态改变
document.onreadystatechange = completeLoading;
 
//加载状态为complete时移除loading效果
function completeLoading() {
    // console.log(document.readyState)
    if (document.readyState == "complete") {
        var loadingMask = document.getElementById('loadingDiv');
        loadingMask.parentNode.removeChild(loadingMask);
    }
}
