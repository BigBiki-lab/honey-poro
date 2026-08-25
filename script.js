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
      "images/background-images/seppo-helle-UwEg9-Eweds-unsplash.jpg",
      "images/background-images/wp14822502-winter-wallpapers.webp",
      "images/background-images/wp14822482-winter-wallpapers.jpg",
      "images/background-images/4Dv2mx2-winter-wallpapers.jpg",
      "images/background-images/wp11497937-end-of-summer-sunset-wallpapers.jpg",
      "images/background-images/ME3X2qU-spring-wallpapers.jpg",
      "images/background-images/wp7679824-red-forest-trees-in-autumn-wallpapers.jpg",
      "images/background-images/wp2136315-succulent-wallpapers.jpg",
      "images/background-images/jVssyRR-cherry-blossom-wallpapers.jpg",
      "images/background-images/wp2981012-grass-wallpaper.jpg",
      "images/background-images/wp14806916-wave-wallpapers.webp",
      "images/background-images/wp4070309-desert-wallpapers.jpg",
      "images/background-images/Rb5o495-woods-wallpapers.jpg",
      "images/background-images/zNniVcb-cherry-blossom-wallpaper.jpg",
      "images/background-images/ofWDeyt-cherry-blossom-wallpapers.jpg",
      "images/background-images/wp2476634-wind-wallpapers.jpg",
      "images/background-images/wp2476673-wind-wallpapers.jpg",
      "images/background-images/wp14081594-nature-hills-wallpapers.jpg",
      "images/background-images/wp14828626-valley-wallpapers.jpg",
      "images/background-images/wp14064237-nature-scenery-4k-wallpapers.jpg",
      "images/background-images/wp2476657-wind-wallpapers.jpg",
      "images/background-images/wp14064237-nature-scenery-4k-wallpapers.jpg",
      "images/background-images/wp3592349-rice-field-wallpapers.jpg"
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