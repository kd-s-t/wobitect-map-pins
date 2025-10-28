# Map Pin Board

A modern, interactive web application for managing geographical pins on a map. Built with React, TypeScript, and TailwindCSS, featuring real-time geocoding and smooth animations.

## Features

### Core Functionality
- **Interactive Map**: Click anywhere on the map to drop a pin
- **Real-time Geocoding**: Automatic address lookup using OpenStreetMap Nominatim API
- **Pin Management**: View, delete, and organize pins in a dynamic list
- **Persistent Storage**: All pins are saved to localStorage
- **Responsive Design**: Clean, modern UI that works across devices

### Advanced Features
- **Draggable Pins**: Move pins by dragging them on the map
- **Hover Tooltips**: Hover over list items to see tooltips on corresponding map pins
- **Smooth Animations**: Elegant transitions for pin drops, deletions, and list updates
- **Custom Pin Design**: Professional map pin icons with custom SVG
- **Live Synchronization**: List and map stay perfectly synchronized

## Tech Stack
- **Frontend**: React 18 + TypeScript
- **Styling**: TailwindCSS
- **Mapping**: React Leaflet + Leaflet
- **State Management**: Zustand
- **Geocoding**: OpenStreetMap Nominatim API
- **Animations**: Framer Motion
- **Build Tool**: Vite

## Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd map-pin-board
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Usage

### Adding Pins
1. Click anywhere on the map to drop a pin
2. The pin will automatically fetch the address using reverse geocoding
3. The pin appears in the list on the left panel

### Managing Pins
- **View Details**: Hover over list items to see tooltips on the map
- **Move Pins**: Drag pins on the map to new locations
- **Delete Pins**: Click the red trash icon to remove pins
- **Persistent Storage**: All changes are automatically saved

### Interface
- **Map View**: Interactive map showing all pins
- **Pin List**: Scrollable list of all pins with coordinates and addresses
- **Header**: Clean navigation with app branding

## Project Structure

```
src/
├── components/           # Shared UI components
├── libs/                # External library integrations
│   ├── openstreetmap/   # Geocoding API
│   └── zustand/         # State management
├── modules/             # Feature modules
│   ├── login/           # Authentication
│   └── pin/            # Pin management
└── shared/              # Shared utilities and components
```

## API Integration

The app integrates with OpenStreetMap's Nominatim API for reverse geocoding:
- **Endpoint**: `https://nominatim.openstreetmap.org/reverse`
- **Purpose**: Convert coordinates to human-readable addresses
- **Rate Limiting**: Respects API guidelines with proper error handling

## State Management

Uses Zustand for lightweight, efficient state management:
- **Pin Store**: Manages pin data, CRUD operations, and localStorage persistence
- **Type Safety**: Full TypeScript support with proper interfaces
- **DevTools**: Development mode includes Redux DevTools integration

## Styling & UI

Built with TailwindCSS for rapid development and consistent design:
- **Responsive Design**: Mobile-first approach
- **Custom Components**: Reusable Button, Input, Tooltip components
- **Animations**: Smooth transitions and micro-interactions
- **Accessibility**: Proper ARIA labels and keyboard navigation

## Performance

- **Bundle Size**: Optimized build (~467KB JS, ~16KB CSS)
- **Code Splitting**: Efficient module loading
- **Lazy Loading**: Components loaded on demand
- **Memory Management**: Proper cleanup of event listeners and timers

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Demo

[Live Demo](https://your-demo-url.com) - *Coming soon*

## Screenshots

*Add screenshots of the application in action*

---

Built with ❤️ for the Wobitect assessment
