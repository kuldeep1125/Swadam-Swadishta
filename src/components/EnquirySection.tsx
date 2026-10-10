"use client";
import { useRef, useState } from "react";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { restaurant } from "@/config/restaurant";
import { createEnquiryLinks } from "@/lib/enquiry-links";
import styles from "./Interactive.module.css";

// [FIXED] Prepare a complete plaintext message; visitors send it in their chosen app.
export function EnquirySection() {
  const form = useRef<HTMLFormElement>(null);
  const [feedback, setFeedback] = useState("");
  const [error, setError] = useState("");
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    enquiryType: "General Enquiry",
    date: "",
    message: "",
  });
  const update = (key: keyof typeof data, value: string) => {
    setData((previous) => ({ ...previous, [key]: value }));
    setFeedback("");
    setError("");
  };
  const handoff = (method: "whatsapp" | "email") => {
    if (!form.current?.reportValidity()) return;
    if (!data.name.trim()) {
      setError("Please enter your name. / कृपया आपले नाव लिहा.");
      document.getElementById("enquiry-name")?.focus();
      return;
    }
    if (data.phone.replace(/\D/g, "").length < 7) {
      setError(
        "Please enter a valid phone number. / कृपया योग्य मोबाईल नंबर लिहा.",
      );
      document.getElementById("enquiry-phone")?.focus();
      return;
    }
    // [FIXED] Both destination URLs use the shared, regression-tested encoder.
    const links = createEnquiryLinks(data, restaurant);
    if (method === "whatsapp")
      window.open(links.whatsapp, "_blank", "noopener,noreferrer");
    else window.location.href = links.email;
    setFeedback(
      `Your message is ready. Complete sending in ${method === "whatsapp" ? "WhatsApp" : "your email app"}. If the app did not open, use the contact links here. Your enquiry has not been sent by this website. / संदेश तयार आहे. कृपया आपल्या अॅपमधून पाठवा.`,
    );
  };
  return (
    <section
      id="enquiry"
      className="section-space"
      aria-labelledby="enquiry-title"
    >
      <div className={`editorial-container ${styles.enquiryLayout}`}>
        <div className={styles.enquiryIntro}>
          <p className="eyebrow">A conversation starts here</p>
          <h2 id="enquiry-title" className="section-title">
            Tell us what
            <br />
            you have in mind.
          </h2>
          <p className={`font-devanagari ${styles.marathiSubtitle}`}>
            आमच्याशी संपर्क साधा.
          </p>
          <p>
            A question about the menu, dietary needs, or food for a gathering?
            We&apos;re happy to help.
          </p>
          <a
            href={`tel:${restaurant.phoneRaw}`}
            className={styles.contactPhone}
          >
            {restaurant.phone}
            <ArrowUpRight size={20} />
          </a>
          <a
            href={`mailto:${restaurant.email}`}
            className={styles.contactEmail}
          >
            {restaurant.email}
          </a>
          <p className={styles.enquiryNote}>
            For bulk orders, please contact us in advance. Kitchen availability
            and order details are confirmed directly with our team.
          </p>
        </div>
        <form
          ref={form}
          className={styles.enquiryForm}
          onSubmit={(event) => {
            event.preventDefault();
            handoff("whatsapp");
          }}
        >
          <p className={styles.formInstruction}>
            Prepare your enquiry below. Choose WhatsApp or email, then send the
            message in that app. Fields marked * are required.
          </p>
          <div className={styles.formGrid}>
            <label htmlFor="enquiry-name">
              Full name / पूर्ण नाव *
              <input
                id="enquiry-name"
                name="name"
                required
                autoComplete="name"
                maxLength={120}
                value={data.name}
                onChange={(e) => update("name", e.target.value)}
                aria-describedby={error ? "enquiry-error" : undefined}
              />
            </label>
            <label htmlFor="enquiry-phone">
              Phone / मोबाईल नंबर *
              <input
                id="enquiry-phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                maxLength={30}
                value={data.phone}
                onChange={(e) => update("phone", e.target.value)}
                aria-describedby={error ? "enquiry-error" : undefined}
              />
            </label>
            <label htmlFor="enquiry-email">
              Email / ईमेल (optional)
              <input
                id="enquiry-email"
                name="email"
                type="email"
                autoComplete="email"
                maxLength={254}
                value={data.email}
                onChange={(e) => update("email", e.target.value)}
              />
            </label>
            <label htmlFor="enquiry-type">
              Enquiry / चौकशीचा प्रकार
              <select
                id="enquiry-type"
                name="type"
                value={data.enquiryType}
                onChange={(e) => update("enquiryType", e.target.value)}
              >
                <option>General Enquiry</option>
                <option>Bulk Order</option>
                <option>Catering Enquiry</option>
                <option>Other</option>
              </select>
            </label>
          </div>
          <label htmlFor="enquiry-date">
            Preferred date / नियोजित तारीख (optional)
            <input
              id="enquiry-date"
              name="date"
              type="date"
              value={data.date}
              onChange={(e) => update("date", e.target.value)}
            />
          </label>
          <label htmlFor="enquiry-message">
            Your message / संदेश
            <textarea
              id="enquiry-message"
              name="message"
              rows={4}
              maxLength={3000}
              placeholder="Dish preferences, number of guests, or your question…"
              value={data.message}
              onChange={(e) => update("message", e.target.value)}
            />
          </label>
          {error && (
            <p id="enquiry-error" role="alert" className={styles.formError}>
              {error}
            </p>
          )}
          {feedback && (
            <p role="status" className={styles.formFeedback}>
              {feedback}
            </p>
          )}
          <div className={styles.formActions}>
            <button type="submit" className="button-primary">
              <MessageCircle size={17} />
              Continue to WhatsApp
            </button>
            <button
              type="button"
              className="button-secondary"
              onClick={() => handoff("email")}
            >
              <Mail size={17} />
              Prepare email
            </button>
          </div>
          <p className={styles.formDisclaimer}>
            An enquiry does not confirm an order. Please wait for our team to
            confirm availability and arrangements. / ऑर्डरची खात्री आमच्या
            टीमकडून करून घ्या.
          </p>
        </form>
      </div>
    </section>
  );
}
