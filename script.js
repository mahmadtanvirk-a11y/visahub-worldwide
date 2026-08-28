// ==============================
// VisaHub Worldwide configuration
// ==============================

// IMPORTANT:
// Add your WhatsApp number below in international format WITHOUT +, spaces or dashes.
// Example India: 919876543210
// Example UAE:   971501234567
const WHATSAPP_NUMBER = "917863039037";

// Optional: update these later if you add business details in the HTML.
const BRAND_NAME = "VisaHub Worldwide";

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const enquiryForm = document.getElementById("enquiryForm");
const whatsappFloat = document.getElementById("whatsappFloat");
const countrySelect = document.getElementById("country");

document.getElementById("year").textContent = new Date().getFullYear();

menuToggle?.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

mainNav?.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll(".country-card").forEach(card => {
  card.addEventListener("click", () => {
    const selected = card.dataset.country || "Other Country";
    countrySelect.value = selected;
    document.getElementById("enquiry").scrollIntoView({ behavior: "smooth" });
    setTimeout(() => document.getElementById("visaType")?.focus(), 500);
  });
});

function getWhatsAppUrl(message) {
  if (!WHATSAPP_NUMBER) {
    return null;
  }
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function showConfigMessage() {
  alert(
    "Website ready hai, lekin WhatsApp number abhi add nahi kiya gaya.\n\n" +
    "script.js open karke WHATSAPP_NUMBER me apna number international format me add karo.\n" +
    "Example: 919876543210"
  );
}

enquiryForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!enquiryForm.checkValidity()) {
    enquiryForm.reportValidity();
    return;
  }

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const country = document.getElementById("country").value;
  const visaType = document.getElementById("visaType").value;
  const message = document.getElementById("message").value.trim();

  const whatsappMessage =
`Hello ${BRAND_NAME},

I would like to submit a visa enquiry.

Name: ${name}
Phone: ${phone}
Destination: ${country}
Visa Type: ${visaType}
Message: ${message || "Not provided"}

I understand that visa approval is not guaranteed and final decisions are made by the relevant authority.`;

  const url = getWhatsAppUrl(whatsappMessage);

  if (!url) {
    showConfigMessage();
    return;
  }

  window.open(url, "_blank", "noopener,noreferrer");
});

whatsappFloat?.addEventListener("click", () => {
  const message = `Hello ${BRAND_NAME}, I would like to make a visa enquiry.`;
  const url = getWhatsAppUrl(message);

  if (!url) {
    showConfigMessage();
    return;
  }

  window.open(url, "_blank", "noopener,noreferrer");
});
