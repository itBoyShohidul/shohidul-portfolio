// Dependencies
import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";

//Internal imports
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

import "../styles/globals.css";
import "../styles/index.css";

//Icons
import {
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaHtml5,
  FaCss3Alt,
  FaSquareJs,
  FaBootstrap,
  FaSass,
  FaNode,
  FaReact,
  FaLink,
  FaStar,
} from "react-icons/fa6";

import {
  SiTailwindcss,
  SiMongodb,
  SiRedux,
  SiExpress,
  SiNextdotjs,
  SiWordpress,
  SiPagespeedinsights,
  SiTelegram,
  SiTwitter,
  SiInstagram,
  SiSkype,
  SiFacebook,
  SiLinkedin,
  SiPinterest,
  SiDiscord,
  SiStackoverflow,
  SiReddit,
  SiMedium,
  SiQuora,
  SiFiverr,
  SiUpwork,
  SiFreelancer,
  SiGmail,
  SiGithub,
  SiGooglehangouts,
  SiMessenger,
} from "react-icons/si";

import { AiFillSetting, AiFillSecurityScan } from "react-icons/ai";

import { BsPersonCircle } from "react-icons/bs";

// Pictures
import picture from "../images/picture.png";

function Index() {
  const [category, setCategory] = useState("All");
  const [load, setLoad] = useState(5);

  const buttons = [
    "All",
    "MERN Stack",
    "Front-end",
    "Back-end",
    "On-page SEO",
    "Off-page SEO",
    "Technical SEO",
    "Backlink",
    "Guest Post",
  ];
  return (
    <>
      <Head>
        <title>itBoyShohidul - Web Developer and SEO Expert Portfolio</title>
      </Head>
      <main className="main">
        <div className="intro">
          <div className="intro-left">
            <Image
              src={picture}
              height={500}
              width={500}
              alt="itBoyShohidul_image"
              priority
            />
          </div>
          <div className="intro-right">
            <h1>Shohidul Islam</h1>
            <h4>MERN Stack Web Developer & SEO Expert</h4>
            <div className="intro-contact-holder">
              <div className="intro-contact">
                <FaPhone />
                <p>+880 17** *****2</p>
              </div>
              <div className="intro-contact">
                <FaEnvelope />
                <p>msi.shohidul1@gmail.com</p>
              </div>
              <div className="intro-contact">
                <FaLocationDot />
                <p>R685 - Mohonpur, Rajshahi, Bangladesh</p>
              </div>
              <p className="intro-description">
                A highly skilled and dynamic MERN stack web developer and SEO
                expert, dedicated to crafting cutting-edge web applications that
                dominate search engine rankings. Proficient in MongoDB,
                Express.js, React.js, and Node.js, I have a proven track record
                of building responsive and user-centric websites. Combining my
                expertise in web development with strategic SEO knowledge, I
                employ advanced techniques such as keyword research, on-page
                optimization, and link building to ensure maximum visibility and
                organic traffic. My passion for innovation and commitment to
                excellence drive me to deliver exceptional results that elevate
                your online presence.
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="menu sec-spacer">
          <ul>
            {buttons.map((button, index) => {
              return (
                <li key={index}>
                  <button
                    className="menu-btn"
                    onClick={() => {
                      setCategory(button);
                    }}
                  >
                    {button}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <h2 className="header">Projects</h2>
        <hr className="header-bar" />
        <div className="project-holder brief sec-spacer">
          <Projects category={category} load={load} />

          <button
            className="load-btn"
            onClick={() => {
              setLoad((prevLoad) => {
                prevLoad + 5;
              });
            }}
          >
            Load More
          </button>
        </div>

        <h2 className="header">Services</h2>
        <hr className="header-bar" />
        <div className="brief sec-spacer">
          <p className="intro-description">
            My comprehensive web development and SEO services offer a powerful
            combination of technical expertise and innovative strategies. As web
            development specialist, I create cutting-edge websites and
            applications that captivate users with seamless functionality and
            stunning designs. With a focus on MERN stack technologies, I ensure
            optimal performance and responsiveness across all platforms.
            Simultaneously, my SEO services drive organic traffic and enhance
            search engine visibility through meticulous keyword research,
            on-page optimization, and link building. I thrive on delivering
            exceptional results, elevating your online presence and ensuring a
            user-centric experience that propels your business to new heights.
            Partner with me to unlock your digital potential.
          </p>
          <div className="services-container">
            <div className="services-left">
              <h3>As a Web Developer</h3>
              <p className="intro-description">
                As a dedicated web developer, I am driven by a passion for
                crafting innovative and user-centric digital experiences. My
                expertise in MERN stack development and SEO strategies empowers
                me to create high-performing websites that leave a lasting
                impression in todays competitive online landscape. By focusing
                on responsive design and seamless user interfaces, I ensure that
                visitors have engaging interactions and smooth navigation.
                Leveraging the latest trends and best practices, I optimize
                websites for search engines, driving organic traffic and
                boosting visibility. I take pride in transforming ideas into
                reality and delivering exceptional results that align with your
                business objectives. Lets collaborate to bring your vision to
                life and make your online presence truly stand out.
              </p>
              <b>Services:</b>
              <ul>
                <li>✅ Front-end development</li>
                <li>✅ Back-end development</li>
                <li>✅ Full stack(MERN) development</li>
                <li>✅ Website creation & development</li>
                <li>✅ Web application development</li>
                <li>✅ PSD to HTML convertion</li>
                <li>✅ Landing page design & development</li>
                <li>✅ Wordpress install & customization</li>
                <li>✅ Worpress blog & theme customization</li>
              </ul>
              <br />
              <b>Features of my service:</b>
              <ul>
                <li>✅ High quality service</li>
                <li>✅ Full custom webpage</li>
                <li>✅ Image slider</li>
                <li>✅ Contact form</li>
                <li>✅ Google map integration</li>
                <li>✅ Friendly & easy to use admin panel</li>
                <li>✅ Sample-based website</li>
                <li>✅ Highly secured</li>
                <li>✅ SEO friendly</li>
                <li>✅ Fully responsive</li>
              </ul>
              <br />
            </div>
            <div className="services-right">
              <h3>As an SEO Expert</h3>
              <p className="intro-description">
                To rank a website, SEO is a fundamental thing. In SEO dofollow
                guest post backlinks are one of the best ways for ranking
                websites it calls link building also. High DA guest post link
                building gives a quick ranking on search engines. Guest post can
                be considered as high quality backlink it is a very fruitful way
                of link building. In SEO, a high quality backlink is equal to
                thousands of normal backlinks. I shall assist you in ranking
                your website on googles first page. I shall use the best link
                building SEO strategy for ranking your website. I shall take
                care of your links, competitor, and everything you need.
              </p>
              <b>Services:</b>
              <ul>
                <li>✅ Edu Gov profile backlink</li>
                <li>✅ Web 2.0 backlink</li>
                <li>✅ Guest post</li>
                <li>✅ Article submission</li>
                <li>✅ Backlink generate</li>
                <li>✅ Link building</li>
                <li>✅ Organic traffic growth</li>
              </ul>
              <br />
              <b>Features of my service:</b>
              <ul>
                <li>✅ High quality dofollow backlinks</li>
                <li>✅ Google news approval sites</li>
                <li>✅ 100% Google Indexable Backlinks</li>
                <li>✅ Contextual Links</li>
                <li>✅ High DA DR backlinks</li>
                <li>✅ Article Writing Included</li>
                <li>✅ Permanent stability</li>
                <li>✅ Optimized to improve faster the Google rankings</li>
                <li>✅ Friendly for all search engines</li>
              </ul>
              <br />
              <p>
                I have a huge collection of different types of websites to
                generate backlinks | guest post | article submission. I am sure
                that these website will attract you.
              </p>
            </div>
          </div>
          <p className="intro-description">
            As a proactive collaborator, I thrive in fast-paced environments and
            possess a unique blend of MERN stack development skills and SEO
            expertise. By combining these talents, I create visually stunning
            and highly functional websites that are also optimized for search
            engines. If you are in need of a talented MERN stack web developer
            and SEO expert who can deliver exceptional websites with top-notch
            search engine visibility, I am here to turn your vision into
            reality. With my technical prowess and dedication to achieving
            results, I am confident in my ability to contribute to your online
            success. Lets work together to create something extraordinary!
          </p>
        </div>

        <h2 className="header">Skills</h2>
        <hr className="header-bar" />
        <div className="skills sec-spacer">
          <ul className="icons">
            <li>
              <FaHtml5 />
              <h4>HTML</h4>
            </li>
            <li>
              <FaCss3Alt />
              <h4>CSS</h4>
            </li>
            <li>
              <FaSquareJs />
              <h4>JavaScript</h4>
            </li>
            <li>
              <FaBootstrap />
              <h4>Bootstrap</h4>
            </li>
            <li>
              <SiTailwindcss />
              <h4>Tailwind</h4>
            </li>
            <li>
              <FaSass />
              <h4>SASS</h4>
            </li>
            <li>
              <SiMongodb />
              <h4>MongoDB</h4>
            </li>
            <li>
              <FaNode />
              <h4>NodeJS</h4>
            </li>
            <li>
              <SiExpress />
              <h4>ExpressJS</h4>
            </li>
            <li>
              <FaReact />
              <h4>ReactJS</h4>
            </li>
            <li>
              <SiRedux />
              <h4>Redux</h4>
            </li>
            <li>
              <SiNextdotjs />
              <h4>NEXT JS</h4>
            </li>
            <li>
              <SiWordpress />
              <h4>Wordpress</h4>
            </li>
            <li>
              <AiFillSecurityScan />
              <h4>SEO</h4>
            </li>
            <li>
              <SiPagespeedinsights />
              <h4>On Page</h4>
            </li>
            <li>
              <FaLink />
              <h4>Off Page</h4>
            </li>
            <li>
              <AiFillSetting />
              <h4>Technical</h4>
            </li>
          </ul>
        </div>

        <h2 className="header">Social Media & Contact</h2>
        <hr className="header-bar" />
        <div className="contact sec-spacer">
          <ul className="icons">
            <li>
              <a href="https://t.me/itBoyShohidul">
                <SiTelegram />
                <h4>Telegram</h4>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/itBoyShohidul">
                <SiTwitter />
                <h4>Twitter</h4>
              </a>
            </li>
            <li>
              <a href="mailto:msi.shohidul1@gmail.com">
                <SiGmail />
                <h4>Gmail</h4>
              </a>
            </li>
            <li>
              <a href="https://fiverr.com/itsShohidul">
                <SiFiverr />
                <h4>Fiverr</h4>
              </a>
            </li>
            <li>
              <a href="https://t.me/itBoyShohidul">
                <SiUpwork />
                <h4>Upwork</h4>
              </a>
            </li>
            <li>
              <a href="https://t.me/itBoyShohidul">
                <SiFreelancer />
                <h4>Freelancer</h4>
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/itBoyShohidul">
                <SiLinkedin />
                <h4>Linkedin</h4>
              </a>
            </li>
            <li>
              <a href="https://facebook.com/itBoyShohidul">
                <SiFacebook />
                <h4>Facebook</h4>
              </a>
            </li>
            <li>
              <a href="https://facebook.com/itBoyShohidul">
                <SiMessenger />
                <h4>Messenger</h4>
              </a>
            </li>
            <li>
              <a href="https://instagram.com/itBoyShohidul">
                <SiInstagram />
                <h4>Instagram</h4>
              </a>
            </li>
            <li>
              <a href="https://skype.com/itBoyShohidul">
                <SiSkype />
                <h4>Skype</h4>
              </a>
            </li>
            <li>
              <a href="https://pinterest.com/itBoyShohidul">
                <SiPinterest />
                <h4>Pinterest</h4>
              </a>
            </li>
            <li>
              <a href="https://discord.com/itBoyShohidul">
                <SiDiscord />
                <h4>Discord</h4>
              </a>
            </li>
            <li>
              <a href="https://github.com/itBoyShohidul">
                <SiGithub />
                <h4>Github</h4>
              </a>
            </li>
            <li>
              <a href="https://stackoverflow.com/itBoyShohidul">
                <SiStackoverflow />
                <h4>SWF</h4>
              </a>
            </li>
            <li>
              <a href="https://reddit.com/itBoyShohidul">
                <SiReddit />
                <h4>Reddit</h4>
              </a>
            </li>
            <li>
              <a href="https://medium.com/itBoyShohidul">
                <SiMedium />
                <h4>Medium</h4>
              </a>
            </li>
            <li>
              <a href="https://quora.com/itBoyShohidul">
                <SiQuora />
                <h4>Quora</h4>
              </a>
            </li>
          </ul>
        </div>

        <h2 className="header">Testimonials</h2>
        <hr className="header-bar" />
        <div className="testimonials sec-spacer">
          <div className="testimonial">
            <BsPersonCircle />
            <h5>Emily Reynolds</h5>
            <p>
              {" "}
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />{" "}
            </p>
            <p className="testimonial-text">
              Working with this web developer has been an absolute pleasure!
              Their expertise in MERN stack development and SEO has taken our
              website to new heights. They possess a unique blend of creativity
              and technical prowess, resulting in a visually stunning and
              user-friendly platform.
            </p>
          </div>
          <div className="testimonial">
            <BsPersonCircle />
            <h5>Jason Patel</h5>
            <p>
              {" "}
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />{" "}
            </p>
            <p className="testimonial-text">
              Our experience with this SEO expert has been nothing short of
              extraordinary! They possess an in-depth understanding of the
              ever-evolving digital landscape and have consistently boosted our
              websites visibility and organic traffic. Their strategic approach
              to keyword research, on-page optimization, and link building has
              resulted in significant improvements in search engine rankings.
              With their guidance, our online presence has soared, reaching new
              audiences and generating valuable leads.
            </p>
          </div>
          <div className="testimonial">
            <BsPersonCircle />
            <h5>Sarah Carter</h5>
            <p>
              {" "}
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />{" "}
            </p>
            <p className="testimonial-text">
              We highly recommend this web developer to anyone seeking a
              professional who can bring ideas to life with a touch of magic.
              They have undoubtedly become an invaluable asset to our team, and
              we look forward to future collaborations.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Index;
