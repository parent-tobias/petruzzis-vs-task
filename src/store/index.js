import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";

const dataApiUrl = "https://picsum.photos/v2/";

const dataAPI = axios.create({
    baseURL: dataApiUrl
});

Vue.use(Vuex)

function parseLink(s) {
    const output = {};
    const regex = /<([^>]+)>; rel="([^"]+)"/g;

    let m;
    while (m = regex.exec(s)) {
        const [_, v, k] = m;
        output[k] = v.match(/page=(.*?)&/i)[1];
    }
    return output;
}

const store = new Vuex.Store({
    state: {
        imageList: [],
        parsedHeaderLink: null,
    },
    mutations: {
        SET_IMAGES(state, payload) {
            state.imageList = payload
        },
        SET_HEADERS(state, payload) {
            state.parsedHeaderLink = payload
        }
    },
    actions: {
        getImages({ commit }, params) {
            dataAPI.get("list", { params })
                .then(res => {
                    const { data } = res
                    const headers = parseLink(res.headers.link)
                    store.commit("SET_HEADERS", headers)
                    store.commit("SET_IMAGES", data)
                })
                .catch(e => {
                    console.log(e)
                })
        }
    },
    getters: {
        getImageList: state => {
            return state.imageList
        },
        currentPage: state => {
            if(state.parsedHeaderLink?.next) {
                return parseInt(state.parsedHeaderLink.next) - 1
            } else return parseInt(state.parsedHeaderLink?.prev) + 1
        }
    }
})

export default store