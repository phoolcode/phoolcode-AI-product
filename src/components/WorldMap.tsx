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
      name: "Pune",
      location: "Pune, India",
      coordinates: [73.8567, 18.5204],
      years: "Early Years",
      photos: [
        {
          url: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da",
          caption: "Rotaract Club Revival: Became the 7th president when it had 10 members eyeing the exit. Built it back to 35 people who actually showed up. We fed 35 nomadic families during lockdown by running online scavenger hunts on WhatsApp. 15 days, 15 games, and somehow it worked."
        },
        {
          url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
          caption: "Founded the Economics and Finance Club at Cummins—a women's engineering college that had zero finance education. Started with fake rupees, got Bloomberg people to talk about student budgeting. 200 people joined. Had to interview 50 people for board positions."
        },
        {
          url: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca",
          caption: "Certified Animal Person: Lifelong vegetarian, all-animal lover—yes, including frogs and reptiles. If money weren't real, I'd run an animal sanctuary and biodiversity center full-time. For now, I'm just the person who rescues insects from pools."
        },
        {
          url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
          caption: "The Era of Sucking at Everything Equally: Pune gave me time to try every hobby—dancing, swimming, singing, writing, cooking, crocheting, thrifting. Didn't master anything. Had the time of my life anyway."
        }
      ]
    },
    {
      name: "Delhi",
      location: "Delhi, India",
      coordinates: [77.1025, 28.7041],
      years: "Innovation Era",
      photos: [
        {
          url: "https://images.unsplash.com/photo-1587474260584-136574528ed5",
          caption: "The Salad Vending Machine Moment: Won the Avery Dennison Invent Scholarship for designing a vending machine that makes fresh vegetable salads from scratch. Got flown to Delhi for the ceremony, then somehow ended up on a panel as a 'trailblazer of innovation.' Pune's Hatkar Punekar radio show had me on to talk about it."
        },
        {
          url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
          caption: "HPAIR: Attended Harvard Project for Asian and International Relations in Delhi on full scholarship. Made friends with people so smart it was genuinely stupid. The kind of people who casually know three languages and have opinions about monetary policy at brunch."
        }
      ]
    },
    {
      name: "Bangalore",
      location: "Bangalore, India",
      coordinates: [77.5946, 12.9716],
      years: "ML & Tech Era",
      photos: [
        {
          url: "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
          caption: "Machine Learning Engineer at athenahealth in Richmond Town—best part of Bangalore, fight me. Dove deep into NLP: NER, classification, text clustering, became a Snowflake and PySpark person. Made model parallelization slightly less terrifying for the team."
        },
        {
          url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
          caption: "Projects Era: Built everything from Hyperspectral Image Classification with 3D CNNs to Indian Sign Language Recognition. Created a Personal Portfolio Manager AI, Smart Insulin Pump System, Mini Mahilo agent manager, and currently building Caterpillar MCP Server using Llama."
        },
        {
          url: "https://images.unsplash.com/photo-1511578314322-379afb476865",
          caption: "The Product Ideas: Amazon Subscribe & Save Redesign, GPT Text Scanner Chrome Extension, Math Equation Mood Board, AI Teacher with Actual Personality, System Design Whiteboard Tool. Some shipped, some still cooking."
        },
        {
          url: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6",
          caption: "The City That Ruined Me: Explored Lahe Lahe, Watson's, Old Bangalore, every startup café. Blue Tokai became a personality trait. Lived alone but was never really alone—this city has people everywhere. I have a whole recommendation list. I envision never leaving."
        },
        {
          url: "https://images.unsplash.com/photo-1488646953014-85cb44e25828",
          caption: "Solo Travel Era: Learned to scuba dive. Explored Thailand, Karnataka, Mumbai, the Golden Triangle. Did all the touristy things without irony because touristy things are fun. Traveling solo taught me I'm decent company for myself."
        }
      ]
    },
    {
      name: "West Lafayette",
      location: "West Lafayette, USA",
      coordinates: [-86.9081, 40.4259],
      years: "Present",
      photos: [
        {
          url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
          caption: "Purdue: Voluntarily Choosing Hard Mode. Attending Purdue for Engineering Management because I genuinely wanted to get uncomfortable and do harder things. Studying technical product management, venture funding, pro bono consulting. Currently working with Caterpillar Inc."
        },
        {
          url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
          caption: "Consulting & Venture Funding: Project Manager at 180 Degrees Consulting, Associate in venture funding—analyzing real companies in real-time and deciding if they deserve money. Equal parts exhilarating and terrifying. Turns out evaluating other people's dreams is a weird responsibility."
        },
        {
          url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
          caption: "New Orleans for SWE: Attended the Society of Women Engineers conference in New Orleans. Cutest city I've ever seen. Would go back just for the architecture and beignets. The conference was great too, I guess."
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
    let markerHovered = false;
    const secondsPerRevolution = 120;
    
    function spinGlobe() {
      if (!map.current || userInteracting || markerHovered) return;
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
          markerHovered = true;
          el.style.transform = 'scale(1.5)';
          el.style.boxShadow = '0 0 20px rgba(239, 68, 68, 0.8)';
        });
        
        el.addEventListener('mouseleave', () => {
          markerHovered = false;
          el.style.transform = 'scale(1)';
          el.style.boxShadow = 'none';
          spinGlobe();
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
