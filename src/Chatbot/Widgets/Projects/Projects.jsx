import React from "react";
import "../PrimaryStyle.css";

// async function fetchprojectsTypes(values) {

//   return new Promise(async(resolve, reject) =>{
//     fetch('https://vezdu12671.execute-api.us-east-1.amazonaws.com/Stage_1/color-fetch', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(values)
//     })
//    .then(response => response.json())
//     .then(data => {
//       resolve(data)
//       console.log(data)
//     })
//     .catch(error => console.error(error));
//   })
// };
// let projectsTypes = await fetchprojectsTypes('fetch types');

const projectsTypeSelector = (props) => {
  const { setState, actionProvider } = props;

  const setType = async (Type) => {
    setState((state) => ({
      ...state,
      projectsType: Type,
    }));
    actionProvider.projectsType(Type);
    actionProvider.sendResp(Type);
  };

  // let projectsTypeList = projectsTypes.map((projectsType,index)=>{
  //   return(<button
  //       className="projectss-selector-button"
  //       onClick={() => setType(projectsType.name)}>
  //         {projectsType.name}
  //   </button>)});

  return (
    <div className="option-selector-container">
      <div className="option-selector-button-container">
        <button
          className="options-selector-button"
          onClick={() => setType("Bağcılar")}
        >
          Bağcılar
        </button>
        <button
          className="options-selector-button"
          onClick={() => setType("Istanbul")}
        >
          Istanbul
        </button>
        <button
          className="options-selector-button"
          onClick={() => setType("Zeytinburnu/İstanbul")}
        >
          Zeytinburnu/İstanbul
        </button>
        <button
          className="options-selector-button"
          onClick={() => setType("Nişantaşı, Istanbul")}
        >
          Nişantaşı, Istanbul
        </button>
        <button
          className="options-selector-button"
          onClick={() => setType("Zeytinburnu/İstanbul")}
        >
          Zeytinburnu/İstanbul
        </button>
        <button
          className="options-selector-button"
          onClick={() => setType("Maslak, Istanbul")}
        >
          Maslak, Istanbul
        </button>
        <button
          className="options-selector-button"
          onClick={() => setType("Beylikdüzü, Istanbul")}
        >
          Beylikdüzü, Istanbul
        </button>
      </div>
    </div>
  );
};

export default projectsTypeSelector;
