import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = () => {
    let slideIndex = 1;
    
    useEffect(() => {
        showSlides(slideIndex);
    }, []);

    // Next/previous controls
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("slides");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }

    return (
        <div>
            <section className="slideshow-container">
                <div className="slides fade">
                    <div className="overlay" />
                    <img src="https://www.auto-data.net/images/f85/BMW-M5-F90-LCI-facelift-2020.jpg" alt="img" />
                    <div className="text">BMW M5 2021</div>
                </div>
                <div className="slides fade">
                    <div className="overlay" />
                    <img src="https://supercars.bg/wp-content/uploads/2022/08/MANSORY-Maybach-S%E2%80%91Class-01-2048x1365.jpg" alt="img" />
                    <div className="text">Mercedes Maybach S-Class</div>
                </div>
                <div className="slides fade">
                    <div className="overlay" />
                    <img src="https://www.auto-data.net/images/f117/Audi-Q8-e-tron-Sportback.jpg" alt="img" />
                    <div className="text">Audi Q8 e-tron</div>
                </div>
                <span className="prev" onClick={() => plusSlides(-1)}>&#10094;</span>
                <span className="next" onClick={() =>plusSlides(1)}>&#10095;</span>
                <div className="dots">
                    <span className="dot" onClick={() => currentSlide(1)} />
                    <span className="dot" onClick={() => currentSlide(2)} />
                    <span className="dot" onClick={() => currentSlide(3)} />
                </div>
            </section>

            <section className="new-cars">
                <div className="new-car">
                    <div className="car-img">
                        <img src="https://www.mercedes-benz.bg/content/bulgaria/bg/passengercars/_jcr_content/root/responsivegrid/simple_teaser_115569/simple_teaser_item_539514356.component.damq6.3309904986302.jpg/mercedes-benz-s-class-wv223-teaser-offers-and-services-2730x1536-11-2021.jpg" alt="" />
                    </div>
                    <div className="car-info">
                        <p>S-Class Limousine</p>
                        <p>Cares for what matters</p>
                    </div>
                </div>
                <div className="new-car">
                    <div className="car-img">
                        <img src="https://www.mercedes-benz.bg/content/bulgaria/bg/passengercars/_jcr_content/root/responsivegrid/simple_teaser_115569/simple_teaser_item_c_1458819270.component.damq6.3267553920231.jpg/home-stage-eqs-v297-2558x1066.jpg" alt="" />
                    </div>
                    <div className="car-info">
                        <p>New EQS</p>
                        <p>This is for you, world</p>
                    </div>
                </div>
                <div className="new-car">
                    <div className="car-img">
                        <img src="https://cf-cdn-v5.audi.at/media/ThreeColTeaser_TextImage_Image_Component/19665-paragraphs-559209-342423-image/dh-495-bc764f/18eb1c28/1675149505/egt-2021-2315-oe.jpg" alt="" />
                    </div>
                    <div className="car-info">
                        <p>Audi e-tron GT quattro</p>
                        <p>Pure sportsmanship and progressive luxury</p>
                    </div>
                </div>
                <div className="new-car">
                    <div className="car-img">
                        <img src="https://cf-cdn-v5.audi.at/media/ThreeColTeaser_TextImage_Image_Component/19665-paragraphs-559209-342421-image/dh-495-bc764f/d30c463f/1675149505/rsegt-2021-2359-oe.jpg" alt="" />
                    </div>
                    <div className="car-info">
                        <p>Audi RS e-tron GT</p>
                        <p>Clean energy and progressive power</p>
                    </div>
                </div>
                <div className="new-car">
                    <div className="car-img">
                        <img src="https://www.mercedes-benz.bg/content/bulgaria/bg/passengercars/_jcr_content/root/responsivegrid/simple_teaser_115569/simple_teaser_item.component.damq6.3306860991855.jpg/mercedes-benz-roadster-cabriolet-landingpage-models-sl-roadster-r232-2730x1536-03-2022.jpg" alt="" />
                    </div>
                    <div className="car-info">
                        <p>New AMG SL Roadster</p>
                        <p>A star is reborn</p>
                    </div>
                </div>
                <div className="new-car">
                    <div className="car-img">
                        <img src="https://cf-cdn-v5.audi.at/media/ThreeColTeaser_TextImage_Image_Component/19665-paragraphs-559209-342422-image/dh-495-bc764f/a31671dc/1675149505/q4-2021-2486-oe.jpg" alt="" />
                    </div>
                    <div className="car-info">
                        <p>Audi Q4 e-tron</p>
                        <p>Think in perspective. Drive further.</p>
                    </div>
                </div>
            </section>

            <section className="info">
                <div>
                    <h3>ENJOY THE WORLD OF CARS</h3>
                    <button><Link to="/cars" className="secondary-btn">CARS</Link></button>
                </div>
            </section>
        </div>
    );
};

export default Home;