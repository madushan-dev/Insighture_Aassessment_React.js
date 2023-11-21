import React from "react";
import "./Home.css";
import HomepageHero from "../../Components/HomepageHero/HomepageHero";
import ImageCarousel from "../../Components/ImageCarousel/ImageCarousel";
import TrackOrders from "../../Components/TrackOrders/TrackOrders";

function Home() {
  const carouselOne = [
    "//img2.storyblok.com/filters:format(webp)/f/62776/512x256/b07158449c/sushi-wide.jpg",
    "//img2.storyblok.com/filters:format(webp)/f/62776/512x256/e0988a5a22/curry-wide.jpg",
    "//img2.storyblok.com/filters:format(webp)/f/62776/256x256/2295f6ab9e/nandos.jpg",
    "//img2.storyblok.com/filters:format(webp)/f/62776/512x256/0ee9c5082d/dessert-wide.jpg",
    "//img2.storyblok.com/filters:format(webp)/f/62776/256x256/11bf79a2b4/icon-donut.jpg",
    "//img2.storyblok.com/filters:format(webp)/f/62776/256x256/99fc69fd34/wagamama.jpg",
    "//img2.storyblok.com/filters:format(webp)/f/62776/256x256/3057c83aef/fiveguys.jpg",
    "//img2.storyblok.com/filters:format(webp)/f/62776/512x256/dd8a3a1d71/chicken-wide.jpg",
    "//img2.storyblok.com/filters:format(webp)/f/62776/512x256/47c289a9f4/pizza-wide.jpg",
    "//img2.storyblok.com/filters:format(webp)/f/62776/256x256/6a385f47c7/icon-vegan.jpg",
    "//img2.storyblok.com/filters:format(webp)/f/62776/256x256/5771399806/hop.jpg",
    "//img2.storyblok.com/filters:format(webp)/f/62776/512x256/8bd9a1cb99/bowl-wide.jpg",
    "//img2.storyblok.com/filters:format(webp)/f/62776/512x256/d67ea4ffce/thai-wide.jpg",
    "//img2.storyblok.com/filters:format(webp)/f/62776/256x256/4fd0ed75e4/icon-pizza.jpg",
    "//img2.storyblok.com/filters:format(webp)/f/62776/256x256/d12ef0972b/waitrose.jpg",
    "//img2.storyblok.com/filters:format(webp)/f/62776/256x256/9b19027dd1/icon-wine.jpg",
    "//img2.storyblok.com/filters:format(webp)/f/62776/512x256/b07158449c/sushi-wide.jpg",
    "//img2.storyblok.com/filters:format(webp)/f/62776/512x256/e0988a5a22/curry-wide.jpg",
    "//img2.storyblok.com/filters:format(webp)/f/62776/256x256/2295f6ab9e/nandos.jpg",
    "//img2.storyblok.com/filters:format(webp)/f/62776/512x256/0ee9c5082d/dessert-wide.jpg",
    "//img2.storyblok.com/filters:format(webp)/f/62776/256x256/11bf79a2b4/icon-donut.jpg",
    "//img2.storyblok.com/filters:format(webp)/f/62776/256x256/99fc69fd34/wagamama.jpg",
    "//img2.storyblok.com/filters:format(webp)/f/62776/256x256/3057c83aef/fiveguys.jpg",
    "//img2.storyblok.com/filters:format(webp)/f/62776/512x256/dd8a3a1d71/chicken-wide.jpg",
    "//img2.storyblok.com/filters:format(webp)/f/62776/512x256/47c289a9f4/pizza-wide.jpg",
    "//img2.storyblok.com/filters:format(webp)/f/62776/256x256/6a385f47c7/icon-vegan.jpg",
    "//img2.storyblok.com/filters:format(webp)/f/62776/256x256/5771399806/hop.jpg",
    "//img2.storyblok.com/filters:format(webp)/f/62776/512x256/8bd9a1cb99/bowl-wide.jpg",
    "//img2.storyblok.com/filters:format(webp)/f/62776/512x256/d67ea4ffce/thai-wide.jpg",
    "//img2.storyblok.com/filters:format(webp)/f/62776/256x256/4fd0ed75e4/icon-pizza.jpg",
    "//img2.storyblok.com/filters:format(webp)/f/62776/256x256/d12ef0972b/waitrose.jpg",
    "//img2.storyblok.com/filters:format(webp)/f/62776/256x256/9b19027dd1/icon-wine.jpg",
  ];

  const carousalTwo = [
    "//img2.storyblok.com/filters:format(webp)/f/62776/512x256/47c289a9f4/pizza-wide.jpg",
    "//img2.storyblok.com/filters:format(webp)/f/62776/256x256/6a385f47c7/icon-vegan.jpg",
    "//img2.storyblok.com/filters:format(webp)/f/62776/256x256/5771399806/hop.jpg",
    "//img2.storyblok.com/filters:format(webp)/f/62776/512x256/8bd9a1cb99/bowl-wide.jpg",
    "//img2.storyblok.com/filters:format(webp)/f/62776/512x256/d67ea4ffce/thai-wide.jpg",
    "//img2.storyblok.com/filters:format(webp)/f/62776/256x256/4fd0ed75e4/icon-pizza.jpg",
    "//img2.storyblok.com/filters:format(webp)/f/62776/256x256/d12ef0972b/waitrose.jpg",
    "//img2.storyblok.com/filters:format(webp)/f/62776/256x256/9b19027dd1/icon-wine.jpg",
    "//img2.storyblok.com/filters:format(webp)/f/62776/512x256/b07158449c/sushi-wide.jpg",
    "//img2.storyblok.com/filters:format(webp)/f/62776/512x256/e0988a5a22/curry-wide.jpg",
    "//img2.storyblok.com/filters:format(webp)/f/62776/256x256/2295f6ab9e/nandos.jpg",
    "//img2.storyblok.com/filters:format(webp)/f/62776/512x256/0ee9c5082d/dessert-wide.jpg",
    "//img2.storyblok.com/filters:format(webp)/f/62776/256x256/11bf79a2b4/icon-donut.jpg",
    "//img2.storyblok.com/filters:format(webp)/f/62776/256x256/99fc69fd34/wagamama.jpg",
    "//img2.storyblok.com/filters:format(webp)/f/62776/256x256/3057c83aef/fiveguys.jpg",
    "//img2.storyblok.com/filters:format(webp)/f/62776/512x256/dd8a3a1d71/chicken-wide.jpg",
  ];

  return (
    <div>
      <HomepageHero />
      <ImageCarousel images={carouselOne} />
      <ImageCarousel images={carousalTwo} />
      <TrackOrders />
    </div>
  );
}

export default Home;
