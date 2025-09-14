'use client';

import React, { useState } from 'react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image: string;
  alt: string;
  rating?: number;
  date?: string;
}

interface TestimonialsProps {
  data: Testimonial[];
}

// Reviews data
const reviews: Testimonial[] = [
  {
    quote: "Onze gasten praten nog steeds over de burgers op ons trouwfeest! De Bolle Burger heeft ons huwelijk echt compleet gemaakt. Sarah en haar team waren professioneel, vriendelijk en de service was perfect. De burgers waren vers, smaakvol en er was voor iedereen wat wils. Zelfs onze vegetarische gasten waren enthousiast over de veggie opties. Absoluut een aanrader voor elke speciale gelegenheid!",
    author: "Sophie V.",
    role: "Huwelijk - 80 personen",
    image: "",
    alt: "Sophie, tevreden klant",
    rating: 5,
    date: "2 weken geleden"
  },
  {
    quote: "Snelle service en topkwaliteit. Ideaal voor ons bedrijfsevent van 150 personen. De foodtruck was perfect gepositioneerd en de organisatie was vlekkeloos. Onze werknemers waren dol op de verschillende burger opties en de All You Can Eat formule was perfect voor onze groep. De prijs-kwaliteit verhouding was uitstekend. Zeker voor herhaling vatbaar!",
    author: "Tom M.",
    role: "HR Manager - Tech bedrijf",
    image: "",
    alt: "Tom, HR Manager",
    rating: 5,
    date: "1 maand geleden"
  },
  {
    quote: "Beste festivalburger die ik ooit gegeten heb! We hadden De Bolle Burger op ons dorpsfeest en het was een enorm succes. De wachtrijen waren lang maar dat zegt genoeg over de kwaliteit. De burgers waren vers bereid, de frietjes knapperig en de sauzen heerlijk. Sarah en haar team werkten de hele dag door met een glimlach. Echt een aanrader voor elk festival!",
    author: "Jan D.",
    role: "Festivalganger - Dorpsfeest",
    image: "",
    alt: "Jan, festivalganger",
    rating: 5,
    date: "3 weken geleden"
  },
  {
    quote: "Geweldige foodtruck! De burgers zijn vers en smaakvol. Perfect voor onze verjaardag met 30 personen. We kozen voor de &apos;Betaal per burger&apos; formule en dat was ideaal voor onze gemengde groep. Sommigen aten 1 burger, anderen 3, en iedereen was tevreden. De service was vriendelijk en professioneel. De locatie was perfect en de setup was snel klaar.",
    author: "Lisa K.",
    role: "Privéfeest - 30 personen",
    image: "",
    alt: "Lisa, tevreden klant",
    rating: 5,
    date: "1 week geleden"
  },
  {
    quote: "Professionele service en heerlijke burgers. Onze werknemers waren er dol op! We organiseerden een team building event voor 200 personen en De Bolle Burger was de perfecte keuze. De All You Can Eat formule was ideaal en iedereen kon onbeperkt genieten. De organisatie was perfect en Sarah dacht mee over de beste setup voor onze locatie. Een echte aanrader voor bedrijfsevents!",
    author: "Mark R.",
    role: "Bedrijfsleider - 200 personen",
    image: "",
    alt: "Mark, bedrijfsleider",
    rating: 5,
    date: "2 maanden geleden"
  },
  {
    quote: "Fantastische ervaring! De foodtruck paste perfect bij ons festival. Echt een aanrader. We hadden 3 dagen lang De Bolle Burger op ons muziekfestival en het was een enorm succes. De burgers waren consistent lekker, de service snel en vriendelijk, en de prijzen eerlijk. Zelfs bij drukte hielden ze de kwaliteit hoog. Onze bezoekers vroegen al naar volgend jaar!",
    author: "Emma S.",
    role: "Festivalorganisator - 3 dagen",
    image: "",
    alt: "Emma, festivalorganisator",
    rating: 5,
    date: "1 maand geleden"
  },
  {
    quote: "Uitstekende service en heerlijk eten! We hadden De Bolle Burger voor onze bedrijfsborrel en het was een groot succes. De team was professioneel, de setup snel en de burgers waren vers en smaakvol. De All You Can Eat formule was perfect voor onze groep van 60 personen. Iedereen kon onbeperkt genieten en de feedback was overweldigend positief. Zeker voor herhaling vatbaar!",
    author: "Peter W.",
    role: "Bedrijfsborrel - 60 personen",
    image: "",
    alt: "Peter, bedrijfsleider",
    rating: 5,
    date: "2 weken geleden"
  },
  {
    quote: "Perfecte keuze voor ons familiefeest! We vierden de 50ste verjaardag van mijn vader met 40 familieleden en De Bolle Burger maakte het feest compleet. De service was vriendelijk en persoonlijk, de burgers heerlijk en er was voor iedereen wat wils. Zelfs de kinderen waren dol op de burgers. De prijs was eerlijk en de kwaliteit uitstekend. Een echte aanrader voor familiefeesten!",
    author: "Maria L.",
    role: "Familiefeest - 40 personen",
    image: "",
    alt: "Maria, familielid",
    rating: 5,
    date: "1 week geleden"
  }
];

export default function Testimonials({ data }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  // Update items per view based on screen size
  const updateItemsPerView = () => {
    if (window.innerWidth < 768) {
      setItemsPerView(1); // Mobile: 1 item
    } else if (window.innerWidth < 1024) {
      setItemsPerView(2); // Tablet: 2 items
    } else {
      setItemsPerView(3); // Desktop: 3 items
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
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-sink">
            Wat mensen over ons zeggen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lees wat onze klanten over ons zeggen
          </p>
        </div>
        
        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg"
            aria-label="Vorige reviews"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg"
            aria-label="Volgende reviews"
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
              {reviews.map((review, index) => (
                <div key={index} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                  <div className="bg-white rounded-xl p-6 shadow-lg h-full">
                    {/* Review Header */}
                    <div className="flex items-center mb-4">
                      <div>
                        {review.rating && (
                          <div className="flex items-center">
                            {renderStars(review.rating)}
                          </div>
                        )}
                        {review.date && (
                          <p className="text-sm text-gray-500">{review.date}</p>
                        )}
                      </div>
                    </div>

                    {/* Review Content */}
                    <div className="mb-4">
                      <p className="text-gray-700 leading-relaxed mb-4">
                        &ldquo;{review.quote}&rdquo;
                      </p>
                    </div>

                    {/* Author */}
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-red-600 font-bold text-sm">
                          {review.author.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{review.author}</p>
                        <p className="text-sm text-gray-500">{review.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: reviews.length }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex ? 'bg-red-600' : 'bg-gray-300'
                }`}
                aria-label={`Ga naar review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
