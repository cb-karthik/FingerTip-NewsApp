import React from "react";

const Newsitem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3 ">
      <div className="card " style={{ width: "18rem" }}>
        <img src={!imageUrl ? "https://img.freepik.com/free-vector/top-headlines-news-themem-background_1017-14199.jpg?w=2000" : imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title"> {title}</h5>
          <h6>
            <span className="badge bg-secondary bg-success">{source}</span>
          </h6>

          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted ">
              {" "}
              by {!author ? "Unknow" : author} On {new Date(date).toGMTString()}
            </small>
          </p>
          <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};
export default Newsitem;
