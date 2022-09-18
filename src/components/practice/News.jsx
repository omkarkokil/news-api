import React , {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

const News = () => {

  const [news , setNews] = useState([])

  const fetchnew = () => {
      axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=5731e635b97a4c16b525e1f65e36cc6d").then((res) => {
            console.log(res);
            setNews(res.data.articles
              )
      })
  }
  return (
    <>
    <div className="container my-3" >
        <button className='btn btn-primary my-2 mx-4' onClick={fetchnew}>FetchNews</button>
    </div>

      
        <div className="container">
          <div className="row">

              {
                news.map((ele,ind)=>{
                  return(
                    <div className="col-4 gy-2" key={ind}>
                    <div className="card" >
                        <img src={ele.urlToImage} className="card-img-top" alt="no image found"/>
                  <div className="card-body">
                    <h5 className="card-title">{ele.title}</h5>
                    <p className="card-text">{ele.description}</p>
                    <a href={ele.url} className="btn btn-primary">Main source</a>
                  </div>
                </div>
            </div>
                    )
                })
              }


          </div>
        </div>
        
    </>
  )
}

export default News
