# byu-ccdc.github.io

Forked from [AlfaDev Astro Starter](https://github.com/diego-alfadev/alfadev-astro-starter)

## Quick Start

1. **Clone the repository:**

   ```bash
   git clone https://github.com/diego-alfadev/alfadev-astro.git
   cd alfadev-astro
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
    npm run dev
    ```

4. **Open your browser and visit [http://localhost:4321](http://localhost:4321)**

5. **Start customizing your site!**

## Documentation
### Project Structure

The project structure is designed to be easy to understand and navigate. Here's a quick overview of the directories and files you'll find in this project:

```bash
/
├── public/             # Static assets (images, icons, etc.)
├── src/
│   └── config/         # Site configuration
│       └── config.json # Top-level site configuration, like title, description, metas, some astro settings, etc.
│       └── menu.json   # Configure the site visible navigation in header and footer
│       └── social.json # Social links and icons
│       └── theme.json  # Your theme names and font settings (used in tailwind.config.js, related to styles/theme.css)
│   ├── content/        # Markdown and mdx files for dynamic content following the Astro conventions (see below)
│   ├── components/     # Reusable components
│       └── react/      # React components
│   ├── layouts/        # Astro Reutilizable Layout components
│   ├── pages/          # Site pages (follows Astro conventions)
│   ├── styles/         # Global and component-specific styles
├── astro.config.mjs    # Astro configuration
├── tailwind.config.js  # TailwindCSS configuration
├── package.json        # No need to explain
└── [editor cfg files]  # Project dependencies and scripts
```

### Built-in Components

The starter comes with a set of components that you can use to build your site basic structure.
Ideally, you should use them as a starting point and modify them to fit your needs.

There's only a few of them that are considered **core and generic**:

```bash
/
├── components/
│   └── Logo.astro      # The site logo. Reused across the site, every page has it.
│   └── Section.astro   # A section with a title, content and an optional image. Is a standard content block that every page has.
└── └── PageHeader.astro # Used to display the page title and description, intended to bind with the page `mdx` data.

```

Every other component is considered **specific** and is used in the demo site. You can use them as inspiration or modify them to fit your needs.

### Theme Customization

The starter comes with a default theme that you can customize to fit your needs.
There's 3 files involved in the theme customization:

```bash
/
├── src/
│   └── styles/
│       └── theme.css    # The main theme file, where you can define your colors.
│   └── config/
│       └── theme.json    # A JSON file used for theme domain names and font settings. Define your theme color names and font settings here.
├── tailwind.config.js   # The tailwind configuration file, you know what it is, the other two files are used here.
```
 
## Astro Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
