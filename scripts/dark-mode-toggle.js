/**
 * From <https://blog.jim-nielsen.com/2018/icon-galleries-dark-mode/>
 *
 * Dark Mode
 * We persist the state of whether we're in dark mode or not between page loads
 * by using localStorage.
 * The initial state of whether we're in dark mode is set inline via a
 * <script> tag right after the initial <html> element on the page
 * (see `_header.ejs`);
 */

const isDarkMode = () => {
    return localStorage.getItem("isDarkMode") === "true";
};

export default function addDarkModeToggle() {
    const $toggle = document.querySelector(".dark-mode-toggle");
    $toggle.removeAttribute("hidden");

    // If we're in dark mode, set the toggle as being so
    if (isDarkMode()) {
        $toggle.querySelector("input").setAttribute("checked", true);
    }

    $toggle.addEventListener("change", () => {
        document.documentElement.classList.toggle("is-dark-mode");
        localStorage.setItem("isDarkMode", !isDarkMode());
    });
}

// From <https://medium.com/@dizzyup/adding-a-little-dark-magic-to-the-web-8eb82ce5fd91>

// $('#lightswitch').on('click', function() {
//     if ($('body').hasClass('darkmode')) {
//         $('body').removeClass('darkmode');
//         makeImagesLight();
//         localStorage.removeItem("prefers-color-scheme", "dark");
//         return false;
//     } else {
//         $('body').addClass('darkmode');
//         makeImagesDark();
//         localStorage.setItem("prefers-color-scheme", "dark");
//         return false;
//     }
// });
//
// if (localStorage.getItem("prefers-color-scheme") == "dark") {
//     $('body').addClass('darkmode');
//     makeImagesDark();
// }