/**
 * Array of tech-related Wikipedia categories
 */
const TECH_CATEGORIES = [
  'Artificial_intelligence',
  'Computer_programming',
  'Software_development',
  'Web_development',
  'Cloud_computing',
  'Machine_learning',
  'Software_engineering',
  'Information_technology',
  'Computer_science',
  'Software_design',
];

/**
 * Fetch tech-related articles from Wikipedia
 * @param {number} limit - Number of articles to fetch
 * @returns {Promise<Array>} Array of article data
 */
export async function fetchTechArticles(limit = 8) {
  // Randomly select a tech category
  const category = TECH_CATEGORIES[Math.floor(Math.random() * TECH_CATEGORIES.length)];
  
  // Wikipedia API endpoint for tech category articles
  const url = `https://en.wikipedia.org/w/api.php?` + 
    `action=query&` +
    `format=json&` +
    `origin=*&` + // Required for CORS
    `generator=categorymembers&` +
    `gcmtitle=Category:${category}&` +
    `gcmlimit=${limit}&` +
    `prop=extracts|pageimages|info&` +
    `exintro=1&` + // Only get intro paragraph
    `exlimit=${limit}&` +
    `explaintext=1&` + // Get plain text instead of HTML
    `piprop=thumbnail&` +
    `pithumbsize=400` // Slightly larger thumbnails

  const res = await fetch(url)
  if (!res.ok) throw new Error('Failed to fetch Wikipedia articles')
  const data = await res.json()

  // Transform API response into a simpler format
  const pages = data.query?.pages || {}
  return Object.values(pages).map(page => ({
    id: page.pageid,
    title: page.title,
    excerpt: page.extract,
    thumbnail: page.thumbnail?.source,
    lastModified: page.touched,
    url: `https://en.wikipedia.org/?curid=${page.pageid}`
  }))
}
