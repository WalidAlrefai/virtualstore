import superagent from 'superagent';

export function getCategory(value){
    return {
        type: "GET_CATEGORY",
        payload: value,
    }
}
export function selectCategory(id) {
    return {
        type: "SELECT_CATEGORY",
        payload: id,
    }
}

const api = 'https://storefront-api-mh.herokuapp.com';

export const getCatagories = (value) => (dispatch, state) => {
    return superagent.get(`${api}/catagories`).then((res) => {
        console.log(res.body);

        dispatch(getCategory(res.body));
        dispatch(selectCategory(value));
    });
};