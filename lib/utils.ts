import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { subjectsColors } from "@/constants"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getSubjectColor = (subject: string): string => {
  return subjectsColors[subject as keyof typeof subjectsColors]; // fallback color
}
