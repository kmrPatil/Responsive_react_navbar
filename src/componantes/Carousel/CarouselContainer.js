import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import '../../App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import '../../assets/CSS/main.css';

//Import images 
import image1 from '../../assets/images/image1.jpg';
import image2 from '../../assets/images/image2.jpg';
import image3 from '../../assets/images/image3.jpg';
import image4 from '../../assets/images/image4.jpg';
import image5 from '../../assets/images/image5.jpg';
import image6 from '../../assets/images/image6.jpg';

function CarouselContainer() {
    return (
        <div className="carousel_div">
              <Carousel showArrows={false} showThumbs={false} infiniteLoop={false} 
              useKeyboardArrows={true} showStatus={false} autoPlay={false}
              swipeable={true} emulateTouch={true} >
                <div>
                    <div className="img_div">
                    <img className="car_image" src={image1} />
                    </div>
                </div>
                <div>
                    <div className="img_div"> 
                    <img className="car_image" src={image2}/>
                    
                     </div>
                </div>
                <div>
                    <div className="img_div">
                    <img className="car_image" src={image3} />
                     </div>
                </div>
                <div className="img_div">
                    <div>
                    <img className="car_image" src={image1} />
                    </div>
                </div>
                <div>
                    <div className="img_div">
                    <img className="car_image" src={image5}/>
                    </div>
                </div>
                <div>
                    <div className="img_div">
                    <img className="car_image" src={image6} />
                    </div>
                    
                </div>
            </Carousel>


        </div>
    )
}

export default CarouselContainer
