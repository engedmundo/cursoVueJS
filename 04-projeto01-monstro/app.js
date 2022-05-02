new Vue({
    el: '#app',
    data: {
        playerLife: 15,
        monsterLife: 5,
    },
    computed: {
        hasResult() {
            return this.playerLife === 0 || this.monsterLife === 0
        }
    },
    method: {

    },
    watch: {

    },
})