import {useState} from 'react';
import BlogList from './BlogList';

const Home = () => {
  
  const [blogs,setBlogs]=useState([
    {title:"title1",body:"body1",author:"ahmed",id:1},
    {title:"title2",body:"body1",author:"dfdf",id:2},
    {title:"title3",body:"body1",author:"ali",id:3},
  ]);

  return (  
    <div className="home">
    <BlogList blogs={blogs}/>
    </div>
  );
}
 
export default Home;