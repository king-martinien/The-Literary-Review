# The Literary Review

A modern, elegant web application dedicated to literary content, featuring in-depth interviews, articles, and a curated reading experience. Built with Angular and Tailwind CSS.

![The Literary Review Preview](/src/assets/preview.png)

## Features

- **Modern & Responsive Design**: A fully responsive layout that works seamlessly on desktop, tablet, and mobile devices.
- **Dark Mode**: Built-in dark mode support with a toggle switch, respecting system preferences.
- **Internationalization (i18n)**: Multi-language support (English and French) with a language switcher.
- **Immersive Content**:
  - **Home**: Curated articles and featured content.
  - **Interviews**: In-depth conversations with authors and thinkers.
  - **About**: The story and mission behind the publication.
  - **Contact**: Easy way to get in touch.
- **Performance**: Optimized for speed with lazy loading and modern Angular best practices.

## Tech Stack

- **Framework**: [Angular](https://angular.dev/) (v19+)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v4)
- **Icons**: [Lucide Angular](https://lucide.dev/guide/packages/lucide-angular)
- **Language**: TypeScript
## Deployment

### Docker (Local)

Build the Docker image:
```bash
docker build -t demo-app .
```

Run the container:
```bash
docker run -p 8080:80 demo-app
```
Access the app at `http://localhost:8080`.

### Automated Deployment (CI/CD)

This project uses GitHub Actions to automatically deploy to a VPS when pushing to the `main` branch.

**Prerequisites:**
1.  A VPS with Docker installed.
2.  SSH access to the VPS.

**Setup:**
1.  Go to your GitHub Repository **Settings** > **Secrets and variables** > **Actions**.
2.  Add the following Repository Secrets:
    *   `VPS_HOST`: The IP address of your VPS.
    *   `VPS_USERNAME`: The SSH username (e.g., `root`).
    *   `VPS_SSH_KEY`: Your private SSH key.

**Workflow:**
1.  Push to `main`.
2.  GitHub Actions builds the Docker image and pushes it to GitHub Container Registry (GHCR).
3.  It then connects to your VPS, pulls the new image, and restarts the container.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/the-literary-review.git
   ```

2. Navigate to the project directory:
   ```bash
   cd angular-playground/demo-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Development Server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

```bash
npm start
# or
ng serve
```

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

```bash
npm run build
# or
ng build
```

## Project Structure

```
src/
├── app/
│   ├── core/           # Singleton services, guards, interceptors
│   ├── features/       # Feature modules (Home, About, Interviews, etc.)
│   ├── layout/         # Main layout components (Header, Footer)
│   └── shared/         # Shared components, pipes, directives
├── assets/             # Static assets (images, fonts, icons)
└── styles.css          # Global styles and Tailwind configuration
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
