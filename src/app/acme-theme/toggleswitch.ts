import type { ToggleSwitchDesignTokens } from '@primeng/themes/types/toggleswitch';

 export default {
    root: {
        gap: "0.25rem",
        width: "2.5rem",
        height: "1.5rem",
        shadow: "{form.field.shadow}",
        focusRing: {
            color: "{focus.ring.color}",
            style: "{focus.ring.style}",
            width: "{focus.ring.width}",
            offset: "{focus.ring.offset}",
            shadow: "{focus.ring.shadow}"
        },
        borderColor: "transparent",
        borderWidth: "1px",
        borderRadius: "30px",
        slideDuration: "0.2s",
        hoverBorderColor: "transparent",
        checkedBorderColor: "transparent",
        invalidBorderColor: "{form.field.invalid.border.color}",
        transitionDuration: "{form.field.transition.duration}",
        checkedHoverBorderColor: "transparent"
    },
    handle: {
        size: "1rem",
        borderRadius: "50%"
    },
    colorScheme: {
        dark: {
            root: {
                background: "{surface.700}",
                hoverBackground: "{surface.600}",
                checkedBackground: "{primary.color}",
                disabledBackground: "{surface.600}",
                checkedHoverBackground: "{primary.hover.color}"
            },
            handle: {
                color: "{surface.900}",
                background: "{surface.400}",
                hoverColor: "{surface.800}",
                checkedColor: "{primary.color}",
                hoverBackground: "{surface.300}",
                checkedBackground: "{surface.900}",
                checkedHoverColor: "{primary.hover.color}",
                disabledBackground: "{surface.900}",
                checkedHoverBackground: "{surface.900}"
            }
        },
        light: {
            root: {
                background: "{surface.300}",
                hoverBackground: "{surface.400}",
                checkedBackground: "{primary.color}",
                disabledBackground: "{form.field.disabled.background}",
                checkedHoverBackground: "{primary.hover.color}"
            },
            handle: {
                color: "{text.muted.color}",
                background: "{surface.0}",
                hoverColor: "{text.color}",
                checkedColor: "{primary.color}",
                hoverBackground: "{surface.0}",
                checkedBackground: "{surface.0}",
                checkedHoverColor: "{primary.hover.color}",
                disabledBackground: "{form.field.disabled.color}",
                checkedHoverBackground: "{surface.0}"
            }
        }
    }
} satisfies ToggleSwitchDesignTokens;