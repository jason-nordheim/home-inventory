import { authPost, authGet } from '../helpers/apiHelpers';

export const useAPI = (token, url = 'http://localhost:3000') => {
	const vendorActions = {
		create : ({ name, phone, email, street1, street2, city, state, zip, description }) => {
      return  authPost(url, '/venders', { name, phone, email, street1, street2, city, state, zip, description }, token)
        .then(response => response.data)
        .catch(err => err)
    }, 
    getVendors: () => authGet(url, '/vendors', token)
      .then(response => response.json())
      .catch(err => err ),
    
	};

	return [vendorActions];
};


export default useAPI