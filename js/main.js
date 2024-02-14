import { initializeAccordion } from "./component/accordion.js";
import { initializeDropdownMenu } from "./component/dropdownmenu.js";
import { initializeHamburgerMenu } from "./component/hamburgermenu.js";
import { initializeModal } from "./component/modal.js";
import { switchViewport } from "./utility/switch-viewport.js";
import { initializeTabMenu } from "./component/tabmenu.js";

// 画面の幅に応じてビューポートの設定を切り替え
switchViewport();
window.addEventListener("resize", switchViewport);

// 各機能の初期化
initializeAccordion();
initializeDropdownMenu();
initializeHamburgerMenu();
initializeModal();
initializeTabMenu();
