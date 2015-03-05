window.onload = function(){
    setTimeout(function(){
        window.performance = window.performance || window.mozPerformance || window.msPerformance || window.webkitPerformance || {};
        var t = performance.timing || {};

    if (!t) {
        //fail silently
        return;
    }
        var start = t.navigationStart,
        end = t.loadEventEnd
        loadTime = (end - start);

        console.log('This page loaded in ' + loadTime + 'ms');
    }, 0);
}