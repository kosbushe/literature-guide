import authorCoreData from "@/content/authors/leo-tolstoy/core.json";
import authorRuData from "@/content/authors/leo-tolstoy/locales/ru.json";
import workCoreData from "@/content/works/after-the-ball/core.json";
import workRuData from "@/content/works/after-the-ball/locales/ru.json";
import sourcesData from "@/content/sources/sources.json";

export type PassportBlock = {
  id: string;
  eyebrow: string;
  title: string;
  body: string[];
  question?: string;
  sourceIds?: string[];
};

export const authorCore = authorCoreData;
export const authorRu = authorRuData as { name: string; deck: string; passport: PassportBlock[] };
export const workCore = workCoreData;
export const workRu = workRuData;
export const sources = sourcesData;
