export const Reducer = (state, action) => {
    switch (action.type) {
        // Cases
        case "HELLO_REDUCER":
            console.log(state.userName);
            return {...state};

        case "SET_USER":
            const newUser = action.payload;
            return {...state, userName: newUser };

        // Fallback action
        dafault:
            throw new Error("No action passed to reducer.")
    }
};