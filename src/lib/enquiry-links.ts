export interface EnquiryDetails {
  name: string;
  phone: string;
  email: string;
  enquiryType: string;
  date: string;
  message: string;
}

// [ADDED] Build encoded handoff links from plaintext; this helper never sends a message.
export function createEnquiryLinks(data: EnquiryDetails, contact: { email: string; whatsappNumber: string }) {
  const message = [
    "Namaskar Swadam Swadishta!", "", `Name: ${data.name.trim()}`,
    `Phone: ${data.phone.trim()}`, `Email: ${data.email.trim() || "Not provided"}`,
    `Type: ${data.enquiryType}`, `Preferred date: ${data.date || "Not specified"}`, "",
    `Message: ${data.message.trim() || "I would like to enquire about your menu / bulk orders."}`,
  ].join("\n");
  const encoded = encodeURIComponent(message);
  const subject = encodeURIComponent(`Enquiry: ${data.enquiryType} from ${data.name.trim()}`);
  return {
    whatsapp: `https://wa.me/${contact.whatsappNumber}?text=${encoded}`,
    email: `mailto:${contact.email}?subject=${subject}&body=${encoded}`,
  };
}
