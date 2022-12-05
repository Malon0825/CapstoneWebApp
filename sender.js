const sid = 'ACa510567cf3387a9b4df37c04bbb23418'
const auth_token ='36b9cd67ac7383de1822e6d15116d1a4'

const twilio = require('twilio')(sid, auth_token)

const sender = twilio.messages.create({
  from: "+16802022303",
  to: '+639651844955',
  body: "Test Message"
})
.then((res) => console.log("Succesful"))
.catch((err) => {
  console.log(err);
});
export default sender