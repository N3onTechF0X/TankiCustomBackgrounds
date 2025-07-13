// ==UserScript==
// @name         Custom backgrounds
// @description  Сustom backgrounds for lobby and tab in Tanki Online
// @version      1.3.0
// @author       N3onTechF0X
// @match        https://*.test-eu.tankionline.com/browser-public/index.html?*
// @match        https://tankionline.com/play*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tankionline.com

// @resource     custom_background https://tankionline.com/ru/wp-content/uploads/cache/2022/02/olipeada-min/2685032103.jpg
// @resource     custom_loading    https://tankionline.com/ru/wp-content/uploads/cache/2022/02/olipeada-min/2685032103.jpg
// @resource     custom_tab        https://tankionline.com/ru/wp-content/uploads/cache/2022/02/olipeada-min/2685032103.jpg

// @grant        GM_addStyle
// @grant        GM_getResourceURL
// @run-at       document-start
// ==/UserScript==


const enableLoading = true;    // Вход
const enableBackground = true; // Гараж
const enableTab = true;        // Таб

enableLoading && GM_addStyle(`
#root>.Common-background {
    background-image: url('${GM_getResourceURL("custom_loading")}') !important;
    background-size: cover !important;
    background-position: center !important;
    background-repeat: no-repeat !important;
}
`);

enableBackground && GM_addStyle(`
.Common-container {
    background-image: url('${GM_getResourceURL("custom_background")}') !important;
    background-size: cover !important;
    background-position: center !important;
    background-repeat: no-repeat !important;
}
`);

enableTab && GM_addStyle(`
.BattleTabStatisticComponentStyle-container>div {
    background-image: url('${GM_getResourceURL("custom_tab")}') !important;
    background-size: cover !important;
    background-position: center !important;
    background-repeat: no-repeat !important;
}
`);
