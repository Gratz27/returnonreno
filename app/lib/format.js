// Format a USD-base amount into a target currency, rounded to a tidy figure.
export function fmtMoney(usd, sym = "$", fx = 1) {
  let v = usd * fx;
  v = Math.round(v / 100) * 100;
  return sym + v.toLocaleString("en-US");
}

export const SITE_URL = "https://returnonreno.com";
