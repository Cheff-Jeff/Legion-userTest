// import { model, Schema, type InferSchemaType } from "mongoose";
import type {
  BlockFonts,
  BlockScript,
  RenderedBlock,
} from "~/types/blockSourceInfo";

export interface IBlockSchema {
  script: BlockScript | null;
  coreScript: string | null;
  block: RenderedBlock;
  css: string;
  fonts: BlockFonts | null;
  pending: boolean;
}

// const FontSchema = new Schema<BlockFonts>(
//   {
//     headingFont: String,
//     bodyFont: String,
//   },
//   { _id: false }
// );

// const RenderedBlockSchema = new Schema<RenderedBlock>(
//   {
//     shortName: { type: String, required: true },
//     html: { type: String, required: true },
//   },
//   { _id: false }
// );

// const BlockScriptSchema = new Schema<BlockScript>(
//   {
//     translatedCode: String,
//     scriptName: String,
//   },
//   { _id: false }
// );

// const BlockSchema = new Schema<IBlockSchema>(
//   {
//     script: BlockScriptSchema,
//     coreScript: String,
//     block: {
//       type: RenderedBlockSchema,
//       required: true,
//     },
//     css: {
//       type: String,
//       required: true,
//     },
//     fonts: FontSchema,
//     pending: { type: Boolean, default: true },
//   },
//   { timestamps: true }
// );

// export const Block = model("Block", BlockSchema);
