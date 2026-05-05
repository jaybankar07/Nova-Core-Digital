import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Bot, Send } from "lucide-react";

type Message = { role: "bot" | "user"; text: string };

const initialMessages: Message[] = [
  { role: "bot", text: "Hi there! I'm NovaBot. How can I help you today?" },
  { role: "bot", text: "You can ask me about our services, pricing, or how to get started." },
];

const quickReplies = ["Get a Quote", "Our Services", "Project Timeline", "Contact Team"];

const responses: Record<string, string> = {
  "Get a Quote":
    "Great! You can use our interactive Project Estimator above, or fill out the contact form and we'll reply within 1 business day.",
  "Our Services":
    "We offer Web Design & Development, Social Media Marketing, Branding, SEO, and AI Automation. Scroll up to our Services section for details.",
  "Project Timeline":
    "Timelines vary by project. Landing pages typically take 2–3 weeks. Web apps can take 8+ weeks. Use the Estimator tool for a rough guide.",
  "Contact Team":
    "You can reach us at hello@novacoredigital.com or use the contact form at the bottom of the page. We usually reply within 24 hours.",
};

const fallback = "That's a great question! Please reach out via our contact form and a team member will assist you.";

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const addBotReply = (text: string) => {
    setTyping(true);
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "bot", text }]);
      setTyping(false);
    }, 800);
  };

  const handleQuickReply = (reply: string) => {
    setMessages((prev) => [...prev, { role: "user", text: reply }]);
    addBotReply(responses[reply] ?? fallback);
  };

  const handleSend = () => {
    const text = inputValue.trim();
    if (!text) return;
    setMessages((prev) => [...prev, { role: "user", text }]);
    setInputValue("");
    addBotReply(fallback);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-80 sm:w-96 h-[480px] flex flex-col rounded-2xl border border-white/10 bg-[#0B0B0F]/95 backdrop-blur-xl shadow-2xl shadow-black/40 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10 bg-white/5">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-white">NovaBot</p>
                <p className="text-xs text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                  Online
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 scrollbar-none">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[82%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-gradient-to-r from-indigo-500 to-violet-600 text-white rounded-br-sm"
                        : "bg-white/10 text-gray-200 rounded-bl-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {typing && (
                <div className="flex justify-start">
                  <div className="bg-white/10 text-gray-200 px-4 py-3 rounded-2xl rounded-bl-sm">
                    <span className="flex gap-1 items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce [animation-delay:0ms]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce [animation-delay:150ms]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce [animation-delay:300ms]" />
                    </span>
                  </div>
                </div>
              )}

              {/* Quick Replies */}
              {messages.length <= 3 && !typing && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {quickReplies.map((qr) => (
                    <button
                      key={qr}
                      onClick={() => handleQuickReply(qr)}
                      className="text-xs px-3 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/20 transition-colors active:scale-95"
                    >
                      {qr}
                    </button>
                  ))}
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="px-4 pb-4 pt-2 border-t border-white/10 flex items-center gap-3">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type a message..."
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              />
              <button
                onClick={handleSend}
                className="w-10 h-10 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 flex items-center justify-center text-white hover:scale-105 transition-all active:scale-95 shadow-lg shadow-indigo-500/20"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen((v) => !v)}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 flex items-center justify-center text-white shadow-xl shadow-indigo-500/30 relative"
        aria-label="Open chat"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <X className="w-6 h-6" />
            </motion.span>
          ) : (
            <motion.span key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <MessageCircle className="w-6 h-6" />
            </motion.span>
          )}
        </AnimatePresence>
        {!open && (
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-[#0B0B0F]" />
        )}
      </motion.button>
    </div>
  );
}
