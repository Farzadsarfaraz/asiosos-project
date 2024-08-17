import React, { useEffect, useState } from "react";
import "./NewsFiltering.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import OIP from '../assets/OIP.jpg'

const NewsFiltering = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const params = useParams()

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://saurav.tech/NewsAPI/sources.json"
        );
        setNews(response.data.sources);
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
  return (
    <div className="new-wrapper">
      <div className="latest-news">
        <h2>Latest News</h2>
      </div>
      <div className="news-with-API">
        {news.filter((filtering)=>filtering.category == params.category).map((item, index) => (
          <div key={index} className="API-pp">
            <div className="API-image">
              <img
                onClick={() => (window.location.href = `${item.url}`)}
                src={OIP}
                style={{ cursor: "pointer" }}
                alt="Photo"
              />
            </div>
            <span className="tec">{item.name}</span>
            <h4>{item.category}</h4>
            <p>{item.description}</p>
            <p>{`Published in: ${item.country}`}</p>
            <p>{item.url}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsFiltering;