import { useEffect, useState } from "react";

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add scroll event listener to toggle visibility
  }, []);

  function scrollToTop() {
    // Implement smooth scroll to top
  }
  return (
    <div className="backToTop">
      <h1>Back To Top</h1>

      {/* Add some content to enable scrolling */}

      <div className="container">
        {/* Show this button only after scrolling down */}
        <button
          className="backtotop-btn"
          onClick={scrollToTop}
          data-testid="back-to-top-btn"
        >
          Back to Top
        </button>
      </div>
    </div>
  );
}
export default BackToTop;
