"use client";

import Image from "next/image";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import { Container } from "react-bootstrap";
import Slider from "react-slick";

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            style={{ display: "block", fontSize: "2rem", left: "-25px", zIndex: 1, position: 'absolute', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
            onClick={onClick}
        >
            <FaChevronLeft aria-hidden="true" className="custom-prev-icon" />
        </div>
    );
};

const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            style={{ display: "block", fontSize: "2rem", right: "-25px", zIndex: 1, position: 'absolute', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
            onClick={onClick}
        >
            <FaChevronRight aria-hidden="true" className="custom-next-icon" />
        </div>
    );
};

export default function Testimonials() {
    const testimonials = [
        {
            quote: "Gabe was very professional and did a fantastic job cleaning our car. He followed up after the job to make sure we were happy. Great service provided and the price was very reasonable. I would highly recommend Platinum Auto Detailing.",
            reviewerName: "Shane Webb",
            reviewerImage: "/images/no-profile.jpg",
            reviewDate: "7/15/2024"
        },
        {
            quote: "Ivan knows how to get your car clean and I  mean clean as in you just picked it up from the dealer that’s how fresh it looks. His prices are fair too! Will be using Ivan moving forward. Nothing beats great service coming to your door. Try him out, promise you won’t be disappointed.",
            reviewerName: "Luba Kobelak",
            reviewerImage: "/images/no-profile.jpg",
            reviewDate: "7/14/2024"
        },
        {
            quote: "Gabe and his coworker came to my house and did an outstanding job detailing my extremely dirty Dodge 1500. They were on time, meticulous and made it spotless. They are also extremely reasonably priced. I highly recommend them to anyone.",
            reviewerName: "Kenny T",
            reviewerImage: "/images/no-profile.jpg",
            reviewDate: "6/18/2024"
        },
        {
            quote: "Ivan and his team always do an exceptional job. They are very very thorough and really take their time to make your car look brand new. We have 3 kids so you can imagine our cars are a complete disaster from all of the snacking and winter mess. I cannot recommend Ivan and his team enough.",
            reviewerName: "Jodie Schaffer",
            reviewerImage: "/images/no-profile.jpg",
            reviewDate: "7/20/2024"
        },
        {
            quote: "Ivan was very accommodating to my schedule. His prices are reasonable too. He was prompt and diligently detailed my car. Very happy with his services and would highly recommend to others!",
            reviewerName: "Osama Syed",
            reviewerImage: "/images/no-profile.jpg",
            reviewDate: "7/03/2024"
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        swipeToSlide: true, // Enable swipe to slide

        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <Container className="text-center my-5 ">
            <h2 className="testimonial-section-heading">Reviews</h2>
            <h4 className="testimonial-section-subheading">Don't take our word for it, take theirs!</h4>
            <a href="https://www.google.com/maps/place/Platinum+Auto+Detailing/@43.6050995,-79.6386306,10z/data=!3m1!4b1!4m6!3m5!1s0x2dbc5a7ccd32a847:0x3cd1d469bce6d5e!8m2!3d43.6050995!4d-79.6386306!16s%2Fg%2F11vcxtvz5d?hl=en&entry=ttu" className="cta-button-small" target="_blank" rel="noopener noreferrer">Leave A Review</a>

            <Slider {...settings} className="testimonial-carousel mt-5">
                {testimonials.map((testimonial, index) => (
                    <div key={index}>
                        <div className="testimonial-item text-center">
                            <Image
                                src={testimonial.reviewerImage}
                                alt={testimonial.reviewerName}
                                width={100}
                                height={100}
                                className="rounded-circle mb-3"
                            />
                            <div className="mb-2">
                                {[...Array(5)].map((_, i) => <FaStar key={i} className="testimonial-star" />)}
                            </div>
                            <h5 className="reviewer-name">{testimonial.reviewerName}</h5>
                            <blockquote className="testimonial-blockquote">
                                <p className="mb-4">
                                    {testimonial.quote}
                                </p>
                            </blockquote>
                            <div>
                                <p className="text-muted">{testimonial.reviewDate}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </Container>
    );
}