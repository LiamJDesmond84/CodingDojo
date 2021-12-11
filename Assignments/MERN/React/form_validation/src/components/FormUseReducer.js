import React, { useReducer } from "react";

const initialState = {
    firstName: {
        text: "",
        error: ""
    },
    lastName: {
        text: "",
        error: ""
    },
    email: {
        text: "",
        error: ""
    }

};

const reducer = (state, action) => {
    switch (action.type) {
    case "SET_FNAME": 
        return {
            ...state,
            firstName: {
                ...state.firstName,
                text: action.payload
            },
            };

    case "SET_FNAME_ERROR":
    return {
        ...state,
        firstName: {
            ...state.firstName,
            error: action.payload
        },
        };

    case "SET_LNAME":
        return {
            ...state,
            lastName: {
                ...state.lastName,
                text: action.payload
            },
        };

    case "SET_LNAME_ERROR":
        return {
            ...state,
            lastName: {
                ...state.lastName,
                error: action.payload
            },
        };

    case "SET_EMAIL":
            return {
                ...state,
                email: {
                    ...state.email,
                    text: action.payload
                },
        };
    case "SET_EMAIL_ERROR":
        return {
            ...state,
            email: {
                ...state.email,
                error: action.payload
            },
        };

    default:
        return state;
    }
}

const FormUseReducer =  () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    function handleFirstChange(e) {

        if (e.target.value.length < 5) {
            dispatch({
                type: "SET_FNAME_ERROR",
                payload: "First Name must be at least 5 characters long",
            });
        } else {
            dispatch({
                type: "SET_FNAME_ERROR",
                payload: "",
            });
        }
        dispatch({
            type: "SET_FNAME",
            payload: e.target.value
        });
    }
    function handleLastChange(e) {

        if (e.target.value.length < 5) {
            dispatch({
                type: "SET_LNAME_ERROR",
                payload: "Last Name must be at least 5 characters long",
            });
        } else {
            dispatch({
                type: "SET_LNAME_ERROR",
                payload: "",
            });
        }
        dispatch({
            type: "SET_LNAME",
            payload: e.target.value
        });
    }

    function handleEmailChange(e) {

        if (e.target.value.length < 5) {
            dispatch({
                type: "SET_EMAIL_ERROR",
                payload: "Email must be at least 5 characters long",
            });
        } else {
            dispatch({
                type: "SET_EMAIL_ERROR",
                payload: "",
            });
        }
        dispatch({
            type: "SET_EMAIL",
            payload: e.target.value
        });
    }


    return (
        <div>
            {/* {JSON.stringify(state)} */}
            <form>
            <div>
                <label>
                    <span>First Name:</span>
                    <input
                        name="firstName"
                        value={state.firstName.text}
                        onChange={handleFirstChange}
                    />
                    {state.firstName.error !== null && (
                    <p className="error">{state.firstName.error}</p>
                    )}
                </label>

                {state.firstName.text}
            </div>
            <div>
                <label>
                    <span>Last Name:</span>{" "}
                    <input
                        name="lastName"
                        value={state.lastName.text}
                        onChange={handleLastChange}
                    />
                    {state.lastName.error !== null && (
                    <p className="error">{state.lastName.error}</p>
                    )}
                </label>
                {state.lastName.text}
            </div>
            <div>
                <label>
                    <span>Email:</span>{" "}
                    <input
                        name="email"
                        value={state.email.text}
                        onChange={handleEmailChange}
                    />
                    {state.email.error !== null && (
                    <p className="error">{state.email.error}</p>
                    )}
                </label>
                {state.email.text}
                <br/>
                <input type="submit" value="Create User" />
                
            </div>
            </form>
        </div>
    );
};

export default FormUseReducer;