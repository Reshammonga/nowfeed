import React from 'react'

export default function NewsItem(props) {
    let {author,title,description,url,urlToImage,publishedAt,source}=props;
  return (
   
        <div className="card " style={{width: "18rem"}}>
  <img src={urlToImage} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}..</p>
     <p className="card-text"><small className="text-body-secondary">Published By {author} at {new Date(publishedAt).toGMTString()} </small></p>
    <a href={url} className="btn " style={{backgroundColor: "#FF0B55", color:"white"}}>Know More</a>
  </div>
  <span className="badge text-bg-danger" style={{display:"flex", position:"absolute", justifyContent:"flex-end" ,top:0,right:0}}>{source}</span>
</div>

  )
}
