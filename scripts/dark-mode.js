// <https://blog.jim-nielsen.com/2018/icon-galleries-dark-mode/>
// <https://medium.com/@dizzyup/adding-a-little-dark-magic-to-the-web-8eb82ce5fd91>
// <https://dev.to/ananyaneogi/create-a-dark-light-mode-switch-with-css-variables-34l8>

document.getElementById('dark-mode-toggle').addEventListener('click', function () {
    var html = document.getElementsByTagName('html')[0];
    if (html.classList.contains('is-dark-mode')) {
        html.classList.remove('is-dark-mode');
        localStorage.setItem('dark-mode', 'false');
    } else {
        html.classList.add('is-dark-mode');
        localStorage.setItem('dark-mode', 'true');
    }
});

// IntersectionObserver
// headerManipulation: function() {
//     if ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype) {
//         var e = $("body");
//         new IntersectionObserver(function(t) {
//             t[0].boundingClientRect.y < 0 ? e.addClass("header-not-at-top") : e.removeClass("header-not-at-top")
//         }).observe($("#top-of-site-pixel-anchor")[0])
//     }
// }