import type { RadioButtonDesignTokens } from '@primeuix/themes/types/radiobutton';

 export default {
    icon: {
        lg: {
            size: "1rem"
        },
        sm: {
            size: "0.5rem"
        },
        size: "0.75rem",
        checkedColor: "{primary.contrast.color}",
        disabledColor: "{form.field.disabled.color}",
        checkedHoverColor: "{primary.contrast.color}"
    },
    root: {
        lg: {
            width: "1.5rem",
            height: "1.5rem"
        },
        sm: {
            width: "1rem",
            height: "1rem"
        },
        width: "1.25rem",
        height: "1.25rem",
        shadow: "{form.field.shadow}",
        focusRing: {
            color: "{focus.ring.color}",
            style: "{focus.ring.style}",
            width: "{focus.ring.width}",
            offset: "{focus.ring.offset}",
            shadow: "{focus.ring.shadow}"
        },
        background: "{form.field.background}",
        borderColor: "{form.field.border.color}",
        filledBackground: "{form.field.filled.background}",
        focusBorderColor: "{form.field.border.color}",
        hoverBorderColor: "{form.field.hover.border.color}",
        checkedBackground: "{primary.color}",
        checkedBorderColor: "{primary.color}",
        disabledBackground: "{form.field.disabled.background}",
        invalidBorderColor: "{form.field.invalid.border.color}",
        transitionDuration: "{form.field.transition.duration}",
        checkedHoverBackground: "{primary.hover.color}",
        checkedFocusBorderColor: "{primary.color}",
        checkedHoverBorderColor: "{primary.hover.color}",
        checkedDisabledBorderColor: "{form.field.border.color}"
    }
} satisfies RadioButtonDesignTokens;