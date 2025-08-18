import { useEffect, useState } from "react";

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {

    window.addEventListener("scroll", scrollToTop)

    return removeEventListener("scroll", scrollToTop)
  }, []);

  function scrollToTop() {
    if (window.scrollY > 300) {
      setIsVisible(true)
    }

    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  return (
    <div className="backToTop">
      <h1>Back To Top</h1>

      {/* Add some content to enable scrolling */}

      <div className="container">
        {/* Show this button only after scrolling down */}
        {isVisible ? <button
          className="backtotop-btn"
          onClick={scrollToTop}
          data-testid="back-to-top-btn"
        >
          Back to Top
        </button> : ""}
      </div>
    </div>
  );
}
export default BackToTop;
