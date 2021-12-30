import config from '../../config';
import swal from 'sweetalert';

const RsvpApiService = {
    postRsvp(rsvpObj) {
        const rsvpJson = JSON.stringify(rsvpObj);
        console.log(rsvpJson)
        return fetch(`${config.API_ENDPOINT}/api/rsvp`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: rsvpJson
        }).then(res =>  
            (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json()
          )
          .catch(error=>{
            swal({
                title: "Error!",
                text: "There has been an error saving your RSVP, please try again later or email stevin.bull@gmail.com!",
                icon: "error",
              });
          })
    }
}

export default RsvpApiService;