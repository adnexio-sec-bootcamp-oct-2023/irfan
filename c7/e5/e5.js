function uploadFile(file) {
    const fileNameParts = file.name.split('.');
    const fileExtension = fileNameParts[fileNameParts.length - 1].toLowerCase();

    if (fileExtension !== 'jpg' && fileExtension !== 'png') {
        throw new Error('Invalid file type. Only .jpg and .png files are allowed.');
    }
    console.log('File uploaded successfully!');
}

const validFile = { name: 'image.jpg' };
const invalidFile = { name: 'document.pdf' };

try {
    uploadFile(validFile);   // Output: File uploaded successfully!
    uploadFile(invalidFile); // Throws an error
} catch (error) {
    console.error('Error:', error.message);
}
  