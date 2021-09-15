import * as actionTypes from '../actions/actionTypes';

export const addArticle = article => {
    return {
        type: actionTypes.ADD_ARTICLE,
        article
    }
}