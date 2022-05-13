import React from 'react'
import heart from '../img/heart.svg'
import star from '../img/star.svg'

const Card = (props) => {
  return (
    <div class="card">
      <img src={"https://picsum.photos/240/340?r=" + props.id} class="card-image" alt="card-img"/>
      <img src={heart} class="like" alt="heart-img"/>
      <img src={star} class="star" alt="star-img"/><span class="rating">4.98</span><span class="reviews">(130)</span><span class="country">· United States</span>
      <p class="place">Plan The Perfect New York Vacation</p>
      <p class="price">From $102 MXN / <span>person</span></p>
    </div>
  )
}

export default Card
