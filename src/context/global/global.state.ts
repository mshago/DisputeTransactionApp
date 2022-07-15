import { TGlobalState } from "./global.type";
import { authInitialState } from "../auth";

export const globalInitialState: TGlobalState = {
  auth: authInitialState,
}