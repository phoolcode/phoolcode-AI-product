import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface JourneyStop {
  name: string;
  coordinates: [number, number];
  story: string;
  emoji: string;
}

const WorldMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [selectedStop, setSelectedStop] = useState<JourneyStop | null>(null);
  const [apiKey, setApiKey] = useState('');
  const [showApiInput, setShowApiInput] = useState(true);

  const journeyStops: JourneyStop[] = [
    {
      name: "Starting Point 🏠",
      coordinates: [-74.006, 40.7128], // New York example
      story: "Where my journey began! This is where I first discovered my passion for technology and problem-solving.",
      emoji: "🌟"
    },
    {
      name: "ML Adventures 🤖",
      coordinates: [-122.4194, 37.7749], // San Francisco example
      story: "Dove deep into Machine Learning here. Countless hours of training models, debugging, and breakthrough moments!",
      emoji: "🧠"
    },
    {
      name: "Product Pivot 🎯",
      coordinates: [0.1278, 51.5074], // London example
      story: "The turning point where I realized I wanted to bridge the gap between ML engineering and product management.",
      emoji: "💡"
    },
    {
      name: "Current Chapter 📍",
      coordinates: [2.3522, 48.8566], // Paris example
      story: "Right now, I'm working on becoming an AI Product Manager, combining technical expertise with strategic thinking!",
      emoji: "🚀"
    }
  ];

  useEffect(() => {
    if (!mapContainer.current || !apiKey) return;

    mapboxgl.accessToken = apiKey;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      projection: { name: 'globe' },
      zoom: 1.5,
      center: [0, 20],
    });

    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    map.current.on('style.load', () => {
      map.current?.setFog({
        color: 'rgb(255, 240, 250)',
        'high-color': 'rgb(200, 200, 255)',
        'horizon-blend': 0.2,
      });

      // Add markers for each journey stop
      journeyStops.forEach((stop) => {
        const el = document.createElement('div');
        el.className = 'journey-marker';
        el.innerHTML = stop.emoji;
        el.style.fontSize = '2rem';
        el.style.cursor = 'pointer';
        
        const marker = new mapboxgl.Marker(el)
          .setLngLat(stop.coordinates)
          .addTo(map.current!);

        el.addEventListener('click', () => {
          setSelectedStop(stop);
          map.current?.flyTo({
            center: stop.coordinates,
            zoom: 5,
            duration: 2000
          });
        });
      });
    });

    return () => {
      map.current?.remove();
    };
  }, [apiKey]);

  const handleApiKeySubmit = () => {
    if (apiKey.trim()) {
      setShowApiInput(false);
    }
  };

  if (showApiInput) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4 p-8 bg-card rounded-lg border-2 border-border">
        <h3 className="text-2xl font-bold text-primary">🗺️ Set Up Your World Map</h3>
        <p className="text-muted-foreground text-center max-w-md">
          To display the interactive map, please enter your Mapbox public token. 
          Get one free at <a href="https://mapbox.com" target="_blank" rel="noopener noreferrer" className="text-primary underline">mapbox.com</a>
        </p>
        <div className="flex gap-2 w-full max-w-md">
          <Input
            type="text"
            placeholder="pk.eyJ1..."
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="flex-1"
          />
          <Button variant="y2k" onClick={handleApiKeySubmit}>
            Load Map
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="relative w-full h-[600px] rounded-lg overflow-hidden border-4 border-primary shadow-2xl">
        <div ref={mapContainer} className="absolute inset-0" />
        <div className="absolute top-4 left-4 bg-card/90 backdrop-blur-sm p-4 rounded-lg border-2 border-border">
          <h3 className="font-bold text-primary mb-2">🌍 My Journey Map</h3>
          <p className="text-sm text-muted-foreground">Click on the emojis to explore!</p>
        </div>
      </div>

      <Dialog open={!!selectedStop} onOpenChange={() => setSelectedStop(null)}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl flex items-center gap-2">
              <span className="text-3xl">{selectedStop?.emoji}</span>
              {selectedStop?.name}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              {selectedStop?.story}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default WorldMap;
