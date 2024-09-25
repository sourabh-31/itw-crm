import type { ClassValue } from "clsx";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function roleCombiner(roles: string[]): string {
  return roles.reduce(
    (acc: string, curr: string) => (acc ? `${acc} + ${curr}` : curr),
    ""
  );
}

export function daysRemaining(endDate: string): string {
  const end = new Date(endDate);
  const now = new Date();

  // Calculate difference in milliseconds
  const diffInMs = end.getTime() - now.getTime();

  // Convert milliseconds to days
  const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));

  // If difference is more than 99 days, show in months
  if (diffInDays > 99) {
    const months = Math.floor(diffInDays / 30);
    return `in ${months} months`;
  }

  return `in ${diffInDays} days`;
}
