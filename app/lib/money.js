// Simple display helpers for the standalone finance calculators (no FX — users
// enter values directly in their own currency; we just swap the symbol).
export const SYMBOLS = ["$", "£", "€", "C$", "A$", "NZ$"];

export function fmtPlain(n, sym = "$") {
  if (n == null || !isFinite(n)) return "—";
  return sym + Math.round(n).toLocaleString("en-US");
}
