import React from "react";
import ReactDom from "react-dom";


// Css
import './index.css'


// setup vars
const title = 'BMW series'
const rating = '4.2/5.0'
const image = 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'

// main function
function CarList(){
  return (
    <section className = 'carlist'>
    <Cars job = 'developer'/>
    <Cars title = 'random title' number = {22}/>
  </section>
  
  ); 
}

const Cars = (props) => {
  console.log(props);
  return <article className = 'car'>
   <img src = {image} alt = ''/>
 <h2>{title}</h2>
 <h3 style = {{color: '#617d98',fontSize: '0.75rem', marginTop: '0.25rem'}}>{rating}</h3>
 <p>{props.job}</p>
 <p>{props.title}</p>

    </article>}

ReactDom.render(<CarList />,document.getElementById('root')); 
 