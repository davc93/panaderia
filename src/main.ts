import { DesktopMenu } from "./components/MenuDesktop";
import { MobileMenu } from "./components/MenuMobile";
import { $ } from "./utils";

export{}
console.log('Hello don Diego');

$('header')?.insertAdjacentElement('afterbegin',DesktopMenu());
$('.menu--desktop')?.insertAdjacentElement('afterend',MobileMenu());