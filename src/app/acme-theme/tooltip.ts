import type { TooltipDesignTokens } from '@primeuix/themes/types/tooltip';

 export default {
    root: {
        gutter: "0.25rem",
        shadow: "{overlay.popover.shadow}",
        padding: "0.5rem 0.75rem",
        maxWidth: "12.5rem",
        borderRadius: "{overlay.popover.border.radius}"
    },
    colorScheme: {
        dark: {
            root: {
                color: "{surface.0}",
                background: "{surface.700}"
            }
        },
        light: {
            root: {
                color: "{surface.0}",
                background: "{surface.700}"
            }
        }
    }
} satisfies TooltipDesignTokens;