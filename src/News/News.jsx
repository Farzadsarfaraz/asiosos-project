import React, { useEffect, useState } from "react";
import "./News.css";
import axios from "axios";
import { Link } from "react-router-dom";

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

// https://saurav.tech/NewsAPI/

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://saurav.tech/NewsAPI/top-headlines/category/health/in.json"
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
              <img onClick={()=>window.location.href =`${item.url}`} src={item.urlToImage} style={{cursor:"pointer"}} alt="Photo"/>
              </div>
              <span className="tec">{item.source.name}</span>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <p>{`Publiched At: ${item.publishedAt}`}</p>
            </div>
          );
        })}
      </div>
      </div>
    </div>
  );
};

export default News;
