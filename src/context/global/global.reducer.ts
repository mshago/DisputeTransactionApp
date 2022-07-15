import { TGlobalState } from "./global.type";
import { authReducer } from "../auth";

export const globalReducer = (state: TGlobalState, action: any) => ({
  auth: authReducer(state.auth, action),
})