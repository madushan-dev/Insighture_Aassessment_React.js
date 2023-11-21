import React from "react";
import "./TrackOrders.css";

function TrackOrders() {
  return (
    <div className="track_orders">
      <div className="track_orders__left">
        <h2>Track orders to your door</h2>
        <p>
          Get your favourite food delivered in a flash. You’ll see when your
          rider’s picked up your order, and be able to follow them along the
          way. You’ll get a notification when they’re nearby, too.
        </p>
        <img
          src="https://consumer-component-library.roocdn.com/26.28.1/static/images/app-store-badges-en.svg"
          alt=""
        />
      </div>
      <div className="track_orders__center">
        <img
          src="https://img2.storyblok.com/filters:format(webp)/f/62776/x/ca59b51c51/map-min.svg"
          alt=""
        />
        <img
          className="notification"
          src="https://img2.storyblok.com/filters:format(webp)/f/62776/723x236/75533cf121/notification.png"
          alt=""
        />
      </div>
      <div className="track_orders__right">
        <h2>Up to 25% off - Meal Deals</h2>
        <p>
          Need a midweek pick-me-up, a break from cooking for the family or just
          fancy your favourite restaurant?
        </p>
      </div>
    </div>
  );
}

export default TrackOrders;
