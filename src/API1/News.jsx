import React, { useEffect, useState } from "react";
import "./News.css";
import axios from "axios";

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibility, setVisibility] = useState(6);
  const [nonVisibility, setNonVisibility] = useState(0);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://saurav.tech/NewsAPI/everything/cnn.json"
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
    setVisibility(6);
    setNonVisibility(0);
    window.scrollTo(0, 0);
  };

  const loadMore2 = () => {
    setVisibility(12);
    setNonVisibility(6);
    window.scrollTo(0, 0);
  };

  const loadMore3 = () => {
    setVisibility(18);
    setNonVisibility(12);
    window.scrollTo(0, 0);
  };

  const next = () => {
    const newNonVisibility = nonVisibility + 6;
    const newVisibility = visibility + 6;

    if (newVisibility >= news.length) {
      setVisibility(news.length);
      setNonVisibility(news.length - 6);
    } else {
      setVisibility(newVisibility);
      setNonVisibility(newNonVisibility);
    }

    window.scrollTo(0, 0);
  };
  console.log(visibility)
  console.log(nonVisibility)

  return (
    <div className="new-wrapper">
      <div className="latest-news">
        <h2>Latest News</h2>
      </div>
      <div className="news-with-API">
        {news.slice(nonVisibility, visibility).map((item, index) => (
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
            <p>{item.url}</p>
          </div>
        ))}
      </div>
      <div className="News-buttons">
        <button type="button" onClick={loadMore}>1</button>
        <button type="button" onClick={loadMore2}>2</button>
        <button type="button" onClick={loadMore3}>3</button>
        <button
          type="button"
          onClick={next}
          disabled={visibility >= news.length}
          style={{ display: visibility >= news.length ? "none" : "inline-block" }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default News;