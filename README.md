# ☕ Jan Systems - Commercial Multi-Restaurant Digital QR Menu & Ordering System

Welcome to the **Commercial Digital QR Menu, Table Ordering, Inventory & Staff Management Solution** by **Jan Systems**. Designed for cafes, restaurants, bars, and hotels to operate lightning-fast digital menus, manage inventory, and handle live table orders with zero mandatory server costs.

---

## 🚀 Key Commercial Features

1. **📱 Instant QR Table Ordering**
   - Automatically detects table numbers via URL query (e.g. `your-menu.com/?table=5` or `#table-5`).
   - Customers select items, customize special instructions, view cart total, and submit orders directly via **Telegram**, **WhatsApp**, or internal Waiter system.

2. **🏢 Multi-Restaurant & Multi-Tenant Support**
   - Serve multiple distinct cafes or restaurant branches from a single deployment using URL slugs (e.g., `your-menu.com/?restaurant=bloom` loads `bloom.json`, defaulting to `menu.json`).
   - Generates restaurant-specific QR codes with matching parameters.

3. **🔒 Security & PIN Management**
   - Sensitive Admin and Staff PINs are managed strictly in client browser `LocalStorage` (`jan_admin_pin_<slug>`, `jan_staff_list_<slug>`) and are **never** served inside public JSON files over HTTP.

4. **📦 Real-time Inventory & Stock Management**
   - Direct stock status toggles (`In Stock` / `Out of Stock`) and stock quantity tracking in Admin panel.
   - Automatically displays **"Sold Out"** badges and disables order buttons for unavailable items in real-time.

5. **👨‍🍳 Waiter & Kitchen Live Orders Dashboard**
   - PIN-protected Staff Portal for Waiters and Kitchen staff (Default Staff PIN: `2222`).
   - Live order workflow status tracking: `Received` ➔ `Preparing` ➔ `Served` ➔ `Paid`.
   - Admin control to add/edit staff accounts and custom PIN access.

6. **🌐 English & Amharic (Bilingual Support)**
   - Single-tap language switcher (`EN` / `AM`).
   - All menu names, descriptions, badges, categories, and buttons update instantly in real-time.

7. **🎨 Built-in Multi-Theme Switcher**
   - Choose from 5 pre-built luxury color themes in Admin:
     - ✨ Gold Luxury
     - 🌙 Modern Dark
     - ☕ Warm Coffee
     - 🍃 Fresh Green
     - ☀️ Minimal Light

8. **🔐 PIN-Protected Admin & Visual Menu Editor**
   - Access admin panel via footer or gear icon (Default PIN: `1234`).
   - Edit cafe name, tagline, logo, currency, WhatsApp/Telegram numbers, categories, items, prices, badges, and photos.
   - Live browser LocalStorage updates + direct JSON export & file import.

---

## 🏗️ Architecture & Data Sync Considerations

- **LocalStorage Sync Scope**: Browser `LocalStorage` is used for offline persistence and instant local admin updates on the device doing the edits.
- **Permanent Deployment & Cross-Device Sync**: To make menu changes visible across all customer devices and staff phones globally, click **Download JSON** in the Admin panel and commit the updated `.json` file to your hosting server (e.g. GitHub/Netlify). For cloud database sync (Firebase/Supabase), contact Jan Systems for custom server integrations.

---

## 🛠️ How to Deploy & Use

### 1. Simple Deployment (Free Hosting on Netlify / GitHub Pages)
- **Netlify Drop**: Drag & drop this repository folder onto [netlify.com/drop](https://netlify.com/drop).
- **GitHub Pages**: Host on GitHub and turn on Pages in Repository Settings.

### 2. Multi-Restaurant Deployment
To host multiple restaurants under one domain:
- Create separate JSON files (e.g., `bloom.json`, `downtown.json`).
- Direct customers or print QR codes with `?restaurant=bloom` or `?restaurant=downtown`.

### 3. Setting Up Tables & Printing QR Codes
1. Open the website on your browser.
2. Click the **QR icon** in the top right floating utilities bar.
3. Enter the table number (e.g., Table 1, Table 2, Table 3).
4. Save/print the generated QR code and place it on table stands!

### 4. Staff & Waiter Workflow
1. Waiters click **Staff Portal** in the footer and enter their Staff PIN (e.g., `2222`).
2. Live orders sent from table QR codes appear on the Staff Dashboard.
3. Waiters/Kitchen update status as items move from `Received` to `Preparing`, `Served`, and `Paid`.

---

## 📁 JSON Structure (`menu.json` / `slug.json`)

```json
{
  "cafe": {
    "name": { "en": "Cafe Name", "am": "የካፌ ስም" },
    "tagline": { "en": "Tagline", "am": "መግለጫ" },
    "logo": "logo.png",
    "currency": { "en": "ETB", "am": "ብር" },
    "telegram": "@jan_web_dev",
    "whatsapp": "251911000000",
    "brandName": "Jan Systems Commercial SaaS",
    "theme": {
      "primary": "#C8A96E",
      "background": "#0D0905",
      "surface": "#16100B"
    }
  },
  "categories": [
    {
      "id": "hot-drinks",
      "name": { "en": "Hot Drinks", "am": "ትኩስ መጠጦች" },
      "items": [
        {
          "name": { "en": "Espresso", "am": "ኤስፕሬሶ" },
          "price": 80,
          "inStock": true,
          "stockQty": 50,
          "isFasting": true,
          "image": "espresso.png"
        }
      ]
    }
  ]
}
```

---

*Developed by **Jan Systems** | For white-label custom installations contact Telegram [@jan_web_dev](https://t.me/jan_web_dev)*
