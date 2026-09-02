# ☕ Jan Systems - Commercial Multi-Restaurant Digital QR Menu & Ordering System

Welcome to the **Commercial Digital QR Menu & Table Ordering Solution** by **Jan Systems**. Designed for cafes, restaurants, bars, and hotels to operate lightning-fast digital menus with zero mandatory server costs.

---

## 🚀 Key Commercial Features

1. **📱 Instant QR Table Ordering**
   - Automatically detects table numbers via URL query (e.g. `your-menu.com/?table=5` or `#table-5`).
   - Customers select items, customize special instructions, view cart total, and submit orders directly via **Telegram** or **WhatsApp**.

2. **🌐 English & Amharic (Bilingual Support)**
   - Single-tap language switcher (`EN` / `AM`).
   - All menu names, descriptions, badges, categories, and buttons update instantly in real-time.

3. **🎨 Built-in Multi-Theme Switcher**
   - Choose from 5 pre-built luxury color themes in Admin:
     - ✨ Gold Luxury
     - 🌙 Modern Dark
     - ☕ Warm Coffee
     - 🍃 Fresh Green
     - ☀️ Minimal Light

4. **🔐 PIN-Protected Admin & Visual Menu Editor**
   - Access admin panel via footer or gear icon (Default PIN: `1234`).
   - Edit cafe name, tagline, logo, currency, WhatsApp/Telegram numbers, admin PIN, categories, items, prices, badges, and photos.
   - Live browser LocalStorage updates + direct `menu.json` export & file import.

5. **🌱 Dietary & Badge Tag Filtering**
   - Quick filters for **All**, **Fasting / ጾም**, **Popular / ተወዳጅ**, and **New / አዲስ**.

---

## 🛠️ How to Sell & Deploy to Restaurants

### 1. Simple Deployment (Free Hosting on Netlify / GitHub Pages)
- **Netlify Drop**: Drag & drop this repository folder onto [netlify.com/drop](https://netlify.com/drop).
- **GitHub Pages**: Host on GitHub and turn on Pages in Repository Settings.

### 2. Setting Up Tables & Printing QR Codes
1. Open the website on your browser.
2. Click the **QR icon** in the top right floating utilities bar.
3. Enter the table number (e.g., Table 1, Table 2, Table 3).
4. Save/print the generated QR code and place it on table stands!

### 3. Order Channel Configuration
In `menu.json` or through the **Admin Editor**:
- Set `"telegram"`: `@your_restaurant_handle`
- Set `"whatsapp"`: `251911XXXXXX` (Country code + phone number)

---

## 📁 JSON Structure (`menu.json`)

```json
{
  "cafe": {
    "name": { "en": "Cafe Name", "am": "የካፌ ስም" },
    "tagline": { "en": "Tagline", "am": "መግለጫ" },
    "logo": "logo.png",
    "currency": { "en": "ETB", "am": "ብር" },
    "telegram": "@jan_web_dev",
    "whatsapp": "251911000000",
    "adminPin": "1234",
    "theme": { ... }
  },
  "categories": [ ... ]
}
```

---

*Developed by **Jan Systems** | For white-label custom installations contact Telegram [@jan_web_dev](https://t.me/jan_web_dev)*
