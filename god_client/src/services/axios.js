import axios from 'axios';

const instance = axios.create({
    
});

export const getStatistics = (success, error) => {
    instance.get('https://localhost:5001/api/User/scores')
    .then(response => {
        if(response.data == null || response.data == ""){
            success([]);
        } else {
            success(response.data);
        }
        
    })
    .catch(error => {
      console.log(error);
    });
};

export const createUser = (userName, success, error) => {
    instance.post('https://localhost:5001/api/User/create/'+userName)
    .then(response => {
        console.log(`User ${userName} Successfully Added`);
        
    })
    .catch(error => {
      console.log(error);
    });
};

export const createMatch = (data, success, error) => {
    instance.post('https://localhost:5001/api/User/create/')
    .then(response => {
        
    })
    .catch(error => {
      console.log(error);
    });
};

export default instance;