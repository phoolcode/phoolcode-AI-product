import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface JourneyPhoto {
  url: string;
  caption: string;
}

interface JourneyStop {
  name: string;
  location: string;
  coordinates: [number, number];
  years: string;
  photos: JourneyPhoto[];
}

const WorldMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [selectedStop, setSelectedStop] = useState<JourneyStop | null>(null);
  const apiKey = 'pk.eyJ1IjoiZmFsZ3VuaW11dGhhIiwiYSI6ImNtaHdvbzQ2MjAxeDIycXB0MnRsZXdjNGYifQ.iv6Pqwp6i2rrO5AA0zMR2w';

  const journeyStops: JourneyStop[] = [
    {
      name: "India",
      location: "Mumbai",
      coordinates: [72.8777, 19.0760],
      years: "2004 - 2010",
      photos: [
        {
          url: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da",
          caption: "Growing up in Mumbai, surrounded by vibrant culture and endless energy."
        },
        {
          url: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
          caption: "Early school days where curiosity about technology first sparked."
        }
      ]
    },
    {
      name: "USA",
      location: "San Francisco",
      coordinates: [-122.4194, 37.7749],
      years: "2015 - 2020",
      photos: [
        {
          url: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000",
          caption: "Diving deep into Machine Learning and AI research."
        },
        {
          url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
          caption: "Collaborating with brilliant minds on cutting-edge projects."
        }
      ]
    },
    {
      name: "UK",
      location: "London",
      coordinates: [-0.1278, 51.5074],
      years: "2020 - 2023",
      photos: [
        {
          url: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad",
          caption: "The pivot moment - discovering my passion for product management."
        },
        {
          url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
          caption: "Learning to bridge the gap between technical excellence and user needs."
        }
      ]
    },
    {
      name: "Germany",
      location: "Berlin",
      coordinates: [13.4050, 52.5200],
      years: "2023 - Present",
      photos: [
        {
          url: "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
          caption: "Current chapter: Building AI products that make a difference."
        },
        {
          url: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf",
          caption: "Combining technical expertise with strategic product thinking."
        }
      ]
    }
  ];

  useEffect(() => {
    if (!mapContainer.current) return;

    mapboxgl.accessToken = apiKey;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      projection: { name: 'globe' },
      zoom: 1.5,
      center: [20, 20],
      pitch: 0,
    });

    // Enable smooth globe rotation
    let userInteracting = false;
    const secondsPerRevolution = 120;
    
    function spinGlobe() {
      if (!map.current || userInteracting) return;
      const zoom = map.current.getZoom();
      if (zoom < 3) {
        const center = map.current.getCenter();
        center.lng -= 360 / secondsPerRevolution / 60;
        map.current.easeTo({ center, duration: 1000, easing: (n) => n });
      }
    }

    map.current.on('mousedown', () => { userInteracting = true; });
    map.current.on('dragstart', () => { userInteracting = true; });
    map.current.on('mouseup', () => { userInteracting = false; spinGlobe(); });
    map.current.on('dragend', () => { userInteracting = false; spinGlobe(); });
    map.current.on('moveend', spinGlobe);

    map.current.on('style.load', () => {
      map.current?.setFog({
        color: 'rgb(30, 30, 40)',
        'high-color': 'rgb(10, 10, 20)',
        'horizon-blend': 0.1,
      });

      // Add markers for each journey stop
      journeyStops.forEach((stop, index) => {
        const el = document.createElement('div');
        el.className = 'journey-marker';
        el.style.width = '12px';
        el.style.height = '12px';
        el.style.backgroundColor = '#ef4444';
        el.style.border = '2px solid rgba(255, 255, 255, 0.8)';
        el.style.borderRadius = '2px';
        el.style.cursor = 'pointer';
        el.style.transition = 'all 0.3s ease';
        
        el.addEventListener('mouseenter', () => {
          el.style.transform = 'scale(1.5)';
          el.style.boxShadow = '0 0 20px rgba(239, 68, 68, 0.8)';
        });
        
        el.addEventListener('mouseleave', () => {
          el.style.transform = 'scale(1)';
          el.style.boxShadow = 'none';
        });
        
        const marker = new mapboxgl.Marker(el)
          .setLngLat(stop.coordinates)
          .addTo(map.current!);

        el.addEventListener('click', () => {
          setSelectedStop(stop);
          userInteracting = true;
          map.current?.flyTo({
            center: stop.coordinates,
            zoom: 4,
            duration: 2000
          });
          setTimeout(() => { userInteracting = false; }, 2000);
        });
      });

      spinGlobe();
    });

    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <>
      <div className="relative w-full h-[700px] rounded-lg overflow-hidden shadow-2xl">
        <div ref={mapContainer} className="absolute inset-0" />
        <div className="absolute top-6 left-1/2 -translate-x-1/2 text-center">
          <p className="text-sm text-muted-foreground/80 bg-background/20 backdrop-blur-sm px-4 py-2 rounded-full">
            Click on the points to learn about me from my journey across the globe. Each location tells a whole new story.
          </p>
        </div>
      </div>

      <Dialog open={!!selectedStop} onOpenChange={() => setSelectedStop(null)}>
        <DialogContent className="max-w-2xl p-0 bg-background border-0 overflow-hidden">
          <button 
            onClick={() => setSelectedStop(null)}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="p-8">
            <div className="mb-6">
              <h2 className="text-4xl font-bold mb-2">{selectedStop?.name}</h2>
              <p className="text-lg text-muted-foreground">{selectedStop?.years}</p>
            </div>

            <Carousel className="w-full">
              <CarouselContent>
                {selectedStop?.photos.map((photo, index) => (
                  <CarouselItem key={index}>
                    <div className="space-y-4">
                      <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted">
                        <img 
                          src={photo.url} 
                          alt={`${selectedStop.name} - ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-base leading-relaxed text-muted-foreground px-2">
                        {photo.caption}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex items-center justify-center gap-2 mt-4">
                <CarouselPrevious className="static translate-y-0" />
                <span className="text-sm text-muted-foreground">
                  {selectedStop?.photos.length} photos
                </span>
                <CarouselNext className="static translate-y-0" />
              </div>
            </Carousel>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default WorldMap;
