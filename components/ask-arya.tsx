"use client";

import { useState } from "react";
import { MessageCircle, X, Loader2 } from "lucide-react";

const PRESET_QUESTIONS = [
  "What's Arya's AI product experience?",
  "Tell me about the 19% search failure discovery.",
  "What has Arya built hands-on, herself?",
  "What's her data science background?",
  "Why is she looking for a new role?",
];

type Exchange = { question: string; answer: string };

export function AskArya() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [exchanges, setExchanges] = useState<Exchange[]>([]);
  const [error, setError] = useState(false);

  async function ask(question: string) {
    setLoading(true);
    setError(false);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error();
      setExchanges((prev) => [...prev, { question, answer: data.answer }]);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  const askedQuestions = new Set(exchanges.map((e) => e.question));
  const remainingQuestions = PRESET_QUESTIONS.filter(
    (q) => !askedQuestions.has(q)
  );

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="mb-3 flex h-[480px] w-[340px] flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-xl">
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <div>
              <p className="text-sm font-semibold text-text-primary">
                Ask Arya
              </p>
              <p className="text-xs text-text-muted">
                Answers grounded in this site
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="text-text-muted hover:text-text-primary"
            >
              <X size={18} strokeWidth={1.75} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-4">
            {exchanges.length === 0 && !loading && (
              <p className="mb-4 text-sm leading-relaxed text-text-muted">
                Pick a question below to get started.
              </p>
            )}
            {exchanges.map((e, i) => (
              <div key={i} className="mb-4">
                <p className="mb-1.5 text-sm font-medium text-text-primary">
                  {e.question}
                </p>
                <p className="text-sm leading-relaxed text-text-muted">
                  {e.answer}
                </p>
              </div>
            ))}
            {loading && (
              <Loader2
                size={16}
                className="animate-spin text-text-muted"
                strokeWidth={1.75}
              />
            )}
            {error && (
              <p className="text-sm text-text-muted">
                Something went wrong — try again in a moment.
              </p>
            )}
          </div>

          {remainingQuestions.length > 0 && (
            <div className="flex flex-col gap-2 border-t border-border p-3">
              {remainingQuestions.map((q) => (
                <button
                  key={q}
                  type="button"
                  disabled={loading}
                  onClick={() => ask(q)}
                  className="rounded-full border border-border px-3 py-1.5 text-left text-xs text-text-primary transition-colors hover:border-accent hover:text-accent disabled:opacity-50"
                >
                  {q}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Ask Arya"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-lg transition-colors hover:bg-accent-hover"
      >
        {open ? (
          <X size={22} strokeWidth={1.75} />
        ) : (
          <MessageCircle size={22} strokeWidth={1.75} />
        )}
      </button>
    </div>
  );
}
