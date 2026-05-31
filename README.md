# Sefonx Portfolio

A modern, stunning personal portfolio website with glassmorphism design and Discord webhook integration.

## Features

- Modern glassmorphism UI design
- Custom animated cursor
- Smooth scroll navigation
- Responsive design for all devices
- Discord webhook integration for contact form
- Tech stack showcase
- Services section
- About section

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm (or npm/yarn)

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/username/sefonx-portfolio.git
cd sefonx-portfolio
```

2. **Install dependencies:**
```bash
pnpm install
```

3. **Configure environment variables:**
```bash
cp .env.example .env
```

4. **Add your Discord webhook URL to `.env`:**
```
VITE_DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/YOUR_WEBHOOK_ID/YOUR_WEBHOOK_TOKEN
```

### Development

Run the development server:
```bash
pnpm dev
```

### Build

Build for production:
```bash
pnpm build
```

### Preview

Preview production build:
```bash
pnpm preview
```

## How to Get Discord Webhook URL

1. Open Discord and go to your server
2. Go to **Server Settings** > **Integrations** > **Webhooks**
3. Create a new webhook or copy an existing one
4. Paste the webhook URL in your `.env` file

## Project Structure

```
sefonx-portfolio/
├── src/
│   ├── App.tsx          # Main component
│   └── App.css          # Styles
├── public/              # Static assets
├── .env                 # Environment variables (local)
├── .env.example         # Example environment file
├── index.html           # Entry HTML
├── package.json         # Dependencies
├── tsconfig.json        # TypeScript config
├── vite.config.ts      # Vite config
└── README.md            # This file
```

## Tech Stack

- React 18
- TypeScript
- Vite
- CSS3 (with glassmorphism effects)

## Customization

### Changing Content

Edit `src/App.tsx` to change:
- Your name and bio
- Services offered
- Tech skills displayed
- Contact information

### Changing Styles

Edit `src/App.css` to customize:
- Color scheme
- Animations
- Layout
- Typography

## License

MIT License - Feel free to use and modify!