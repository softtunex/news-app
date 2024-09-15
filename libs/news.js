import { DUMMY_NEWS } from "@/dummy-news";

// Helper function to extract available news years
export const getAvailableNewsYears = () => {
  const years = DUMMY_NEWS.map((newsItem) => {
    // Extract the year part from the 'date' field
    const year = new Date(newsItem.date).getFullYear();
    return year;
  });

  // Remove duplicates by converting to a Set, then back to an array
  const uniqueYears = [...new Set(years)];

  // Sort the years in descending order (latest first)
  uniqueYears.sort((a, b) => b - a);

  return uniqueYears;
};

export const getNewsForYear = (year) => {
  // Filter the news articles that match the selected year
  const newsForYear = DUMMY_NEWS.filter((newsItem) => {
    const newsYear = new Date(newsItem.date).getFullYear();
    return newsYear === +year;
  });

  return newsForYear;
};

export const getLatestNews = () => {
  // Sort the news array by date in descending order (latest news first)
  const sortedNews = [...DUMMY_NEWS].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  // Return the first item (the latest news) or more if needed
  return sortedNews; // To get only the latest news item
  // return sortedNews.slice(0, 5); // To get the 5 most recent news items
};
