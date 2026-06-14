# Alfi Zia Ulhaq - Portfolio Redirection Portal

This repository is configured to redirect all traffic to the new and optimized portfolio page hosted at [cv.alfizu.pro](https://cv.alfizu.pro).

## Redirection & SEO Strategy

Since this page is highly ranked on Google Search, we implement an SEO-friendly transition to transfer authority (PageRank) to the new domain:

1. **HTML Meta Refresh (0s)**: Treated by Googlebot as a **301 redirect equivalent** to migrate ranking signals.
2. **Canonical Link Tag**: Directs search engines to treat [cv.alfizu.pro](https://cv.alfizu.pro) as the authoritative master copy.
3. **Structured Data (Schema.org JSON-LD)**: Retains identity context as a portfolio/CV page for search indexing.
4. **Instant JavaScript Redirection**: Fast client-side redirection via `window.location.replace()`.
5. **Glassmorphism UI Fallback**: A high-performance, dark-themed UI that guides users with a direct button if script execution is blocked.

The entire repository is minimized to a single static `index.html` file to maximize response speed and ensure page load time is below 50ms.
