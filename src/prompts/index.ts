import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { registerKitPrompt } from "./kit-tecnologia";
import { registerBrainstormingPrompt } from "./brainstorming-session";

export function registerAllPrompts(server: McpServer) {
  registerKitPrompt(server);
  registerBrainstormingPrompt(server);
}
