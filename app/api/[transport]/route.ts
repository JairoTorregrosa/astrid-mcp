import { createMcpHandler } from "mcp-handler";
import { registerAllTools } from "@/tools/index";
import { registerAllPrompts } from "@/prompts/index";
import { registerResources } from "@/resources/index";

const handler = createMcpHandler(
  (server) => {
    registerAllTools(server);
    registerAllPrompts(server);
    registerResources(server);
  },
  {
    serverInfo: {
      name: "Astrid",
      version: "0.2.0",
    },
  },
  {
    basePath: "/api",
    verboseLogs: true,
  }
);

export { handler as GET, handler as POST, handler as DELETE };
