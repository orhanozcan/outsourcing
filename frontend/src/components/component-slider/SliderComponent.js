
import React from 'react';

class SliderComponent extends React.Component {
    render() {
        return <div id="carouselExampleIndicators" className="carousel slide " data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner" style={{ height: '450px' }}>
                <div className="carousel-item active h-100">
                    <img className="d-block w-100 " src="https://mdbootstrap.com/img/Photos/Slides/img%20(72).jpg" alt="First slide" />

                    < div className="carousel-caption  text-left">
                        <h5>Buralara yaz günü kar yağıyor canım</h5>
                        <p>Ölene kadar Seni bekleyemem</p>
                    </div>
                </div>
                <div className="carousel-item h-100">
                    <img className="d-block w-100 " src="https://mdbootstrap.com/img/Photos/Slides/img%20(67).jpg" alt="Second slide" />
                    < div className="carousel-caption ">
                        <h5>Buralara yaz günü kar yağıyor canım</h5>
                        <p>Ölene kadar Seni bekleyemem</p>
                    </div>

                </div>
                <div className="carousel-item h-100">
                    <img className="d-block w-100 " src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg" alt="Third slide" />
                    < div className="carousel-caption text-right ">
                        <h5>Buralara yaz günü kar yağıyor canım</h5>
                        <p>Ölene kadar Seni bekleyemem</p>
                    </div>

                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>;

         



    }
}

export default SliderComponent;



