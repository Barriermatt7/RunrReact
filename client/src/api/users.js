import axios from "axios";
const API_URL = window.location.hostname === 'localhost' ? 
'http://localhost:3000/api/user' : 
'https://api.guestm.app/api/v1/messages';


const API = {
    login:function(newUser){
        return axios.post("/login", newUser)
    },
    register:function(newUser){
        return axios.post("/api/user", newUser)
    }
}
export function getMessages() {
    return fetch(API_URL)
      .then(res => res.json())
      .then(messages => {
        const haveSeenLocation = {};
        return messages.reduce((all, message) => {
          const key = `${message.latitude.toFixed(3)}${message.longitude.toFixed(3)}`;
          if (haveSeenLocation[key]) {
            haveSeenLocation[key].otherMessages = haveSeenLocation[key].otherMessages || [];
            haveSeenLocation[key].otherMessages.push(message);
          } else {
            haveSeenLocation[key] = message;
            all.push(message);
          }
          return all;
        }, []);
      });
  }
  
  export function getLocation() {
    return new Promise((resolve) => {
      navigator.geolocation.getCurrentPosition((position) => {
        resolve({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
      }, () => {      
        resolve(fetch('https://ipapi.co/json')
          .then(res => res.json())
          .then(location => {
            return {
              lat: location.latitude,
              lng: location.longitude
            };
          }));
      });
    });
  }
  
  export function sendMessage(message) {
    return fetch(API_URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(message)
    }).then(res => res.json());
  }

export default API