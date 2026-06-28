import { useEffect, useRef, useState } from "react";
import { emailContent } from "../data/portfolioData.js";

function fallbackCopyText(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  textarea.setSelectionRange(0, text.length);
  const copied = document.execCommand("copy");
  document.body.removeChild(textarea);
  return copied;
}

export default function EmailPage() {
  const emails = Array.from({ length: emailContent.repeatCount }, (_, index) => index);
  const [copyState, setCopyState] = useState({ active: false, message: "已复制" });
  const timerRef = useRef(null);

  useEffect(() => () => window.clearTimeout(timerRef.current), []);

  async function handleCopyContact() {
    const contactText = emailContent.email;
    let copied = fallbackCopyText(contactText);

    if (!copied) {
      try {
        if (navigator.clipboard?.writeText) {
          await navigator.clipboard.writeText(contactText);
          copied = true;
        }
      } catch {
        copied = false;
      }
    }

    window.clearTimeout(timerRef.current);
    setCopyState({ active: true, message: copied ? "已复制" : "复制失败" });
    timerRef.current = window.setTimeout(() => {
      setCopyState((current) => ({ ...current, active: false }));
    }, 900);
  }

  return (
    <main className="email-page" aria-label={emailContent.pageName}>
      <div className="email-grid">
        {emails.map((item) => (
          <button
            className="email-copy-target"
            key={item}
            type="button"
            onClick={handleCopyContact}
          >
            {emailContent.email}
          </button>
        ))}
      </div>
      <div className={`copy-overlay ${copyState.active ? "is-active" : ""}`} aria-live="polite">
        <p>{copyState.message}</p>
      </div>
    </main>
  );
}
