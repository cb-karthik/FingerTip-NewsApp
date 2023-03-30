import React, { useEffect, useState} from "react";

import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from 'react-infinite-scroll-component';

const News = () =>  {
  const [articles,setArticles]=useState([])
  const [loading,setLoading]=useState([true])
  const [page,setPage]=useState(1)
  const [totalResults,TotalResults]=useState(0)

  // document.title = `${this.capitalizeFirstLetter(this.props.category)}-FingerTip News`;
  
  capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  
    
  }

  async updatedNews() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parseData = await data.json();
    this.props.setProgress(70);
    console.log(parseData);
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
       this.updatedNews();
  }
  

  fetchMoreData = async () => {
     this.setState({page:this.state.page +1})
     const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    
     let data = await fetch(url);
     let parseData = await data.json();
     console.log(parseData);
     this.setState({
       articles: this.state.articles.concat(parseData.articles),
       totalResults: parseData.totalResults,
           
     });
  };
 

  render() {
    return (
      <>
        <h1 className="text-center " style={{ margin: "40px 0px",marginTop: '120px' }}>
          FingerTip News- Top Headlines from {this.capitalizeFirstLetter(this.props.category)}
        </h1>
        
        {this.state.loading && <Spinner />}
       
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
<div className="container">
        <div className="row" >
          {
            this.state.articles.map((element) => {
              return (
                <div className="col md-4" key={element.url}>
                  <Newsitem
                    title={element.title ? element.title:""}
                    description={element.description ? element.description:""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
            
         </div>
        </div>
        </InfiniteScroll>
       
        
      </>
    );
  }
}


News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}; 
export default News
