const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            dischi:[],
        }
    },

    methods: {
        getAlbumApi() {
            axios.get("api/dischi.php").then((response) => {
                this.dischi.push(...response.data)
            })
        },

    },
    mounted(){
        this.getAlbumApi()
    }
}).mount("#app")