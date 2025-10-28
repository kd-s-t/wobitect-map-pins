<div align="center"> 
    <img src="https://raw.githubusercontent.com/kd-s-t/wobletech-map-pins/refs/heads/main/public/githubdecor.jpg" width="100%" /> 
</div>

# Map Pin Board

A modern, interactive web application for managing geographical pins on a map. Built with React, TypeScript, and TailwindCSS, featuring real-time geocoding and smooth animations.

<div align="center"> 
	<img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white" /> 
	<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" /> 
	<img src="https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" /> 
	<img src="https://img.shields.io/badge/React%20Leaflet-199900?style=for-the-badge&logo=leaflet&logoColor=white" /> 
	<img src="https://img.shields.io/badge/Zustand-FF6B6B?style=for-the-badge&logo=zustand&logoColor=white" /> 
	<img src="https://img.shields.io/badge/Framer%20Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" /> 
	<img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" /> 
</div>

### Features
- **Interactive Map**: Click anywhere on the map to drop a pin
- **Real-time Geocoding**: Automatic address lookup using OpenStreetMap Nominatim API
- **Pin Management**: View, delete, and organize pins in a dynamic list
- **Persistent Storage**: All pins are saved to localStorage
- **Responsive Design**: Clean, modern UI that works across devices
- **Draggable Pins**: Move pins by dragging them on the map
- **Hover Tooltips**: Hover over list items to see tooltips on corresponding map pins
- **Smooth Animations**: Elegant transitions for pin drops, deletions, and list updates


## Getting Started

### Installation
```bash
nvm use
nvm install
npm install
npm run dev
```

### Login Credentials
- **Email**: `kendantinio@gmail.com`
- **Password**: `Wobitect2024!@#`  
Open [http://localhost:5173](http://localhost:5173) in your browser
Open [https://wobitect-map-pins.vercel.app/login](https://wobitect-map-pins.vercel.app/login) in your browser

## Usage

### Adding Pins
1. Click anywhere on the map to drop a pin
2. The pin will automatically fetch the address using reverse geocoding
3. The pin appears in the list on the left panel

## Project Structure

```
src/
├── libs/                # External library integrations
│   ├── openstreetmap/   # Geocoding API
│   └── zustand/         # State management
├── modules/             # Feature modules
│   ├── login/           # Authentication
│   └── pin/             # Pin management
└── shared/              # Shared utilities and components
```


<div align="center">
Built with ❤️ for the Wobitect assessment
</div>

**Author:** @kd-s-t  