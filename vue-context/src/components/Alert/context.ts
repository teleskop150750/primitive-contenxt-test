import { createDialogScope } from "../Dialog/context";
import { createContextScope } from "../hooks/createContext";

const [createAlertDialogContext, createAlertDialogScope] = createContextScope('AlertDialog', [
  createDialogScope,
]);

export { createAlertDialogScope, createAlertDialogContext };

export const useDialogScope = createDialogScope();
