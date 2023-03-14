import React from "react";

export default function NewsItem(props) {
  // @ Destructuring The Props Which Send form its Parent div
  let { title, description, imgUrl, newsUrl, author, date, source } = props;

  return (
    <div>
      <div class="max-w-sm rounded overflow-hidden shadow-lg h-full">
        <img
          class="w-full"
          src={
            !imgUrl
              ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg"
              : imgUrl
          }
          alt="Sunset in the mountains"
        />
        <div class="px-6 py-4 card-body">
          <div class="font-bold text-xl mb-2  card-title">{title}</div>
          <p class="text-gray-700 text-base card-description">{description}</p>
          <p className="text-gray-700 text-base">
            {" "}
            <small>
              {/* If Author Null Then Print Unknown */}
              By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}
            </small>
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <button class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-600 hover:text-white">
            <a href={newsUrl} target="_blank">
              Continue
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

// <div className="card">
//   <div className="card-Img"></div>
//   <div className="card-body">
//     <h4 className="card-title">title</h4>
//     <p className="card-description">
//       {" "}
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, dolor.
//     </p>
//     <p className="news-details">
//       <small>By Author on {new Date().toLocaleDateString()}</small>
//     </p>
//   </div>
// </div>
