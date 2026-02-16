# 🦫 MoleTools - Free Online Developer Tools

A collection of free, client-side developer tools built with Astro and Tailwind CSS. All processing happens in your browser - your data never leaves your device.

## ✨ Features

- **100% Client-Side**: All tools run in your browser, ensuring privacy and security
- **Fast & Modern**: Built with Astro for optimal performance
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **No Sign-up Required**: Just open and use

## 🧰 Available Tools

### Formatters
- **JSON Formatter** - Format, validate, and beautify JSON data

### Encoders & Converters
- **Base64 Encoder/Decoder** - Encode and decode Base64 strings
- **Timestamp Converter** - Convert between Unix timestamps and dates

### Generators
- **UUID Generator** - Generate random UUIDs (v4) with customization
- **QR Code Generator** - Create QR codes from text or URLs
- **Password Generator** - Generate strong, secure passwords

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or higher
- npm, pnpm, or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd astro-tools
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:4321`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
astro-tools/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── ToolCard.astro       # Tool card component
│   ├── data/
│   │   └── tools.json           # Tools configuration
│   ├── layouts/
│   │   └── Layout.astro         # Main layout
│   ├── pages/
│   │   ├── index.astro          # Home page (catalog)
│   │   └── tools/               # Tool pages
│   │       ├── json-formatter.astro
│   │       ├── base64.astro
│   │       ├── uuid.astro
│   │       ├── timestamp.astro
│   │       ├── qr.astro
│   │       └── password.astro
├── astro.config.mjs             # Astro configuration
├── tailwind.config.mjs          # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
└── package.json
```

## 🎨 Customization

### Adding a New Tool

1. Add tool metadata to `src/data/tools.json`:
```json
{
  "id": "my-tool",
  "name": "My Tool",
  "description": "Tool description",
  "icon": "🔧",
  "category": "Utility",
  "path": "/tools/my-tool"
}
```

2. Create a new page at `src/pages/tools/my-tool.astro`

3. The tool will automatically appear in the catalog

### Modifying Colors

Edit `tailwind.config.mjs` to change the color scheme:
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom colors
      }
    }
  }
}
```

## 🛡️ Privacy & Security

- **No Data Collection**: Tools run entirely in your browser
- **No Server Processing**: Data never leaves your device
- **No Analytics**: We don't track your usage
- **Open Source**: Code is transparent and auditable

## 📦 Technologies

- [Astro](https://astro.build/) - Static site generator
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [QRCode.js](https://github.com/soldair/node-qrcode) - QR code generation

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

MIT License - feel free to use this project for any purpose.

## 🙏 Acknowledgments

- Icons from Unicode emoji
- Inspired by various online developer tool collections
