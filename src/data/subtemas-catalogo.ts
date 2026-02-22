/**
 * Barrel file — re-exports all subtema proposals as a single unified array.
 */
import { PropuestaSubtema } from "./types";
import { SUBTEMAS_CATALOGO_67_89 } from "./subtemas-catalogo-67-89";
import { SUBTEMAS_CATALOGO_13 } from "./subtemas-catalogo-13";
import { SUBTEMAS_CATALOGO_45 } from "./subtemas-catalogo-45";
import { SUBTEMAS_CATALOGO_1011 } from "./subtemas-catalogo-1011";

export const SUBTEMAS_CATALOGO: PropuestaSubtema[] = [
  ...SUBTEMAS_CATALOGO_13,
  ...SUBTEMAS_CATALOGO_45,
  ...SUBTEMAS_CATALOGO_67_89,
  ...SUBTEMAS_CATALOGO_1011,
];
