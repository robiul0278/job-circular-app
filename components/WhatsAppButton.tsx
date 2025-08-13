import { WhatsappIcon } from "react-share";

// components/WhatsAppButton.jsx
export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/8801811325705?text=Hi%2C%20I%20want%20to%20know%20about%20your%20service"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50"
    >
      <WhatsappIcon size={40} className="rounded"/>
    </a>
  );
}
