import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    <StyledWrapper>
      <div className="grid">
        <div className="area" />
        <div className="area" />
        <div className="area" />
        <div className="area" />
        <div className="area" />
        <div className="area" />
        <div className="area" />
        <div className="area" />
        <div className="area" />
        <div className="area" />
        <div className="area" />
        <div className="area" />
        <div className="area" />
        <div className="area" />
        <div className="area" />
        <div className="wrap">
          <div className="card">
            <div className="glow-out1" />
            <div className="glow-out2" />
            <div className="glow" />
            <div className="card-bg" />
            <div className="card-content">
              <div className="glare" />
              <div className="glow-in1" />
              <div className="glow-in2" />
              <header>
                <p className="title">Post views</p>
                <div className="views">
                  <div className="number">
                    <div style={{-num: 2}}>
                      <span>2</span>
                      <span>0</span>
                      <span>1</span>
                      <span>2</span>
                    </div>
                    <div style={{-num: 6}}>
                      <span>6</span>
                      <span>0</span>
                      <span>1</span>
                      <span>2</span>
                      <span>3</span>
                      <span>4</span>
                      <span>5</span>
                      <span>6</span>
                    </div>
                    <div style={{-num: 7}}>
                      <span>7</span>
                      <span>0</span>
                      <span>1</span>
                      <span>2</span>
                      <span>3</span>
                      <span>4</span>
                      <span>5</span>
                      <span>6</span>
                      <span>7</span>
                    </div>
                    <div>
                      <span>0</span>
                    </div>
                  </div>
                  <span data-label="views" />
                </div>
                <div className="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
                    <defs>
                      <linearGradient id="gradient" x1={0} x2={0} y1={0} y2={1}>
                        <stop offset="0%" stopColor="#ffd867" />
                        <stop offset="70%" stopColor="#ec526b" />
                      </linearGradient>
                    </defs>
                    <path fill="url(#gradient)" d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                  </svg>
                </div>
              </header>
              <div className="chart">
                <svg width={389} height={145} viewBox="0 0 389 175" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="gradientPath1" x1="0%" x2="100%" y1="0%" y2="0%">
                      <stop offset="1%" stopColor="#ffc800" />
                      <stop offset="7%" stopColor="#ff694a" />
                      <stop offset="40%" stopColor="orange" />
                      <stop offset="60%" stopColor="#fa874b" />
                      <stop offset="70%" stopColor="#e8a2ab" />
                      <stop offset="90%" stopColor="#ff495c" />
                    </linearGradient>
                    <linearGradient id="gradientPath1b" x1="0%" x2="100%" y1="0%" y2="0%">
                      <stop offset="0%" stopColor="white" />
                      <stop offset="10%" stopColor="#fa4b5b" />
                      <stop offset="20%" stopColor="white" />
                      <stop offset="70%" stopColor="orange" />
                      <stop offset="80%" stopColor="#ffe7e1" />
                    </linearGradient>
                    <linearGradient id="gradientPath2" x2="100%" y1="0%" y2="0%">
                      <stop offset="0%" stopColor="#c78484" />
                      <stop offset="50%" stopColor="#ab959b" />
                      <stop offset="70%" stopColor="#c78484" />
                      <stop offset="80%" stopColor="#e8a2ab" />
                      <stop offset="100%" stopColor="#4a3b44" />
                    </linearGradient>
                    <linearGradient id="gradientPath2b" x2="100%" y1="0%" y2="0%">
                      <stop offset="0%" stopColor="#482948" />
                      <stop offset="5%" stopColor="#9f3737" />
                      <stop offset="15%" stopColor="#c78484" />
                      <stop offset="30%" stopColor="#332a38" />
                      <stop offset="50%" stopColor="#332a38" />
                      <stop offset="70%" stopColor="#da4847" />
                      <stop offset="85%" stopColor="#372c37" />
                      <stop offset="100%" stopColor="#442b35" />
                    </linearGradient>
                  </defs>
                  <line style={{-i: 1}} x1={3} y1="162.5" x2={389} y2="162.5" strokeOpacity="0.9" />
                  <line style={{-i: 2}} x1={3} y1="125.5" x2={389} y2="125.5" strokeOpacity="0.8" />
                  <line style={{-i: 3}} x1={3} y1="88.5" x2={389} y2="88.5" strokeOpacity="0.7" />
                  <line style={{-i: 4}} x1={3} y1="51.5" x2={389} y2="51.5" strokeOpacity="0.6" />
                  <line style={{-i: 5}} x1={3} y1="14.5" x2={389} y2="14.5" strokeOpacity="0.5" />
                  <g filter="url('#goo')" className="path1-g">
                    <path className="path1" d="M5.5 174.5C20.0137 109.586 20 54.9643 49.5 36C79 17.0357 140.5 101 179 93C217.5 85 230.438 40.7006 274.5 36.5C318.562 32.2994 334.5 33 372.5 21" stroke="url(#gradientPath1b)" strokeWidth={11} strokeLinecap="round" strokeLinejoin="round" />
                    <path className="path1" d="M5.5 174.5C20.0137 109.586 20 54.9643 49.5 36C79 17.0357 140.5 101 179 93C217.5 85 230.438 40.7006 274.5 36.5C318.562 32.2994 334.5 33 372.5 21" stroke="url(#gradientPath1)" strokeWidth={11} strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                  <g filter="url('#goo')">
                    <path className="path2" stroke="url(#gradientPath2)" d="M21.5 6C57.8366 66.5908 89.5 112.167 124.5 108C159.5 103.833 182.5 49 226 38.5C269.5 28 286.5 52.5 323.5 52.5C331.5 52.5 339 52 350 46.5" strokeWidth={11} strokeLinecap="round" />
                    <path className="path2" stroke="url(#gradientPath2b)" d="M21.5 6C57.8366 66.5908 89.5 112.167 124.5 108C159.5 103.833 182.5 49 226 38.5C269.5 28 286.5 52.5 323.5 52.5C331.5 52.5 339 52 350 46.5" strokeWidth={11} strokeLinecap="round" />
                  </g>
                  <filter id="goo">
                    <feGaussianBlur stdDeviation={2} result="blur" in="SourceGraphic" />
                    <feColorMatrix result="goo" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" mode="matrix" in="blur" />
                  </filter>
                </svg>
              </div>
              <footer>
                <span style={{-i: 1}} data-label="8am" />
                <span style={{-i: 2}} data-label="10am" />
                <span style={{-i: 3}} data-label="12pm" />
                <span style={{-i: 4}} data-label="2pm" />
                <span style={{-i: 5}} data-label="4pm" />
                <span style={{-i: 6}} data-label="6pm" />
              </footer>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .grid {
    --radius: 38px;
    --perspective: 800px;
    --width: 280px;

    position: absolute;
    left: 0;
    right: 0;
    top: -2.5rem;
    bottom: -2.5rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }
  .grid .area {
    position: relative;
    z-index: 1;
  }
  .glow,
  .glow-in1,
  .glow-in2,
  .glow-out1,
  .glow-out2 {
    position: absolute;
    overflow: hidden;
    border-radius: inherit;
    filter: brightness(1.5);
    pointer-events: none;
  }
  .glow::before,
  .glow-in1::before,
  .glow-in2::before,
  .glow-out1::before,
  .glow-out2::before {
    transform: translate(-50%, -50%) rotate(45deg);
    position: absolute;
    top: 50%;
    left: 50%;
    width: 180%;
    height: 180%;
    content: "";
    transition: transform 1.5s ease;
  }
  .glow::before {
    z-index: -2;
    background: conic-gradient(
      #b52f2f 0%,
      transparent 20%,
      #cf8030 50%,
      black 60%,
      transparent 80%,
      #b52f2f 100%
    );
  }
  .glow-in1::before {
    background: conic-gradient(
      from 0turn at 50% 30%,
      #b52f2f 12%,
      transparent 17%,
      transparent 90%,
      #b52f2f 100%
    );
  }
  .glow-in2::before {
    background: conic-gradient(
      from 0turn at 45% 60%,
      transparent 30%,
      #cf8030 55%,
      transparent 60%
    );
  }
  .glow {
    filter: blur(18px);
    inset: 5px;
    opacity: 0.5;
    z-index: 3;
  }
  .glow-in1,
  .glow-in2 {
    filter: blur(50px);
    inset: -15px;
    opacity: 0.5;
  }
  .glow-in2 {
    opacity: 0.2;
  }
  .glow-out1 {
    inset: -1px;
    z-index: 1;
    opacity: 0.5;
  }
  .glow-out2 {
    inset: 6px;
    opacity: 1;
  }
  .glow-out2 {
    transform: translateZ(10px);
    border-radius: calc(var(--radius) * 0.8);
  }
  .glow-out1::before,
  .glow-out2::before {
    background: conic-gradient(
      #b52f2f 0%,
      transparent 10%,
      transparent 35%,
      #cf8030 50%,
      transparent 60%,
      transparent 90%,
      #b52f2f 100%
    );
  }

  .wrap:hover .glow::before,
  .wrap:hover .glow-in1::before,
  .wrap:hover .glow-in2::before,
  .wrap:hover .glow-out1::before,
  .wrap:hover .glow-out2::before {
    transform: translate(-50%, -50%) rotate(410deg);
  }
  .wrap {
    display: flex;
    align-items: center;
    justify-items: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    z-index: 9;
    border-radius: var(--radius);
  }
  .wrap::before {
    box-shadow:
      0 60px 140px 30px rgba(0, 0, 0, 0.8),
      0 -60px 120px rgba(102, 106, 135, 0.4);
    background: rgba(0, 0, 0, 0.4);
    position: absolute;
    content: "";
    inset: 8px;
    filter: blur(5px);
    border-radius: 50px;
  }

  .card {
    padding: 7px 7px 7px 7px;
    border-radius: inherit;
  }
  .card,
  .glare::before {
    transform-style: preserve-3d;
    will-change: transform;
  }
  .wrap:hover .card {
    transform: perspective(var(--perspective)) rotateX(0) rotateY(0)
      scale3d(1, 1, 1);
  }

  .card-bg {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: linear-gradient(to bottom, #1e212b 40%, #0b0c11 100%);
    box-shadow:
      0 15px 20px rgba(0, 0, 0, 0.7),
      inset 0 0 3px rgba(255, 255, 255, 0.1),
      inset 0 29px 5px -31px white;
    z-index: 2;
  }

  .card-content {
    box-shadow:
      inset 0 0 2px rgba(255, 255, 255, 0.1),
      inset 0 0 70px #2e303c,
      inset 40px 70px 30px -20px rgba(0, 0, 0, 0.3),
      inset 0 30px 5px -30px rgba(255, 255, 255, 0.7),
      inset 0 -3px 2px -2px white;
    background: linear-gradient(to bottom, #201c29 40%, #37374b 100%);
    padding: 20px 28px 0 28px;
    border-radius: calc(var(--radius) * 0.8);
    transform-style: preserve-3d;
    transform: translateZ(10px);
    position: relative;
    z-index: 3;
  }
  .card,
  .card-content,
  .glare::before {
    transition: 2s cubic-bezier(0.03, 1, 0.5, 1);
  }

  header {
    line-height: 20px;
    margin-bottom: 3px;
    position: relative;
    transform: translateZ(30px);
    transform-style: preserve-3d;
    color: rgba(255, 255, 255, 0.6);
    transition: all 0.3s ease;
  }
  header .title {
    font-size: 12px;
  }
  header .views {
    font-size: 20px;
    font-weight: 700;
    display: flex;
    align-items: center;
    max-width: 50%;
  }
  header .icon {
    border-radius: 50%;
    font-size: 24px;
    padding: 2px 0 0 0;
    width: 40px;
    height: 40px;
    position: absolute;
    right: -6px;
    top: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow:
      0 0 1px 2px rgba(250, 187, 15, 0.7),
      0 -3px 2px 5px rgba(0, 0, 0, 0.3),
      0 0 1px 3px black,
      0 3px 3px 2px #ff98a8;
    transform-style: preserve-3d;
    transition: all 0.3s ease;
  }

  header .icon::before,
  header .icon::after {
    content: "";
    position: absolute;
    inset: 1px;
    border-radius: 50%;
    box-shadow: 0 0 1px 2px #fabb0f;
    transition: all 0.3s ease;
    opacity: 0;
    pointer-events: none;
  }
  header .icon:hover::before,
  header .icon:hover::after {
    animation: ring 1.5s ease infinite;
  }
  header .icon:hover::after {
    animation-delay: 750ms;
  }
  header .icon svg {
    display: block;
    animation: heart 1.5s linear infinite;
    pointer-events: none;
  }
  header .icon:hover svg {
    animation-duration: 0.8s;
  }
  header .icon:hover {
    background-color: #1e191e;
  }
  footer:hover,
  header .views:hover .number {
    color: white;
  }
  header span[data-label] {
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    top: 0;
  }
  header span[data-label]::before,
  header span[data-label]::after {
    content: attr(data-label);
    transition: all 0.2s ease;
  }
  header span[data-label]::before {
    left: 0;
    position: absolute;
    transform: translateY(-20px);
    color: white;
  }
  header .views:hover span[data-label]::before {
    transform: translateY(0px);
  }
  header .views:hover span[data-label]::after {
    transform: translateY(20px);
  }

  .number {
    text-align: right;
    overflow: hidden;
    display: flex;
    width: 64px;
  }
  .number::before {
    position: absolute;
    bottom: 0;
    left: 14px;
    content: ",";
  }
  .number > div {
    display: grid;
    width: 12px;
    height: 20px;
    line-height: 20px;
    margin-right: 1px;
    text-align: center;
    animation: units ease 3s forwards;
  }
  .number > div:nth-child(2) {
    margin-left: 7px;
  }
  header .views:hover .number > div {
    animation: none;
  }

  .chart {
    width: var(--width);
  }
  .chart svg {
    display: block;
    width: 100%;
    overflow: visible;
  }
  .chart svg line {
    animation: lines 5s ease calc(1s + var(--i) * 0.05s) infinite;
    opacity: 0;
    stroke: rgba(255, 255, 255, 0.5);
    filter: drop-shadow(0 -4px 1px rgba(0, 0, 0, 0.7));
  }

  footer {
    font-size: 10px;
    font-weight: 500;
    display: flex;
    transform: translateZ(30px) translateY(-3px);
    transition: all 0.3s ease;
    transform-style: preserve-3d;
    margin: -10px -10px 0 -10px;
  }
  footer span {
    width: 100%;
    display: block;
    animation: labels 5s ease calc(1s + var(--i) * 0.1s) infinite;
    opacity: 0;
  }
  footer span::before {
    transition: all 0.2s ease;
    content: attr(data-label);
    display: block;
    text-align: center;
    font-weight: 600;
    width: 100%;
    padding: 15px 0;
    pointer-events: none;
    color: rgba(255, 255, 255, 0.6);
  }
  footer span:hover::before {
    color: white;
    transform: translateY(-5px) scale(1.3);
    text-shadow: 0 7px 3px rgba(0, 0, 0, 0.3);
  }

  .path1-g {
    transform: translateY(-3px);
  }

  .path1,
  .path2 {
    stroke-dasharray: 0 510;
    stroke-dashoffset: 1;
    animation: path 5s ease infinite 1s;
  }

  .path1:nth-child(2),
  .path2:nth-child(2) {
    transform: translateY(5px);
  }

  .glare {
    position: absolute;
    overflow: hidden;
    border-radius: inherit;
    filter: blur(10px);
    inset: 5px;
    opacity: 0.5;
    pointer-events: none;
  }
  .glare::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    background: white;
    filter: blur(60px);
    border-radius: 50%;
    width: 100px;
    height: 100px;
    transform: translate(-50%, -50%);
    opacity: 0;
  }

  .area:nth-child(1):hover ~ .wrap .glare::before {
    transform: translate(-200%, -200%);
    opacity: 0.7;
  }
  .area:nth-child(2):hover ~ .wrap .glare::before {
    transform: translate(-120%, -200%) scaleX(1.2);
    opacity: 0.5;
  }
  .area:nth-child(3):hover ~ .wrap .glare::before {
    transform: translate(-50%, -200%) scaleX(1.5);
    opacity: 0.5;
    background-color: #ffc2c2;
  }
  .area:nth-child(4):hover ~ .wrap .glare::before {
    transform: translate(30%, -200%) scaleX(1.2);
    opacity: 0.5;
    background-color: #ff9393;
  }
  .area:nth-child(5):hover ~ .wrap .glare::before {
    transform: translate(110%, -200%);
    opacity: 0.7;
    background-color: #ff5e5e;
  }

  .area:nth-child(6):hover ~ .wrap .glare::before {
    transform: translate(-230%, -50%) scaleY(1.2);
    opacity: 0.7;
    background-color: #fffca6;
  }
  .area:nth-child(7):hover ~ .wrap .glare::before {
    transform: translate(-200%, -50%);
    opacity: 0.5;
    background-color: #fffca6;
  }
  .area:nth-child(8):hover ~ .wrap .glare::before {
    filter: blur(100px);
  }
  .area:nth-child(9):hover ~ .wrap .glare::before {
    transform: translate(110%, -50%);
    opacity: 0.5;
    background-color: #ff9393;
  }
  .area:nth-child(10):hover ~ .wrap .glare::before {
    transform: translate(140%, -50%) scaleY(1.2);
    opacity: 0.7;
    background-color: #ff9393;
  }

  .area:nth-child(11):hover ~ .wrap .glare::before {
    transform: translate(-200%, 100%);
    opacity: 0.7;
    background-color: #fffa5e;
  }
  .area:nth-child(12):hover ~ .wrap .glare::before {
    transform: translate(-120%, 100%) scaleX(1.2);
    opacity: 0.5;
    background-color: #fffca6;
  }
  .area:nth-child(13):hover ~ .wrap .glare::before {
    transform: translate(-50%, 100%) scaleX(1.5);
    opacity: 0.5;
    background-color: #fffdce;
  }
  .area:nth-child(14):hover ~ .wrap .glare::before {
    transform: translate(30%, 100%) scaleX(1.2);
    opacity: 0.5;
  }
  .area:nth-child(15):hover ~ .wrap .glare::before {
    transform: translate(110%, 100%);
    opacity: 0.7;
  }

  .area:nth-child(1):hover ~ .wrap .card {
    transform: perspective(var(--perspective)) rotateX(-15deg) rotateY(15deg)
      scale3d(1, 1, 1);
  }
  .area:nth-child(2):hover ~ .wrap .card {
    transform: perspective(var(--perspective)) rotateX(-15deg) rotateY(7deg)
      scale3d(1, 1, 1);
  }
  .area:nth-child(3):hover ~ .wrap .card {
    transform: perspective(var(--perspective)) rotateX(-15deg) rotateY(0)
      scale3d(1, 1, 1);
  }
  .area:nth-child(4):hover ~ .wrap .card {
    transform: perspective(var(--perspective)) rotateX(-15deg) rotateY(-7deg)
      scale3d(1, 1, 1);
  }
  .area:nth-child(5):hover ~ .wrap .card {
    transform: perspective(var(--perspective)) rotateX(-15deg) rotateY(-15deg)
      scale3d(1, 1, 1);
  }

  .area:nth-child(6):hover ~ .wrap .card {
    transform: perspective(var(--perspective)) rotateX(0) rotateY(15deg)
      scale3d(1, 1, 1);
  }
  .area:nth-child(7):hover ~ .wrap .card {
    transform: perspective(var(--perspective)) rotateX(0) rotateY(7deg)
      scale3d(1, 1, 1);
  }
  .area:nth-child(8):hover ~ .wrap .card {
    transform: perspective(var(--perspective)) rotateX(0) rotateY(0)
      scale3d(1, 1, 1);
  }
  .area:nth-child(9):hover ~ .wrap .card {
    transform: perspective(var(--perspective)) rotateX(0) rotateY(-7deg)
      scale3d(1, 1, 1);
  }
  .area:nth-child(10):hover ~ .wrap .card {
    transform: perspective(var(--perspective)) rotateX(0) rotateY(-15deg)
      scale3d(1, 1, 1);
  }

  .area:nth-child(11):hover ~ .wrap .card {
    transform: perspective(var(--perspective)) rotateX(15deg) rotateY(15deg)
      scale3d(1, 1, 1);
  }
  .area:nth-child(12):hover ~ .wrap .card {
    transform: perspective(var(--perspective)) rotateX(15deg) rotateY(7deg)
      scale3d(1, 1, 1);
  }
  .area:nth-child(13):hover ~ .wrap .card {
    transform: perspective(var(--perspective)) rotateX(15deg) rotateY(0)
      scale3d(1, 1, 1);
  }
  .area:nth-child(14):hover ~ .wrap .card {
    transform: perspective(var(--perspective)) rotateX(15deg) rotateY(-7deg)
      scale3d(1, 1, 1);
  }
  .area:nth-child(15):hover ~ .wrap .card {
    transform: perspective(var(--perspective)) rotateX(15deg) rotateY(-15deg)
      scale3d(1, 1, 1);
  }

  @keyframes labels {
    0% {
      transform: translateY(-30px);
      filter: blur(10px);
    }
    8% {
      transform: translateY(10px);
    }
    15% {
      transform: translateY(0);
      opacity: 1;
      filter: blur(0);
    }
    80% {
      transform: translateY(0);
      opacity: 1;
    }
    85% {
      filter: blur(0px);
      transform: translateY(-5px);
    }
    90% {
      transform: translateY(15px);
      opacity: 0;
      filter: blur(10px);
    }
  }

  @keyframes lines {
    0% {
      transform: translateY(0);
      opacity: 0;
    }
    7% {
      transform: translateY(-20px);
    }
    12% {
      transform: translateY(10px);
    }
    17% {
      transform: translateY(-5px);
    }
    25% {
      transform: translateY(0);
      opacity: 1;
    }

    80% {
      transform: translateY(0);
      opacity: 1;
    }
    85% {
      transform: translateY(-20px);
    }
    90% {
      transform: translateY(20px);
      opacity: 0;
    }
  }

  @keyframes heart {
    5% {
      transform: scale(0.8) translateZ(0px);
    }
    20% {
      transform: scale(1.2) translateZ(40px);
    }
    40% {
      transform: scale(1) translateZ(20px);
    }
    50% {
      transform: scale(1.2) translateZ(30px);
    }
    70% {
      transform: scale(0.8) translateZ(20px);
    }
    100% {
      transform: scale(1) translateZ(0px);
    }
  }

  @keyframes ring {
    0% {
      transform: scale(1);
      opacity: 0;
    }
    30% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(2);
      opacity: 0;
      filter: blur(5px);
    }
  }

  @keyframes path {
    0% {
    }
    30% {
      stroke-dasharray: 510 510;
    }
    80% {
      stroke-dashoffset: 1;
      stroke-dasharray: 510;
    }
    100% {
      stroke-dashoffset: 1;
      stroke-dashoffset: -510;
    }
  }

  @keyframes units {
    to {
      transform: translateY(calc(-100% * calc(var(--num) + 1)));
    }
  }`;

export default Card;
