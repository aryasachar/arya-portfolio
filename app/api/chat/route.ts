import { SYSTEM_PROMPT } from "@/lib/site-content";

export async function POST(req: Request) {
  const { question } = await req.json();

  if (!question || typeof question !== "string" || question.length > 500) {
    return Response.json({ error: "Invalid question" }, { status: 400 });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return Response.json(
      { error: "Chat is not configured yet." },
      { status: 500 }
    );
  }

  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 300,
      system: SYSTEM_PROMPT,
      messages: [{ role: "user", content: question }],
    }),
  });

  if (!res.ok) {
    return Response.json({ error: "Something went wrong." }, { status: 500 });
  }

  const data = await res.json();
  const answer =
    data.content?.find((b: { type: string }) => b.type === "text")?.text ??
    "Sorry, I couldn't generate an answer just now.";

  return Response.json({ answer });
}
