export default function slugify(text = "") {
    return String(text)
    .toLowerCase()
    .trim()
    .replaceAll("ı","i")
    .replaceAll("ğ","g")
    .replaceAll("ü","u")
    .replaceAll("ş","s")
    .replaceAll("ö","o")
    .replaceAll("ç","c")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}