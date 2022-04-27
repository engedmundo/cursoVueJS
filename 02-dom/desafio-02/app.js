new Vue({
    el: '#desafio',
    data: {
        nome: 'Edmundo Abreu e Lima',
        idade: 36,
        imagem: 'http://files.cod3r.com.br/curso-vue/vue.jpg',
    },
    methods: {
        triplicaIdade: function (idade) {
            return idade * 3
        },
        aleatorio: () => {
            return Math.random()
        },
    }
})