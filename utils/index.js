import { promises as fs } from "fs";
import { join } from "path";

export const getPageBySlug = (slug, dbLess) => {
  return dbLess.pages.find((page) => page.slug === slug);
};

export async function getFaviconInfo(themeName) {
  const fileExtensions = ["png", "jpg", "jpeg", "ico"];

  const themesDir = join(process.cwd(), "themes");
  const publicDir = join(process.cwd(), "public");
  let mimeType;
  let path;
  for (let ext of fileExtensions) {
    path = join(themesDir, themeName, `favicon.${ext}`);
    try {
      await fs.access(path);
      switch (ext) {
        case 'png':
          mimeType = 'image/png';
          break;
        case 'jpg':
        case 'jpeg':
          mimeType = 'image/jpeg';
          break;
        case 'ico':
          mimeType = 'image/x-icon';
          break;
        default:
          break;
      }
      break;  // Exit loop if file is found
    } catch (error) {
      // File not found, try next extension
    }
  }

  if (!mimeType) {
    // Fallback to /public/favicon.ico if no favicon is found in the theme folder
    path = join(publicDir, "favicon.ico");
    mimeType = 'image/x-icon';
  }

  return {mimeType, path};
}
