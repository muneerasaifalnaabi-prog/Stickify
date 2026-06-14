# Stickify

**Stickify** is a custom sticker creation web application built with a bold, high-contrast, hand-drawn meme aesthetic. It provides a powerful, interactive canvas for designing and exporting unique stickers directly from the browser.

## Features

- **Interactive Canvas Editor**: Built on top of [Fabric.js](http://fabricjs.com/), allowing seamless manipulation of canvas elements.
- **Custom Typography**: Utilizes bold Google Fonts (Titan One, Inter) to achieve a heavy, meme-style look.
- **Drawing Mode**: Integrated freehand marker tool to draw or write custom messages.
- **Templates & Shapes**: Quickly drop in pre-designed templates (like a smiley face or pixel glasses) or basic geometric shapes.
- **Image Upload**: Add custom images directly onto the canvas.
- **High-Quality Export**: Download your finished sticker designs as high-resolution PNGs.
- **Vanilla CSS Architecture**: The entire design system is built without heavy UI frameworks (like Tailwind), utilizing a custom CSS variables structure to maintain the strict artistic style.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **UI Library**: React
- **Canvas Engine**: Fabric.js
- **Icons**: Lucide React
- **Styling**: Vanilla CSS

## Getting Started

First, make sure you have Node.js installed, then install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. The application will automatically reload if you change any of the source files.

## Project Structure

- `src/components/StickerEditor.tsx`: The core Fabric.js interactive canvas and toolbar logic.
- `src/components/Hero.tsx`: The landing page animated hero section.
- `src/components/Navbar.tsx`: The primary navigation and branding header.
- `src/app/globals.css`: The root design system containing all the custom styling tokens, animations, and component classes.
- `src/app/page.tsx`: The main assembly page pulling all components together.

## License

This project is open-source and available under the MIT License.
