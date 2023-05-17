import React from "react";
import "./Contact.css"

const Contact = () => {
  return (
    <div id="Container">
        <h2>
            Contact Page
        </h2>
        <div className="Profiles">
            <div className="Person">
                <h3>
                    Jeffrey Cao
                </h3>
                <p>
                    Hi, my name is Jeffrey Cao and I worked on the frontend for Emogen! You can contact me on by email at jeffreycao@ucsb.edu.
                </p>
            </div>
            <div className="Person">
                <h3>
                    Spencer Zeng
                </h3>
                <p>
                    Gathered Emogen training data by webscrapping Twitter's API with a Python script.
                </p>
            </div>
            <div className="Person">
                <h3>
                    Jordan Tran
                </h3>
                <p>
                    Trained the model with Google cloud and hosted it on Hugging Face.
                </p>
            </div>
        </div>
    </div>
  );
};

export default Contact;