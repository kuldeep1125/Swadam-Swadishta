"use client";

// [ADDED] Contact & Enquiry Form: Client-only form generating pre-formatted WhatsApp & mailto links with order confirmation disclaimer
import React, { useState } from "react";
import { restaurant } from "@/config/restaurant";
import { BrushUnderline } from "@/components/BrandMotifs";
import { Send, MessageCircle, AlertCircle, CheckCircle2 } from "lucide-react";

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
      const mailtoUrl = `mailto:swadamswadishta@gmail.com?subject=${encodeURIComponent(`Enquiry: ${formData.enquiryType} from ${formData.name}`)}&body=${textPayload.replaceAll("%0A", "\n")}`;
      window.location.href = mailtoUrl;
    }
  };

  return (
    <section id="enquiry" className="relative py-20 sm:py-28 px-4 sm:px-8 md:px-12 bg-cream-100 overflow-hidden" aria-label="Customer Enquiry Form">
      
      <div className="mx-auto max-w-4xl">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-mono font-bold tracking-widest text-saffron-600 uppercase">
            CONNECT WITH US
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-brown-900 tracking-tight">
            Send an Enquiry.
          </h2>
          <div className="w-28 mx-auto">
            <BrushUnderline className="w-full h-3 text-turmeric-gold" />
          </div>
          <p className="text-sm sm:text-base text-brown-700 font-sans max-w-xl mx-auto">
            Have a question about our menu, special dietary requirements, or planning a bulk breakfast/lunch order in Baner? Reach out below.
          </p>
        </div>

        {/* Form Container */}
        <div className="rounded-3xl p-6 sm:p-10 bg-white border-2 border-turmeric-400/60 shadow-xl">
          <form className="space-y-6">
            
            {/* Grid 1: Name and Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brown-800 mb-1.5 font-sans">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Deshmukh"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-turmeric-400/60 bg-cream-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-saffron-500 text-sm text-brown-900"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brown-800 mb-1.5 font-sans">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-turmeric-400/60 bg-cream-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-saffron-500 text-sm text-brown-900"
                />
              </div>
            </div>

            {/* Grid 2: Email and Enquiry Type */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brown-800 mb-1.5 font-sans">
                  Email Address (Optional)
                </label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-turmeric-400/60 bg-cream-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-saffron-500 text-sm text-brown-900"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brown-800 mb-1.5 font-sans">
                  Enquiry Type *
                </label>
                <select
                  value={formData.enquiryType}
                  onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-turmeric-400/60 bg-cream-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-saffron-500 text-sm text-brown-900 font-sans"
                >
                  <option value="General Enquiry">General Enquiry</option>
                  <option value="Bulk Order">Bulk Order (Office / Gathering)</option>
                  <option value="Catering Enquiry">Catering Enquiry</option>
                  <option value="Other">Other Query</option>
                </select>
              </div>
            </div>

            {/* Preferred Date */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-brown-800 mb-1.5 font-sans">
                Preferred Date (If for bulk gathering)
              </label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-turmeric-400/60 bg-cream-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-saffron-500 text-sm text-brown-900 font-sans"
              />
            </div>

            {/* Message Area */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-brown-800 mb-1.5 font-sans">
                Your Message / Requirement
              </label>
              <textarea
                rows={3}
                placeholder="Let us know dish preferences, number of guests, or any question..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-turmeric-400/60 bg-cream-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-saffron-500 text-sm text-brown-900"
              />
            </div>

            {/* Clear Disclaimer as per instructions */}
            <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-cream-200/70 border border-turmeric-400/50 text-xs text-brown-700">
              <AlertCircle className="w-4 h-4 text-saffron-600 flex-shrink-0 mt-0.5" />
              <span>
                <strong>Please note:</strong> Submitting an enquiry does not automatically confirm an order. Our team will verify kitchen capacity and connect back with you promptly.
              </span>
            </div>

            {/* Two Action Buttons: WhatsApp (Instant) & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <button
                type="button"
                onClick={(e) => handleSubmit("whatsapp", e)}
                disabled={!formData.name || !formData.phone}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-brandGreen-700 hover:bg-brandGreen-800 text-white font-bold text-sm shadow-md disabled:opacity-50 disabled:pointer-events-none active:scale-95 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send via WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={(e) => handleSubmit("email", e)}
                disabled={!formData.name || !formData.phone}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-brown-900 hover:bg-brown-800 text-cream-100 font-bold text-sm shadow-md disabled:opacity-50 disabled:pointer-events-none active:scale-95 transition-all"
              >
                <Send className="w-4 h-4 text-turmeric-400" />
                <span>Send via Email</span>
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}
