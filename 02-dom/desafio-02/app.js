new Vue({
    el: '#desafio',
    data: {
        valor: '',
    },
    methods: {
        exibirAlerta(event) {
            alert('Este botão foi clicado')
        },
        getValue(event) {
            this.valor = event.target.value
        }
    }
})