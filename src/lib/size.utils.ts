export function convertBytesToMB(bytes: number) {
  const MB = 1024 * 1024;
  return (bytes / MB).toFixed(2);
}
