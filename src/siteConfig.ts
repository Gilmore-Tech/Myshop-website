// ─────────────────────────────────────────────────────────────────────────────
// Central site configuration.
// Swap real values here — they flow through every component.
// ─────────────────────────────────────────────────────────────────────────────

export const COMPANY = {
  name: "Gilmore Technologies",
  shortName: "Gilmore",
  tagline: "Technology that uplifts communities.",
  email: "support@gilmoretechnologiesgh.com",
  phone: "+233 30 123 4567",
  location: "Accra, Ghana",
};

export const VISION =
  "To unlock the limitless potential of the youth by creating transformative technology careers and jobs, driving robust economic development, and delivering accessible, world-class IT services and solutions to all people and communities.";

export const MISSION =
  "To catalyze economic development and elevate community living by delivering innovative IT services and solutions, while equipping youth with sustainable digital careers and jobs.";

// ─────────────────────────────────────────────────────────────────────────────
// MyShop app links + screenshot.
// TODO: paste the real store URLs below, and drop the real screenshot into
// src/assets/ then update APP.screenshot import in DownloadApp.tsx.
// ─────────────────────────────────────────────────────────────────────────────
export const MYSHOP_APPS = [
  {
    label: "For Customers",
    name: "MyShop · Akwaaba",
    tagline: "Book rides & hire verified artisans",
    appStoreUrl: "https://apps.apple.com/gh/app/myshop-akwaaba/id6773658114",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.gilmoretech.myshopclient",
  },
  {
    label: "For Providers",
    name: "MyShop Provider",
    tagline: "Drivers & artisans — get jobs, get paid",
    appStoreUrl: "https://apps.apple.com/gh/app/myshop-provider/id6773660049",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.gilmoretech.myshopprovider",
  },
];

// Real app screenshot. Save the image as public/app-screenshot.jpg and it shows
// inside the phone frame. Set back to "" to fall back to the built-in mockup.
export const MYSHOP_SCREENSHOT_URL = `${import.meta.env.BASE_URL}app-screenshot.jpeg`;

// Live chat — point this at your provider (Tawk.to / Crisp / Intercom) or a
// WhatsApp deep link. Leave as "" to show the email-only fallback.
export const LIVE_CHAT_URL =
  "https://wa.me/233301234567?text=Hello%20Gilmore%20Technologies";

// ─────────────────────────────────────────────────────────────────────────────
// Contact form delivery (Web3Forms).
// The form POSTs to Web3Forms, which emails each submission to your verified
// inbox — no backend needed. Get a free key at https://web3forms.com by
// entering support@gilmoretechnologiesgh.com, then paste it below.
// This key is safe to commit: it only routes mail to your verified address.
// Leave as "" to fall back to opening the user's mail app (mailto).
// ─────────────────────────────────────────────────────────────────────────────
export const WEB3FORMS_ACCESS_KEY = "";
