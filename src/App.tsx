import { FC, useState } from "react";
import { FormControl } from "./components/FormControl";
import { InfoBox } from "./components/InfoBox";
import { InputNumber } from "./components/InputNumber";
import { SelectBoolean } from "./components/SelectBoolean";

export const App: FC = () => {
  const [hbsag, setHbsag] = useState<boolean>();
  const [antihbc, setAntihbc] = useState<boolean>();
  const [antihbs, setAntihbs] = useState<boolean>();
  const [hbvdna, setHbvdna] = useState<number>();
  const [hbeag, setHbeag] = useState<boolean>();
  const [antihbe, setAntihbe] = useState<boolean>();

  return (
    <div className="container max-w-screen-lg mx-auto p-4 card bg-gray-50">
      <header className="text-sm text-center">
        <h1 className="text-3xl">Hepatitis B Analysis Interpretation Helper</h1>
        <p>
          This app helps you to interpret your hepatitis B blood analysis before
          your appointment with the doctor.
        </p>
        <p className="text-red-500">
          This App is still in development and not ready for practical use!
        </p>
      </header>

      <div className="card bg-base-100 shadow-xl my-5">
        <main className="card-body pt-2">
          <FormControl
            className="my-2"
            title="Hepatitis B surface antigen"
            altTitle="HBsAg"
            info="Measures current Hep B infection. If this is positive, you currently have a Hep B infection. If you are positive for more than 6 months, it is defined as a chronic infection."
          >
            <SelectBoolean value={hbsag} setValue={setHbsag} />
          </FormControl>

          <FormControl
            className="my-2"
            title="Hepatitis B core antibody"
            altTitle="anti-HBc"
            info="Measures past Hep B infection. If this is positive, you have been exposed to Hep B, but this won’t tell whether you still have the virus or not."
          >
            <SelectBoolean value={antihbc} setValue={setAntihbc} />
          </FormControl>

          <FormControl
            className="my-2"
            title="Hepatitis B surface antibody"
            altTitle="anti-HBs"
            info="Measures protection against Hep B infection. If this is over 100 units, you are protected from both Hep B and Hepatitis delta infection. Protection can be due to vaccination or recovery from a past infection."
          >
            <SelectBoolean value={antihbs} setValue={setAntihbs} />
          </FormControl>

          <FormControl
            className="my-2"
            title="Hepatitis B DNA"
            altTitle="HBV DNA IU/ml"
            info="Measures how much virus is in your blood. This will go down if you are on treatment and it works. As long as this is detectable, there is some chance that you can pass it on. Hep B DNA does not measure liver damage! Lots of people can have very high virus, but not much liver damage: the immune response against the virus causes liver damage not the actual virus."
          >
            <InputNumber
              placeholder="Type the number here in IU/ml"
              value={hbvdna}
              setValue={setHbvdna}
            />
          </FormControl>

          <div className="sm:flex my-2 gap-4">
            <FormControl
              className="sm:w-1/2"
              title="Hepatitis B 'e' antigen"
              altTitle="HBeAg"
              info=""
            >
              <SelectBoolean value={hbeag} setValue={setHbeag} />
            </FormControl>

            <FormControl
              className="sm:w-1/2"
              title="Hepatitis B 'e' antibody"
              altTitle="anti-HBe"
              info=""
            >
              <SelectBoolean value={antihbe} setValue={setAntihbe} />
            </FormControl>
          </div>

          <InfoBox text="Used to determine what stage of chronic infection you are in. This will let your doctor know whether treatment is recommended for you or not." />

          <h2 className="font-2xl font-bold mt-5">FAQ</h2>
          <p>
            Alanine Aminotransferase (ALT)
            <br />
            Measures current immune response against the virus. ALT level goes
            high when the immune system starts attacking the infected liver
            cells.
          </p>

          <p>
            Fibroscan or ultrasound
            <br />
            Measures the current liver damage. Over time, repeated damage to the
            liver causes scars (this is called fibrosis, or cirrhosis when it
            gets very bad). This scarring can be seen on ultrasound or
            fibroscan. Too much scarring will stop the liver from working
            properly. Ultrasound can also be used to find any liver tumours that
            are forming.
          </p>

          <p>
            Alpha-fetoprotein (AFP)
            <br />
            Measures liver cancer risk. If this is high, it indicates there is a
            risk you have liver cancer. This has to be confirmed by other
            methods (like ultrasound) because there may be other reasons why AFP
            levels are high.
          </p>
        </main>
      </div>

      <footer className="font-mono text-sm border rounded-lg bg-white p-5">
        <p>
          Check the sources on{" "}
          <a
            href="http://github.com/copse123/hepb"
            target="_blank"
            className="link"
          >
            GitHub
          </a>
          .
        </p>
        <p className="mt-2">
          This site uses public sources of information, particularly the{" "}
          <a
            href="https://www.hepbcommunity.org/t/explainer-lab-results-and-their-interpretation/27"
            target="_blank"
            className="link"
          >
            hepbcommunity.org
          </a>{" "}
          website and other publically available sources.
        </p>

        <p className="mt-4 text-xs">
          <strong>Disclaimer</strong>
          <br />
          I'm not a doctor.
          <br />
          The information, including but not limited to, text, graphics, images
          and other material contained on this repository and website are for
          informational purposes only. No material on this site is intended to
          be a substitute for professional medical advice, diagnosis or
          treatment. Always seek the advice of your physician or other qualified
          health care provider with any questions you may have regarding a
          medical condition or treatment and before undertaking a new health
          care regimen, and never disregard professional medical advice or delay
          in seeking it because of something you have read on this website or in
          the source code.
        </p>
      </footer>
    </div>
  );
};
