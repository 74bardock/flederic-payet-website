import fr from "@/dictionaries/fr.json";
import en from "@/dictionaries/en.json";

export type Locale = "fr" | "en";
export type Dictionary = typeof fr;

const dictionaries = {
  fr,
  en,
};

export const getDictionary = (locale: Locale): Dictionary => {
  return dictionaries[locale] || dictionaries.fr;
};