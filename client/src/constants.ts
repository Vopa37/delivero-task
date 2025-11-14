export const providerLogos = {
    PPL: "/ppl.png",
    DPD: "/dpd.png",
    GLS: "/gls.png",
    UPS: "/ups.png",
    FEDEX: "/fedex.png",
} as const;

export type ProviderType = keyof typeof providerLogos;