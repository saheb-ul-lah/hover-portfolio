import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <div className="container">
        <span className="span-text">
          <svg height="20pt" width="20pt" viewBox="0 0 20 20" style={{isolation: 'isolate'}} xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <clipPath id="_clipPath_bC9TwUVn0M3ipVC8aHmmX7RNkfzJwdgL">
                <rect height={20} width={20} />
              </clipPath>
            </defs>
            <g clipPath="url(#_clipPath_bC9TwUVn0M3ipVC8aHmmX7RNkfzJwdgL)">
              <rect fillOpacity={0} style={{fill: 'rgb(1,0,1)'}} height={20} width={20} />
              <path strokeMiterlimit={3} strokeLinecap="round" strokeLinejoin="round" stroke="rgb(0,0,0)" strokeWidth={1} fill="rgb(0,0,0)" d="M 10 1 L 10 9 L 15 9 L 10 19 L 10 12 L 5 12 L 10 1 Z" />
            </g>
          </svg>
          Join now
        </span>
        <button className="button">
          <span className="span-outside"> </span>
          <div className="circles">
            <span className="circle"> </span>
            <span className="circle"> </span>
            <span className="circle"> </span>
            <span className="circle"> </span>
            <span className="circle"> </span>
            <span className="circle"> </span>
            <span className="circle"> </span>
            <span className="circle"> </span>
            <span className="circle"> </span>
            <span className="circle"> </span>
            <span className="circle"> </span>
            <span className="circle"> </span>
            <span className="circle"> </span>
            <span className="circle"> </span>
            <span className="circle"> </span>
          </div>
        </button>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .container {
    position: relative;
    width: 300px;
    height: 100px;
    border-radius: 30px;
    overflow: hidden;
    cursor: pointer;
  }

  .button {
    border: none;
    width: 200%;
    height: 100%;
    background: linear-gradient(
        75deg,
        rgb(170, 55, 200) 10%,
        rgb(235, 100, 130) 20%,
        rgb(245, 95, 90) 40%,
        rgb(245, 110, 30) 60%,
        rgb(235, 100, 130) 80%,
        rgb(170, 55, 200) 90%
      ),
      linear-gradient(
        75deg,
        rgb(170, 55, 200) 0%,
        rgb(235, 100, 130) 20%,
        rgb(245, 95, 90) 40%,
        rgb(245, 110, 30) 60%,
        rgb(235, 100, 130) 80%,
        rgb(170, 55, 200) 100%
      );
    background-size: 50% 100%;
    animation: moveGradient 3s linear infinite paused;
  }

  .container:hover .button {
    animation-play-state: running;
  }

  .container:active {
    scale: 0.95;
  }

  @keyframes moveGradient {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 100% 0;
    }
  }

  .span-text {
    position: absolute;
    z-index: 3;
    width: 100%;
    height: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .span-outside {
    width: 300px;
    height: 95px;
    justify-content: center;
    align-items: center;
    display: flex;
    border-radius: 30px;
    border: 2px solid rgba(255, 255, 255, 0.7);
    background-color: #ffffff10;
    filter: blur(1px);
    z-index: 3;
  }

  .span-text > svg {
    position: relative;
    width: 25px;
    height: 25px;
    margin-right: 5px;
  }

  .circles .circle {
    position: absolute;
    background-color: #fff;
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }

  .circles .circle:nth-child(1) {
    position: absolute;
    background-color: rgba(255, 255, 255, 0.2);
    filter: blur(20px);
    top: -80px;
    left: 180px;
  }

  .circles .circle:nth-child(2) {
    position: absolute;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 0;
    filter: blur(10px);
    top: -10px;
    left: -50px;
  }

  .circles .circle:nth-child(3) {
    position: absolute;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 10px 80px 80px 40px;
    width: 60px;
    height: 40px;
    top: 30px;
    left: 35px;
    filter: blur(10px);
  }

  .circles .circle:nth-child(4) {
    position: absolute;
    background-color: #fff;
    rotate: 10deg;
    width: 40px;
    height: 40px;
    top: 60px;
    left: 130px;
    filter: blur(20px);
  }

  .circles .circle:nth-child(5) {
    position: absolute;
    background-color: #fff;
    width: 70px;
    height: 70px;
    top: 25px;
    left: 250px;
    filter: blur(18px);
  }

  .circles .circle:nth-child(6) {
    position: absolute;
    background-color: #fff;
    rotate: 10deg;
    width: 40px;
    height: 40px;
    top: 30px;
    left: 190px;
    filter: blur(10px);
  }

  .circles .circle:nth-child(7) {
    position: absolute;
    background-color: transparent;
    border-radius: 0 0 0 20px;
    border-left: 2px solid #fff;
    border-bottom: 2px solid #fff;
    width: 210px;
    height: 20px;
    top: 0px;
    left: 20px;
    filter: blur(2px);
  }

  .circles .circle:nth-child(8) {
    position: absolute;
    background-color: transparent;
    border-radius: 0;
    border-bottom: 6px solid #fff;
    width: 60px;
    height: 20px;
    top: 60px;
    left: 60px;
    filter: blur(5px);
  }

  .circles .circle:nth-child(9) {
    position: absolute;
    background-color: transparent;
    border-radius: 0 20px 0 0;
    border-right: 2px solid #fff;
    border-top: 2px solid #fff;
    width: 50px;
    height: 20px;
    top: 19px;
    right: 20px;
    filter: blur(2px);
  }

  .circles .circle:nth-child(10) {
    position: absolute;
    background-color: transparent;
    border-radius: 0 20px;
    border-left: 2px solid #fff;
    border-bottom: 2px solid #fff;
    width: 30px;
    height: 50px;
    bottom: 10px;
    right: -10px;
    filter: blur(2px);
  }

  .circles .circle:nth-child(11) {
    position: absolute;
    background-color: transparent;
    border-radius: 0 20px 0 0;
    border-right: 2px solid #fff;
    border-top: 2px solid #fff;
    width: 50px;
    height: 20px;
    bottom: 1px;
    right: 20px;
    filter: blur(2px);
  }

  .circles .circle:nth-child(12) {
    position: absolute;
    background-color: transparent;
    border-radius: 0 0 0 20px;
    border-left: 2px solid #fff;
    border-bottom: 2px solid #fff;
    width: 210px;
    height: 20px;
    bottom: 20px;
    left: 20px;
    filter: blur(2px);
  }

  .circles .circle:nth-child(13) {
    position: absolute;
    background-color: transparent;
    border-radius: 0 20px 0 0;
    border-right: 2px solid #fff;
    border-top: 2px solid #fff;
    width: 20px;
    height: 50px;
    top: 10px;
    left: 0px;
    filter: blur(2px);
  }

  .circles .circle:nth-child(14) {
    position: absolute;
    background-color: white;
    border-radius: 0 0 80px 40px;
    width: 90px;
    height: 20px;
    top: 0px;
    left: 20px;
    filter: blur(9px);
  }

  .circles .circle:nth-child(15) {
    position: absolute;
    background-color: transparent;
    border-radius: 0;
    border-bottom: 6px solid #fff;
    width: 60px;
    height: 20px;
    top: 0px;
    left: 30px;
    filter: blur(3px);
  }`;

export default Button;
