import React from "react";

export default function SubFooter() {
  return (
    <div className=" bg-blue-200 text-center p-5">
      <h4 className="text-xl text-primary" >Our Subscribe</h4>

      <h2 className="text-5xl font-semibold text-menu-color">Subscribe To Get The Latest Promo from Jez Salad</h2>

      <p className="text-base">
        We recommended you to subscribe to our promo program, drop your email
        below to get daily update about us
      </p>

      <div className="newsletter">
        {/* input for newsletter */}
        <input type="text" placeholder="Enter your email" />
      </div>
    </div>
  );
}
