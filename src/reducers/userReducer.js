const { LOG_IN_FAILURE, LOG_IN_START, LOG_IN_SUCCESS, SIGN_UP_FAILURE, SIGN_UP_SUCCESS, SIGN_UP_START } = require("../actions/userActions")

const initialState = {
    currentUser: null,
    error: null
} 

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN_SUCCESS: 
        return {...state, 
        currentUser: action.payload,
        error: null
    }
    case SIGN_UP_START:
    return {...state,
    currentUser: action.payload,
    error: null
    }
    case SIGN_UP_FAILURE:
    return {...state,
    currentUser: null,
    error: action.payload
    }
    case SIGN_UP_SUCCESS:
    return {...state,
    currentUser: action.payload,
    error: null
    }
    case LOG_IN_FAILURE:
    return {...state,
    currentUser: null,
    error:  action.payload
    }
    case LOG_IN_START:
    return {...state,
    currentUser: action.payload,
    error: null
    }
    default: return state
    }
} 

export default userReducer;