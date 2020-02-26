export default {
  name: 'CardsContainer',
  props: {
    href: String
  },
  methods: {
    greet: function () {

      var yourNumber = "5521998505047"
      var yourMessage = "teste"

      var number = yourNumber
      var message = yourMessage.split(' ').join('%20')

      return console.log('https://api.whatsapp.com/send?phone=' + number + '&text=%20' + message)
    }
  }
}