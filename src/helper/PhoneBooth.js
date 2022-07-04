// Envs
const apiUrl = process.env.REACT_APP_API_BROKER_URL;
const apiPort = process.env.REACT_APP_API_BROKER_PORT;
const apiTypesMapping = process.env.REACT_APP_API_BROKER_TYPES_SEARCH_MAPPING;
const apiRecipesMapping = process.env.REACT_APP_API_BROKER_RECIPES_SEARCH_MAPPING;

export const CallApiForTypes = async () => {

    console.log("entro aca");

    // URL build for types
    const apiUri = `${apiUrl}:${apiPort}/${apiTypesMapping}`;
    console.log(apiUri);

    const data = await fetch(apiUri, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
    const typesToJson = await data.json();
    return typesToJson;

};