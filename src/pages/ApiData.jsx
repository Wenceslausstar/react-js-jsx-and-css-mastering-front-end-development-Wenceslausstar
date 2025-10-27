import React, { useEffect, useState } from 'react'
import { fetchTechArticles } from '../api/api'
import Card from '../components/Card'

export default function ApiData() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function loadArticles() {
      setLoading(true)
      try {
        const data = await fetchTechArticles(8) // Fetch 8 articles
        setArticles(data)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    loadArticles()
  }, [])

  if (loading) return (
    <div className="flex justify-center items-center p-8">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  )

  if (error) return (
    <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
      <p className="text-red-600 dark:text-red-400">Error: {error}</p>
    </div>
  )

  return (
    <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="mb-6">
        <h2 className="text-3xl font-bold">Tech Articles</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Latest technology articles from Wikipedia</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map(article => (
          <Card key={article.id} className="flex flex-col h-full">
            {article.thumbnail && (
              <div className="relative h-48 mb-4 -mx-4 -mt-4 overflow-hidden rounded-t-lg">
                <img
                  src={article.thumbnail}
                  alt={article.title}
                  className="object-cover w-full h-full"
                />
              </div>
            )}
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3 mb-4">
                {article.excerpt}
              </p>
            </div>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium transition-colors"
            >
              Read more →
            </a>
          </Card>
        ))}
      </div>
    </main>
  )
}
