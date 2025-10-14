import type { ImageCompareDesignTokens } from '@primeng/themes/types/imagecompare';

 export default {
    handle: {
        size: "15px",
        focusRing: {
            color: "rgba(255, 255, 255, 0.3)",
            style: "{focus.ring.style}",
            width: "{focus.ring.width}",
            offset: "{focus.ring.offset}",
            shadow: "{focus.ring.shadow}"
        },
        hoverSize: "30px",
        background: "rgba(255, 255, 255, 0.3)",
        borderColor: "transparent",
        borderWidth: "0",
        borderRadius: "50%",
        hoverBackground: "rgba(255, 255, 255, 0.3)",
        hoverBorderColor: "transparent",
        transitionDuration: "{transition.duration}"
    }
} satisfies ImageCompareDesignTokens;