import { env } from "@/lib/env";

type LarkMessage = {
  title: string;
  body: string;
};

export async function sendLarkMessage(message: LarkMessage) {
  const response = await fetch(env.server.LARK_WEBHOOK_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      msg_type: "text",
      content: {
        text: `${message.title}\n${message.body}`,
      },
    }),
  });

  if (!response.ok) {
    throw new Error(`Lark notification failed: ${response.status}`);
  }
}
