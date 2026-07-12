const imageModules = import.meta.glob(
  "../assets/*.{png,jpg,jpeg,webp,svg}",
  {
    eager: true,
    import: "default",
  }
);

export const images = Object.fromEntries(
  Object.entries(imageModules).map(([path, url]) => {
    const fileName = path.split("/").pop();
    return [fileName, url];
  })
);