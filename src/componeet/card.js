import React from 'react'

export default function card(props) {
  return (
    <div>
        <div className='card'>
            <img src={props.img} className="movie_img"/>
            <h3 className='movie_title'>{props.title}</h3>
            <h3 className='movie_story'>{props.story}</h3>
            <h3 className='movie_year'>{props.year}</h3>

        </div>
    </div>
  )
}
