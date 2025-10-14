import type { ScrollPanelDesignTokens } from '@primeng/themes/types/scrollpanel';

 export default {
    bar: {
        size: "9px",
        focusRing: {
            color: "{focus.ring.color}",
            style: "{focus.ring.style}",
            width: "{focus.ring.width}",
            offset: "{focus.ring.offset}",
            shadow: "{focus.ring.shadow}"
        },
        borderRadius: "{border.radius.sm}"
    },
    root: {
        transitionDuration: "{transition.duration}"
    },
    colorScheme: {
        dark: {
            bar: {
                background: "{surface.800}"
            }
        },
        light: {
            bar: {
                background: "{surface.100}"
            }
        }
    }
} satisfies ScrollPanelDesignTokens;