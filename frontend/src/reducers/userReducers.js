import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    USER_PROFILE_REQUEST,
    USER_PROFILE_SUCCESS,
    USER_PROFILE_FAIL,
    USER_PROFILE_RESET,
    USER_UPDATE_REQUEST,
    USER_UPDATE_SUCCESS,
    USER_UPDATE_FAIL,
    USER_UPDATE_RESET,
    USER_LIST_REQUEST,
    USER_LIST_SUCCESS,
    USER_LIST_FAIL,
    USER_LIST_RESET,
    USER_DELETE_REQUEST,
    USER_DELETE_SUCCESS,
    USER_DELETE_FAIL,
    ADMIN_USER_UPDATE_REQUEST,
    ADMIN_USER_UPDATE_SUCCESS,
    ADMIN_USER_UPDATE_FAIL,
    ADMIN_USER_UPDATE_RESET,
} from "../constants/userConstants";

export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return { loading: true };

        case USER_LOGIN_SUCCESS:
            return { loading: false, userInfo: action.payload };

        case USER_LOGIN_FAIL:
            return { loading: false, error: action.payload };

        case USER_LOGOUT:
            return {};

        default:
            return state;
    }
};

export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return { loading: true };

        case USER_REGISTER_SUCCESS:
            return { loading: false, userInfo: action.payload };

        case USER_REGISTER_FAIL:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
};

export const userProfileReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case USER_PROFILE_REQUEST:
            return { ...state, loading: true };

        case USER_PROFILE_SUCCESS:
            return { loading: false, user: action.payload };

        case USER_PROFILE_FAIL:
            return { loading: false, error: action.payload };

        case USER_PROFILE_RESET:
            return { user: {} };

        default:
            return state;
    }
};

export const userUpdateReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_UPDATE_REQUEST:
            return { loading: true };

        case USER_UPDATE_SUCCESS:
            return { loading: false, userInfo: action.payload, success: true };

        case USER_UPDATE_FAIL:
            return { loading: false, error: action.payload };

        case USER_UPDATE_RESET:
            return {};

        default:
            return state;
    }
};

export const userListReducer = (state = { users: [] }, action) => {
    switch (action.type) {
        case USER_LIST_REQUEST:
            return { loading: true };

        case USER_LIST_SUCCESS:
            return { loading: false, users: action.payload };

        case USER_LIST_FAIL:
            return { loading: false, error: action.payload };

        case USER_LIST_RESET:
            return {};

        default:
            return state;
    }
};

export const userDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_DELETE_REQUEST:
            return { loading: true };

        case USER_DELETE_SUCCESS:
            return { loading: false, success: true };

        case USER_DELETE_FAIL:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
};

export const adminUserUpdateReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case ADMIN_USER_UPDATE_REQUEST:
            return { loading: true };

        case ADMIN_USER_UPDATE_SUCCESS:
            return { loading: false, success: true };

        case ADMIN_USER_UPDATE_FAIL:
            return { loading: false, error: action.payload };

        case ADMIN_USER_UPDATE_RESET:
            return { loading: true, user: {} };

        default:
            return state;
    }
};
