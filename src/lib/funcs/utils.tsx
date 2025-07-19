export function getResponsiveClass(
  breakpoint: string,
  className: string
): string {
  return `${breakpoint}:${className}`;
}
