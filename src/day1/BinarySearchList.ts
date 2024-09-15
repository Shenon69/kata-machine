export default function bs_list(haystack: number[], needle: number): boolean {
  let lo = 0;
  let hi = haystack.length;
  const sortedHaystack = haystack.sort((a, b) => a - b);

  do {
    const m = Math.floor(lo + (hi - lo) / 2);
    const v = sortedHaystack[m];

    if (v === needle) {
      return true;
    } else if (v > needle) {
      hi = m;
    } else {
      lo = m;
    }
  } while (lo < hi)

  return false;
}
