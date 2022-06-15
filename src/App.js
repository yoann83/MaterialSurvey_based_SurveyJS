import "./styles.css";
import Survey from "material-survey/components/Survey";
import "survey-core/modern.min.css";

export default function App() {
  //surchage reactNatif
  const validateForm = (value) => {
    if (value.Services.length > 0) {
      alert(JSON.stringify(value));
    } else {
      alert(JSON.stringify("champ Services est vide"));
    }
  };

  return (
    <>
      <Survey
        form={{
          questions: [
            {
              name: "company",
              type: "text",
              title: "Société :",
              isRequired: true
            },
            {
              name: "leader",
              type: "text",
              title: "Dirigeant :"
            },
            {
              name: "employees",
              title: "Nom des salariés :",
              type: "multiline-text"
            },
            {
              max: 50,
              min: 0,
              name: "partnership",
              step: 1,
              title: "Nombre de partenariat",
              type: "slider"
            },
            {
              choices: [
                { text: "Designer", value: "designer" },
                { text: "Développement", value: "dev" },
                { text: "Management", value: "management" },
                { text: "Marketing", value: "trade" },
                { text: "Ressource Humaine", value: "rh" },
                { text: "Système-réseau", value: "networks" },
                { text: "Autres", value: "others" }
              ],
              name: "Services",
              title: "Services :",
              type: "multiple-dropdown"
            },
            {
              isRequired: true,
              name: "text-feeling",
              title: "Années d'activité : ",
              placeholder: "5",
              type: "text",
              validators: [
                {
                  maxValue: 20,
                  minValue: 1,
                  text: "Nombre doit être compris entre 0 et 20",
                  type: "numeric"
                }
              ]
            }
          ]
        }}
        onFinish={(answers) => {
          validateForm(answers);
        }}
      />
    </>
  );
}
