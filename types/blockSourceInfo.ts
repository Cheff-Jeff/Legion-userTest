interface Classes {
  [key: string]: Record<string, object> | null;
}

export interface BlockConfig {
  classes: Classes;
}

export interface BlockSourceInfo {
  /** De volledig namespace van class (bijv. 'Lyfter\Blocks\Hero\v1\Hero'). */
  fullName: string;

  /** Core block of Maatwerk block */
  source: "Lyfter" | "LyfterChild" | "Unknown";

  /** Versie core block */
  version: string | null;
}

export interface RenderedBlock {
  blockLocation: string | null;
  shortName: string;
  html: string;
}

export interface BlockScript {
  translatedCode: string;
  scriptName: string;
  scriptUrl: string;
}

export interface blockSource {
  shortName: string;
  fullName: string;
  source: "Lyfter" | "LyfterChild" | "Unknown";
  version: string | null;
}

export interface BlockFonts {
  headingFont: string | null;
  bodyFont: string | null;
}

export interface IFullBlock {
  script: BlockScript | null;
  coreScript: string | null;
  block: RenderedBlock;
  css: string;
  cssUrl: string | null;
  fonts: BlockFonts | null;
}
