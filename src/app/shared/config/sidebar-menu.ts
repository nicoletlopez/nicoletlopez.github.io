import { ISidebarMenu } from 'src/app/core/interfaces/sidebar-menu.interface';

export const SidebarMenu: ISidebarMenu[] = [
    {
        label: "Home",
        fragment: "#home",
        icon: "fas fa-home",
    },
    {
        label: "About Me",
        fragment: "#about-me",
        icon: "far fa-user",
    },
    {
        label: "My Works",
        fragment: "#my-work",
        icon: "far fa-user",
    },
    {
        label: "Contact",
        fragment: "#contact",
        icon: "far fa-user",
    },
]
