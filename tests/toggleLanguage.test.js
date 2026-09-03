if (typeof global.TextEncoder === 'undefined') {
  const { TextEncoder, TextDecoder } = require('util');
  global.TextEncoder = TextEncoder;
  global.TextDecoder = TextDecoder;
}

const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

describe('toggleLanguage UI Test', () => {
  let dom;
  let window;
  let document;
  let htmlContent;
  let menuJsonData;

  beforeAll(() => {
    htmlContent = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
    menuJsonData = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../menu.json'), 'utf8'));
  });

  beforeEach(async () => {
    // Instantiate JSDOM with scripts enabled
    dom = new JSDOM(htmlContent, {
      url: 'http://localhost/',
      runScripts: 'dangerously',
      resources: 'usable'
    });

    window = dom.window;
    document = window.document;

    // Mock fetch on window to resolve menu.json
    window.fetch = jest.fn((url) => {
      if (url === 'menu.json') {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(menuJsonData)
        });
      }
      return Promise.reject(new Error('404 Not Found'));
    });

    // Fire DOMContentLoaded event
    window.document.dispatchEvent(new window.Event('DOMContentLoaded', {
      bubbles: true,
      cancelable: true
    }));

    // Wait for fetch promise resolution & DOM render
    await new Promise(resolve => setTimeout(resolve, 50));
  });

  afterEach(() => {
    window.close();
  });

  test('should have initial language set to English (en)', () => {
    const langBtn = document.getElementById('langBtn');
    expect(langBtn.textContent.trim()).toBe('AM');

    const searchInput = document.getElementById('searchInput');
    expect(searchInput.placeholder).toBe('Search menu...');

    const cafeName = document.getElementById('cafeName');
    expect(cafeName.textContent.trim()).toBe('Brew & Bloom Cafe');

    const cafeTagline = document.getElementById('cafeTagline');
    expect(cafeTagline.textContent.trim()).toBe('Crafted Coffee & Artisan Pastries');
  });

  test('should toggle language from English (en) to Amharic (am)', () => {
    window.toggleLanguage();

    const langBtn = document.getElementById('langBtn');
    expect(langBtn.textContent.trim()).toBe('EN');

    const searchInput = document.getElementById('searchInput');
    expect(searchInput.placeholder).toBe('ምናሌውን ይፈልጉ...');

    const cafeName = document.getElementById('cafeName');
    expect(cafeName.textContent.trim()).toBe('ብሩ ኤንድ ብሉም ካፌ');

    const cafeTagline = document.getElementById('cafeTagline');
    expect(cafeTagline.textContent.trim()).toBe('በጥበብ የተዘጋጀ ቡና እና ልዩ ኬኮች');

    // Verify rendered category tabs in Amharic
    const categoriesTabs = document.getElementById('categoriesTabs');
    expect(categoriesTabs.innerHTML).toContain('ትኩስ መጠጦች');

    // Verify rendered items in Amharic
    const menuContent = document.getElementById('menuContent');
    expect(menuContent.innerHTML).toContain('ኤስፕሬሶ');
  });

  test('should toggle language back from Amharic (am) to English (en)', () => {
    // Switch to Amharic first
    window.toggleLanguage();

    // Switch back to English
    window.toggleLanguage();

    const langBtn = document.getElementById('langBtn');
    expect(langBtn.textContent.trim()).toBe('AM');

    const searchInput = document.getElementById('searchInput');
    expect(searchInput.placeholder).toBe('Search menu...');

    const cafeName = document.getElementById('cafeName');
    expect(cafeName.textContent.trim()).toBe('Brew & Bloom Cafe');

    const cafeTagline = document.getElementById('cafeTagline');
    expect(cafeTagline.textContent.trim()).toBe('Crafted Coffee & Artisan Pastries');

    const categoriesTabs = document.getElementById('categoriesTabs');
    expect(categoriesTabs.innerHTML).toContain('Hot Drinks');

    const menuContent = document.getElementById('menuContent');
    expect(menuContent.innerHTML).toContain('Espresso');
  });

  test('should maintain consistency over multiple toggle calls', () => {
    expect(document.getElementById('langBtn').textContent.trim()).toBe('AM');

    window.toggleLanguage(); // am
    expect(document.getElementById('langBtn').textContent.trim()).toBe('EN');

    window.toggleLanguage(); // en
    expect(document.getElementById('langBtn').textContent.trim()).toBe('AM');

    window.toggleLanguage(); // am
    expect(document.getElementById('langBtn').textContent.trim()).toBe('EN');

    window.toggleLanguage(); // en
    expect(document.getElementById('langBtn').textContent.trim()).toBe('AM');
  });

  test('should update empty state text when toggling language during an empty search result', () => {
    const searchInput = document.getElementById('searchInput');
    searchInput.value = 'nonexistentitem12345';
    window.handleSearch();

    const emptyState = document.getElementById('emptyState');
    const emptyText = document.getElementById('emptyText');

    expect(emptyState.style.display).toBe('block');
    expect(emptyText.textContent.trim()).toBe('No items found matching your search.');

    // Toggle to Amharic while empty search is active
    window.toggleLanguage();

    expect(emptyState.style.display).toBe('block');
    expect(emptyText.textContent.trim()).toBe('በፍለጋዎ መሰረት ምንም ነገር አልተገኘም።');

    // Toggle back to English
    window.toggleLanguage();

    expect(emptyState.style.display).toBe('block');
    expect(emptyText.textContent.trim()).toBe('No items found matching your search.');
  });
});
