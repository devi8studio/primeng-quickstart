import type { MenubarDesignTokens } from '@primeuix/themes/types/menubar';

 export default {
    item: {
        gap: "{navigation.item.gap}",
        icon: {
            color: "{navigation.item.icon.color}",
            focusColor: "{navigation.item.icon.focus.color}",
            activeColor: "{navigation.item.icon.active.color}"
        },
        color: "{navigation.item.color}",
        padding: "{navigation.item.padding}",
        focusColor: "{navigation.item.focus.color}",
        activeColor: "{navigation.item.active.color}",
        borderRadius: "{navigation.item.border.radius}",
        focusBackground: "{navigation.item.focus.background}",
        activeBackground: "{navigation.item.active.background}"
    },
    root: {
        gap: "0.5rem",
        color: "{content.color}",
        padding: "0.5rem 0.75rem",
        background: "{content.background}",
        borderColor: "{content.border.color}",
        borderRadius: "{content.border.radius}",
        transitionDuration: "{transition.duration}"
    },
    submenu: {
        gap: "{navigation.list.gap}",
        icon: {
            size: "{navigation.submenu.icon.size}",
            color: "{navigation.submenu.icon.color}",
            focusColor: "{navigation.submenu.icon.focus.color}",
            activeColor: "{navigation.submenu.icon.active.color}"
        },
        shadow: "{overlay.navigation.shadow}",
        padding: "{navigation.list.padding}",
        background: "{content.background}",
        borderColor: "{content.border.color}",
        borderRadius: "{content.border.radius}",
        mobileIndent: "1rem"
    },
    baseItem: {
        padding: "{navigation.item.padding}",
        borderRadius: "{content.border.radius}"
    },
    separator: {
        borderColor: "{content.border.color}"
    },
    mobileButton: {
        size: "1.75rem",
        color: "{text.muted.color}",
        focusRing: {
            color: "{focus.ring.color}",
            style: "{focus.ring.style}",
            width: "{focus.ring.width}",
            offset: "{focus.ring.offset}",
            shadow: "{focus.ring.shadow}"
        },
        hoverColor: "{text.hover.muted.color}",
        borderRadius: "50%",
        hoverBackground: "{content.hover.background}"
    }
} satisfies MenubarDesignTokens;