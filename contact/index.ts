import { DesktopMenu } from "/src/components/MenuDesktop";
import { MobileMenu } from "/src/components/MenuMobile";
import { $ } from "/src/utils";


$('header')?.insertAdjacentElement('afterbegin',DesktopMenu());
$('.menu--desktop')?.insertAdjacentElement('afterend',MobileMenu());