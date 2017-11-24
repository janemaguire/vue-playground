var basic = new Vue ({
  el: '#basic',
  data: {
    message: 'Hello Vue, I was made with an ID'
  }
});

var classElement = new Vue ({
  el: '.class-element',
  data: {
    message: 'Hello Vue, I was made with a class'
  }
});

var me = new Vue ({
  el: '.me',
  data: {
    firstName: 'Jane',
    lastName: 'Maguire',
    town: 'London',
    age: 34
  }
});

var list = new Vue ({
    el: '#list',
    data: {
        menu: [
            {text: 'Cupcake'},
            {text: 'Avocado toast'},
            {text: 'Flat white'}
        ]
    }
});

var helloButton = new Vue ({
    el: '#hello',
    data: {},
    methods: {
        sayHello: function () {
            alert("Hello");
        }
    }
});

var todoList = new Vue ({
    el: '#todoList',
    data: {
        todos:
        [
            {
                text: 'Get paid'
            },
            {
                text: 'Eat cake'
            }
        ]
    },
    methods: {
        addToList: function () {
            this.todos.push({
                text: 'Go mad'
            });
        }
    }
});
