import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Observer from 'gsap/Observer';
import Footer from '../footer/Footer';
import './Home.css';

const Home = () => {
  const scrollContainerRef = useRef(null);
  const gridBackgroundRef = useRef(null);

  const images = [
    "/project-images/01.jpg",
    "/project-images/02.jpg",
    "/project-images/03.jpg",
    "/project-images/04.jpg",
    "/project-images/05.jpg",
    "/project-images/06.jpg",
    "/project-images/07.jpg",
    "/project-images/Anusova.gif",
    "/project-images/09.jpg",
    "/project-images/10.jpg",
    "/project-images/11.jpg",
    "/project-images/12.jpg",
    "/project-images/bn.jpg",
    "/project-images/12.gif",
    "/project-images/vadin.jpg"
  ];

  useEffect(() => {
    // Preload images
    images.forEach(src => {
      const img = new Image();
      img.src = src;
    });

    gsap.registerPlugin(ScrollTrigger, Observer);

    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (gridBackgroundRef.current) {
      const blockContainer = gridBackgroundRef.current;
      const blockSize = 50;
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const numCols = Math.ceil(screenWidth / blockSize);
      const numRows = Math.ceil(screenHeight / blockSize);
      const numBlocks = numCols * numRows;

      function createBlocks() {
        for (let i = 0; i < numBlocks; i++) {
          const block = document.createElement("div");
          block.classList.add("block");
          block.dataset.index = i;
          block.addEventListener("mousemove", highlightRandomNeighbors);
          blockContainer.appendChild(block);
        }
      }

      function highlightRandomNeighbors(event) {
        const block = event.target;
        const index = parseInt(block.dataset.index);
        const neighbors = [
          index - 1,
          index + 1,
          index - numCols,
          index + numCols,
          index - numCols - 1,
          index - numCols + 1,
          index + numCols - 1,
          index + numCols + 1,
        ].filter(
          (i) =>
            i >= 0 &&
            i < numBlocks &&
            Math.abs((i % numCols) - (index % numCols)) <= 1
        );

        block.classList.add("highlight");
        setTimeout(() => {
          block.classList.remove("highlight");
        }, 500);

        neighbors.forEach((nIndex) => {
          const neighbor = blockContainer.children[nIndex];
          if (neighbor) {
            neighbor.classList.add("highlight");
            setTimeout(() => {
              neighbor.classList.remove("highlight");
            }, 500);
          }
        });
      }

      createBlocks();
    }

    if (scrollContainerRef.current) {
      function horizontalLoop(items, config) {
        items = gsap.utils.toArray(items);
        config = config || {};
        let tl = gsap.timeline({
          repeat: config.repeat,
          paused: config.paused,
          defaults: { ease: "none" },
          onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100)
        }),
          length = items.length,
          startX = items[0].offsetLeft,
          times = [],
          widths = [],
          xPercents = [],
          curIndex = 0,
          pixelsPerSecond = (config.speed || 1) * 100,
          snap = config.snap === false ? v => v : gsap.utils.snap(config.snap || 1),
          totalWidth, curX, distanceToStart, distanceToLoop, item, i;
        gsap.set(items, {
          xPercent: (i, el) => {
            let w = widths[i] = parseFloat(gsap.getProperty(el, "width", "px"));
            xPercents[i] = snap(parseFloat(gsap.getProperty(el, "x", "px")) / w * 100 + gsap.getProperty(el, "xPercent"));
            return xPercents[i];
          }
        });
        gsap.set(items, { x: 0 });
        totalWidth = items[length - 1].offsetLeft + xPercents[length - 1] / 100 * widths[length - 1] - startX + items[length - 1].offsetWidth * gsap.getProperty(items[length - 1], "scaleX") + (parseFloat(config.paddingRight) || 0);
        for (i = 0; i < length; i++) {
          item = items[i];
          curX = xPercents[i] / 100 * widths[i];
          distanceToStart = item.offsetLeft + curX - startX;
          distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
          tl.to(item, { xPercent: snap((curX - distanceToLoop) / widths[i] * 100), duration: distanceToLoop / pixelsPerSecond }, 0)
            .fromTo(item, { xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100) }, { xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false }, distanceToLoop / pixelsPerSecond)
            .add("label" + i, distanceToStart / pixelsPerSecond);
          times[i] = distanceToStart / pixelsPerSecond;
        }
        function toIndex(index, vars) {
          vars = vars || {};
          (Math.abs(index - curIndex) > length / 2) && (index += index > curIndex ? -length : length);
          let newIndex = gsap.utils.wrap(0, length, index),
            time = times[newIndex];
          if (time > tl.time() !== index > curIndex) {
            vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
            time += tl.duration() * (index > curIndex ? 1 : -1);
          }
          curIndex = newIndex;
          vars.overwrite = true;
          return tl.tweenTo(time, vars);
        }
        tl.next = vars => toIndex(curIndex + 1, vars);
        tl.previous = vars => toIndex(curIndex - 1, vars);
        tl.current = () => curIndex;
        tl.toIndex = (index, vars) => toIndex(index, vars);
        tl.times = times;
        tl.progress(1, true).progress(0, true);
        if (config.reversed) {
          tl.vars.onReverseComplete();
          tl.reverse();
        }
        return tl;
      }

      let loop = horizontalLoop(scrollContainerRef.current.querySelectorAll(".image-container"), { repeat: -1 });
      let slow = gsap.to(loop, { timeScale: 0, duration: 0.5 });
      loop.timeScale(0);

      const handleObserver = () => {
        Observer.create({
          target: scrollContainerRef.current,
          type: "pointer,touch,wheel",
          wheelSpeed: -1,
          onChange: self => {
            loop.timeScale(Math.abs(self.deltaX) > Math.abs(self.deltaY) ? -self.deltaX : -self.deltaY);
            slow.invalidate().restart();
          }
        });
      };

      if (isMobile) {
        // Automatic scrolling for mobile
        gsap.to(loop, { timeScale: 0.5, duration: 1 });
      } else {
        // Interactive scrolling for desktop
        handleObserver();
      }
    }
  }, [images]);

  return (
    <div className="home-page">
      <div className="grid-background" ref={gridBackgroundRef}></div>
      <h1 id="title">Maldarella</h1>
      <h1 id="title_2">Marco</h1>
      <div className="scroll-container" ref={scrollContainerRef}>
        {images.map((src, index) => (
          <div className="image-container" key={index}>
            <img src={src} alt={`Immagine ${index + 1}`} />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
