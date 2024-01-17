import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export const videoComponentAnimation = (name) => {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.defaults({
    markers: false,
  });

  const animateElement = (triggerSelector, targetSelector) => {
    const triggerElement = document.querySelector(triggerSelector);
    const targetElement = document.querySelector(targetSelector);

    const tlGrow = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.5,
      },
    });

    tlGrow
      .to(targetElement, {
        duration: 2,
        width: '100svw',
        height: '100svh',
        borderRadius: '0rem',
      })
      .to(
        targetElement,
        {
          duration: 3,
          width: '80svw',
          height: '80svh',
          borderRadius: '3rem',
        },
        '+=2'
      );
  };

  animateElement('.home-video_component', '.home-video_wrapper');
  animateElement('.logo-header_track', '.logo-header_footage');

  const numImages = 100;

  const canvas = document.getElementById('onscroll-video');
  canvas.style.width = '100%';
  canvas.style.height = '100%';

  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth; // Set to desired width
  canvas.height = window.innerHeight; // Set to desired height
  // Load images with specific naming convention
  const images = [];
  for (let i = 0; i <= numImages; i++) {
    const img = new Image();
    const imgNumber = String(i).padStart(5, "0"); // Pad the number to 5 digits
    img.src = `https://onscroll-demo.vercel.app/WebP_Export/2023032_Markets_Scroll_Anim_${imgNumber}.webp`;
    images.push(img);
  }

  Promise.all(
    images.map((img) => {
      return new Promise((resolve) => {
        img.onload = () => resolve();

        img.onerror = (e) => console.log(img.src);
      });
    })
  )
    .then(() => {
      drawFrame(
        0,
        ctx,
        canvas,
        images
      );
      gsap.to(
        {},
        {
          frame: numImages - 1,
          snap: "frame",
          scrollTrigger: {
            trigger: ".home-video_component",
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.5,
            onUpdate: (self) => {
              drawFrame(
                self.progress.toFixed(3) * (numImages - 1),
                ctx,
                canvas,
                images
              );
            },
          },
        }
      );
    })
    .catch((err) => console.log(err));

  function drawFrame(frame, ctx, canvas, images) {
    const img = images[Math.floor(frame)];
    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;
    let drawWidth, drawHeight, drawX, drawY;

    if (canvasRatio > imgRatio) {
      drawWidth = canvas.width;
      drawHeight = img.height * (canvas.width / img.width);
      drawX = 0;
      drawY = (canvas.height - drawHeight) / 2;
    } else {
      drawWidth = img.width * (canvas.height / img.height);
      drawHeight = canvas.height;
      drawX = (canvas.width - drawWidth) / 2;
      drawY = 0;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
  }

};
