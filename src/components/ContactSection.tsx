import { ArrowUpRight, Check, Copy, FileText, Mail, MapPin, Phone, Send } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { PROFILE_INFO, REFERENCES } from '../data/cvData';

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formNotice, setFormNotice] = useState<string | null>(null);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE_INFO.email);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      setCopiedEmail(false);
    }
  };

  const handleComposeSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!senderName.trim() || !senderEmail.trim() || !message.trim()) {
      setFormNotice('Please complete your name, email, and message before sending.');
      return;
    }

    const subject = encodeURIComponent(`Portfolio Inquiry from ${senderName.trim()}`);
    const body = encodeURIComponent(
      `Name: ${senderName.trim()}\nEmail: ${senderEmail.trim()}\n\n${message.trim()}`
    );
    window.location.href = `mailto:${PROFILE_INFO.email}?subject=${subject}&body=${body}`;
    setFormNotice('Opened your default email client with a pre-filled inquiry draft.');
  };

  return (
    <section id="contact" className="bg-[#08080A] py-14 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-[1200px] space-y-14 px-4 sm:space-y-16 sm:px-6 lg:space-y-20 lg:px-8">
        {/* References Subsection */}
        <div className="grid grid-cols-1 gap-8 border-b border-white/10 pb-12 sm:gap-10 sm:pb-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-mono text-xs tabular-nums text-[#E5A93C]">06.</p>
            <h2 className="mt-2 font-serif text-3xl font-medium tracking-tight text-[#F5F4F0] sm:text-4xl">
              Academic References
            </h2>
            <p className="mt-3 text-sm text-[#8E8D8A]">
              Senior faculty referees available for verification and academic endorsement.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:col-span-8">
            {REFERENCES.map((ref) => (
              <div
                key={ref.id}
                className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0D0D10] p-5 sm:p-6"
              >
                <div>
                  <h3 className="text-lg font-semibold text-[#F5F4F0]">
                    {ref.name}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-[#E5A93C]">
                    {ref.title}
                  </p>
                  <p className="mt-3 text-sm text-[#B6B4AE]">{ref.institution}</p>
                  <p className="mt-1 text-xs leading-relaxed text-[#8E8D8A]">
                    {ref.address}
                  </p>
                </div>

                <div className="mt-5 space-y-1 border-t border-white/10 pt-3 text-xs sm:mt-6 sm:pt-4">
                  <a
                    href={`mailto:${ref.email}`}
                    className="flex min-h-[40px] sm:min-h-[32px] items-center gap-2 text-[#D7D5CE] transition-colors hover:text-[#E5A93C]"
                  >
                    <Mail className="h-3.5 w-3.5 text-[#8E8D8A] shrink-0" />
                    <span className="min-w-0 truncate">{ref.email}</span>
                  </a>
                  <a
                    href={`tel:${ref.phone}`}
                    className="flex min-h-[40px] sm:min-h-[32px] items-center gap-2 font-mono tabular-nums text-[#D7D5CE] transition-colors hover:text-[#E5A93C]"
                  >
                    <Phone className="h-3.5 w-3.5 text-[#8E8D8A] shrink-0" />
                    <span>{ref.phone}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Direct Contact & Inquiry Subsection */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-5">
            <div>
              <p className="font-mono text-xs tabular-nums text-[#E5A93C]">07.</p>
              <h2 className="mt-2 font-serif text-3xl font-medium tracking-tight text-[#F5F4F0] sm:text-4xl">
                Let&rsquo;s Build Together
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#A1A09A]">
                Open to software engineering roles, full-stack web &amp; mobile collaborations, and technical consulting.
              </p>
            </div>

            <div className="space-y-3 border-t border-white/10 pt-5 text-sm sm:space-y-4 sm:pt-6">
              <div className="flex items-center justify-between gap-3">
                <a
                  href={`mailto:${PROFILE_INFO.email}`}
                  className="flex min-h-[44px] sm:min-h-[36px] min-w-0 flex-1 items-center gap-2.5 text-[#F5F4F0] transition-colors hover:text-[#E5A93C]"
                >
                  <Mail className="h-4 w-4 text-[#E5A93C] shrink-0" />
                  <span className="truncate">{PROFILE_INFO.email}</span>
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className="inline-flex min-h-[40px] sm:min-h-[34px] items-center gap-1.5 rounded-lg border border-white/15 px-3 py-1 text-xs font-medium text-[#D1CFC8] transition-colors hover:border-[#E5A93C] hover:text-[#E5A93C] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5A93C]"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-[#E5A93C]" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`tel:${PROFILE_INFO.phone}`}
                className="flex min-h-[44px] sm:min-h-[36px] items-center gap-2.5 font-mono tabular-nums text-[#D7D5CE] transition-colors hover:text-[#E5A93C]"
              >
                <Phone className="h-4 w-4 text-[#E5A93C] shrink-0" />
                <span>{PROFILE_INFO.phoneDisplay}</span>
              </a>

              <div className="flex min-h-[36px] items-center gap-2.5 text-[#A1A09A]">
                <MapPin className="h-4 w-4 text-[#E5A93C] shrink-0" />
                <span>{PROFILE_INFO.location}</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/10 pt-5 text-xs font-medium sm:pt-6">
              <a
                href={PROFILE_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[40px] sm:min-h-[32px] items-center gap-1 text-[#D7D5CE] transition-colors hover:text-[#E5A93C]"
              >
                <span>GitHub</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <a
                href={PROFILE_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[40px] sm:min-h-[32px] items-center gap-1 text-[#D7D5CE] transition-colors hover:text-[#E5A93C]"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <a
                href={PROFILE_INFO.legacyPortfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[40px] sm:min-h-[32px] items-center gap-1 text-[#D7D5CE] transition-colors hover:text-[#E5A93C]"
              >
                <span>Previous Site</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <a
                href={PROFILE_INFO.cvPdfPath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[40px] sm:min-h-[32px] items-center gap-1 text-[#E5A93C] transition-colors hover:text-[#efc062]"
              >
                <FileText className="h-3.5 w-3.5" />
                <span>Resume PDF</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={handleComposeSubmit}
              className="rounded-2xl border border-white/10 bg-[#0D0D10] p-5 sm:p-8"
              noValidate
            >
              <h3 className="text-lg font-semibold text-[#F5F4F0]">
                Send a Direct Inquiry
              </h3>
              <p className="mt-1 text-xs text-[#8E8D8A]">
                Drafts an email directly to {PROFILE_INFO.email}.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-medium text-[#B6B4AE]"
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="Alex Perera"
                    className="mt-1.5 min-h-[44px] w-full rounded-lg border border-white/10 bg-[#070709] px-3.5 py-2 text-sm text-[#F5F4F0] placeholder:text-[#5B5A56] focus:border-[#E5A93C] focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-medium text-[#B6B4AE]"
                  >
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="alex@company.com"
                    className="mt-1.5 min-h-[44px] w-full rounded-lg border border-white/10 bg-[#070709] px-3.5 py-2 text-sm text-[#F5F4F0] placeholder:text-[#5B5A56] focus:border-[#E5A93C] focus:outline-none"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-medium text-[#B6B4AE]"
                >
                  Project or Role Details
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share details about your software project, timeline, or engineering role..."
                  className="mt-1.5 w-full rounded-lg border border-white/10 bg-[#070709] px-3.5 py-2.5 text-sm text-[#F5F4F0] placeholder:text-[#5B5A56] focus:border-[#E5A93C] focus:outline-none"
                />
              </div>

              {formNotice && (
                <p
                  role="status"
                  className="mt-3 text-xs text-[#E5A93C]"
                >
                  {formNotice}
                </p>
              )}

              <div className="mt-6 flex items-center justify-end">
                <button
                  type="submit"
                  className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg bg-[#E5A93C] px-5 py-2.5 text-sm font-semibold text-[#050505] transition-colors duration-150 hover:bg-[#efc062] sm:w-auto whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5A93C]"
                >
                  <Send className="h-4 w-4" />
                  <span>Compose Email</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
