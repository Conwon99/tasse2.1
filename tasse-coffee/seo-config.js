// SEO Configuration for Tasse Coffee Shop
// This file contains all SEO-related configurations and utilities

const SEO_CONFIG = {
    // Base URL for canonical links
    baseUrl: 'https://tasse-coffee.com',
    
    // Default meta tags for all pages
    defaultMeta: {
        author: 'Tasse Speciality Coffee',
        robots: 'index, follow',
        language: 'English',
        geo: {
            region: 'GB-SCT',
            placename: 'Glasgow',
            position: '55.8642;-4.2518',
            icbm: '55.8642, -4.2518'
        }
    },
    
    // Page-specific SEO configurations
    pages: {
        home: {
            title: 'Tasse Speciality Coffee - Best Coffee Shop Glasgow | Artisan Coffee & Café',
            description: 'Discover Glasgow\'s best coffee shop at Tasse. Artisan coffee, specialty brews, and locally roasted beans. Coffee shop near Glasgow University. Dog-friendly café with WiFi.',
            keywords: 'coffee shop Glasgow, best coffee Glasgow, Glasgow café, artisan coffee Glasgow, specialty coffee Glasgow, coffee shop near me, independent café Glasgow',
            canonical: '/',
            schema: 'CafeOrCoffeeShop'
        },
        menu: {
            title: 'Coffee Menu Glasgow | Espresso, Flat White & Specialty Coffee | Tasse',
            description: 'Explore our artisan coffee menu in Glasgow. Fresh brewed coffee, espresso, flat white, iced coffee, and cold brew. Barista coffee Glasgow.',
            keywords: 'fresh brewed coffee, espresso Glasgow, flat white Glasgow, iced coffee Glasgow, cold brew Glasgow, barista coffee Glasgow, vegan coffee Glasgow, organic coffee Glasgow',
            canonical: '/menu',
            schema: 'Menu'
        },
        location: {
            title: 'Coffee Shop Near Glasgow University | Location & Contact | Tasse',
            description: 'Find our coffee shop near Glasgow University. Glasgow West End coffee location with WiFi. City Centre coffee shop Glasgow. Coffee takeaway available.',
            keywords: 'coffee shop near Glasgow University, Glasgow West End coffee, city centre coffee shop Glasgow, coffee shop near me, coffee takeaway Glasgow, coffee shop with WiFi Glasgow',
            canonical: '/location',
            schema: 'LocalBusiness'
        },
        food: {
            title: 'Cakes & Coffee Glasgow | Gluten-Free Treats & Vegan Brownies | Tasse',
            description: 'Delicious cakes and coffee in Glasgow. Gluten-free treats, vegan brownies, scones and coffee. Fresh pastries with artisan coffee.',
            keywords: 'cakes and coffee Glasgow, coffee and pastries Glasgow, gluten-free treats Glasgow, gluten-free cake Glasgow, vegan brownies Glasgow, scones and coffee Glasgow',
            canonical: '/food',
            schema: 'FoodEstablishment'
        },
        brunch: {
            title: 'Coffee & Brunch Glasgow | Breakfast & Sandwiches | Tasse',
            description: 'Enjoy coffee and brunch in Glasgow. Family-friendly coffee shop with breakfast, sandwiches, and coffee dates. Cozy café atmosphere.',
            keywords: 'coffee and brunch Glasgow, coffee shop breakfast Glasgow, coffee and sandwiches, coffee dates Glasgow, family-friendly coffee shop, cozy café Glasgow',
            canonical: '/brunch',
            schema: 'Restaurant'
        },
        quality: {
            title: 'Best Cappuccino Glasgow | Latte Art & Barista Coffee | Tasse',
            description: 'Best cappuccino in Glasgow with latte art. Barista coffee, locally roasted coffee, artisan coffee Glasgow. Specialty coffee expertise.',
            keywords: 'best cappuccino Glasgow, latte art Glasgow, barista coffee Glasgow, locally roasted coffee, artisan coffee Glasgow, specialty coffee Glasgow, fresh brewed coffee',
            canonical: '/quality',
            schema: 'CafeOrCoffeeShop'
        },
        amenities: {
            title: 'Dog-Friendly Coffee Shop Glasgow | WiFi & Study Café | Tasse',
            description: 'Dog-friendly coffee shop in Glasgow with WiFi. Student-friendly café, quiet study café, family-friendly coffee shop. Relaxing café atmosphere.',
            keywords: 'dog-friendly coffee shop, coffee shop with WiFi Glasgow, student-friendly café, quiet study café Glasgow, family-friendly coffee shop, cozy café Glasgow, relaxing café Glasgow',
            canonical: '/amenities',
            schema: 'CafeOrCoffeeShop'
        },
        social: {
            title: 'Instagrammable Café Glasgow | Coffee Shop Reviews | Tasse',
            description: 'Instagrammable café in Glasgow with top-rated coffee shop reviews. Local café hangout for coffee dates and social media content.',
            keywords: 'instagrammable café Glasgow, coffee shop reviews Glasgow, top-rated café Glasgow, local café hangout, coffee dates Glasgow',
            canonical: '/social',
            schema: 'CafeOrCoffeeShop'
        },
        sustainability: {
            title: 'Eco-Friendly Café Glasgow | Organic Coffee & Vegan Options | Tasse',
            description: 'Eco-friendly café in Glasgow serving organic coffee and vegan options. Locally roasted coffee from independent coffee business.',
            keywords: 'eco-friendly café Glasgow, organic coffee Glasgow, vegan coffee Glasgow, locally roasted coffee, independent coffee business',
            canonical: '/sustainability',
            schema: 'CafeOrCoffeeShop'
        },
        loyalty: {
            title: 'Coffee Shop Deals Glasgow | Loyalty Card & Special Offers | Tasse',
            description: 'Coffee shop deals in Glasgow with loyalty card program. Local coffee spot with special offers and independent coffee business.',
            keywords: 'coffee shop deals Glasgow, coffee shop loyalty card, coffee shop near me, local coffee spot Glasgow, independent coffee business',
            canonical: '/loyalty',
            schema: 'CafeOrCoffeeShop'
        }
    },
    
    // Structured data templates
    structuredData: {
        CafeOrCoffeeShop: {
            "@context": "https://schema.org",
            "@type": "CafeOrCoffeeShop",
            "name": "Tasse Speciality Coffee",
            "description": "Glasgow's best coffee shop serving artisan coffee and specialty brews",
            "url": "https://tasse-coffee.com/",
            "telephone": "+44-141-XXX-XXXX",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "171 Great Western Road",
                "addressLocality": "Glasgow",
                "postalCode": "G4 9AW",
                "addressCountry": "GB"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": 55.8642,
                "longitude": -4.2518
            },
            "openingHours": "Mo-Su 08:00-18:00",
            "priceRange": "££",
            "servesCuisine": ["Coffee", "Tea", "Pastries", "Sandwiches"],
            "amenityFeature": [
                {
                    "@type": "LocationFeatureSpecification",
                    "name": "WiFi",
                    "value": true
                },
                {
                    "@type": "LocationFeatureSpecification", 
                    "name": "Dog Friendly",
                    "value": true
                }
            ],
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "127"
            }
        },
        
        Menu: {
            "@context": "https://schema.org",
            "@type": "Menu",
            "name": "Tasse Coffee Menu",
            "description": "Artisan coffee menu featuring espresso, flat white, cold brew and specialty drinks",
            "url": "https://tasse-coffee.com/menu",
            "hasMenuSection": [
                {
                    "@type": "MenuSection",
                    "name": "Hot Coffee",
                    "hasMenuItem": [
                        {
                            "@type": "MenuItem",
                            "name": "Espresso",
                            "description": "Single shot of premium espresso",
                            "offers": {
                                "@type": "Offer",
                                "price": "2.50",
                                "priceCurrency": "GBP"
                            }
                        },
                        {
                            "@type": "MenuItem", 
                            "name": "Flat White",
                            "description": "Smooth flat white with microfoam",
                            "offers": {
                                "@type": "Offer",
                                "price": "3.20",
                                "priceCurrency": "GBP"
                            }
                        }
                    ]
                }
            ]
        },
        
        LocalBusiness: {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Tasse Speciality Coffee",
            "description": "Coffee shop near Glasgow University",
            "url": "https://tasse-coffee.com/location",
            "telephone": "+44-141-XXX-XXXX",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "171 Great Western Road",
                "addressLocality": "Glasgow",
                "postalCode": "G4 9AW",
                "addressCountry": "GB"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": 55.8642,
                "longitude": -4.2518
            },
            "openingHours": "Mo-Su 08:00-18:00"
        }
    }
};

// SEO utility functions
const SEO_UTILS = {
    // Generate canonical URL
    getCanonicalUrl: (path) => {
        return SEO_CONFIG.baseUrl + path;
    },
    
    // Generate page meta tags
    getPageMeta: (pageKey) => {
        const page = SEO_CONFIG.pages[pageKey];
        if (!page) return SEO_CONFIG.pages.home;
        return page;
    },
    
    // Generate structured data
    getStructuredData: (schemaType) => {
        return SEO_CONFIG.structuredData[schemaType] || SEO_CONFIG.structuredData.CafeOrCoffeeShop;
    },
    
    // Update meta tags dynamically
    updateMetaTags: (pageKey) => {
        const meta = SEO_UTILS.getPageMeta(pageKey);
        
        // Update title
        document.title = meta.title;
        
        // Update meta description
        let descMeta = document.querySelector('meta[name="description"]');
        if (!descMeta) {
            descMeta = document.createElement('meta');
            descMeta.name = 'description';
            document.head.appendChild(descMeta);
        }
        descMeta.content = meta.description;
        
        // Update canonical URL
        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.rel = 'canonical';
            document.head.appendChild(canonical);
        }
        canonical.href = SEO_UTILS.getCanonicalUrl(meta.canonical);
        
        // Update Open Graph tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.content = meta.title;
        
        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.content = meta.description;
        
        const ogUrl = document.querySelector('meta[property="og:url"]');
        if (ogUrl) ogUrl.content = SEO_UTILS.getCanonicalUrl(meta.canonical);
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SEO_CONFIG, SEO_UTILS };
} else {
    window.SEO_CONFIG = SEO_CONFIG;
    window.SEO_UTILS = SEO_UTILS;
}
