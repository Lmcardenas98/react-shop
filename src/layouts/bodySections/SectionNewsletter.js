export default function SectionNewsletter() {
  return (
    <div className="banner-container">
      <div className="head-banner newsletter-section">
        <div className="get-follow-header newsletter-header">
          <h1>Our newsletter</h1>
          <p>Subscribe to our Newsletter to receive early discount offers</p>
        </div>

        <div className="submit-container">
          <input type="email" placeholder="Enter your email"></input>
          <button className="header-btn">SUBSCRIBE</button>
        </div>
      </div>
    </div>
  );
}
