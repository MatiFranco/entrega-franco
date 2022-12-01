import React from "react";

const Footer = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-6">
                    <a href="#" className="mx-1"><img src="images/facebook.svg" alt="Facebook" /></a>
                    <a href="#" className="mx-1"><img src="images/twitter.svg" alt="Twitter" /></a>
                    <a href="#" className="mx-1"><img src="images/youtube.svg" alt="Youtube" /></a>
                    <a href="#" className="mx-1"><img src="images/instagram.svg" alt="Instagram" /></a>
                </div>
                <div className="col-md-6 d-flex justify-content-end">
                    <a href="#" target="_blank"> <img src="images/app-store.png" alt="App Store" className="mx-1" width="115" /> </a>
                    <a href="#" target="_blank"> <img src="images/google-play.png" alt="Play Store" width="129" /> </a>
                </div>

            </div>

        </div>
    )

};

export default Footer;