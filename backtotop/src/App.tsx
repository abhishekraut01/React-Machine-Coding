import { useEffect, useState } from "react";
import '.App.css'

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function scrollCallback() {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
    window.addEventListener("scroll", scrollCallback)

    return () => {
      removeEventListener("scroll", scrollCallback)
    }
  }, []);

  function scrollToTop() {

    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="backToTop">
      <h1>Back To Top</h1>

      {[...Array(20).keys()].map((elem) => (
        <h1 key={elem}>hello</h1>
      ))}


      <div className="container">
        {/* Show this button only after scrolling down */}
        {isVisible && <button
          className="backtotop-btn"
          onClick={scrollToTop}
          data-testid="back-to-top-btn"
        >
          Back to Top
        </button>}
      </div>
    </div>
  );
}
export default BackToTop;
