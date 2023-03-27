import React from "react";
import "./itemsStyle.scss";

export default function NewsItem(props) {
  // @ Destructuring The Props Which Send form its Parent div ----------
  let { title, description, imgUrl, newsUrl, author, date, source } = props;

  // @ return the News Card Item ----
  return (
    <div className="hover:scale-[1.01] mainItemDiv">
      <div
        className="max-w-sm rounded overflow-hidden shadow-lg h-full mt-8   hover:shadow-md
        hover:shadow-gray-500"
      >
        <div className="sourceTag flex justify-end">
          <span> {source}</span>
        </div>
        <img
          className="w-full h-[16rem]"
          src={
            !imgUrl
              ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg"
              : imgUrl
          }
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4 card-body">
          <div className="font-bold text-xl mb-2  card-title">{title}...</div>
          <p className="text-gray-700 text-base card-description">{description}.........</p>
          <p className="text-gray-700 text-base">
            {" "}
            <small>
              {/* If Author Null Then Print Unknown    || //^ Which date will send that will pass to Date obj and shown as GMT string */}
              By {!author ? "Unknown" : author} <br /> on {new Date(date).toGMTString()}
            </small>
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-600 hover:text-white">
            <a href={newsUrl} target="_blank">
              Continue
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
