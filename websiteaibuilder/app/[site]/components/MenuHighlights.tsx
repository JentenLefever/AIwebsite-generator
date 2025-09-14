'use client';

import React, { useState } from 'react';

interface MenuItem {
  name: string;
  description: string;
  image?: string;
  alt?: string;
  price?: string;
}

interface MenuHighlightsProps {
  data: MenuItem[];
}

// Stock burger images from Unsplash
const stockBurgers: MenuItem[] = [
  {
    name: "Classic Beef Burger",
    description: "Onze signature burger met verse beef, sla, tomaat, ui en onze speciale saus",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=400&fit=crop&q=80",
    alt: "Classic Beef Burger",
    price: "€12.50"
  },
  {
    name: "Bacon Deluxe",
    description: "Knapperige bacon, cheddar kaas, sla, tomaat en onze huisgemaakte BBQ saus",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&h=400&fit=crop&q=80",
    alt: "Bacon Deluxe Burger",
    price: "€14.90"
  },
  {
    name: "Mushroom Swiss",
    description: "Gegrilde champignons, Swiss kaas, rucola en truffel mayo",
    image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=500&h=400&fit=crop&q=80",
    alt: "Mushroom Swiss Burger",
    price: "€13.75"
  },
  {
    name: "Spicy Chicken",
    description: "Gekruide kipfilet, jalapeños, pepper jack kaas en spicy mayo",
    image: "https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?w=500&h=400&fit=crop&q=80",
    alt: "Spicy Chicken Burger",
    price: "€11.90"
  },
  {
    name: "Veggie Supreme",
    description: "Huisgemaakte veggie patty, avocado, hummus, sla en tomaat",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&h=400&fit=crop&q=80",
    alt: "Veggie Supreme Burger",
    price: "€10.50"
  },
  {
    name: "BBQ Pulled Pork",
    description: "Langzaam gegaarde pulled pork, coleslaw en BBQ saus",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=400&fit=crop&q=80",
    alt: "BBQ Pulled Pork Burger",
    price: "€13.25"
  },
  {
    name: "Double Cheese",
    description: "Dubbele beef patty, dubbele cheddar, sla, tomaat en speciale saus",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&h=400&fit=crop&q=80",
    alt: "Double Cheese Burger",
    price: "€15.50"
  },
  {
    name: "Fish & Chips Burger",
    description: "Gekruide visfilet, sla, tomaat, augurk en tartare saus",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&h=400&fit=crop&q=80",
    alt: "Fish & Chips Burger",
    price: "€12.90"
  }
];

export default function MenuHighlights({ data }: MenuHighlightsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);

  // Update items per view based on screen size
  const updateItemsPerView = () => {
    if (window.innerWidth < 768) {
      setItemsPerView(1); // Mobile: 1 item
    } else if (window.innerWidth < 1024) {
      setItemsPerView(2); // Tablet: 2 items
    } else {
      setItemsPerView(4); // Desktop: 4 items
    }
  };

  // Set initial items per view and add resize listener
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      updateItemsPerView();
      window.addEventListener('resize', updateItemsPerView);
      return () => window.removeEventListener('resize', updateItemsPerView);
    }
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % stockBurgers.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + stockBurgers.length) % stockBurgers.length);
  };

  return (
    <section id="burgers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-sink">
            (M)eat onze burgers
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Voor onze burgers gebruiken we de meest kwaliteitsvolle ingrediënten: vers vlees, recht van bij een lokale boerderij en dagverse, handgesneden groenten. Of je nu houdt van een juicy burger of liefhebber bent van de veggie variant, we hebben verschillende opties.
          </p>
        </div>
        
        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg"
            aria-label="Vorige burgers"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg"
            aria-label="Volgende burgers"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carousel Content */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {/* Duplicate items for infinite scroll */}
              {[...stockBurgers, ...stockBurgers].map((item, index) => (
                <div key={index} className="w-full md:w-1/2 lg:w-1/4 flex-shrink-0 px-4">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.alt}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3 text-gray-900">
                        {item.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
