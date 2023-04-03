import React from "react";
import bicycle from "../../images/bicycle.png"
import car from "../../images/car.png"
import box from "../../images/box.png"
import { Link } from "react-router-dom";
// import truck from "../../images/truck.png"

const HomeService = () => {
  const service = [
    {
      icons: bicycle,
      heading: "Book a company representative",
      text: "Technology and its application are fundamental at GIGL. We understand the role of technology in providing an exceptional customer experience. For this reason, our processes, products and services are built around modern technology to help us deliver your shipments cheaper, safely and at the speed of light.",
      button: "Book Now",
      link:"book-now"
    },

    {
      icons: car,
      heading: "Transportation Services",
      text: "Technology and its application are fundamental at GIGL. We understand the role of technology in providing an exceptional customer experience. For this reason, our processes, products and services are built around modern technology to help us deliver your shipments cheaper, safely and at the speed of light.",
      button: "HIRE A CAR",
      link: "hire"
    },

    {
      icons: box,
      heading: "Pickup an Item",
      text: "Technology and its application are fundamental at GIGL. We understand the role of technology in providing an exceptional customer experience. For this reason, our processes, products and services are built around modern technology to help us deliver your shipments cheaper, safely and at the speed of light.",
      button: "PICKUP NOW",
    },
    
    // {
    //     icons: truck,
    //     heading: "Express Delivery",
    //     text: "Technology and its application are fundamental at Fabs logistics. We understand the role of technology in providing an exceptional customer experience. For this reason, our processes, products and services are built around modern technology to help us deliver your shipments cheaper, safely and at the speed of light..",
    //     button: "<button>SEND GOODS</>.",
 
    //   }, 
  ];
  return (
    <div className="d-flex flex-column justify-content-center w-100 parent-service ">
      <div className="text-start mb-5">
        <h1 className="p-2">OUR SERVICES</h1>
      </div>

      <div className="w-100 d-flex justify-content-center ">
      <div className="row justify-content-center align-items-center mx-0 services">
        {service?.map(({icons, heading, text, button, link}, i) => (
            <div className="col-lg-4 col-md-4 col-sm-6 text-center align-items-center pb-3" key={i}>
                <div className="card border-0 text-center h-100  p-4 align-items-center ">
                  <img src={icons} alt="" className="pb-5"/>
                    <h6 className="service-h pb-3">{heading}</h6>
                    <p className="service-p pb-4">{text}</p>
                    <Link to={`/${link}`} className="services-btn p-2">{button}</Link>
                </div>
            </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default HomeService;
