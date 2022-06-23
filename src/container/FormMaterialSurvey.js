import Survey from "material-survey/components/Survey";
import "./formMat.scss";
import { Image } from "react-native";

export default function FormMaterialSurvey() {
  //surchage reactNatif
  const validateForm = (value) => {
    if (value.services && value.services.length > 0) {
      alert(JSON.stringify(value));
    } else {
      alert(JSON.stringify("Selectionnez un service"));
    }
  };

  return (
    <div id="form-material-survey">
      <div className="box-logo">
        <Image
          source={
            "https://egerie-software.com/wp-content/themes/egerie/img/egerie-logo.svg"
          }
        />
      </div>
      <Survey
        form={{
          questions: [
            {
              name: "company",
              type: "text",
              title: "Société :",
              placeholder: "Egerie",
              isRequired: true,
              validators: [
                {
                  type: "text",
                  minLength: "3",
                  text: "Minimum 3 caractères"
                }
              ]
            },
            {
              name: "leaders",
              title: "Dirigeant(e/s)",
              type: "multiline-text",
              placeholder: "M LARROUMETS Jean, M OGER Pierre",
              isRequired: true
            },
            {
              name: "employees",
              type: "text",
              title: "Nombres de salariés :",
              placeholder: "-",
              isRequired: true,
              validators: [
                {
                  maxValue: 200,
                  minValue: 1,
                  type: "numeric",
                  text: "Chiffre entre 1 et 200"
                }
              ]
            },
            {
              max: 50,
              min: 0,
              name: "partnership",
              step: 1,
              title: "Nombre de partenariat",
              defaultValue: 5,
              type: "slider",
              isRequired: true
            },
            {
              choices: [
                { text: "Designer", value: "designer" },
                { text: "Développement", value: "dev" },
                { text: "Management", value: "management" },
                { text: "Marketing", value: "trade" },
                { text: "Ressource Humaine", value: "rh" },
                { text: "Système-réseau", value: "networks" }
              ],
              name: "services",
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
    </div>
  );
}
