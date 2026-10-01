import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// date は "2026年9月7日" の形。文字列のまま比べると "10月" が "9月" より前になるので、並べ替えには数値にして使う
export function dateValue(date: string): number {
  const m = date.match(/(\d{4})年(\d{1,2})月(\d{1,2})日/);
  return m ? Number(m[1]) * 10000 + Number(m[2]) * 100 + Number(m[3]) : 0;
}
