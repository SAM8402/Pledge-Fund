import React from "react";

const Footer = () => {
  const productList = ["Market", "ERC20 Token", "Donation"];
  const contactList = [
    "support@pledgefund.com",
    "info@example.com",
    "Contact Us",
  ];
  const usefulLinks = ["Home", "About Us", "Company Bio"];

  return (
    <footer className="text-center text-white backgroundMain lg:text-left">
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Crypto King Section */}
          <div>
            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
            Pledge Fund
            </h6>
            <p>
            Pledge Fund is your trusty crowdfunding co-pilot, powered by bullet-proof blockchain smart contracts. Every pledge becomes a self-executing on-chain promise that only unlocks when a project hits its targets. No middlemen, no guesswork and zero hidden hurdles. With crystal-clear transparency and ironclad reliability, you can now back bold ideas with complete confidence. Ready to pledge smart and fund fearless? Hop aboard Pledge Fund and watch innovation take flight!
            </p>
          </div>

          {/* Products Section */}
          <div>
            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              Products
            </h6>
            {productList.map((el, i) => (
              <p className="mb-4" key={i}>
                <a href="#!">{el}</a>
              </p>
            ))}
          </div>

          {/* Useful Links Section */}
          <div>
            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              Useful Links
            </h6>
            {usefulLinks.map((el, i) => (
              <p className="mb-4" key={i}>
                <a href="#!">{el}</a>
              </p>
            ))}
          </div>

          {/* Contact Section */}
          <div>
            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              Contact
            </h6>
            {contactList.map((el, i) => (
              <p className="mb-4" key={i}>
                <a href="#!">{el}</a>
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="backgroundMain p-6 text-center">
        <span>© 2024 Copyright: </span>
        <a className="font-semibold" href="https://tailwind-elements.com/">
        Pledge Fund
        </a>
      </div>
    </footer>
  );
};

export default Footer;
