import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.jpg";
import IMG6 from "../../assets/portfolio6.jpg";

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Hijabintee",
    tools: "Wordpress, Elementor, Woocommerce",
    demo: "https://hijabintee.com/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Race Drive | Motorsport Events",
    tools: "Wordpress, Elementor, Crocoblock",
    demo: "https://racedrive.co/",
  },
  {
    id: 3,
    image: IMG3,
    title: "HR Rewired",
    tools: "Wordpress, Elementor, Crocoblock",
    github: "https://github.com",
    demo: "https://hr-rewired.com/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Oxford Martial Arts Academy (OMAA)",
    tools: "Wordpress, Elementor, Woocommerce, Crocoblock",
    demo: "http://omaa.org.uk/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Grounded CBD",
    tools: "Wordpress, Elementor, Woocommerce, Crocoblock",
    demo: "https://groundedcbd.co.uk/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Tapa Restaurant In Edinburgh",
    tools: "Wordpress, Elementor, Crocoblock",
    demo: "https://tapaedinburgh.co.uk/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, tools, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <h4>{tools}</h4>
              <div className="portfolio__item-cta">
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                >
                  View Website
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
