# FlashBill POS — Website

> **Fast. Reliable. Yours.**

The official website for FlashBill POS — an offline-first billing & business management software by [ForgeWeb](https://forgeweb.in).

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 + Custom CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Inter + Playfair Display (Google Fonts via `next/font`)
- **Forms:** React Hook Form + Zod validation

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Project Structure

```
flashbill-pos/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (Navbar + Footer + Fonts)
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles + Tailwind
│   ├── features/           # Features detail page
│   ├── pricing/            # Pricing detail page
│   ├── how-to-buy/         # How to Buy page
│   ├── about/              # About FlashBill
│   └── contact/            # Contact page
├── components/
│   ├── layout/             # Navbar, Footer, MarqueeBar
│   ├── sections/           # Page section components
│   ├── ui/                 # Reusable UI components
│   └── forms/              # Form components
├── lib/
│   ├── data/               # Static data files
│   └── utils.ts            # Utility functions
└── public/                 # Static assets
```

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, features preview, pricing, how-to-buy steps |
| Features | `/features` | Complete feature list with category filters |
| Pricing | `/pricing` | Pricing plans, comparison table, add-ons, FAQ |
| How to Buy | `/how-to-buy` | 4-step purchase process, demo booking |
| About | `/about` | Company story, mission, offline-first philosophy |
| Contact | `/contact` | Contact form with validation, office info |

## Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

## License

© 2024 FlashBill by ForgeWeb. All rights reserved.
