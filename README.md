# MAC-OS —  (React + Vite)

This repository is a built with React and Vite. It includes a small macOS-like UI, a terminal-style interactive CLI, and utility components for displaying the current date/time.

Key goals:
- Showcase projects, skills and contact info in a unique interactive UI
- Provide a small, extensible CLI for visitors to explore the portfolio
- Keep the project lightweight using Vite for fast dev experience

## Features
- React + Vite (fast HMR and build)
- Interactive CLI window (powered by `react-console-emulator`)
- `DateTime` component that shows formatted date/time and updates every minute
- SCSS-based styling with a macOS-like window component

## Quick Start

Prerequisites: Node.js (16+ recommended) and npm

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build

npm run preview
```

## Project Structure (important files)
- `src/App.jsx` — App root
- `src/main.jsx` — Vite entry
- `src/components/windows/Cli.jsx` — Terminal CLI component and commands
- `src/components/DateTime.jsx` — Date/time display component
- `src/components/Nav.jsx` — Navigation bar
- `src/*.scss` and `src/components/*.scss` — Styling

## CLI Usage

Open the CLI window in the app and try commands such as:
- `help` — list available commands
- `about`, `projects`, `skills`, `contact`, `experience`, `education`, `resume` — portfolio content
- `echo <text>` — echoes text

You can customize the commands by editing `src/components/windows/Cli.jsx` and adding or changing command handlers.

## Date/Time Component

`DateTime.jsx` displays the current date and time in the format:

```
saturday feb 7 6:35 PM
```

It updates every minute and uses the `Intl.DateTimeFormat` API for localized formatting.

## Development notes
- The CLI uses `react-console-emulator`. If you add heavy commands (network, filesystem), be careful about blocking the UI.
- Keep CSS scoped per component to avoid global style collisions.

## Contributing
Feel free to open issues or submit PRs. For local development, follow the Quick Start steps above.

## License
This project is personal. Add a license file if you plan to share or publish the code.
