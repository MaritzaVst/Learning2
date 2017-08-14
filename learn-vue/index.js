Vue.component('curso', {
    props:['curso'],
    methods: {
        onchange: function(ev){
            this.$emit('checked', this.curso.value, ev.target.checked)
        }
    },
    template: `
            <div>
                <label for="">
                    <input type="checkbox" v-on:change="onchange" v-bind:value="curso.value"> 
                    {{ curso.nombre }}
                </label>
            </div>
        `
})

var app = new Vue({
    el: '#app',
    data: {
        name: "Maritza",
        contador: 0,
        show: false,
        cursosSeleccionados: [],
        cursos: [
            {nombre: 'Curso de SEO', value: 'SEO'},
            {nombre: 'Curso de CBI', value: 'CBI'},
            {nombre: 'Curso de SPA', value: 'SPA'}
        ]
    },
    methods: {
        sumar: function(){
            this.contador ++
        },
        submit: function(){
            console.log(this.cursosSeleccionados) 
        },
        selectCurso: function(curso, checked){
            if(checked) {
                this.cursosSeleccionados.push(curso)
            } else {
                let index = this.cursosSeleccionados.indexOf(curso)
                this.cursosSeleccionados.splice(index, 1)
            }

            // console.log(this.cursosSeleccionados)
        }
    },
    filters: {
        uppercase: function(str) {
            return str.toUpperCase()
        }
    }
})