/* eslint-disable */
type SvDictionary = typeof import("./src/dictionaries/sv.json");
type NoDictionary = typeof import("./src/dictionaries/no.json");
type FiDictionary = typeof import("./src/dictionaries/fi.json");
type EnDictionary = typeof import("./src/dictionaries/en.json");

declare interface IntlDictionaries
  extends SvDictionary,
    NoDictionary,
    FiDictionary,
    EnDictionary {}
