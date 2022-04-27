new Vue({
    el: '#desafio',
    data: {
        valor: 0,
    },
    computed: {
        resultado() {
            return this.valor === 37 ? 
            'Valor igual' : 'Valor diferente' 
        }
    },
    watch: {
        resultado(novo, antigo) {
            setTimeout(() => {
                this.valor = 0
            }, 5000)
        }
    },
    methods: {
        somar5() {
            this.valor += 5
        },
        somar1() {
            this.valor += 1
        },
    }
})