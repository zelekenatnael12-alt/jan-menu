# ☕ Jan Systems - Digital Cafe Menu

Welcome to your premium, high-speed digital menu template. This menu is designed to load instantly on client devices, support multiple languages (Amharic & English), support optional item photos, and work offline or online.

---

## 🛠️ How to Customize Menu Content

The entire menu is controlled by a single file: `menu.json`. You do **not** need to touch any HTML/CSS code to change items, prices, names, or colors.

Simply open `menu.json` in any text editor (like Notepad, VS Code, or even edit it online on GitHub) and update the values.

### 1. Cafe & Branding Details
Under the `"cafe"` key, you can update:
- `"name"`: The name of the cafe in English (`"en"`) and Amharic (`"am"`).
- `"tagline"`: Subtitle shown below the name.
- `"logo"`: Name of your logo file (e.g. `"logo.png"`). Place the image in the same directory.
- `"currency"`: The symbol displayed next to prices (e.g. `"ብር"` / `"ETB"`).
- `"telegram"`: Your telegram handle shown at the bottom.

### 2. Styling & Theme Colors
You can change the look of the menu by modifying hex color codes in the `"theme"` object:
- `"primary"`: Main highlight & tab selection color (e.g., `#C8A96E` for gold).
- `"background"`: The overall background color.
- `"surface"`: The card background color.
- `"text"`: General text color.

### 3. Adding & Modifying Menu Items
Items are organized in `"categories"`. Each item has:
- `"name"`: Bilingual name.
- `"price"`: Number representation of the price.
- `"description"`: Bilingual description details.
- `"badge"`: Optional tag like "Popular", "New", "Vegan", etc. Leave as `""` if not needed.
- `"image"`: File name of the item photo (e.g. `"espresso.png"`). If there is no image, leave as `""` and the layout automatically adjusts to look clean.

---

## 🚀 How to Deploy (100% Free Hosting)

### Option A: Netlify Drop (Fastest - 10 Seconds)
1. Open [netlify.com/drop](https://netlify.com/drop) in your browser.
2. Drag and drop the entire `jan menu` folder onto the page.
3. Your site is live instantly! You can change the random URL in site settings (e.g. `brew-bloom.netlify.app`).

### Option B: GitHub Pages (Best for automatic updates)
1. Upload this folder to a GitHub Repository.
2. Go to **Settings** -> **Pages**.
3. Choose `main` branch, select `/root` folder, and click **Save**.
4. Within 1 minute, your site will be live at `https://yourusername.github.io/your-repo-name`.

---

## 📱 QR Code Generation
Customers can click the **QR Code icon** at the top right of the screen. 
- It dynamically reads the current website link and displays a QR code that they can scan to share the menu with other tables.
- Print this QR code and stick it on tables, counters, or windows!

---

*Developed by **Jan Systems** | For updates or customizations contact Telegram [@jan_web_dev](https://t.me/jan_web_dev)*
