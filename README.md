# MoviesDatabase API Documentation

## API Overview

The MoviesDatabase API provides comprehensive access to a vast collection of movie and TV show data. This API allows developers to retrieve detailed information about movies, TV series, actors, and more. It's an excellent resource for building applications that require movie databases, streaming service integrations, or entertainment-related content.

## Version

The current version of the MoviesDatabase API is `v1`.

## Available Endpoints

### Movies

- `GET /titles` - Retrieve a list of movie titles with optional filtering
- `GET /titles/{id}` - Get detailed information about a specific movie
- `GET /titles/random` - Get a random movie title

### TV Shows

- `GET /titles/series` - Retrieve a list of TV series
- `GET /titles/series/{id}` - Get detailed information about a specific TV series
- `GET /titles/series/{id}/episodes` - Get episodes for a specific TV series

### People

- `GET /actors` - Search for actors/actresses
- `GET /actors/{id}` - Get detailed information about a specific actor/actress
- `GET /actors/{id}/knownFor` - Get movies/TV shows a person is known for

### Search

- `GET /search` - Search across movies, TV shows, and people
- `GET /search/movie` - Search specifically for movies
- `GET /search/tv` - Search specifically for TV shows

## Request and Response Format

### Request Headers

All API requests require the following headers:

```http
X-RapidAPI-Host: moviesdatabase.p.rapidapi.com
X-RapidAPI-Key: your-api-key-here
```

### Response Format

All responses are returned in JSON format. A typical successful response looks like:

```json
{
  "results": [
    {
      "id": "tt1234567",
      "title": "Movie Title",
      "year": 2023,
      "type": "movie",
      "image": "https://example.com/poster.jpg"
    }
  ],
  "page": 1,
  "total_pages": 10,
  "total_results": 100
}
```

### Example Request

```http
GET /titles/tt1234567 HTTP/1.1
Host: moviesdatabase.p.rapidapi.com
X-RapidAPI-Host: moviesdatabase.p.rapidapi.com
X-RapidAPI-Key: your-api-key-here
```

## Authentication

To use the MoviesDatabase API, you need to:

1. Sign up for a RapidAPI account
2. Subscribe to the MoviesDatabase API
3. Get your API key from the RapidAPI dashboard
4. Include your API key in the `X-RapidAPI-Key` header with every request

## Error Handling

### Common HTTP Status Codes

- `200 OK` - Request was successful
- `400 Bad Request` - Invalid request parameters
- `401 Unauthorized` - Invalid or missing API key
- `404 Not Found` - The requested resource was not found
- `429 Too Many Requests` - Rate limit exceeded
- `500 Internal Server Error` - Server error

### Error Response Format

```json
{
  "message": "Error message describing the issue"
}
```

## Usage Limits and Best Practices

### Rate Limiting

- Free tier: 500 requests per month
- Basic tier: 10,000 requests per month
- Pro tier: 100,000 requests per month

### Best Practices

1. **Cache responses** when possible to reduce API calls
2. **Use pagination** when retrieving large datasets
3. **Filter results** using query parameters to get only the data you need
4. **Handle errors gracefully** in your application
5. **Monitor your usage** to avoid hitting rate limits
6. **Use HTTPS** for all API requests
7. **Keep your API key secure** and never expose it in client-side code

### Recommended Request Headers

```http
Accept: application/json
Content-Type: application/json
```

### Response Time

- Average response time: 200-500ms
- Response times may vary based on server load and request complexity

For the most up-to-date information, please refer to the official [MoviesDatabase API documentation](https://rapidapi.com/SAdrian/api/moviesdatabase).
