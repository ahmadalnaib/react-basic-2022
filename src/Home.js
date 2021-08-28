import {useState} from 'react';

const Home = () => {
  
  const [blogs,setBlogs]=useState([
    {title:"title1",body:"body1",author:"ahmed",id:1},
    {title:"title2",body:"body1",author:"dfdf",id:2},
    {title:"title3",body:"body1",author:"ali",id:3},
  ]);

  return (  
    <div className="home">
     {blogs.map((blog)=>(
       <div className="blog-preview" key={blog.id}>
         <h2>{blog.title}</h2>
         <p>written by:{blog.author}</p>
      </div>
     ))}
    </div>
  );
}
 
export default Home;