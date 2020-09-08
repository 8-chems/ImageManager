import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:8000/api';
export default {

    state: {

        drawer: false,
        loggedin: false,
        user: null,
        avatars: {},
        images: null,
        currentImage: null,
        currentImageId: null,
        currentIndex: 0,

    },

    getters: {
        getCurrentImageId(state) {

            return state.currentImageId
        },

        getCurrentImageData(state) {
            //alert(state.currentImage)
            return state.currentImage
        },
        getDrawer(state) { //take parameter state

            return state.drawer
        },
        isLogged: state => !!state.user,

        getUserName(state) { //take parameter state
            if (state.user) {
                return state.user['user']['name'];
            } else return "Guest User"
        },
        getUserAvatar(state) {
            if (state.user) {
                return state.user['user']['Avatar'];
            } else return "0";
        },



    },



    actions: {
        save_name({ state }, iname) {
            axios
                .post('/updateName', { name: iname, id: state.currentImageId })
                .then(({ data }) => {

                })

        },
        save_comment({ state }, comment) {
            axios
                .post('/updateComment', { comment: comment, id: state.currentImageId })
                .then(({ data }) => {

                })

        },

        deleteImage({ state, dispatch, commit }) {
            return axios
                .post('/deleteImage', { id: state.currentImageId })
                .then(({ data }) => {
                    commit('decreaseOne');
                    return dispatch('getImages');

                })

        },


        plusImage({ state, dispatch, commit }) {

            const max = state.images['ids'].length - 1;
            if (state.currentIndex < max) {
                commit('increase')
                    //  alert('plus :' + this.state.currentImageId)
                return dispatch('getimageData', { id: state.currentImageId })
            } else {
                return alert('No more images for you ...')
            }
        },

        minusImage({ state, dispatch, commit }) {

            if (state.currentIndex > 0) {
                commit('decrease')
                    // alert('minus ' + state.currentImageId)
                return dispatch('getimageData', { id: state.currentImageId })
            } else {
                return alert('This is your first image ...')
            }
        },

        upload({ commit, dispatch }, data) {
            axios.post('/upload', data)
                .then(({ response }) => {
                    dispatch('getImages').then(() => {})
                        .catch(err => { console.log(err) });
                    console.log(response)
                }).catch(err => {
                    console.log(err)
                        // alert(err)
                })
        },
        fetchAvatars({ commit, state }) {
            if (Object.keys(state.avatars).length) {
                return state.avatars
            }


            let avatars = {}
            let files = require.context('#Components/assets/avatars/', true, /\.png$/i); // require.context('~/static/avatars', true, /\.png$/i)
            //let files = require.context('@/assets/avatars/', true, /\.png$/);
            //alert('we are here')
            files.keys().map((key) => {
                let id = key.split('/').pop().split('.')[0].substring(7).toUpperCase()
                    // alert('id : ' + id);
                    // alert('path' + key.split('/').pop());
                avatars[id] = {
                    path: key.split('/').pop(),

                    id: id
                }
            })

            commit('setAvatars', avatars)
        },

        login({ commit }, credentials) {
            return axios
                .post('/login', credentials)
                .then(({ data }) => {
                    commit('setUserData', data)
                })
        },

        getProfile({ commit }) {
            return axios
                .get('/profile')
                .then(({ data }) => {
                    commit('setUpdatedUserData', data)
                })
        },
        updateProfile({ dispatch }, data) {
            return axios
                .post('/updateProfile', data)
                .then(({ data }) => {
                    return dispatch('getProfile')
                })


        },


        getImages({ dispatch }) {
            return axios
                .get('/images')
                .then(({ data }) => {
                    this.state.images = data;

                    this.state.currentImageId = this.state.images['ids'][this.state.currentIndex]['id'];

                    return dispatch('getimageData', { id: this.state.currentImageId })
                        //alert(this.state.images['ids'][0]['id']);
                })
        },
        getimageData({ commit }, imageID) {
            return axios
                .post('/imageData', imageID)
                .then(({ data }) => {
                    // alert(data['ids'][0]['name']);
                    return commit('saveImageData', data)
                }).catch(err => {

                    console.log(err)
                })
        },


        register({ commit }, userinformation) {
            return axios
                .post('/register', userinformation)
                .then(({ data }) => {
                    commit('check_registration', data)
                })
        },

        logout({ commit }) {
            commit('clearUserData')
        },


    },

    mutations: {
        decreaseOne(state) {
            const varl = state.currentIndex;
            state.currentIndex = varl - 1;
            state.currentImageId = state.images['ids'][state.currentIndex]['id'];
        },
        increase(state) {
            const varl = state.currentIndex;
            state.currentIndex = varl + 1;
            state.currentImageId = state.images['ids'][state.currentIndex]['id'];
            // alert('inside the increase: ' + state.currentImageId)
            //return;
        },
        decrease(state) {
            const varl = state.currentIndex;
            state.currentIndex = varl - 1;
            state.currentImageId = state.images['ids'][state.currentIndex]['id'];


        },
        saveImageData(state, imageData) {

            return state.currentImage = imageData
                //   alert(state.currentImage)
        },

        setAvatars(state, avatars) {
            state.avatars = avatars
        },
        inverseDrawer(state) {
            return state.drawer = !state.drawer;
        },
        setUserData(state, userData) {
            state.user = userData
            localStorage.setItem('user', JSON.stringify(userData))
            axios.defaults.headers.common.Authorization = `Bearer ${userData.token}`
        },

        setUpdatedUserData(state, userData) {
            state.user['user'] = userData
                //alert(userData)
            localStorage.setItem('user', JSON.stringify(userData))
        },
        check_registration(state, userData) {
            alert(userData);

            // check if the user registration has no issue ...
        },

        clearUserData() {
            localStorage.removeItem('user')
            location.reload()
        },

    }
}