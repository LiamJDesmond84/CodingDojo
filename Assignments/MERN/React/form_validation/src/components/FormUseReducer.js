import React, { useReducer } from "react";

const initialState = {
    firstName: {
        value: "",
        error: null
    },
    lastName: {
        value: "",
        error: null
    },
    email: {
        value: "",
        error: null
    }

};

function reducer(state, action) {
    return {
        ...state,
        [action.type]: action.payload,
    };
}

const FormUseReducer =  () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    function handleChange(e) {
        const { name, value, } = e.target;

        dispatch({
            type: name,
            payload: value,
            error: null
            
        });
    }


    return (
        <div>
            {JSON.stringify(state)}
            <form>
            <div>
                <label>
                    <span>First Name:</span>{" "}
                    <input
                        name="firstName"
                        value={state.firstName}
                        onChange={handleChange}
                    />
                    {state.firstName.error !== null && (
                    <p className="error">{state.firstName.error}</p>
                    )}
                </label>
            </div>
            <div>
                <label>
                    <span>Last Name:</span>{" "}
                    <input
                        name="lastName"
                        value={state.lastName}
                        onChange={handleChange}
                    />
                    {state.lastName.error !== null && (
                    <p className="error">{state.lastName.error}</p>
                    )}
                </label>
            </div>
            <div>
                <label>
                    <span>Email:</span>{" "}
                    <input
                        name="email"
                        value={state.email}
                        onChange={handleChange}
                    />
                    {state.email.error !== null && (
                    <p className="error">{state.email.error}</p>
                    )}
                </label>
                <input type="submit" value="Create User" />
            </div>
            </form>
        </div>
    );
};

export default FormUseReducer;