const images = [
      "images/background-images/img.png",
      "images/background-images/flying-bird-1.png",
      "images/background-images/cherry-blossom-2.jpg",
      "images/background-images/space-1.jpg",
      "images/background-images/plitvice-lakes-summer-1.png",
      "images/background-images/plitvice-lakes-summer-3.png",
      "images/background-images/ocean-beach.png",
      "images/background-images/cherry-blossom-1.png",
      "images/background-images/space-2.jpg",
      "images/background-images/flower-2.jpg",
      "images/background-images/flower-1.jpg",
      "images/background-images/poppies.jpg",
      "images/background-images/robin.jpg",
      "images/background-images/andreas-kretschmer-zUytXs3fusw-unsplash.jpg",
      "images/background-images/katarzyna-pe-fAYq5NwetGM-unsplash.jpg",
      "images/background-images/seppo-helle-UwEg9-Eweds-unsplash.jpg"
    ];

    // Get the day of the year
    const today = new Date();
    const start = new Date(today.getFullYear(), 0, 0);
    const diff = today - start;
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);

    // Pick image
    const image = images[dayOfYear % images.length];

    // Apply wallpaper
    document.body.style.backgroundImage = `url(${image})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";