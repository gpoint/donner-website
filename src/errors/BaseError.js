class BaseError extends Error {
    
    constructor(error) {
        super(error);
        this.type = error.type;
        this.message = error.response ? error.response.data.message : error.message;
    }
    
    getToast() {
        return {
            message: this.message
        };
    }
}

export default BaseError;