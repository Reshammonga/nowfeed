import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingBar from "react-top-loading-bar";

export default function News(props) {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults,setTotalResults]=useState(0);
  // eslint-disable-next-line
  const [loading,setloading]=useState(false);
  const [progress,setProgress]=useState(10);
    // const [,setloading]=useState(false);



  useEffect(() => {
   
    document.title=`NowFeed - ${props.category}`;
    updatenews();
   // eslint-disable-next-line
  }, [props.category, props.country]);
  
        const updatenews = async () => {
          try{
            setProgress(30);
            setPage(page);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${page}`;
    setloading(true);
    let data = await fetch(url);
    let parsedata = await data.json();
        setProgress(70);
    setArticles(parsedata.articles || []);
    setTotalResults(parsedata.totalResults );
    setProgress(100);
    setloading(false);
          }catch(error){
            console.error("Error genterated  : "+error);
               setloading(false);
          }
      
  };


  const fetchMore=async()=>{
    try{
      const nextpage=page+1;
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${nextpage}`;
    setloading(true);
    let data = await fetch(url);
    let parsedata = await data.json();
    setArticles(articles.concat(parsedata.articles) || []);
    setTotalResults(parsedata.totalResults);
    setPage(nextpage);
    setloading(false);
    }catch(error){
      console.error("Error genterated :"+error);
      
    }


  }
// const prevbtn=()=>{
//     updatenews();
//     setPage(page-1)
// }

// const nextbtn=()=>{
//     updatenews();
//     setPage(page+1);
// }

const captialize=(string)=>{
  let lower=string.toLowerCase();
  return lower.charAt(0).toUpperCase()+lower.slice(1);
}
  return (
      <>
      <LoadingBar
      color="blue"
      progress={progress}
      setProgress={setProgress}></LoadingBar>
            <InfiniteScroll
        dataLength={articles.length}
        next={fetchMore}
        hasMore={articles.length<totalResults}
        loader={articles.length<totalResults && <Spinner />}>
    <div className="container d-flex flex-column align-items-center">
      <h1 className="text-center" style={{marginBottom:"40px" , marginTop:"80px"}}>{`NowFeed - ${captialize(props.category)} Headlines`}</h1>
   
      <div className="row my-3" style={{ width: "90vw" }}>
     
      {/* {loading && <Spinner></Spinner>} */}
        { articles.map((element) => {
          return (
                  <div  className="col-md-4 d-flex justify-content-center my-3" key={`${element.url}-${element.publishedAt}`}>
              <NewsItem
                title={element.title?element.title.slice(0,70):""}
                description={element.description?element.description.slice(0,30):""}
                urlToImage={element.urlToImage?element.urlToImage:process.env.PUBLIC_URL + "/logo512.png"}
                author={element.author?element.author:"Unknown"}
                publishedAt={element.publishedAt?element.publishedAt:"Not Known"}
                source={element.source.name?element.source.name:"Unknown"}
                url={element.url}

              ></NewsItem>
             
            </div> 
          
          );
        })}
          
      </div>
  
    </div>
   </InfiniteScroll>
          {/* <div className="d-flex justify-content-between mx-5">
        <button type="button" disabled={page<=1?true:false} className="btn" style={{backgroundColor: "#FF0B55", color:"white"}} onClick={prevbtn}>
          &larr; Previous
        </button>
        <button type="button" disabled={page<Math.ceil(totalResults/props.pageSize)?false:true} className="btn" style={{backgroundColor: "#FF0B55", color:"white"}} onClick={nextbtn}>
          Next &rarr;
        </button>
      </div> */}
    </>
  );
}
