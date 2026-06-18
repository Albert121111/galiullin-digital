const githubPagesBasePath =
  process.env.NEXT_PUBLIC_BASE_PATH ||
  (process.env.GITHUB_PAGES === "true" ? "/galiullin-digital" : "");

export function publicAsset(path: string) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${githubPagesBasePath}${normalizedPath}`;
}
