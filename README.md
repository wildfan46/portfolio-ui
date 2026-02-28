# Portfolio UI

![CI/CD](https://github.com/wildfan46/portfolio-ui/actions/workflows/deploy.yml/badge.svg)](https://github.com/wildfan46/portfolio-ui/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This is a sleek dashboard-style interface showcasing projects, experience, proficiencies, and tasks.

## 🌐 Live Demo

Deployed on **[Fly.io](https://luing-ui.fly.dev)** with automatic HTTPS and always-on availability.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Development](#development)
- [Building & Deployment](#building--deployment)
- [Architecture](#architecture)
- [Components](#components)
- [Data Models](#data-models)
- [Contributing](#contributing)

## ✨ Features

- **Responsive Design**: Mobile-first approach with full responsive support from mobile to desktop
- **Dark Theme**: Modern dark UI with carefully chosen color palette
- **Interactive Widgets**: 
  - Featured Projects with live GitHub links
  - Work Experience timeline
  - Technical Proficiencies
  - Task integration with Todoist
- **Performance**: Optimized with Vite for lightning-fast builds and dev server
- **Type Safe**: Full TypeScript support for reliability
- **Code Quality**: ESLint configuration for code consistency
- **Containerized**: Docker support for easy deployment

## 🛠 Tech Stack

### Core
- **React 19.2** - UI library
- **TypeScript 5.9** - Type-safe JavaScript
- **Vite 7.3** - Next-generation frontend build tool
- **Tailwind CSS 4.1** - Utility-first CSS framework

### UI & Icons
- **Lucide React** - Modern icon library

### Styling
- **Tailwind CSS Vite Plugin** - Seamless Tailwind integration
- **PostCSS** - CSS transformations
- **Autoprefixer** - Vendor prefix automation

### Development Tools
- **ESLint 9.39** - Code linting
- **TypeScript ESLint** - TypeScript linting
- **Vite React Plugin** - React Fast Refresh support

### Deployment
- **Docker** - Containerization
- **Fly.io** - Cloud deployment platform
- **Node.js 25.6** - Runtime environment

## 📁 Project Structure

```
portfolio-ui/
├── src/
│   ├── components/
│   │   ├── sidebar/
│   │   │   └── Sidebar.tsx           # Profile sidebar component
│   │   └── widgets/
│   │       ├── ExperienceWidget.tsx  # Work experience display
│   │       ├── ProficiencyWidget.tsx # Technical skills display
│   │       ├── ProjectsWidget.tsx    # Featured projects showcase
│   │       └── TaskWidget.tsx        # Task/todo integration
│   ├── data/
│   │   ├── experience.tsx            # Experience data
│   │   └── project.tsx               # Projects data
│   ├── App.tsx                       # Main application component
│   ├── App.css                       # Application styles
│   ├── main.tsx                      # Entry point
│   ├── index.css                     # Global styles
│   └── types.tsx                     # TypeScript type definitions
├── public/
│   ├── AL.png                        # Profile image
│   └── wedding-pic.jpg               # Additional image
├── Dockerfile                        # Docker configuration
├── fly.toml                          # Fly.io configuration
├── vite.config.ts                    # Vite configuration
├── tsconfig.json                     # TypeScript configuration
├── eslint.config.js                  # ESLint configuration
├── package.json                      # Project dependencies
└── index.html                        # HTML entry point
```

## 🚀 Installation

### Prerequisites
- Node.js 18.0 or higher
- npm or yarn package manager

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/wildfan46/portfolio-ui.git
   cd portfolio-ui
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`

## 💻 Development

### Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint to check code quality
npm lint
```

### Development Workflow

1. The dev server runs on `http://localhost:5173` with Vite's fast refresh
2. TypeScript compilation happens automatically
3. Tailwind CSS is processed in real-time
4. Changes are reflected instantly in the browser

### Code Style

This project uses ESLint for code quality. Run the linter with:
```bash
npm run lint
```

## 🏗 Building & Deployment

### Local Build

```bash
npm run build
```

This creates a production-optimized build in the `dist/` directory.

### Deployment on Fly.io

The project is configured to deploy on Fly.io using the provided `Dockerfile` and `fly.toml` configuration.

**Deployment Steps:**

1. Install Fly CLI: https://fly.io/docs/hands-on/install-flyctl/
2. Deploy the application:
   ```bash
   flyctl deploy
   ```

**Fly.io Configuration:**
- **App Name**: `luing-ui`
- **Primary Region**: `ord` (Chicago)
- **Instance Size**: 1GB memory, 1 shared CPU
- **Auto-scaling**: Enabled (0-∞ machines)
- **HTTPS**: Enforced
- **Port**: 80 (internal), 443 (public)

### Docker

Build and run locally with Docker:

```bash
# Build image
docker build -t portfolio-ui .

# Run container
docker run -p 80:80 portfolio-ui
```

Access at `http://localhost`

## 🏛 Architecture

### Layout System

The application uses a responsive grid layout:
- **Desktop (lg)**: 12-column grid
  - Left Sidebar: 3 columns
  - Main Dashboard: 9 columns (2x2 grid of widgets)
- **Tablet (md)**: 2-column layout for widgets
- **Mobile**: Single column (stacked)

### Component Hierarchy

```
App
├── Sidebar (Profile)
└── Main Dashboard
    ├── ProficiencyWidget
    ├── TaskWidget
    ├── ProjectsWidget
    └── ExperienceWidget
```

## 📦 Components

### Sidebar
Displays profile information and navigation. Located in `src/components/sidebar/Sidebar.tsx`.

### ProjectsWidget
Showcases featured projects with:
- Project title (clickable GitHub link)
- Description
- Technology stack
- Project type classification

Data source: `src/data/project.tsx`

### ExperienceWidget
Displays work experience with:
- Company and location
- Job titles and team information
- Date ranges
- Impact statements
- Relevant tags

Data source: `src/data/experience.tsx`

### ProficiencyWidget
Shows technical skills and proficiencies.

### TaskWidget
Integrates with task management system (Todoist).

## 📝 Data Models

### Project Interface

```typescript
interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  type: 'Full Stack' | 'Backend' | 'Automation' | 'Front End';
}
```

### Experience Interface

```typescript
interface Experience {
  company: string;
  location: string;
  roles: Role[];
}

interface Role {
  title: string;
  team: string;
  date: string;
  impact: string;
  tags: string[];
}
```

## 📊 Featured Projects

The portfolio showcases the following projects:

1. **Weather-Driven Task Automator**
   - Automation using AWS Lambda and Pirate Weather API
   - [GitHub Repository](https://github.com/wildfan46/task-checker)

2. **Portfolio Website (This Project)**
   - Built with React, TypeScript, and Tailwind CSS
   - [GitHub Repository](https://github.com/wildfan46/portfolio-ui)

3. **Portfolio Website BFF (Backend For Frontend)**
   - RESTful API with Python and AWS Lambda
   - [GitHub Repository](https://github.com/wildfan46/portfolio-ui-bff)

4. **Discord Count Bot**
   - Discord bot for activity tracking and statistics
   - [GitHub Repository](https://github.com/wildfan46/discord-count-bot)

## 🔧 Configuration Files

### TypeScript (`tsconfig.json`)
- Configured for optimal React development
- Supports both app and node configurations

### Vite (`vite.config.ts`)
- React plugin for JSX transformation
- Tailwind CSS Vite plugin for CSS processing

### Tailwind (`tailwind.config.ts`)
- Custom dark theme
- Extended with Tailwind Vite plugin

### ESLint (`.eslintrc.js`)
- Enforces code quality standards
- React hooks linting
- React refresh plugin support

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Austin Luing**

- Portfolio: https://luing-ui.fly.dev
- GitHub: [@wildfan46](https://github.com/wildfan46)

## 🙏 Acknowledgments

- Built with [React](https://react.dev)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Icons from [Lucide React](https://lucide.dev)
- Deployed on [Fly.io](https://fly.io)
- Built with [Vite](https://vite.dev)

---

**Last Updated**: February 2026
```
