import config from '../../config';

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
            console.error({error})
          })
    }
}

export default RsvpApiService;