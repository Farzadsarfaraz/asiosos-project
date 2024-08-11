import React, { useEffect, useState } from "react";
import "./News.css";
import axios from "axios";

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/everything?q=tesla&from=2024-07-11&sortBy=publishedAt&apiKey=88d7e405d776499d85be97e38517c5ed"
        );
        setNews(response.data.articles);
        console.log(response.data.articles);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="new-wrapper">
      <div className="latest-news">
      <h2>Latest News</h2>
      <div className="news-with-API">
        {news.map((item, index) => {
          return (
            <div key={index} className="API-pp">
              <div className="API-image">
              <img src={item.urlToImage} alt="Photo"/>
              </div>
              <span className="tec">Tec</span>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
      </div>
    </div>
  );
};

export default News;
