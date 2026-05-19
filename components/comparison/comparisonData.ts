export type CompareValue = string | boolean | 'partial';

export interface ComparisonFeature {
  name: string;
  flashbill: CompareValue;
  petpooja: CompareValue;
  urbanpiper: CompareValue;
  posist: CompareValue;
  gofrugal: CompareValue;
}

export interface ComparisonCategory {
  category: string;
  features: ComparisonFeature[];
}

export const competitors = [
  { id: 'flashbill', name: 'FlashBill' },
  { id: 'petpooja', name: 'Petpooja' },
  { id: 'urbanpiper', name: 'UrbanPiper' },
  { id: 'posist', name: 'Posist' },
  { id: 'gofrugal', name: 'GoFrugal' },
] as const;

export type CompetitorId = typeof competitors[number]['id'];

export const comparisonData: ComparisonCategory[] = [
  {
    category: 'PRICING',
    features: [
      {
        name: 'Pricing Model',
        flashbill: 'One-Time Payment',
        petpooja: 'Monthly/Yearly',
        urbanpiper: 'Monthly Subscription',
        posist: 'Monthly Subscription',
        gofrugal: 'One-Time + AMC',
      },
      {
        name: 'Starting Price',
        flashbill: '₹12,000 one-time',
        petpooja: '₹5,000–₹10,000/yr',
        urbanpiper: '₹8,000–₹15,000/yr',
        posist: '₹15,000+/year',
        gofrugal: '₹20k + ₹5k/yr AMC',
      },
      {
        name: 'Hidden Charges',
        flashbill: 'None',
        petpooja: 'Yes (AMC, renewal)',
        urbanpiper: 'Yes (commissions)',
        posist: 'Yes (module fees)',
        gofrugal: 'Yes (AMC mandatory)',
      },
      {
        name: 'Free Demo',
        flashbill: true,
        petpooja: true,
        urbanpiper: true,
        posist: true,
        gofrugal: true,
      }
    ]
  },
  {
    category: 'CORE FEATURES',
    features: [
      {
        name: 'Offline Billing (100%)',
        flashbill: true,
        petpooja: 'partial',
        urbanpiper: false,
        posist: 'partial',
        gofrugal: true,
      },
      {
        name: 'Setup Time',
        flashbill: 'Under 24 hours',
        petpooja: '2–5 days',
        urbanpiper: '3–7 days',
        posist: '1–2 weeks',
        gofrugal: '3–7 days',
      },
      {
        name: 'Local Data Storage',
        flashbill: true,
        petpooja: 'Cloud only',
        urbanpiper: 'Cloud only',
        posist: 'Cloud only',
        gofrugal: true,
      },
      {
        name: 'GST Billing',
        flashbill: true,
        petpooja: true,
        urbanpiper: true,
        posist: true,
        gofrugal: true,
      },
      {
        name: 'Thermal Printer Support',
        flashbill: true,
        petpooja: true,
        urbanpiper: 'partial',
        posist: true,
        gofrugal: true,
      },
      {
        name: 'Multi-Device Support',
        flashbill: 'Yes (up to 5)',
        petpooja: true,
        urbanpiper: true,
        posist: true,
        gofrugal: true,
      }
    ]
  },
  {
    category: 'ADVANCED',
    features: [
      {
        name: 'QR Code Ordering',
        flashbill: true,
        petpooja: true,
        urbanpiper: true,
        posist: true,
        gofrugal: false,
      },
      {
        name: 'Kitchen Display System',
        flashbill: true,
        petpooja: true,
        urbanpiper: 'partial',
        posist: true,
        gofrugal: true,
      },
      {
        name: 'Inventory Management',
        flashbill: 'Add-on (₹2,499)',
        petpooja: 'Included',
        urbanpiper: false,
        posist: true,
        gofrugal: true,
      },
      {
        name: 'Staff Management',
        flashbill: 'Yes (Premium)',
        petpooja: true,
        urbanpiper: false,
        posist: true,
        gofrugal: true,
      },
      {
        name: 'Email Reports',
        flashbill: true,
        petpooja: true,
        urbanpiper: true,
        posist: true,
        gofrugal: 'partial',
      }
    ]
  },
  {
    category: 'SUPPORT',
    features: [
      {
        name: 'Dedicated Setup Support',
        flashbill: 'Yes (All plans)',
        petpooja: 'Yes (Paid plans)',
        urbanpiper: 'partial',
        posist: 'Yes (Enterprise)',
        gofrugal: true,
      },
      {
        name: 'Staff Training',
        flashbill: true,
        petpooja: 'Online only',
        urbanpiper: false,
        posist: 'partial',
        gofrugal: true,
      },
      {
        name: 'WhatsApp Support',
        flashbill: true,
        petpooja: false,
        urbanpiper: false,
        posist: false,
        gofrugal: false,
      },
      {
        name: 'Response Time',
        flashbill: '< 1 hour',
        petpooja: '4–8 hours',
        urbanpiper: '24 hours',
        posist: '4–8 hours',
        gofrugal: '8–24 hours',
      }
    ]
  }
];
