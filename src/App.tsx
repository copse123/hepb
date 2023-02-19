import { FC, useEffect, useState } from "react";
import { FAQItem } from "./components/FAQItem";
import { FormControl } from "./components/FormControl";
import { InfoBox } from "./components/InfoBox";
import { InputNumber } from "./components/InputNumber";
import { SelectBoolean } from "./components/SelectBoolean";
import { BarsArrowUpIcon, BarsArrowDownIcon } from "@heroicons/react/24/solid";

export const App: FC = () => {
  const [hbsag, setHbsag] = useState<boolean>();
  const [antihbs, setAntihbs] = useState<boolean>();
  const [antihbc, setAntihbc] = useState<boolean>();
  const [hbvdna, setHbvdna] = useState<number>();
  const [hbeag, setHbeag] = useState<boolean>();
  const [antihbe, setAntihbe] = useState<boolean>();

  const [result, setResult] = useState<string>();
  const [isResultExpanded, setIsResultExpanded] = useState(false);

  useEffect(() => {
    let answers: string[] = [];

    if (hbsag === true) {
      answers = ["You are currently infected with Hepatitis B."];
      if (antihbc === true) {
        answers.push(
          "Your infection is chronic (you have it more than 6 months)."
        );
      } else {
        answers.push(
          "If you are positive for more than 6 months, it is defined as a chronic infection."
        );
      }
      if (hbvdna) {
        answers.push(
          hbvdna >= 3000
            ? "Your doctor would probably recommend starting threatment as the viral load (HBV DNA) is more than 3000. Usually it's just 1 pill a day without a lot of side effects."
            : "Your viral load (HBV DNA) is low (less than 3000), but most probably your doctor would advice to check your liver functions. If they are normal, you will need to do a regular checks (usually once in 6 months) to know when to start the threatments."
        );
      }
      if (hbeag === false && antihbe === true && !hbvdna) {
        answers.push(
          "People who are HBeAg-negative and anti-HBe-positive generally have a lower viral load and lower risk of disease progression. Because of the lower viral load, there is a lower risk of transmitting it on to others. For example, HBeAg-negative mothers have been shown to be >10 times less likely to transmit the virus to their newborns compared to HBeAg-positive mothers."
        );
      }
      answers.push(
        "It's also better to check for the Hepatitis D (Delta) virus."
      );
    } else if (hbsag === false) {
      answers = ["You are currently NOT infected with Hepatitis B."];

      if (antihbs === true) {
        answers.push(
          "You have been vaccinated or you have been exposed to Hepatitis B in the past because of the contact with the virus. You are protected from both Hepatitis B and Hepatitis D (delta) infection."
        );
      } else {
        if (antihbs === false) {
          answers.push("You are not protected against it.");
        }
        answers.push("It's better to get vaccinated.");
      }
    } else if (antihbc === true && antihbs === undefined) {
      // hbsag not selected
      answers.push(
        "You have been exposed to Hepatitis B, but it's not clear whether you still have the virus or not."
      );
    }

    setResult(
      answers.join(" ") ||
        "Please fill as much information as you can to see the most accurate results here."
    );
  }, [hbsag, antihbc, antihbs, hbvdna, hbeag, antihbe]);

  return (
    <div className="container max-w-screen-lg mx-auto p-4 card bg-gray-50 mb-20">
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
        <main className="card-body pt-2 px-4">
          <FormControl
            className="my-2"
            title="Hepatitis B surface antigen"
            altTitle="HBsAg"
            info="Measures current Hep B infection. If this is positive, you currently have a Hep B infection. If you are positive for more than 6 months, it is defined as a chronic infection."
            isRequired
          >
            <SelectBoolean value={hbsag} setValue={setHbsag} />
          </FormControl>
          {hbsag === false ? (
            <FormControl
              className="my-2"
              title="Hepatitis B surface antibody"
              altTitle="HBsAb / anti-HBs"
              info="Measures protection against Hep B infection. If this is over 100 units, you are protected from both Hep B and Hepatitis delta infection. Protection can be due to vaccination or recovery from a past infection."
            >
              <SelectBoolean
                value={antihbs}
                setValue={setAntihbs}
                trueLabel="Positive (> 100 units)"
                falseLabel="Negative (< 100 units)"
              />
            </FormControl>
          ) : (
            ""
          )}
          {hbsag !== false ? (
            <FormControl
              className="my-2"
              title="Hepatitis B core antibody"
              altTitle="HBcAb / anti-HBc"
              info="Measures past Hep B infection. If this is positive, you have been exposed to Hep B, but this won’t tell whether you still have the virus or not."
            >
              <SelectBoolean value={antihbc} setValue={setAntihbc} />
            </FormControl>
          ) : (
            ""
          )}
          {hbsag === true ? (
            <>
              <div className="sm:flex my-2 gap-4">
                <FormControl
                  className="sm:w-1/2"
                  title="Hepatitis B 'e' antigen"
                  altTitle="HBeAg"
                >
                  <SelectBoolean value={hbeag} setValue={setHbeag} />
                </FormControl>

                <FormControl
                  className="sm:w-1/2"
                  title="Hepatitis B 'e' antibody"
                  altTitle="anti-HBe"
                >
                  <SelectBoolean value={antihbe} setValue={setAntihbe} />
                </FormControl>
              </div>
              <InfoBox text="Used to determine what stage of chronic infection you are in. This will let your doctor know whether treatment is recommended for you or not." />
              <FormControl
                className="my-2"
                title="Hepatitis B DNA"
                altTitle="HBV DNA IU/ml"
                info="Measures how much virus is in your blood. This will go down if you are on treatment and it works. As long as this is detectable, there is some chance that you can pass it on. Hep B DNA does not measure liver damage! Lots of people can have very high viral load, but not much liver damage. The immune response against the virus causes liver damage not the actual virus. Usually between 10 - 1,000,000,000 IU/ml (or 1.00 - 9.00 log IU/mL, where 9 log = 9 zeroes after 1)"
              >
                <InputNumber
                  placeholder="Number in IU/ml (or leave empty)"
                  value={hbvdna ?? ""}
                  setValue={setHbvdna}
                />
                <button
                  type="button"
                  onClick={() => setHbvdna(undefined)}
                  className="btn btn-xs mt-1"
                >
                  Clear
                </button>
              </FormControl>
            </>
          ) : (
            ""
          )}
          <h2 className="font-2xl font-bold mt-5">FAQ</h2>
          <FAQItem title="Fibroscan or ultrasound">
            Measures the current liver damage. Over time, repeated damage to the
            liver causes scars (this is called fibrosis, or cirrhosis when it
            gets very bad). This scarring can be seen on ultrasound or
            fibroscan. Too much scarring will stop the liver from working
            properly. Ultrasound can also be used to find any liver tumours that
            are forming. Fibroscan usually shows the deeper layers of the liver,
            so it's better to use it to see the possible damage better. There
            are some cases where ultrasound showed nothing and fibroscan showed
            F3 fibrosis.
          </FAQItem>
          <FAQItem title="What is Alanine Aminotransferase (ALT)">
            Measures current immune response against the virus. ALT level goes
            high when the immune system starts attacking the infected liver
            cells.
          </FAQItem>
          <FAQItem title="What is Alpha-fetoprotein (AFP)">
            Measures liver cancer risk. If this is high, it indicates there is a
            risk you have liver cancer. This has to be confirmed by other
            methods (like ultrasound) because there may be other reasons why AFP
            levels are high.
          </FAQItem>
          <FAQItem title="I'm still not sure about my results. How can I know more?">
            Never disregard professional medical advice or delay in seeking it
            because of something you have read on this website or in the source.
            After speaking with your doctor, you can also check the{" "}
            <a
              href="https://www.hepbcommunity.org/t/explainer-lab-results-and-their-interpretation/27"
              target="_blank"
              className="link"
            >
              HepB community
            </a>
            , you will find a lot of people with similar questions and doctors
            answering them there.
          </FAQItem>
          <FAQItem title="Can the chronic Hepatitis B infection go away itself?">
            About 1% of chronic HBV patients per year lose HBsAg.
          </FAQItem>
        </main>
      </div>

      <div
        className={`fixed z-10 bottom-0 left-0 right-0 rounded-t-xl
          ${hbsag === true ? "bg-red-100" : ""}
          ${hbsag === false ? "bg-green-50" : ""}
          ${hbsag === undefined ? "bg-slate-50" : ""}
        `}
      >
        <div
          className={`max-w-screen-lg mx-auto px-8 my-4 cursor-pointer ${
            isResultExpanded ? "" : "line-clamp-2"
          }`}
          onClick={() => setIsResultExpanded((current) => !current)}
        >
          {result}
          {isResultExpanded ? (
            <BarsArrowDownIcon className="w-6 h-6 absolute top-5 right-2 text-blue-500 hover:opacity-75" />
          ) : (
            <BarsArrowUpIcon className="w-6 h-6 absolute top-5 right-2 text-blue-500 hover:opacity-75" />
          )}
        </div>
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
