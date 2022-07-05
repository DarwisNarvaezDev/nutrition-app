// Envs
const apiUrl = process.env.REACT_APP_API_BROKER_URL;
const apiPort = process.env.REACT_APP_API_BROKER_PORT;
const apiTypesMapping = process.env.REACT_APP_API_BROKER_TYPES_SEARCH_MAPPING;
const apiRecipesMapping = process.env.REACT_APP_API_BROKER_RECIPES_SEARCH_MAPPING;

export const CallApiForTypes = async () => {

    // URL build for types
    const apiUri = `${apiUrl}:${apiPort}/${apiTypesMapping}`;

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

export const CallApiForRecipes = async (fetchObject) => {

    const recipeType = fetchObject.recipeTypeToFetch !== null ? fetchObject.recipeTypeToFetch : "";
    const searchWord = fetchObject.userInput;

    // URL build for types
    const apiUri = `${apiUrl}:${apiPort}/${apiRecipesMapping}`;

    console.log("prefetch");
    const data = await fetch(apiUri, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            searchWord: searchWord,
            type: recipeType
        })
    });

    const recipesToJson = await data.json();
    
    return recipesToJson;

};