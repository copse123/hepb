import { FC } from "react";

const App: FC = () => (
  <div className="container mx-auto px-4 my-4">
    <header className="text-sm">
      <h1 className="text-3xl">Hepatitis B Analysis Interpretation Helper</h1>

      This app helps you to interpret your hepatitis B blood analysis before your appointment with the doctor.
    </header>

    <div className="card bg-base-100 shadow-xl my-10">
      <main className="card-body items-center text-center">
        App goes here
      </main>
    </div>

    <footer className="text-xs">
      <p>This site uses public sources of information, particularly the <a href="https://www.hepbcommunity.org/t/explainer-lab-results-and-their-interpretation/27" target="_blank" className="link">hepbcommunity.org</a> website and other publically available sources.</p>

      <p className="mt-4">
        <strong>Disclaimer</strong><br />
        I'm not a doctor.<br />
        The information, including but not limited to, text, graphics, images and other material contained on this repository and website are for informational purposes only. No material on this site is intended to be a substitute for professional medical advice, diagnosis or treatment. Always seek the advice of your physician or other qualified health care provider with any questions you may have regarding a medical condition or treatment and before undertaking a new health care regimen, and never disregard professional medical advice or delay in seeking it because of something you have read on this website or in the source code.
      </p>
    </footer>
  </div>
)

export default App;
