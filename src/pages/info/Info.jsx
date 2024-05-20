import React, { useEffect } from "react";
import "./Info.css";

const Info = () => {
  useEffect(() => {
    // Aggiunge una classe al body quando il componente si monta
    document.body.classList.add("info-page-background");

    // Rimuove la classe dal body quando il componente si smonta
    return () => {
      document.body.classList.remove("info-page-background");
    };
  }, []);

  return (
    <div className="info-page">
      <div className="whitespace-300"></div>
      <div className="container">
        <div className="info-row">
          <div className="info-col">
            <div className="info-copy">
              <p className="header">ABOUT</p>
              <p className="bio">
                Designer, producer and selector based in Bologna, Italy.
                Born and raised in Bologna, mid-north Italy, he pursued his passion for design and multi-media art disciplines graduating at Alma Mater Studiorum in Industrial Product Design.
                This academic foundation laid the groundwork for his deep engagement with visual arts and graphic design, paving the way for him to become a remarkable graphic designer and visual artist. Marco's career path began with interships and from significant experiences in ADV and communications agencies, working in both advertising graphics and video editing and direction as well as installations and video mapping where he honed his skills and developed a keen understanding of visual communication and branding. These roles not only deepened his design skills, but also enriched his approach to visual and interactive media.
              </p>
              <br />
              <p className="bio">
                Embracing the digital revolution, Marco transitioned to freelancing, a move that expanded his professional horizons and led to collaborations with other experts across various disciplines, further enhancing his expertise in UX studies. This skill stems from his extensive experience working across diverse fields with a variety of clients, ranging from fashion to institutional and entertainment event production, as well as corporate identity and music.
                His freelance career has been marked by his ability to develop tailor-made websites, from scratch or using no-code tools, making each design not just visually striking but also optimized for user interaction through intuitive and innovative interfaces. This shift allowed Marco to dive deeper into the digital realm, tackling front-end development and exploring new ways to integrate visual and technical aesthetics in his projects.

              </p>
              <br />
              <p className="bio">
                Marco’s distinctive sound as a music producer blends ambient music, modern psychedelic techno with deep tribal influences, crafting immersive auditory experiences that transcend conventional boundaries. His personal research delves into the symbiotic relationship between visual rhythm, detail, and the evolving language of visual art as influenced by technology and subcultures. Marco’s work is a continuous exploration of synesthesia, integrating sight and sound in a way that reflects his devotion to aesthetic minimalism, combined with an chaotic post-internet abstractism.

              </p>
            </div>
          </div>
          <div className="info-col img">
          </div>
        </div>
        <div className="info-row info-row-2">
          <div className="info-col">
            <div className="info-img-2">
              <div className="img-2"></div>
            </div>
          </div>
          <div className="info-col">
            <div className="info-contact-2">
              <p className="header">CONTACTS</p>
              <p className="bio">Represented by and co-founder of Pausa Lab</p>
              <p className="bio">marcomaldarella@gmail.com</p>
              <p className="bio">+39 345 26 82 913</p>
              <p>
                <a className="bio" href="#">Instagram</a>
              </p>
              <p>
                <a className="bio" href="#">Soundcloud</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
