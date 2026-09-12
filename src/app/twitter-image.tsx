// Twitter reads its own file-convention image separately from Open Graph's;
// reusing the exact same generator keeps them guaranteed identical rather
// than relying on undocumented cross-convention fallback behavior.
export { alt, size, contentType, default } from "./opengraph-image";
