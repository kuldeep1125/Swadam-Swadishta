"use client";

// [ADDED] Contact & Enquiry Form: Client-only form generating pre-formatted WhatsApp & mailto links with order confirmation disclaimer
import React, { useState } from "react";
import { restaurant } from "@/config/restaurant";
import { BrushUnderline } from "@/components/BrandMotifs";
import { Send, MessageCircle, AlertCircle, CheckCircle2 } from "lucide-react"; // [ADDED] CheckCircle2 for enquiry feedback

export function EnquirySection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    enquiryType: "General Enquiry",
    date: "",
    message: "",
  });
  const [submittedMethod, setSubmittedMethod] = useState<"whatsapp" | "email" | null>(null);

  const handleSubmit = (method: "whatsapp" | "email", e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedMethod(method);

    const textPayload = `Namaskar Swadam Swadishta!%0A%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Email:* ${encodeURIComponent(formData.email || "N/A")}%0A*Type:* ${encodeURIComponent(formData.enquiryType)}%0A*Preferred Date:* ${encodeURIComponent(formData.date || "Immediate")}%0A*Message:* ${encodeURIComponent(formData.message || "I would like to enquire about your menu / bulk orders.")}`;

    if (method === "whatsapp") {
      const url = `https://wa.me/${restaurant.whatsappNumber}?text=${textPayload}`;
      window.open(url, "_blank");
    } else {
      // [FIXED] Using centralized restaurant.email from config
      const mailtoUrl = `mailto:${restaurant.email}?subject=${encodeURIComponent(`Enquiry: ${formData.enquiryType} from ${formData.name}`)}&body=${textPayload.replaceAll("%0A", "\n")}`;
      window.location.href = mailtoUrl;
    }
  };

  return (
    // [FIXED] M-1: Added scroll-mt-20 for smooth scroll margin
    <section id="enquiry" className="relative py-20 sm:py-28 px-4 sm:px-8 md:px-12 bg-cream-100 overflow-hidden scroll-mt-20" aria-label="Customer Enquiry Form">
      
      <div className="mx-auto max-w-4xl">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          {/* [ADDED] Bilingual eyebrow tag */}
          <span className="text-xs font-mono font-bold tracking-widest text-saffron-600 uppercase">
            CONNECT WITH US • आमच्याशी संपर्क साधा
          </span>
          {/* [FIXED] Fluid typography for Enquiry heading with Marathi subtitle */}
          <h2 className="font-display text-3xl xs:text-4xl sm:text-5xl font-black text-brown-900 tracking-tight">
            Send an Enquiry.
          </h2>
          <span className="font-devanagari text-lg sm:text-2xl font-bold text-brandGreen-700 block">
            विचारपूस करा किंवा माहिती मिळवा
          </span>
          <div className="w-28 mx-auto">
            <BrushUnderline className="w-full h-3 text-turmeric-gold" />
          </div>
          <p className="text-sm sm:text-base text-brown-700 font-sans max-w-xl mx-auto">
            Have a question about our menu, special dietary requirements, or planning a bulk breakfast/lunch order in Baner? Reach out below. (आमचा मेनू, बल्क ऑर्डर्स किंवा इतर कोणत्याही चौकशीसाठी येथे संपर्क साधा.)
          </p>
        </div>

        {/* [FIXED] Form Container padding adjusted to p-4 on small phones */}
        <div className="rounded-3xl p-4 xs:p-6 sm:p-10 bg-white border-2 border-turmeric-400/60 shadow-xl">
          <form
            className="space-y-6"
            onSubmit={(e) => {
              if (formData.name && formData.phone) {
                handleSubmit("whatsapp", e);
              } else {
                e.preventDefault();
              }
            }}
          >
            
            {/* [ADDED] Submission feedback alert */}
            {submittedMethod && (
              <div className="p-4 rounded-xl bg-brandGreen-50 border border-brandGreen-500/40 text-brandGreen-900 flex items-center gap-3 animate-in fade-in duration-300">
                <CheckCircle2 className="w-5 h-5 text-brandGreen-700 flex-shrink-0" />
                <div className="text-xs sm:text-sm">
                  <strong className="block font-bold">Enquiry Prepared! (चौकशी संदेश तयार केला!)</strong>
                  Your details have been pre-filled for {submittedMethod === "whatsapp" ? "WhatsApp" : "Email"}. Our team will verify and connect with you shortly.
                </div>
              </div>
            )}

            {/* Grid 1: Name and Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="enquiry-name" className="block text-xs font-bold uppercase tracking-wider text-brown-800 mb-1.5 font-sans">
                  Your Full Name / पूर्ण नाव *
                </label>
                {/* [FIXED] C-4: text-base on mobile prevents iOS Safari auto-zoom, sm:text-sm on larger screens */}
                <input
                  id="enquiry-name"
                  type="text"
                  required
                  placeholder="e.g. Rahul Deshmukh"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-turmeric-400/60 bg-cream-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-saffron-500 text-base sm:text-sm text-brown-900"
                />
              </div>

              <div>
                <label htmlFor="enquiry-phone" className="block text-xs font-bold uppercase tracking-wider text-brown-800 mb-1.5 font-sans">
                  Phone Number / मोबाईल नंबर *
                </label>
                <input
                  id="enquiry-phone"
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-turmeric-400/60 bg-cream-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-saffron-500 text-base sm:text-sm text-brown-900"
                />
              </div>
            </div>

            {/* Grid 2: Email and Enquiry Type */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="enquiry-email" className="block text-xs font-bold uppercase tracking-wider text-brown-800 mb-1.5 font-sans">
                  Email Address / ईमेल (Optional / ऐच्छिक)
                </label>
                <input
                  id="enquiry-email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-turmeric-400/60 bg-cream-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-saffron-500 text-base sm:text-sm text-brown-900"
                />
              </div>

              <div>
                <label htmlFor="enquiry-type" className="block text-xs font-bold uppercase tracking-wider text-brown-800 mb-1.5 font-sans">
                  Enquiry Type / चौकशीचा प्रकार *
                </label>
                <select
                  id="enquiry-type"
                  value={formData.enquiryType}
                  onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-turmeric-400/60 bg-cream-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-saffron-500 text-base sm:text-sm text-brown-900 font-sans"
                >
                  <option value="General Enquiry">General Enquiry (सर्वसाधारण चौकशी)</option>
                  <option value="Bulk Order">Bulk Order (ऑफिस / कार्यक्रम)</option>
                  <option value="Catering Enquiry">Catering Enquiry (केटरिंग विचारपूस)</option>
                  <option value="Other">Other Query (इतर चौकशी)</option>
                </select>
              </div>
            </div>

            {/* Preferred Date */}
            <div>
              <label htmlFor="enquiry-date" className="block text-xs font-bold uppercase tracking-wider text-brown-800 mb-1.5 font-sans">
                Preferred Date / नियोजित तारीख (If for bulk gathering / कार्यक्रमासाठी)
              </label>
              <input
                id="enquiry-date"
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-turmeric-400/60 bg-cream-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-saffron-500 text-base sm:text-sm text-brown-900 font-sans"
              />
            </div>

            {/* Message Area */}
            <div>
              <label htmlFor="enquiry-message" className="block text-xs font-bold uppercase tracking-wider text-brown-800 mb-1.5 font-sans">
                Your Message / Requirement / संदेश किंवा आवश्यकता
              </label>
              <textarea
                id="enquiry-message"
                rows={3}
                placeholder="Let us know dish preferences, number of guests, or any question... (डिशेस, लोकांची संख्या किंवा इतर माहिती लिहा...)"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-turmeric-400/60 bg-cream-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-saffron-500 text-base sm:text-sm text-brown-900"
              />
            </div>

            {/* Clear Disclaimer as per instructions */}
            <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-cream-200/70 border border-turmeric-400/50 text-xs text-brown-700">
              <AlertCircle className="w-4 h-4 text-saffron-600 flex-shrink-0 mt-0.5" />
              <span>
                <strong>Please note (कृपया नोंद घ्या):</strong> Submitting an enquiry does not automatically confirm an order. Our team will verify kitchen capacity and connect back with you promptly. (फॉर्म पाठवल्यानंतर आमची टीम त्वरित खात्री करून आपल्याशी संपर्क साधेल.)
              </span>
            </div>

            {/* Two Action Buttons: WhatsApp (Instant) & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <button
                type="button"
                onClick={(e) => handleSubmit("whatsapp", e)}
                disabled={!formData.name || !formData.phone}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-brandGreen-700 hover:bg-brandGreen-800 text-white font-bold text-sm shadow-md disabled:opacity-50 disabled:pointer-events-none active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brandGreen-500"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send via WhatsApp / व्हॉट्सॲप</span>
              </button>

              <button
                type="button"
                onClick={(e) => handleSubmit("email", e)}
                disabled={!formData.name || !formData.phone}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-brown-900 hover:bg-brown-800 text-cream-100 font-bold text-sm shadow-md disabled:opacity-50 disabled:pointer-events-none active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-turmeric-gold"
              >
                <Send className="w-4 h-4 text-turmeric-400" />
                <span>Send via Email / ईमेल</span>
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}
