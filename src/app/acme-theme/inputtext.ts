import type { InputTextDesignTokens } from '@primeng/themes/types/inputtext';

 export default {
    root: {
        lg: {
            fontSize: "1.125rem",
            paddingX: "{form.field.lg.padding.x}",
            paddingY: "{form.field.lg.padding.x}"
        },
        sm: {
            fontSize: "0.875rem",
            paddingX: "{form.field.sm.padding.x}",
            paddingY: "{form.field.sm.padding.x}"
        },
        color: "{form.field.color}",
        shadow: "{form.field.shadow}",
        paddingX: "{form.field.padding.x}",
        paddingY: "{form.field.padding.y}",
        focusRing: {
            color: "{form.field.focus.ring.color}",
            style: "{form.field.focus.ring.style}",
            width: "{form.field.focus.ring.width}",
            offset: "{form.field.focus.ring.offset}",
            shadow: "{form.field.focus.ring.shadow}"
        },
        background: "{form.field.background}",
        borderColor: "{form.field.border.color}",
        borderRadius: "{form.field.border.radius}",
        disabledColor: "{form.field.disabled.color}",
        filledBackground: "{form.field.filled.background}",
        focusBorderColor: "{form.field.focus.border.color}",
        hoverBorderColor: "{form.field.hover.border.color}",
        placeholderColor: "{form.field.placeholder.color}",
        disabledBackground: "{form.field.disabled.background}",
        invalidBorderColor: "{form.field.invalid.border.color}",
        transitionDuration: "{form.field.transition.duration}",
        filledFocusBackground: "{form.field.filled.focus.background}",
        filledHoverBackground: "{form.field.filled.hover.background}",
        invalidPlaceholderColor: "{form.field.invalid.placeholder.color}"
    }
} satisfies InputTextDesignTokens;