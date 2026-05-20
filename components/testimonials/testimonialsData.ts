export interface Testimonial {
  id: string;
  name: string;
  businessName: string;
  location: string;
  review: string;
  tag: string;
}

export const baseTestimonialsData: Testimonial[] = [
  {
    id: "t1",
    name: "Rajesh Sharma",
    businessName: "Sharma's Family Restaurant",
    location: "Delhi",
    review: "FlashBill ne hamari billing speed 3x kar di. Offline feature best hai — kabhi bhi bill rukta nahi.",
    tag: "Restaurant",
  },
  {
    id: "t2",
    name: "Priya Nair",
    businessName: "Brew & Bloom Cafe",
    location: "Kochi",
    review: "Setup sirf 4 ghante mein ho gaya. Staff ko training bhi ForgeWeb ne di. Bohot smooth experience.",
    tag: "Cafe",
  },
  {
    id: "t3",
    name: "Amit Verma",
    businessName: "V-Mart Retail Store",
    location: "Jaipur",
    review: "Ek baar payment, lifetime use. Petpooja se switch kiya — bilkul pachtawa nahi.",
    tag: "Retail",
  },
  {
    id: "t4",
    name: "Sunita Patel",
    businessName: "Patel's Kitchen",
    location: "Ahmedabad",
    review: "GST billing automatic hai, reports roz email pe aate hain. Life easy ho gayi.",
    tag: "Restaurant",
  },
  {
    id: "t5",
    name: "Mohammed Irfan",
    businessName: "Spice Route Restaurant",
    location: "Hyderabad",
    review: "Internet nahi tha 2 ghante — billing chal rahi thi smoothly. Yeh feature alone worth it hai.",
    tag: "Restaurant",
  },
  {
    id: "t6",
    name: "Kavita Singh",
    businessName: "The Coffee Nook",
    location: "Pune",
    review: "QR ordering feature customers ko bahut pasand hai. Table service fast ho gayi aur staff load kam.",
    tag: "Cafe",
  },
  {
    id: "t7",
    name: "Deepak Mehra",
    businessName: "Mehra General Store",
    location: "Ludhiana",
    review: "Inventory management add-on liya — ab stock khatam hone se pehle alert aata hai. Koi loss nahi.",
    tag: "Retail",
  },
  {
    id: "t8",
    name: "Ananya Roy",
    businessName: "Cafe Bistro 42",
    location: "Kolkata",
    review: "ForgeWeb ki support team instant respond karti hai. Koi bhi issue ho, 1 ghante mein solve.",
    tag: "Cafe",
  }
];

// Duplicate for seamless infinite loop
export const testimonialsData: Testimonial[] = [
  ...baseTestimonialsData.map((t) => ({ ...t, id: t.id + "-1" })),
  ...baseTestimonialsData.map((t) => ({ ...t, id: t.id + "-2" })),
];
