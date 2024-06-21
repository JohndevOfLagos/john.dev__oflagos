import React, { useState } from "react";
import "./FAQ.scss";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

export const FAQ = () => {
  const [openFaqs, setOpenFaqs] = useState([false, false]);

  const toggleFaqHandler = (index) => {
    const newOpenFaqs = [...openFaqs];
    newOpenFaqs[index] = !newOpenFaqs[index];
    setOpenFaqs(newOpenFaqs);
  };

  const closeFaqHandler = (event, index) => {
    // Prevent event propagation to avoid toggling when clicking inside .faq-contain-bottom
    event.stopPropagation();
    // Close the FAQ item by toggling its state
    toggleFaqHandler(index);
  };

  return (
    <div className="FAQ">
      <div className="inner-faq">
        <div className="faq-head">
          <span>
            FAQ
            <span>.</span>
          </span>
        </div>

        <div className="faq-list">
          <article className="faq-item">
            <div
              className="faq-line-container"
              onClick={() => toggleFaqHandler(0)}
            >
              <div className="faq-container">
                <p>
                  How long does it take to develop a software for my company?
                </p>
              </div>
              <div className="expand-btn-container">
                <Icon icon="mdi-light:plus" />
              </div>
            </div>
            <div className="border-line"></div>
            <div
              className={`faq-contain-bottom ${openFaqs[0] ? "open" : ""}`}
              onClick={(event) => closeFaqHandler(event, 0)}
            >
              <div className="white-text">
                <p>
                  It depends on the project scope, the brand size, its goals,
                  and how deep we want to go with the strategy. On average,
                  large software could take from 3 up to 8 weeks.
                </p>
              </div>
            </div>
            <div className="faq-pink-wipe"></div>
          </article>
          <article className="faq-item">
            <div
              className="faq-line-container"
              onClick={() => toggleFaqHandler(1)}
            >
              <div className="faq-container">
                <p>How long does it take build a website?</p>
              </div>
              <div className="expand-btn-container">
                <Icon icon="mdi-light:plus" />
              </div>
            </div>
            <div className="border-line"></div>
            <div
              className={`faq-contain-bottom ${openFaqs[1] ? "open" : ""}`}
              onClick={(event) => closeFaqHandler(event, 1)}
            >
              <div className="white-text">
                <p>
                  The time it takes to build a website varies on several
                  factors. Complexity, strategy, number of pages, development,
                  specific integrations all affect the project time. It can take
                  from 3 to 12 weeks.
                </p>
              </div>
            </div>
            <div className="faq-pink-wipe"></div>
          </article>
          <article className="faq-item">
            <div
              className="faq-line-container"
              onClick={() => toggleFaqHandler(2)}
            >
              <div className="faq-container">
                <p>What’s your process?</p>
              </div>
              <div className="expand-btn-container">
                <Icon icon="mdi-light:plus" />
              </div>
            </div>
            <div className="border-line"></div>
            <div
              className={`faq-contain-bottom ${openFaqs[2] ? "open" : ""}`}
              onClick={(event) => closeFaqHandler(event, 2)}
            >
              <div className="white-text">
                <p>
                  Learn, strategy, Create. Do you want to know more? 
                  <Link>
                  My work process →
                  </Link>
                </p>
              </div>
            </div>
            <div className="faq-pink-wipe"></div>
          </article>
          <article className="faq-item">
            <div
              className="faq-line-container"
              onClick={() => toggleFaqHandler(3)}
            >
              <div className="faq-container">
                <p>How much does it cost?</p>
              </div>
              <div className="expand-btn-container">
                <Icon icon="mdi-light:plus" />
              </div>
            </div>
            <div className="border-line"></div>
            <div
              className={`faq-contain-bottom ${openFaqs[3] ? "open" : ""}`}
              onClick={(event) => closeFaqHandler(event, 3)}
            >
              <div className="white-text">
                <p>
                I don't have a price list. The projects I work on are all unique and different from each other, as are the services I offer. This implies that the prices are also customised according to the scope of work. To get an idea of the price of the services you need, book a meeting with me.
                </p>
              </div>
            </div>
            <div className="faq-pink-wipe"></div>
          </article>
        </div>
      </div>
    </div>
  );
};
