# Portfolio Website - Dana Saadeh

A modern, responsive portfolio website showcasing my work as a Front-End Developer. Built with React, TypeScript, and modern web technologies to create an engaging and interactive user experience.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works seamlessly across all devices
- **3D Interactive Elements**: Engaging 3D components built with Three.js and React Three Fiber
- **Smooth Animations**: Fluid animations powered by Framer Motion
- **Dark/Light Theme**: Toggle between dark and light themes with persistent preference
- **Modern UI Components**: Built with shadcn/ui and Radix UI primitives
- **Performance Optimized**: Fast loading times and smooth interactions
- **SEO Friendly**: Proper meta tags and structured content

## 🚀 Tech Stack

### Core
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Radix UI** - Unstyled, accessible component primitives
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

### 3D & Graphics
- **Three.js** - 3D graphics library
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for React Three Fiber

### Other Libraries
- **React Query** - Data fetching and caching
- **React Hook Form** - Form management
- **Zod** - Schema validation
- **next-themes** - Theme management

## 📦 Installation

### Prerequisites
- Node.js (v18 or higher recommended)
- npm, yarn, or bun

### Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd my_portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080`

## 🛠️ Available Scripts

- `npm run dev` - Start development server on port 8080
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## 📁 Project Structure

```
my_portfolio/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images and media files
│   ├── components/     # React components
│   │   ├── sections/   # Page sections (Hero, About, Projects, etc.)
│   │   └── ui/         # Reusable UI components (shadcn/ui)
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   ├── pages/          # Page components
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Application entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── vite.config.ts      # Vite configuration
├── tailwind.config.ts  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## 🎨 Sections

- **Hero** - Introduction and main call-to-action
- **About** - Personal information and background
- **Skills** - Technical skills and expertise
- **Experience** - Work experience and career timeline
- **Projects** - Showcase of featured projects
- **Contact** - Contact form and social links

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

The `dist` folder will contain the production-ready files.

### Deploy to Vercel/Netlify

This project can be easily deployed to platforms like:
- **Vercel**: Connect your GitHub repo and deploy automatically
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions or deploy manually

## 📝 Customization

1. **Update personal information**: Edit the content in `src/components/sections/`
2. **Modify theme colors**: Update `tailwind.config.ts`
3. **Change projects**: Update project data in the Projects component
4. **Add/remove sections**: Modify `src/pages/Index.tsx`

## 🔧 Configuration

- **Port**: Default is 8080 (configured in `vite.config.ts`)
- **Path aliases**: `@/` points to `src/` directory
- **TypeScript**: Strict mode enabled
- **ESLint**: Configured for React and TypeScript

## 📄 License

This project is private and personal.

## 👤 Author

**Dana Saadeh**
- Front-End Developer specializing in React, TypeScript, and modern web technologies

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful component library
- [Radix UI](https://www.radix-ui.com/) for accessible primitives
- [Three.js](https://threejs.org/) for 3D graphics capabilities
- [Framer Motion](https://www.framer.com/motion/) for smooth animations

---

Built with ❤️ using React, TypeScript, and modern web technologies.
