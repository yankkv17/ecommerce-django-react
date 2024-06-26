import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    CATEGORY_LIST_REQUEST,
    CATEGORY_LIST_SUCCESS,
    CATEGORY_LIST_FAIL,
    FAVOURITE_PRODUCT_LIST_REQUEST,
    FAVOURITE_PRODUCT_LIST_SUCCESS,
    FAVOURITE_PRODUCT_LIST_FAIL,
    FAVOURITE_PRODUCT_LIST_RESET,
    ADD_TO_FAVOURITES_REQUEST,
    ADD_TO_FAVOURITES_SUCCESS,
    ADD_TO_FAVOURITES_FAIL,
    REMOVE_FROM_FAVOURITES_REQUEST,
    REMOVE_FROM_FAVOURITES_SUCCESS,
    REMOVE_FROM_FAVOURITES_FAIL,
    PRODUCT_LIST_BY_CATEGORY_REQUEST,
    PRODUCT_LIST_BY_CATEGORY_SUCCESS,
    PRODUCT_LIST_BY_CATEGORY_FAIL,
    SINGLE_PRODUCT_REQUEST,
    SINGLE_PRODUCT_SUCCESS,
    SINGLE_PRODUCT_FAIL,
    DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAIL,
    CREATE_PRODUCT_REQUEST,
    CREATE_PRODUCT_SUCCESS,
    CREATE_PRODUCT_FAIL,
    CREATE_PRODUCT_RESET,
    EDIT_PRODUCT_REQUEST,
    EDIT_PRODUCT_SUCCESS,
    EDIT_PRODUCT_FAIL,
    EDIT_PRODUCT_RESET,
    CREATE_REVIEW_REQUEST,
    CREATE_REVIEW_SUCCESS,
    CREATE_REVIEW_FAIL,
    CREATE_REVIEW_RESET,
    DELETE_REVIEW_REQUEST,
    DELETE_REVIEW_SUCCESS,
    DELETE_REVIEW_FAIL,
    LATEST_PRODUCTS_REQUEST,
    LATEST_PRODUCTS_SUCCESS,
    LATEST_PRODUCTS_FAIL,
} from "../constants/productConstants";

export const productListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return { loading: true, products: [] };

        case PRODUCT_LIST_SUCCESS:
            return {
                loading: false,
                products: action.payload.products,
                page: action.payload.page,
                pages: action.payload.pages,
            };

        case PRODUCT_LIST_FAIL:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
};

export const categoryListReducer = (state = { categories: [] }, action) => {
    switch (action.type) {
        case CATEGORY_LIST_REQUEST:
            return { loading: true, categories: [] };

        case CATEGORY_LIST_SUCCESS:
            return { loading: false, categories: action.payload };

        case CATEGORY_LIST_FAIL:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
};

export const latestProductsReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case LATEST_PRODUCTS_REQUEST:
            return { loading: true, products: [] };

        case LATEST_PRODUCTS_SUCCESS:
            return { loading: false, products: action.payload };

        case LATEST_PRODUCTS_FAIL:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
};

export const productListByCategoryReducer = (
    state = { products: [] },
    action
) => {
    switch (action.type) {
        case PRODUCT_LIST_BY_CATEGORY_REQUEST:
            return { loading: true, products: [] };

        case PRODUCT_LIST_BY_CATEGORY_SUCCESS:
            return { loading: false, products: action.payload };

        case PRODUCT_LIST_BY_CATEGORY_FAIL:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
};

export const singleProductReducer = (
    state = { product: { reviews: [] } },
    action
) => {
    switch (action.type) {
        case SINGLE_PRODUCT_REQUEST:
            return { loading: true, ...state };

        case SINGLE_PRODUCT_SUCCESS:
            return { loading: false, product: action.payload };

        case SINGLE_PRODUCT_FAIL:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
};

export const productDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_PRODUCT_REQUEST:
            return { loading: true };

        case DELETE_PRODUCT_SUCCESS:
            return { loading: false, success: true };

        case DELETE_PRODUCT_FAIL:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
};

export const createProductReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_PRODUCT_REQUEST:
            return { loading: true };

        case CREATE_PRODUCT_SUCCESS:
            return { loading: false, product: action.payload, success: true };

        case CREATE_PRODUCT_FAIL:
            return { loading: false, error: action.payload };

        case CREATE_PRODUCT_RESET:
            return {};

        default:
            return state;
    }
};

export const editProductReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        case EDIT_PRODUCT_REQUEST:
            return { loading: true };

        case EDIT_PRODUCT_SUCCESS:
            return { loading: false, product: action.payload, success: true };

        case EDIT_PRODUCT_FAIL:
            return { loading: false, error: action.payload };

        case EDIT_PRODUCT_RESET:
            return { product: {} };

        default:
            return state;
    }
};

export const reviewCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_REVIEW_REQUEST:
            return { loading: true };

        case CREATE_REVIEW_SUCCESS:
            return { loading: false, success: true };

        case CREATE_REVIEW_FAIL:
            return { loading: false, error: action.payload };

        case CREATE_REVIEW_RESET:
            return {};

        default:
            return state;
    }
};

export const reviewDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_REVIEW_REQUEST:
            return { loading: true };

        case DELETE_REVIEW_SUCCESS:
            return { loading: false, success: true };

        case DELETE_REVIEW_FAIL:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
};

export const favouritesListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case FAVOURITE_PRODUCT_LIST_REQUEST:
            return { loading: true };

        case FAVOURITE_PRODUCT_LIST_SUCCESS:
            return { loading: false, products: action.payload };

        case FAVOURITE_PRODUCT_LIST_FAIL:
            return { loading: false, error: action.payload };

        case FAVOURITE_PRODUCT_LIST_RESET:
            return {products: []}

        default:
            return state;
    }
};

export const addToFavouritesReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_TO_FAVOURITES_REQUEST:
            return { loading: true };

        case ADD_TO_FAVOURITES_SUCCESS:
            return { loading: false, success: true };

        case ADD_TO_FAVOURITES_FAIL:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
};

export const favouriteProductRemoveReducer = (state = {}, action) => {
    switch (action.type) {
        case REMOVE_FROM_FAVOURITES_REQUEST:
            return { loading: true };

        case REMOVE_FROM_FAVOURITES_SUCCESS:
            return { loading: false, success: true };

        case REMOVE_FROM_FAVOURITES_FAIL:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
};
