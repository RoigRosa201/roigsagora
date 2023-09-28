const BASE_URL ="http://localhost:5173";

export const fetcher = async (url) => {
    let responseObject = { errorMessage: '', data: [] };
    
    try {
        const response = await fetch(BASE_URL + url);
        
        if (response.ok) {
            const responseData = await response.json();
            responseObject.data = responseData;
        } else {
            responseObject.errorMessage = "Failed to fetch data";
        }
        
    } catch (err) {
        responseObject.errorMessage = err.message;
    }
    
    return responseObject;
}

export const getCategories = () => {
    return fetcher('/categories');
}

export const getProducts = (id) => {
    return fetcher('/products?catId=' + id);
}

