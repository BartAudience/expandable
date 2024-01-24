import gsap from "gsap";

export function imageSequence(config) {
    let imagesLoaded = 0;
    const totalImages = 99;
    const imageLoaded = () => {
        imagesLoaded++;

        if (imagesLoaded === totalImages) {
            window.imageLoader.registerImageLoad();
        }
    };

    let playhead = { frame: 0 },
        ctx = gsap.utils.toArray(config.canvas)[0].getContext("2d"),
        onUpdate = config.onUpdate,
        images,
        updateImage = function () {
            const frame = playhead.frame;
            const canvas = gsap.utils.toArray(config.canvas)[0];

            const parentContainer = document.querySelector(config.parentContainer);
            const img = images[Math.floor(frame)];
            canvas.width = parentContainer.offsetWidth; // Set to desired width
            canvas.height = parentContainer.offsetHeight; // Set to desired height
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

            onUpdate && onUpdate.call(this);
        };
    images = config.urls.map((url, i) => {
        let img = new Image();
        img.src = url;
        img.onload = imageLoaded;
        i || (img.onload = updateImage);
        return img;
    });

    window.imageLoader.addImages(config.urls.length);

    return gsap.to(playhead, {
        frame: images.length - 1,
        ease: "none",
        onUpdate: updateImage,
        scrollTrigger: config.scrollTrigger
    });
}