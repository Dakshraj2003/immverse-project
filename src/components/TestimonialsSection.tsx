// src/components/TestimonialsSection.tsx
export default function TestimonialsSection() {
    return (
      <section className="container py-5 bg-light">
        <h2 className="text-center mb-5">What People Say</h2>
        <div className="row">
          <div className="col-md-4">
            <blockquote className="blockquote">
              <p>“An incredible VR experience unlike anything I’ve tried.”</p>
              <footer className="blockquote-footer">Alex Johnson</footer>
            </blockquote>
          </div>
          {/* Add more testimonials */}
        </div>
      </section>
    );
  }
  