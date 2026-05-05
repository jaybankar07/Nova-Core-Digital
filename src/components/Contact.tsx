import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000),
});

type FormState = { name: string; email: string; message: string };
type Errors = Partial<Record<keyof FormState, string>>;

const initial: FormState = { name: "", email: "", message: "" };

export function Contact() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name as keyof FormState]) setErrors((e) => ({ ...e, [name]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Errors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof FormState;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      toast.success("Message sent!", {
        description: "Thanks for reaching out — we'll get back to you within 24 hours.",
      });
      setForm(initial);
      setErrors({});
      setSubmitting(false);
    }, 600);
  };

  const inputClass = (hasError?: boolean) =>
    `w-full rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 transition focus:outline-none focus:ring-2 focus:ring-indigo-500/40 ${
      hasError ? "border-destructive" : "border-border"
    }`;

  return (
    <section
      id="contact"
      className="scroll-mt-20 py-20 sm:py-28 bg-gradient-to-b from-transparent via-indigo-50/40 to-transparent dark:via-indigo-950/10"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-semibold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase">
            Get in touch
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Let's build something great together.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tell us about your project — we usually reply within one business day.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-6">
            {[
              { icon: Mail, label: "Email", value: "hello@novacoredigital.com", href: "mailto:hello@novacoredigital.com" },
              { icon: Phone, label: "Phone", value: "+91 90000 00000", href: "tel:+910000000000" },
              { icon: MapPin, label: "Location", value: "Berlin, Germany" },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
                <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</div>
                  {href ? (
                    <a href={href} className="mt-1 block text-sm font-medium text-foreground hover:text-indigo-600 break-all">
                      {value}
                    </a>
                  ) : (
                    <div className="mt-1 text-sm font-medium text-foreground">{value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="lg:col-span-3 rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  maxLength={100}
                  className={inputClass(!!errors.name)}
                />
                {errors.name && <p className="mt-1.5 text-xs text-destructive">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="jane@company.com"
                  maxLength={255}
                  className={inputClass(!!errors.email)}
                />
                {errors.email && <p className="mt-1.5 text-xs text-destructive">{errors.email}</p>}
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us a bit about your project, goals, and timeline…"
                maxLength={1000}
                className={inputClass(!!errors.message) + " resize-none"}
              />
              {errors.message && <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>}
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="mt-6 inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:scale-[1.02] transition disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {submitting ? "Sending…" : "Send message"}
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
