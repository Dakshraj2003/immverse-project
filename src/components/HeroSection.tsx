export default function HeroSection() {
  return (
    <section className="container py-5 text-white">
      <div className="row align-items-center">
        {/* Left Column: Text */}
        <div className="col-12 col-md-6 text-center text-md-start mb-4 mb-md-0">
          <h1 className="display-5 fw-bold">
            Let's Explore <br className="d-none d-md-block" /> Three-Dimensional
            Visual
          </h1>

          <p className="lead mt-3">
            With virtual technology you can see the digital world feel more real
            and you play the game with a new style.
          </p>

          {/* Buttons */}
          <div className="d-flex flex-column flex-sm-row align-items-center gap-3 mt-3">
            <button className="btn btn-primary btn-lg">Get it now</button>
            <p className="mb-0">Explore Now</p>
          </div>

          {/* Image + Label */}
          <div className="d-flex align-items-center gap-3 mt-4">
            <img
              src="./assest/image8.png"
              alt="Online users"
              // style={{ width: "40px", height: "40px" }}
              className="img-fluid"
            />
            <p className="mb-0">400k people online</p>
          </div>
        </div>

        {/* Right Column: Hero Image */}
        <div className="col-12 col-md-6 text-center">
          <img
            src="./assest/headset.png"
            alt="VR Headset"
            className="img-fluid"
            style={{ maxHeight: "400px", width: "100%", objectFit: "contain" }}
          />
        </div>
      </div>
    </section>
  );
}
