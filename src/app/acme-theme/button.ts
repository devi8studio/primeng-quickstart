import type { ButtonDesignTokens } from '@primeng/themes/types/button';

 export default {
    root: {
        lg: {
            fontSize: "1.125rem",
            paddingX: "0.875rem",
            paddingY: "0.625rem",
            iconOnlyWidth: "3rem"
        },
        sm: {
            fontSize: "0.875rem",
            paddingX: "0.625rem",
            paddingY: "0.375rem",
            iconOnlyWidth: "2rem"
        },
        gap: "0.5rem",
        label: {
            fontWeight: "500"
        },
        paddingX: "{form.field.padding.x}",
        paddingY: "{form.field.padding.y}",
        badgeSize: "1rem",
        focusRing: {
            style: "{focus.ring.style}",
            width: "{focus.ring.width}",
            offset: "{focus.ring.offset}"
        },
        borderRadius: "{form.field.border.radius}",
        raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2),0 2px 2px 0 rgba(0, 0, 0, 0.14),0 1px 5px 0 rgba(0, 0, 0, 0.12)",
        iconOnlyWidth: "2.5rem",
        transitionDuration: "{form.field.transition.duration}",
        roundedBorderRadius: "2rem"
    },
    colorScheme: {
        dark: {
            link: {
                color: "{primary.color}",
                hoverColor: "{primary.color}",
                activeColor: "{primary.color}"
            },
            root: {
                help: {
                    color: "{purple.950}",
                    focusRing: {
                        color: "{purple.400}",
                        shadow: "0 0 0 0 #00000000"
                    },
                    background: "{purple.400}",
                    hoverColor: "{purple.950}",
                    activeColor: "{purple.950}",
                    borderColor: "{purple.400}",
                    hoverBackground: "{purple.300}",
                    activeBackground: "{purple.200}",
                    hoverBorderColor: "{purple.300}",
                    activeBorderColor: "{purple.200}"
                },
                info: {
                    color: "{sky.950}",
                    focusRing: {
                        color: "{sky.400}",
                        shadow: "0 0 0 0 #00000000"
                    },
                    background: "{sky.400}",
                    hoverColor: "{sky.950}",
                    activeColor: "{sky.950}",
                    borderColor: "{sky.400}",
                    hoverBackground: "{sky.300}",
                    activeBackground: "{sky.200}",
                    hoverBorderColor: "{sky.300}",
                    activeBorderColor: "{sky.200}"
                },
                warn: {
                    color: "{orange.950}",
                    focusRing: {
                        color: "{orange.400}",
                        shadow: "0 0 0 0 #00000000"
                    },
                    background: "{orange.400}",
                    hoverColor: "{orange.950}",
                    activeColor: "{orange.950}",
                    borderColor: "{orange.400}",
                    hoverBackground: "{orange.300}",
                    activeBackground: "{orange.200}",
                    hoverBorderColor: "{orange.300}",
                    activeBorderColor: "{orange.200}"
                },
                danger: {
                    color: "{red.950}",
                    focusRing: {
                        color: "{red.400}",
                        shadow: "0 0 0 0 #00000000"
                    },
                    background: "{red.400}",
                    hoverColor: "{red.950}",
                    activeColor: "{red.950}",
                    borderColor: "{red.400}",
                    hoverBackground: "{red.300}",
                    activeBackground: "{red.200}",
                    hoverBorderColor: "{red.300}",
                    activeBorderColor: "{red.200}"
                },
                primary: {
                    color: "{primary.contrast.color}",
                    focusRing: {
                        color: "{primary.color}",
                        shadow: "0 0 0 0 #00000000"
                    },
                    background: "{primary.color}",
                    hoverColor: "{primary.contrast.color}",
                    activeColor: "{primary.contrast.color}",
                    borderColor: "{primary.color}",
                    hoverBackground: "{primary.hover.color}",
                    activeBackground: "{primary.active.color}",
                    hoverBorderColor: "{primary.hover.color}",
                    activeBorderColor: "{primary.active.color}"
                },
                success: {
                    color: "{green.950}",
                    focusRing: {
                        color: "{green.400}",
                        shadow: "0 0 0 0 #00000000"
                    },
                    background: "{green.400}",
                    hoverColor: "{green.950}",
                    activeColor: "{green.950}",
                    borderColor: "{green.400}",
                    hoverBackground: "{green.300}",
                    activeBackground: "{green.200}",
                    hoverBorderColor: "{green.300}",
                    activeBorderColor: "{green.200}"
                },
                contrast: {
                    color: "{surface.950}",
                    focusRing: {
                        color: "{surface.0}",
                        shadow: "0 0 0 0 #00000000"
                    },
                    background: "{surface.0}",
                    hoverColor: "{surface.950}",
                    activeColor: "{surface.950}",
                    borderColor: "{surface.0}",
                    hoverBackground: "{surface.100}",
                    activeBackground: "{surface.200}",
                    hoverBorderColor: "{surface.100}",
                    activeBorderColor: "{surface.200}"
                },
                secondary: {
                    color: "{surface.300}",
                    focusRing: {
                        color: "{surface.300}",
                        shadow: "0 0 0 0 #00000000"
                    },
                    background: "{surface.800}",
                    hoverColor: "{surface.200}",
                    activeColor: "{surface.100}",
                    borderColor: "{surface.800}",
                    hoverBackground: "{surface.700}",
                    activeBackground: "{surface.600}",
                    hoverBorderColor: "{surface.700}",
                    activeBorderColor: "{surface.600}"
                }
            },
            text: {
                help: {
                    color: "{purple.400}",
                    hoverBackground: "color-mix(in srgb, {purple.400}, transparent 96%)",
                    activeBackground: "color-mix(in srgb, {purple.400}, transparent 84%)"
                },
                info: {
                    color: "{sky.400}",
                    hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)",
                    activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)"
                },
                warn: {
                    color: "{orange.400}",
                    hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)",
                    activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)"
                },
                plain: {
                    color: "{surface.0}",
                    hoverBackground: "{surface.800}",
                    activeBackground: "{surface.700}"
                },
                danger: {
                    color: "{red.400}",
                    hoverBackground: "color-mix(in srgb, {red.400}, transparent 96%)",
                    activeBackground: "color-mix(in srgb, {red.400}, transparent 84%)"
                },
                primary: {
                    color: "{primary.color}",
                    hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)",
                    activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)"
                },
                success: {
                    color: "{green.400}",
                    hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)",
                    activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)"
                },
                contrast: {
                    color: "{surface.0}",
                    hoverBackground: "{surface.800}",
                    activeBackground: "{surface.700}"
                },
                secondary: {
                    color: "{surface.400}",
                    hoverBackground: "{surface.800}",
                    activeBackground: "{surface.700}"
                }
            },
            outlined: {
                help: {
                    color: "{purple.400}",
                    borderColor: "{purple.700}",
                    hoverBackground: "color-mix(in srgb, {purple.400}, transparent 96%)",
                    activeBackground: "color-mix(in srgb, {purple.400}, transparent 84%)"
                },
                info: {
                    color: "{sky.400}",
                    borderColor: "{sky.700}",
                    hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)",
                    activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)"
                },
                warn: {
                    color: "{orange.400}",
                    borderColor: "{orange.700}",
                    hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)",
                    activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)"
                },
                plain: {
                    color: "{surface.0}",
                    borderColor: "{surface.600}",
                    hoverBackground: "{surface.800}",
                    activeBackground: "{surface.700}"
                },
                danger: {
                    color: "{red.400}",
                    borderColor: "{red.700}",
                    hoverBackground: "color-mix(in srgb, {red.400}, transparent 96%)",
                    activeBackground: "color-mix(in srgb, {red.400}, transparent 84%)"
                },
                primary: {
                    color: "{primary.color}",
                    borderColor: "{primary.700}",
                    hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)",
                    activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)"
                },
                success: {
                    color: "{green.400}",
                    borderColor: "{green.700}",
                    hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)",
                    activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)"
                },
                contrast: {
                    color: "{surface.0}",
                    borderColor: "{surface.500}",
                    hoverBackground: "{surface.800}",
                    activeBackground: "{surface.700}"
                },
                secondary: {
                    color: "{surface.400}",
                    borderColor: "{surface.700}",
                    hoverBackground: "rgba(255, 255, 255, 0.04)",
                    activeBackground: "rgba(255, 255, 255, 0.16)"
                }
            }
        },
        light: {
            link: {
                color: "{primary.color}",
                hoverColor: "{primary.color}",
                activeColor: "{primary.color}"
            },
            root: {
                help: {
                    color: "#ffffff",
                    focusRing: {
                        color: "{purple.500}",
                        shadow: "0 0 0 0 #00000000"
                    },
                    background: "{purple.500}",
                    hoverColor: "#ffffff",
                    activeColor: "#ffffff",
                    borderColor: "{purple.500}",
                    hoverBackground: "{purple.600}",
                    activeBackground: "{purple.700}",
                    hoverBorderColor: "{purple.600}",
                    activeBorderColor: "{purple.700}"
                },
                info: {
                    color: "#ffffff",
                    focusRing: {
                        color: "{sky.500}",
                        shadow: "0 0 0 0 #00000000"
                    },
                    background: "{sky.500}",
                    hoverColor: "#ffffff",
                    activeColor: "#ffffff",
                    borderColor: "{sky.500}",
                    hoverBackground: "{sky.600}",
                    activeBackground: "{sky.700}",
                    hoverBorderColor: "{sky.600}",
                    activeBorderColor: "{sky.700}"
                },
                warn: {
                    color: "#ffffff",
                    focusRing: {
                        color: "{orange.500}",
                        shadow: "0 0 0 0 #00000000"
                    },
                    background: "{orange.500}",
                    hoverColor: "#ffffff",
                    activeColor: "#ffffff",
                    borderColor: "{orange.500}",
                    hoverBackground: "{orange.600}",
                    activeBackground: "{orange.700}",
                    hoverBorderColor: "{orange.600}",
                    activeBorderColor: "{orange.700}"
                },
                danger: {
                    color: "#ffffff",
                    focusRing: {
                        color: "{red.500}",
                        shadow: "0 0 0 0 #00000000"
                    },
                    background: "{red.500}",
                    hoverColor: "#ffffff",
                    activeColor: "#ffffff",
                    borderColor: "{red.500}",
                    hoverBackground: "{red.600}",
                    activeBackground: "{red.700}",
                    hoverBorderColor: "{red.600}",
                    activeBorderColor: "{red.700}"
                },
                primary: {
                    color: "{primary.contrast.color}",
                    focusRing: {
                        color: "{primary.color}",
                        shadow: "0 0 0 0 #00000000"
                    },
                    background: "{primary.color}",
                    hoverColor: "{primary.contrast.color}",
                    activeColor: "{primary.contrast.color}",
                    borderColor: "{primary.color}",
                    hoverBackground: "{primary.hover.color}",
                    activeBackground: "{primary.active.color}",
                    hoverBorderColor: "{primary.hover.color}",
                    activeBorderColor: "{primary.active.color}"
                },
                success: {
                    color: "#ffffff",
                    focusRing: {
                        color: "{green.500}",
                        shadow: "0 0 0 0 #00000000"
                    },
                    background: "{green.500}",
                    hoverColor: "#ffffff",
                    activeColor: "#ffffff",
                    borderColor: "{green.500}",
                    hoverBackground: "{green.600}",
                    activeBackground: "{green.700}",
                    hoverBorderColor: "{green.600}",
                    activeBorderColor: "{green.700}"
                },
                contrast: {
                    color: "{surface.0}",
                    focusRing: {
                        color: "{surface.950}",
                        shadow: "0 0 0 0 #00000000"
                    },
                    background: "{surface.950}",
                    hoverColor: "{surface.0}",
                    activeColor: "{surface.0}",
                    borderColor: "{surface.950}",
                    hoverBackground: "{surface.900}",
                    activeBackground: "{surface.800}",
                    hoverBorderColor: "{surface.900}",
                    activeBorderColor: "{surface.800}"
                },
                secondary: {
                    color: "{surface.600}",
                    focusRing: {
                        color: "{surface.600}",
                        shadow: "0 0 0 0 #00000000"
                    },
                    background: "{surface.100}",
                    hoverColor: "{surface.700}",
                    activeColor: "{surface.800}",
                    borderColor: "{surface.100}",
                    hoverBackground: "{surface.200}",
                    activeBackground: "{surface.300}",
                    hoverBorderColor: "{surface.200}",
                    activeBorderColor: "{surface.300}"
                }
            },
            text: {
                help: {
                    color: "{purple.500}",
                    hoverBackground: "{purple.50}",
                    activeBackground: "{purple.100}"
                },
                info: {
                    color: "{sky.500}",
                    hoverBackground: "{sky.50}",
                    activeBackground: "{sky.100}"
                },
                warn: {
                    color: "{orange.500}",
                    hoverBackground: "{orange.50}",
                    activeBackground: "{orange.100}"
                },
                plain: {
                    color: "{surface.700}",
                    hoverBackground: "{surface.50}",
                    activeBackground: "{surface.100}"
                },
                danger: {
                    color: "{red.500}",
                    hoverBackground: "{red.50}",
                    activeBackground: "{red.100}"
                },
                primary: {
                    color: "{primary.color}",
                    hoverBackground: "{primary.50}",
                    activeBackground: "{primary.100}"
                },
                success: {
                    color: "{green.500}",
                    hoverBackground: "{green.50}",
                    activeBackground: "{green.100}"
                },
                contrast: {
                    color: "{surface.950}",
                    hoverBackground: "{surface.50}",
                    activeBackground: "{surface.100}"
                },
                secondary: {
                    color: "{surface.500}",
                    hoverBackground: "{surface.50}",
                    activeBackground: "{surface.100}"
                }
            },
            outlined: {
                help: {
                    color: "{purple.500}",
                    borderColor: "{purple.200}",
                    hoverBackground: "{purple.50}",
                    activeBackground: "{purple.100}"
                },
                info: {
                    color: "{sky.500}",
                    borderColor: "{sky.200}",
                    hoverBackground: "{sky.50}",
                    activeBackground: "{sky.100}"
                },
                warn: {
                    color: "{orange.500}",
                    borderColor: "{orange.200}",
                    hoverBackground: "{orange.50}",
                    activeBackground: "{orange.100}"
                },
                plain: {
                    color: "{surface.700}",
                    borderColor: "{surface.200}",
                    hoverBackground: "{surface.50}",
                    activeBackground: "{surface.100}"
                },
                danger: {
                    color: "{red.500}",
                    borderColor: "{red.200}",
                    hoverBackground: "{red.50}",
                    activeBackground: "{red.100}"
                },
                primary: {
                    color: "{primary.color}",
                    borderColor: "{primary.200}",
                    hoverBackground: "{primary.50}",
                    activeBackground: "{primary.100}"
                },
                success: {
                    color: "{green.500}",
                    borderColor: "{green.200}",
                    hoverBackground: "{green.50}",
                    activeBackground: "{green.100}"
                },
                contrast: {
                    color: "{surface.950}",
                    borderColor: "{surface.700}",
                    hoverBackground: "{surface.50}",
                    activeBackground: "{surface.100}"
                },
                secondary: {
                    color: "{surface.500}",
                    borderColor: "{surface.200}",
                    hoverBackground: "{surface.50}",
                    activeBackground: "{surface.100}"
                }
            }
        }
    }
} satisfies ButtonDesignTokens;