import React from 'react'

function Details() {
  return (
    <div class="container"> 
        <div class="row d-flex justify-content-center mt-5">
            <div class="col-md-6">
                <div id="myCarousel" class="carousel slide" data-ride="carousel" align="center">
                    <div class="carousel-inner"> <div class="carousel-item active">
                        <img src="https://i.imgur.com/bV1xmG5.jpg" class="rounded"/>
                        </div> <div class="carousel-item">
                            <img src="https://i.imgur.com/vgMi4nw.jpg" class="rounded"/> 
                            </div> <div class="carousel-item">
                                <img src="https://i.imgur.com/hRlGe10.jpg" class="rounded"/> 
                                </div> 
                            </div>
                            <ol class="carousel-indicators list-inline">
                                <li class="list-inline-item active">
                                    <a id="carousel-selector-0" class="selected" data-slide-to="0" data-target="#myCarousel">
                                        <img src="https://i.imgur.com/bV1xmG5.jpg" class="img-fluid rounded"/>
                                        </a> </li> <li class="list-inline-item">
                                            <a id="carousel-selector-1" data-slide-to="1" data-target="#myCarousel">
                                                <img src="https://i.imgur.com/vgMi4nw.jpg" class="img-fluid rounded"/>
                                                </a> </li> <li class="list-inline-item"> <a id="carousel-selector-2" data-slide-to="2" data-target="#myCarousel">
                                                    <img src="https://i.imgur.com/hRlGe10.jpg" class="img-fluid rounded"/></a> </li> </ol> </div> </div> </div>
</div>
  )
}

export default Details
