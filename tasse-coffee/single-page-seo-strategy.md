# Single-Page Coffee Shop SEO Strategy

## 🎯 **Simplified Approach for Maximum Impact**

### **Option 1: Single-Page Website**
- **Main Page**: Homepage with all sections (menu, location, about, contact)
- **SEO Focus**: Target all primary keywords on one powerful page

### **Option 2: Two-Page Website**
- **Page 1**: Homepage (about, menu highlights, location)
- **Page 2**: Full menu page (detailed menu, food items, drinks)

---

## 📄 **Single-Page Website SEO Strategy**

### **Page Structure with SEO Sections**

```html
<!-- Main Page: index.html -->
<!-- Target ALL primary keywords on one page -->

<!-- Section 1: Hero/Header -->
- Coffee shop Glasgow
- Best coffee Glasgow
- Glasgow café
- Coffee shop near me

<!-- Section 2: About/Intro -->
- Independent café Glasgow
- Artisan coffee Glasgow
- Specialty coffee Glasgow

<!-- Section 3: Menu Preview -->
- Fresh brewed coffee
- Espresso Glasgow
- Flat white Glasgow
- Barista coffee Glasgow

<!-- Section 4: Location/Contact -->
- Coffee shop near Glasgow University
- Glasgow West End coffee
- Coffee shop with WiFi Glasgow
- Coffee takeaway Glasgow

<!-- Section 5: Amenities -->
- Dog-friendly coffee shop
- Student-friendly café
- Family-friendly coffee shop

<!-- Section 6: Food & Pastries -->
- Cakes and coffee Glasgow
- Gluten-free treats Glasgow
- Vegan brownies Glasgow

<!-- Section 7: Reviews/Social Proof -->
- Coffee shop reviews Glasgow
- Top-rated café Glasgow
- Instagrammable café Glasgow
```

### **Optimized Meta Tags for Single Page**

```html
<title>Tasse Speciality Coffee - Best Coffee Shop Glasgow | Artisan Coffee, Menu & Location</title>
<meta name="description" content="Glasgow's best coffee shop serving artisan coffee, fresh brewed espresso, flat white, and specialty drinks. Dog-friendly café near Glasgow University with WiFi. Gluten-free treats and vegan options. Coffee shop reviews and top-rated café in Glasgow.">
<meta name="keywords" content="coffee shop Glasgow, best coffee Glasgow, Glasgow café, artisan coffee Glasgow, espresso Glasgow, flat white Glasgow, coffee shop near Glasgow University, dog-friendly coffee shop, gluten-free treats Glasgow, coffee shop with WiFi Glasgow">
<link rel="canonical" href="https://tasse-coffee.com/">
```

---

## 📄 **Two-Page Website SEO Strategy**

### **Page 1: Homepage (index.html)**
**Target Keywords:**
- Coffee shop Glasgow
- Best coffee Glasgow
- Glasgow café
- Coffee shop near me
- Independent café Glasgow
- Coffee shop near Glasgow University
- Dog-friendly coffee shop
- Coffee shop with WiFi Glasgow

**Content Sections:**
1. Hero section with primary keywords
2. About section (artisan coffee, specialty coffee)
3. Menu highlights (espresso, flat white, fresh brewed coffee)
4. Location & contact info
5. Amenities (WiFi, dog-friendly, student-friendly)
6. Reviews and social proof

### **Page 2: Menu Page (menu.html)**
**Target Keywords:**
- Fresh brewed coffee
- Espresso Glasgow
- Flat white Glasgow
- Iced coffee Glasgow
- Cold brew Glasgow
- Barista coffee Glasgow
- Cakes and coffee Glasgow
- Gluten-free treats Glasgow
- Vegan brownies Glasgow
- Coffee and pastries Glasgow

**Content Sections:**
1. Complete coffee menu
2. Food and pastry menu
3. Pricing information
4. Dietary options (vegan, gluten-free)
5. Seasonal specials

---

## 🔧 **Technical SEO Implementation**

### **Updated Sitemap for 1-2 Pages**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    
    <!-- Homepage - Highest Priority -->
    <url>
        <loc>https://tasse-coffee.com/</loc>
        <lastmod>2024-01-15</lastmod>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
    </url>
    
    <!-- Menu Page (if two-page approach) -->
    <url>
        <loc>https://tasse-coffee.com/menu</loc>
        <lastmod>2024-01-15</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
    </url>
    
</urlset>
```

### **Updated .htaccess for 1-2 Pages**

```apache
# Simplified .htaccess for 1-2 page website
RewriteEngine On

# Remove trailing slashes
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_URI} (.+)/$
RewriteRule ^ %1 [R=301,L]

# SEO-friendly URLs (if two-page approach)
RewriteRule ^menu/?$ menu.html [L]

# Redirect www to non-www
RewriteCond %{HTTP_HOST} ^www\.tasse-coffee\.com [NC]
RewriteRule ^(.*)$ https://tasse-coffee.com/$1 [L,R=301]

# Custom error pages
ErrorDocument 404 /404.html
ErrorDocument 500 /500.html

# Security headers
<IfModule mod_headers.c>
    Header always append X-Frame-Options SAMEORIGIN
    Header always set X-Content-Type-Options nosniff
    Header always set X-XSS-Protection "1; mode=block"
    Header always set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>

# Compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/css application/javascript
</IfModule>

# Browser caching
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/html "access plus 1 hour"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
    ExpiresByType image/png "access plus 1 month"
    ExpiresByType image/jpg "access plus 1 month"
</IfModule>
```

---

## 📊 **Content Strategy for Single Page**

### **Section-by-Section Keyword Distribution**

#### **Section 1: Hero (H1)**
```html
<h1>Glasgow's Best Coffee Shop | Tasse Speciality Coffee</h1>
<p>Discover artisan coffee and specialty brews in Glasgow's premier independent café</p>
```

#### **Section 2: About (H2)**
```html
<h2>Artisan Coffee Glasgow | Independent Café</h2>
<p>At Tasse, we serve the finest artisan coffee in Glasgow. Our specialty coffee is locally roasted and expertly prepared by skilled baristas.</p>
```

#### **Section 3: Menu Highlights (H2)**
```html
<h2>Fresh Brewed Coffee & Specialty Drinks</h2>
<p>Enjoy our fresh brewed coffee, espresso Glasgow style, flat white, and cold brew. Barista coffee prepared with care.</p>
```

#### **Section 4: Location (H2)**
```html
<h2>Coffee Shop Near Glasgow University | Location</h2>
<p>Find our coffee shop near Glasgow University in the West End. Glasgow West End coffee with WiFi and takeaway available.</p>
```

#### **Section 5: Amenities (H2)**
```html
<h2>Dog-Friendly Coffee Shop with WiFi</h2>
<p>Student-friendly café with WiFi, perfect for studying. Family-friendly coffee shop with relaxing atmosphere.</p>
```

#### **Section 6: Food (H2)**
```html
<h2>Cakes & Coffee Glasgow | Gluten-Free Treats</h2>
<p>Delicious cakes and coffee in Glasgow. Gluten-free treats, vegan brownies, and fresh pastries.</p>
```

#### **Section 7: Reviews (H2)**
```html
<h2>Top-Rated Coffee Shop Glasgow | Reviews</h2>
<p>Read coffee shop reviews from our satisfied customers. Instagrammable café Glasgow with top-rated service.</p>
```

---

## 🎯 **Local SEO for Single Page**

### **Enhanced Structured Data**
```json
{
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    "name": "Tasse Speciality Coffee",
    "description": "Glasgow's best coffee shop serving artisan coffee, fresh brewed espresso, flat white, and specialty drinks",
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
    },
    "hasMenu": {
        "@type": "Menu",
        "name": "Tasse Coffee Menu",
        "url": "https://tasse-coffee.com/#menu"
    }
}
```

---

## 📈 **SEO Benefits of Single-Page Approach**

### **Advantages**
1. **Concentrated SEO Power**: All keywords on one high-authority page
2. **Faster Loading**: Fewer HTTP requests
3. **Better User Experience**: No navigation complexity
4. **Easier Maintenance**: One page to update
5. **Strong Internal Linking**: All content links to same page

### **Disadvantages**
1. **Limited Content Depth**: Can't go as deep on specific topics
2. **Keyword Cannibalization**: All keywords compete on same page
3. **Less Internal Linking**: No cross-page linking benefits

---

## 🚀 **Implementation Recommendations**

### **For Single Page:**
- Use anchor links for smooth scrolling
- Implement lazy loading for images
- Add schema markup for all business types
- Create comprehensive FAQ section
- Include customer testimonials

### **For Two Pages:**
- Cross-link between pages
- Use different schema types for each page
- Create complementary content
- Implement breadcrumb navigation

---

## 📊 **Success Metrics for Single Page**

### **Month 1 Goals**
- [ ] Achieve top 10 for 8-10 primary keywords
- [ ] Increase page authority score
- [ ] Improve Core Web Vitals
- [ ] Generate 10+ customer reviews

### **Month 3 Goals**
- [ ] Achieve top 5 for 5-8 primary keywords
- [ ] Increase organic traffic by 40%
- [ ] Improve local search visibility
- [ ] Generate 25+ customer reviews

### **Month 6 Goals**
- [ ] Achieve top 3 for 8-10 primary keywords
- [ ] Increase organic traffic by 80%
- [ ] Become top-ranked coffee shop in Glasgow
- [ ] Generate 50+ customer reviews

---

**Recommendation**: For a coffee shop, I'd suggest the **two-page approach** - homepage for general info and location, plus a dedicated menu page. This gives you the best balance of SEO power and user experience while keeping it simple.
