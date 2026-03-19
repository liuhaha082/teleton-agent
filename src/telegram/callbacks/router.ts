import { CallbackQueryHandler } from "./handler.js";
import type { TelegramBridge } from "../bridge.js";

export function initializeCallbackRouter(
  bridge: TelegramBridge
): CallbackQueryHandler {
  const handler = new CallbackQueryHandler(bridge);
  return handler;
}
