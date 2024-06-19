const url = 'https://api.cloudinary.com/v1_1/dgqsktohi/image/upload';

const ImageUploadService = {
    
    async uploadBannerImage(file) {
        
        const formData = new FormData();

        formData.append('file', file);
        formData.append('upload_preset', 'donner_banner_images');

        const response = await fetch(url, {
          method: 'POST',
          body: formData
        });
        
        return await response.json();
    }
    
};

export default ImageUploadService;