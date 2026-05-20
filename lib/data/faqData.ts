export type FAQCategory = "all" | "general" | "technical" | "pricing" | "support";

export interface FAQItem {
  id: string;
  category: FAQCategory;
  question: string;
  answer: string;
  popular?: boolean;
}

export const faqData: FAQItem[] = [
  {
    id: "gen-1",
    category: "general",
    question: "What is FlashBill POS?",
    answer: "FlashBill POS is a comprehensive billing and point-of-sale software designed for Indian businesses. It handles GST billing, inventory, and expense tracking locally on your device, operating 100% offline without requiring internet.",
    popular: true
  },
  {
    id: "gen-2",
    category: "general",
    question: "Which businesses can use FlashBill?",
    answer: "It supports a wide range of businesses including restaurants, cafes, hotels, and retail shops. The interface is highly adaptable to different workflows."
  },
  {
    id: "gen-3",
    category: "general",
    question: "Is FlashBill made in India?",
    answer: "Yes, it is entirely developed in India by the ForgeWeb team, specifically focused on Indian business needs like GST compliance and thermal printer support."
  },
  {
    id: "gen-4",
    category: "general",
    question: "How is FlashBill different from other POS systems?",
    answer: "Unlike many modern cloud-based systems, FlashBill guarantees a 100% offline-first experience with a true one-time payment structure, meaning absolutely no monthly or recurring fees ever."
  },
  {
    id: "tech-1",
    category: "technical",
    question: "Does FlashBill work without internet?",
    answer: "Yes, it works 100% offline. You do not need any internet connection to punch bills, manage inventory, or view reports.",
    popular: true
  },
  {
    id: "tech-2",
    category: "technical",
    question: "What devices and OS does FlashBill support?",
    answer: "FlashBill currently supports Windows operating systems. It runs perfectly on standard desktop computers, laptops, and Windows-based POS terminals."
  },
  {
    id: "tech-3",
    category: "technical",
    question: "Will it work with my existing thermal printer?",
    answer: "Yes, FlashBill supports all standard thermal printers (58mm and 80mm) via USB or network, ensuring fast and seamless receipt generation."
  },
  {
    id: "tech-4",
    category: "technical",
    question: "How is data stored — is it secure?",
    answer: "All your data is stored locally on your device. We do not sync it to any external servers, ensuring it remains fully private and secure under your control."
  },
  {
    id: "tech-5",
    category: "technical",
    question: "Can I use it on multiple devices/terminals?",
    answer: "Yes, multi-terminal setups are supported. You can network multiple systems locally to sync data across devices in real-time within your store."
  },
  {
    id: "price-1",
    category: "pricing",
    question: "Is it truly a one-time payment with zero hidden charges?",
    answer: "Absolutely. Once you purchase your chosen plan, the software is yours for life. There are zero monthly fees or hidden maintenance charges."
  },
  {
    id: "price-2",
    category: "pricing",
    question: "What's the difference between Basic, Standard, and Premium?",
    answer: "Basic (₹12k-15k) covers core billing and GST. Standard (₹20k) adds inventory and expense tracking. Premium (₹26,999) includes all add-ons and priority multi-terminal support.",
    popular: true
  },
  {
    id: "price-3",
    category: "pricing",
    question: "Can I upgrade my plan after purchase?",
    answer: "Yes, you can upgrade your plan at any time by paying the difference in price."
  },
  {
    id: "price-4",
    category: "pricing",
    question: "Are add-ons a separate one-time payment too?",
    answer: "Yes, if you purchase them individually. Add-ons like Inventory (₹2,499), Expense (₹2,499), and Reports (₹1,499) are all one-time payments."
  },
  {
    id: "sup-1",
    category: "support",
    question: "How long does the full setup take?",
    answer: "Setup and installation are completed under 24 hours by the dedicated ForgeWeb team, ensuring you're ready to start billing immediately."
  },
  {
    id: "sup-2",
    category: "support",
    question: "Do you provide staff training after installation?",
    answer: "Yes, comprehensive training is provided to you and your staff so you can confidently use all features of the system."
  },
  {
    id: "sup-3",
    category: "support",
    question: "What after-sales support do you offer?",
    answer: "We offer priority customer support for troubleshooting and assistance to ensure smooth day-to-day operations of your business."
  },
  {
    id: "sup-4",
    category: "support",
    question: "Is there a free demo before buying?",
    answer: "Yes, we encourage you to book a free live demo with our team to experience how FlashBill fits into your specific business workflow."
  }
];
