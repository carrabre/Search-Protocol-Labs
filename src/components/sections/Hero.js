import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';
import  logo from "../../assets/images/logo.png"
// import logo from './images/logo.svg'

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }   

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
          <img
    className="mb-12"
    src={logo}
    alt="Logo"
    width={300}
    height={300}/>
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
            <span className="text-color-primary">Search Protocol Labs</span> <br></br> <br></br><span className="text-color-primary">Building Search Chain - a decentralized index of the worlds information.</span>
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
              This index will be used to train <b>AI models</b>, and provide an index for the future interface woven between <b>AI and Search</b><br></br><br></br>
              Google's motto of "don't be evil", relies on the 'Web2' principle of "trust us". History has proven time and time again that this model is flawed, but necessary, as ‘trustless’ operations have been so far both unprofitable and too complex to implement. <br></br><br></br> Enter Search Protocol. <br></br><br></br>  'Web3' relies on code meaning <b>we can't be evil.</b> Through the code that the index is built upon, we programatically can't spy on you, track you, or censor. <br></br><br></br>
              We're creating a whole new force of nature, something that cannot be shut down. Not by a court, not by a police force, not by nation-state.<br></br><br></br>
              What Bitcoin did for money is what we're doing for the world's access to information.<br></br><br></br>
                </p>
              <div className="reveal-from-bsottom" data-reveal-delay="600">
                {/* <ButtonGroup>
                  <Button tag="a" color="primary" wideMobile href="http://45.138.26.38:8002">
                    Launch App
                    </Button>
                  <Button tag="a" color="dark" wideMobile href="https://github.com/cruip/open-react-template/">
                    View on Github
                    </Button>
                </ButtonGroup> */}
              </div>
            </div>
          </div>
          {/* <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
            <a
              data-video="https://player.vimeo.com/video/694733441"
              href="#0"
              aria-controls="video-modal"
              onClick={openModal}
            >
              <Image
                className="has-shadow"
                src={require('./../../assets/images/video-placeholder.jpg')}
                alt="Hero"
                width={896}
                height={504} />
            </a>
          </div> */}
          {/* <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://player.vimeo.com/video/696231419"
            videoTag="iframe" /> */}
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;