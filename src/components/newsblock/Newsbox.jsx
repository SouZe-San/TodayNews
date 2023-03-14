import React, { useEffect, useState } from "react";
import NewsItem from "../newsItem/NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../spinner/Spinner";
import PropTypes from "prop-types";
import "./style.scss";

export default function Newsbox(props) {
  //@ Define The States Of Variables --------------
  const [articles, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1); //--> page number
  const [totalResults, setTotalResults] = useState(0);

  // ^ Function to transform Capitalize ----
  const capitalized = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1); // First char will be uppercase and other remain same and add
  };

  //@ Create a function for Update the News and Put Data in Variable ---------

  const newsUpdate = async () => {
    // const url = "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=27e6a013940a491f87cfa8e0b063400b"; --> Default url

    props.setProgress(10); // ---> This for progress Bar On top of the navbar
    // Edited By using Propd
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=27e6a013940a491f87cfa8e0b063400b&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url); // --> Waiting for fetching data
    props.setProgress(30); // ---> 30% progress complete
    let newsData = await data.json(); // ---> convert json to array
    props.setProgress(70);
    setArticle(newsData.articles);
    setTotalResults(newsData.totalResults);
    setLoading(false);
    props.setProgress(100); //--- data fetch complete to 100%
  };

  useEffect(() => {
    document.title = `TodaysNews-${capitalized(props.category)}`;
    newsUpdate();
  });

  // @ Data-fetching for Infinite Scroll and add  more data with previous data

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=27e6a013940a491f87cfa8e0b063400b&page=${page}&pageSize=${props.pageSize}`;
    setPage(page + 1); ///Add +1 With prev page number
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticle(articles.concat(parsedData.articles)); // Concat data with previous data,,,,
    setTotalResults(parsedData.totalResults);
  };

  return (
    <div className="mainBox">
      <h1 className="text-center mt-4 newsHeadline ">
        Todays Hot News - top {capitalized(props.category)} Headline{" "}
      </h1>
      {loading && <Spinner />} {/* Adding a Spinner that show if loading happens*/}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container grid grid-cols-3 gap-4 justify-items-center content-center  pt-4 justify-self-center">
          {articles.map((element) => {
            return (
              <div key={element.url}>
                <NewsItem
                  title={element.title ? element.title : ""}
                  description={
                    element.description ? element.description : "For Know more visit our site"
                  }
                  imgUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div>
      </InfiniteScroll>
    </div>
  );
}

Newsbox.defaultProps = {
  pageSize: 8,
  category: "general",
};

Newsbox.propTypes = {
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
