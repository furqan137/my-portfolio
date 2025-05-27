# Furqan Zafar's Portfolio Website

A professional portfolio website built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- Modern and responsive design
- Interactive UI with smooth animations
- Project showcase with filtering
- Contact form
- Dark/light mode toggle
- Built with Next.js, Tailwind CSS, and Framer Motion

## Tech Stack

- **Framework**: Next.js 13 (App Router)
- **Styling**: Tailwind CSS, Shadcn UI
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form with Zod validation
- **Icons**: Lucide React

## Getting Started

1. Clone the repository

```bash
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website
```

2. Install dependencies

```bash
npm install
```

3. Run the development server

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
my-portfolio/
├── app/                      # Next.js app directory
├── components/               # Reusable UI components
├── data/                     # Project and skills data
├── lib/                      # Utility functions
├── public/                   # Static assets
├── sections/                 # Page sections (hero, about, etc.)
```

## Deployment

This site is set up to be deployed on Vercel:

1. Push your code to GitHub
2. Import the repository in Vercel
3. Deploy

## Customization

- Edit `data/projects.ts` to update project information
- Modify sections in the `sections/` directory to update content
- Adjust styling by modifying Tailwind classes or updating `globals.css`

## License

MIT