// src/components/FeaturesSection.tsx
// export default function FeaturesSection() {
//     return (
//       <section className="container py-5">
//         <div className="row text-center">
//           <div className="col-md-4 mb-4">
//             <img src="" alt="Immersive" width={80} className="mb-3" />
//             <h4>Immersive Experience</h4>
//             <p>Feel like you're really there with high-fidelity rendering.</p>
//           </div>
//           <div className="col-md-4 mb-4">
//             <img src="/img/feature-2.svg" alt="Real-Time" width={80} className="mb-3" />
//             <h4>Real-Time Interaction</h4>
//             <p>Engage in seamless VR environments with no latency.</p>
//           </div>
//           <div className="col-md-4 mb-4">
//             <img src="/img/feature-3.svg" alt="Accessible" width={80} className="mb-3" />
//             <h4>Accessible Anywhere</h4>
//             <p>Enjoy VR experiences across platforms and devices.</p>
//           </div>
//         </div>
//       </section>
//     );
//   }

// export default function FeaturesSection() {
//   return (
//     <section className="container py-5 text-center">
//       <div className="d-flex justify-content-center align-items-center flex-wrap gap-5 mb-4 ">
//         <img
//           src="./assest/girl.png"
//           alt=""
//           className="mb-3"
//           width="80"
//           style={{ width: "200px", marginBottom: "0.5rem" }}
//         />
//         {/* <h4>360° Immersion</h4>
//             <p>Feel like you're really there with high-fidelity visuals.</p> */}

//         <img
//           src="./assest/boy.png"
//           alt=""
//           className="mb-3"
//           width="80"
//           style={{ width: "200px", marginBottom: "1rem" }}
//         />
//         {/* <h4>Real-Time Interaction</h4>
//             <p>Touch and interact with the virtual world in real time.</p> */}

//         <div
//           className="col-md-4 mb-4 text-md-start text-center pb-4"
//           style={{ maxWidth: "420px" }}
//         >
//           {/* <img src="/img/feature3.svg" alt="" className="mb-3" width="80" /> */}
//           <h4>New Exprience in playing game</h4>
//           <p>
//             You can try the game playing with a new style of course more real
//             feel, like you are the main character in your game and adventure in
//             this new digital world.
//           </p>
//           <button className="btn btn-primary btn-lg">Get it now</button>
//         </div>

//         <div className="px-4">
//           <div className="container text-center my-5 mx-4">
//             {/* Row 1 */}
//             <div className="row justify-content-center g-6 mb-4">
//               <div className="col-auto">
//                 <img
//                   src="./assest/image1.png"
//                   alt="Image 1"
//                   className="img-fluid"
//                   style={{ width: "250px" }}
//                 />
//               </div>
//               <div className="col-auto">
//                 <img
//                   src="./assest/image2.png"
//                   alt="Image 2"
//                   className="img-fluid"
//                   style={{ width: "250px" }}
//                 />
//               </div>
//             </div>

//             {/* Row 2 */}
//             <div className="row justify-content-center g-6 mb-4">
//               <div className="col-auto">
//                 <img
//                   src="./assest/image3.png"
//                   alt="Image 3"
//                   className="img-fluid"
//                   style={{ width: "250px" }}
//                 />
//               </div>
//               <div className="col-auto">
//                 <img
//                   src="./assest/image4.png"
//                   alt="Image 4"
//                   className="img-fluid"
//                   style={{ width: "250px" }}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="client-review">
//           <h4>What our clients say</h4>
//           <p>
//             See what customers say about us. It really matters to us. Whether
//             good or bad, your feedback helps us evaluate and improve EhyalLive.
//           </p>
//         </div>

//         {/*  New Row With 3 More Images */}
//         <div className="row justify-content-center g-4 mb-4">
//           <div className="col-auto">
//             <img
//               src="./assest/image5.png"
//               alt="Image 5"
//               className="img-fluid"
//               style={{ width: "220px" }}
//             />
//           </div>
//           <div className="col-auto">
//             <img
//               src="./assest/image6.png"
//               alt="Image 6"
//               className="img-fluid"
//               style={{ width: "220px" }}
//             />
//           </div>
//           <div className="col-auto">
//             <img
//               src="./assest/image7.png"
//               alt="Image 7"
//               className="img-fluid"
//               style={{ width: "220px" }}
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

export default function FeaturesSection() {
  return (
    <section className="container py-5 text-center text-white">
      {/* Top Feature Icons Row */}
      <div className="row justify-content-center mb-5">
        <div className="col-6 col-md-3 mb-4">
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
        <div className="col-12 col-md-6 text-center text-md-start mb-4">
          <h4>New Experience in Playing Game</h4>
          <p>
            You can try the game playing with a new style — more real feel,
            like you are the main character in your game and adventure in this
            new digital world.
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
            style={{ width: "100%", maxWidth: "250px" }}
          />
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <img
            src="./assest/image2.png"
            alt="Image 2"
            className="img-fluid"
            style={{ width: "100%", maxWidth: "250px" }}
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
            style={{ width: "100%", maxWidth: "250px" }}
          />
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <img
            src="./assest/image4.png"
            alt="Image 4"
            className="img-fluid"
            style={{ width: "100%", maxWidth: "250px" }}
          />
        </div>
      </div>

      {/* Client Review Section */}
      <div className="text-center my-5 px-3" style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h4 style={{ fontSize: "2rem" }}>What our clients say</h4>
        <p style={{ fontSize: "1.1rem" }}>
          See what customers say about us. It really matters to us. Whether good or bad, your feedback helps us evaluate and improve EhyalLive.
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
