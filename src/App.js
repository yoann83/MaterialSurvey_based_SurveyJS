import "./styles.css";
import Survey from "material-survey/components/Survey";
import "survey-core/modern.min.css";

export default function App() {
  return (
    <>
      <Survey
        form={{
          questions: [
            {
              name: "multiline-text-example",
              title: "Do you think we should legalize mayonaise?",
              type: "multiline-text"
            },
            {
              max: 10,
              min: 0,
              name: "slider-example",
              step: 0.5,
              title: "What was your GPA in middle school?",
              type: "slider"
            }
          ]
        }}
      />
      ;
    </>
  );
}
