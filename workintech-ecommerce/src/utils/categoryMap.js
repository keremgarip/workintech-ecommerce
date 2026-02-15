export const CATEGORY_LABEL_MAP = {
    kadin: "Meyve & Sebze",
    erkek: "Et, Tavuk & Balık",
    cocuk: "Süt & Kahvaltılık",
    ev: "Atıştırmalık",
    aksesuar: "İçecekler",
    ayakkabi: "Temizlik",
    kozmetik: "Kişisel Bakım",
};

export const categoryLabel = (name) => {
    if (!name) return "";
    const key = String(name).toLowerCase();
    return CATEGORY_LABEL_MAP[key] || name;
}