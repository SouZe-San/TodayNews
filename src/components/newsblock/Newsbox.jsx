import React, { useEffect, useState } from "react";
import NewsItem from "../newsItem/NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../spinner/Spinner";
import PropTypes from "prop-types";
import "./style.scss";
import FloatingArrow from "../floatDiv/FloatingArrow";

export default function Newsbox(props) {
  //@ Define The States Of Variables --------------
  const [articles, setArticles] = useState([]); // this store the articles
  const [loading, setLoading] = useState(true); // Define the state of loading
  const pageSize = 9; // Use for Set that at one time Only 9 news Item will come
  const [page, setPage] = useState(1); //--> page number ..using pageSize and totalResult we can calculate how many page will reamin
  const [totalResults, setTotalResults] = useState(0); //......this Use for collect the Total number of the news item
  const [showButton, setShowButton] = useState(false); // The back-to-top button is hidden at the beginning

  //^ Function to transform Capitalize ----
  const capitalized = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1); // First char will be uppercase and other remain same and add
  };

  // @ Defines Function For API handling _---------------

  //^  Function For fetching Data from API ------
  const DataFetch = async () => {
    props.setProgress(10); // ---> This for progress for progress-Bar On top of the navbar
    // const URL = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=d7c7e2690d734af5811eff77cb56a570&pageSize=${pageSize}&page=${page}`;
    const URL = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=27e6a013940a491f87cfa8e0b063400b&pageSize=${pageSize}&page=${page}`;

    setLoading(true);
    const data = await fetch(URL); // --> Waiting for fetching data form api through the url
    props.setProgress(30);
    const parsedData = await data.json(); // ---> convert json to array
    props.setProgress(50);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100); //---  when data fetch complete bar progress is 100%
  };

  useEffect(() => {
    document.title = `TodaysNews-${capitalized(props.category)}`;
    DataFetch();
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  //^  Function for Fetching more data, after first time have collect the data --------
  const fetchMoreData = async () => {
    // const URL = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=d7c7e2690d734af5811eff77cb56a570&pageSize=${pageSize}&page=${page}`;
    const URL = `https://newsapi.org/v2/top-headlines?country=us&category=${
      props.category
    }&apiKey=27e6a013940a491f87cfa8e0b063400b&pageSize=${pageSize}&page=${page + 1}`;

    setPage(page + 1); ///Add +1 With prev page number ... by this we can get the data which are available in next..
    const data = await fetch(URL);
    const parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles)); // Concat data which present in next page ,with previous data,,,,
    setTotalResults(parsedData.totalResults);
  };

  // @ Return Element ----------

  return (
    <div className="mainBox">
      <h1 className="text-center mt-4 newsHeadline ">
        Todays Hot News - top {capitalized(props.category)} Headline{" "}
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-4 justify-items-center content-center  pt-12 px-8 justify-self-center pb-8r">
          {articles.map((element) => {
            return (
              <div key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 90) : ""}
                  description={
                    element.description
                      ? element.description.slice(0, 80)
                      : "For Know more visit our site"
                  }
                  imgUrl={element.urlToImage} //props for Image url
                  newsUrl={element.url} // url of details news
                  author={element.author} // name of Author
                  date={element.publishedAt}
                  source={element.source.name} //description
                />
              </div>
            );
          })}
        </div>
        {showButton && <FloatingArrow />}
      </InfiniteScroll>
    </div>
  );
}

Newsbox.defaultProps = {
  category: "general",
};

Newsbox.propTypes = {
  category: PropTypes.string,
};
