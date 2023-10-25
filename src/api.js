/* eslint-disable array-callback-return */
async function getAllProjectDetailsId() {
  const url =
    "https://dyvolvxe37.execute-api.eu-west-2.amazonaws.com/cubedots-staging-website-cms-portal-lambda/project/project-list?saleStatus=unsold&languageId=1&category=banner";

  return Promise.all([
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "uwG5ZTsMqi8xvpQXYwX1na1RZ5e0VqZR7yVKd8iG",
      },
    }).then(async (value) => {
      const result = await value.json();
      const projects = result.data;
      return projects.map((project) => project.id);
    }),
  ]).catch((err) => {
    console.log(err);
  });
}

async function secondApiCall(values) {
  let changesData = [];
  for (let id of values) {
    const idsResponse = await fetch(
      `https://dyvolvxe37.execute-api.eu-west-2.amazonaws.com/cubedots-staging-website-cms-portal-lambda/cms-portal-content-management/project-info?id=${id}&languageId=1`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "uwG5ZTsMqi8xvpQXYwX1na1RZ5e0VqZR7yVKd8iG",
        },
      }
    );
    const result = await idsResponse?.json();
    changesData.push(await result.data);
  }
  return changesData;
}

export async function getAllProjectDetails() {
  const firstAPiResponse = await getAllProjectDetailsId();
  console.log("firstAPiResponse", firstAPiResponse);
  return await secondApiCall(firstAPiResponse[0]);
}

