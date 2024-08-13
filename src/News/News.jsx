import React, { useEffect, useState } from "react";
import "./News.css";
import axios from "axios";

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibility, setVisibility] = useState(6);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://saurav.tech/NewsAPI/top-headlines/category/health/in.json"
        );
        setNews(response.data.articles);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}. Please try again later.</div>;

  const loadMore = () => {
    setVisibility((prev) => prev + 2);
  };
  const loadMore2 = () => {
    setVisibility((prev) => prev + 4);
  };
  const loadMore3 = () => {
    setVisibility((prev) => prev + 6);
  };
  const next = () => {
    setVisibility((prev) => prev + 2);
  };

  return (
    <div className="new-wrapper">
      <div className="latest-news">
      <h2>Latest News</h2>
      </div>
        <div className="news-with-API">
          {news.slice(0, visibility).map((item, index) => (
            <div key={index} className="API-pp">
              <div className="API-image">
                <img
                  onClick={() => (window.location.href = `${item.url}`)}
                  src={item.urlToImage}
                  style={{ cursor: "pointer" }}
                  alt="Photo"
                />
              </div>
              <span className="tec">{item.source.name}</span>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <p>{`Published At: ${new Date(item.publishedAt).toLocaleString()}`}</p>
            </div>
          ))}
        </div>
        <div className="News-buttons">
        <button type="button" onClick={loadMore}>1</button>
        <button type="button" onClick={loadMore2}>2</button>
        <button type="button" onClick={loadMore3}>3</button>
        <button type="button" onClick={next}>Next</button>
        </div>
    </div>
  );
};

export default News;