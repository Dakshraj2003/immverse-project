export default function FeaturesSection() {
  return (
    <section className="container py-5 text-center text-white">
      {/* Top Feature Icons Row */}
      <div className="row justify-content-center mb-5">
        <div className="col-12 col-sm-6 col-md-3 mb-4">
          <img
            src="./assest/girl.png"
            alt="Feature 1"
            className="img-fluid"
            style={{ maxWidth: "200px" }}
          />
        </div>
        <div className="col-6 col-md-3 mb-4">
          <img
            src="./assest/boy.png"
            alt="Feature 2"
            className="img-fluid"
            style={{ maxWidth: "200px" }}
          />
        </div>
        <div
          className="col-12 col-md-6 text-center text-md-start mb-5 pb-5"
          style={{ marginBottom: "4rem", paddingBottom: "3rem" }}
        >
          <h4>New Experience in Playing Game</h4>
          <p className="lead mt-3">
            You can try the game playing with a new style — more real feel, like
            you are the main character in your game and adventure in this new
            digital world.
          </p>
          <button className="btn btn-primary btn-lg">Get it now</button>
        </div>
      </div>

      {/* Middle Image Grid: image1 & image2 */}
      <div className="row justify-content-center g-4 mb-4">
        <div className="col-12 col-sm-6 col-md-4">
          <img
            src="./assest/image1.png"
            alt="Image 1"
            className="img-fluid"
            style={{ width: "100%", maxWidth: "280px" }}
          />
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <img
            src="./assest/image2.png"
            alt="Image 2"
            className="img-fluid"
            style={{ width: "100%", maxWidth: "280px" }}
          />
        </div>
      </div>

      {/* Second Image Grid: image3 & image4 */}
      <div className="row justify-content-center g-4 mb-4">
        <div className="col-12 col-sm-6 col-md-4">
          <img
            src="./assest/image3.png"
            alt="Image 3"
            className="img-fluid"
            style={{ width: "100%", maxWidth: "280px" }}
          />
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <img
            src="./assest/image4.png"
            alt="Image 4"
            className="img-fluid"
            style={{ width: "100%", maxWidth: "280px" }}
          />
        </div>
      </div>

      {/* Client Review Section */}
      <div
        className="text-center my-5 px-3"
        style={{ maxWidth: "900px", margin: "0 auto" }}
      >
        <h4 style={{ fontSize: "2rem" }}>What our clients say</h4>
        <p style={{ fontSize: "1.1rem" }}>
          See what customers say about us. It really matters to us. Whether good
          or bad, your feedback helps us evaluate and improve EhyalLive.
        </p>
      </div>

      {/* Last Row: 3 Images */}
      <div className="row justify-content-center g-4">
        <div className="col-6 col-md-4">
          <img
            src="./assest/image5.png"
            alt="Image 5"
            className="img-fluid"
            style={{ width: "100%", maxWidth: "220px" }}
          />
        </div>
        <div className="col-6 col-md-4">
          <img
            src="./assest/image6.png"
            alt="Image 6"
            className="img-fluid"
            style={{ width: "100%", maxWidth: "220px" }}
          />
        </div>
        <div className="col-6 col-md-4">
          <img
            src="./assest/image7.png"
            alt="Image 7"
            className="img-fluid"
            style={{ width: "100%", maxWidth: "220px" }}
          />
        </div>
      </div>
    </section>
  );
}
