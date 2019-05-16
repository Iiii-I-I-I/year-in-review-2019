// @TODO: use localStorage so dark mode persists across reloads
document.getElementById('dark-mode-toggle').addEventListener('click', function () {
    var html = document.getElementsByTagName('html')[0];
    if (html.classList.contains('is-dark-mode')) {
        html.classList.remove('is-dark-mode');
    } else {
        html.classList.add('is-dark-mode');
    }
});