import type { PaginatorDesignTokens } from '@primeng/themes/types/paginator';

 export default {
    root: {
        gap: "0.25rem",
        color: "{content.color}",
        padding: "0.5rem 1rem",
        background: "{content.background}",
        borderRadius: "{content.border.radius}",
        transitionDuration: "{transition.duration}"
    },
    navButton: {
        color: "{text.muted.color}",
        width: "2.5rem",
        height: "2.5rem",
        focusRing: {
            color: "{focus.ring.color}",
            style: "{focus.ring.style}",
            width: "{focus.ring.width}",
            offset: "{focus.ring.offset}",
            shadow: "{focus.ring.shadow}"
        },
        background: "transparent",
        hoverColor: "{text.hover.muted.color}",
        borderRadius: "50%",
        selectedColor: "{highlight.color}",
        hoverBackground: "{content.hover.background}",
        selectedBackground: "{highlight.background}"
    },
    jumpToPageInput: {
        maxWidth: "2.5rem"
    },
    currentPageReport: {
        color: "{text.muted.color}"
    }
} satisfies PaginatorDesignTokens;