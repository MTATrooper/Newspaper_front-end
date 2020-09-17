import {HTTP} from '../constants/contants';

export function get_categories( page ) {
    fetch(`${ HTTP.GET_CATEGORIES }${ page }`,  { method: "GET" })
    .then( response => {
        console.log(response.json());
        return response;
    });
}