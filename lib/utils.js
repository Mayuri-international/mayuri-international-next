import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}


export function cleanAndLowercase(str) {
  return str.replace(/[\s-,]+/g, '').toLowerCase();
}


export function cleanAndLowercaseAddSpace(str) {

  return str.replace(/[\s-]+/g, ' ').toLowerCase();

}


export function cleanAndLowercaseAddDash (str){

  return str.replace(/[\s-]+/g, '-').toLowerCase();
}


