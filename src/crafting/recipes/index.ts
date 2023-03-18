import create from "./create.json";
import computercraft from "./computercraft.json";
import mcwroofs from "./mcwroofs.json";
import mcwtrpdoors from "./mcwtrpdoors.json";
import mcwdoors from "./mcwdoors.json";
import mcwwindows from "./mcwwindows.json";
import minecraft from "./minecraft.json";
import mcwbridges from "./mcwbridges.json";
import farmersdelight from "./farmersdelight.json";
import mcwfences from "./mcwfences.json";
import mcwpaths from "./mcwpaths.json";
import betteranimalsplus from "./betteranimalsplus.json";
import chipped from "./chipped.json";
import chiselsandbits from "./chiselsandbits.json";
import yigd from "./yigd.json";
import cccbridge from "./cccbridge.json";
import createplus from "./createplus.json";

export default {
  create,
  computercraft,
  mcwroofs,
  mcwtrpdoors,
  mcwdoors,
  mcwwindows,
  minecraft,
  mcwbridges,
  farmersdelight,
  mcwfences,
  mcwpaths,
  betteranimalsplus,
  chipped,
  chiselsandbits,
  yigd,
  cccbridge,
  createplus,
} as unknown as {[key: string]: LuaMap<string, any>[] | undefined};