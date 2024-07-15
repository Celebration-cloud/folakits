import React from 'react'
import styles from './FirstContent.module.css'
function FirstContent() {
  return (
    <div>
      <div id="carouselExampleIndicators" cla="carousel slide" data-bs-ride="carousel">
  <div cla="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" cla="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div cla="carousel-inner">
    <div cla="carousel-item active">
      <img src="..." cla="d-block w-100" alt="..."/>
    </div>
    <div cla="carousel-item">
      <img src="..." cla="d-block w-100" alt="..."/>
    </div>
    <div cla="carousel-item">
      <img src="..." cla="d-block w-100" alt="..."/>
    </div>
  </div>
  <button cla="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span cla="carousel-control-prev-icon" aria-hidden="true"></span>
    <span cla="visually-hidden">Previous</span>
  </button>
  <button cla="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span cla="carousel-control-next-icon" aria-hidden="true"></span>
    <span cla="visually-hidden">Next</span>
  </button>
</div>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
    </div>
  )
}

export default FirstContent
