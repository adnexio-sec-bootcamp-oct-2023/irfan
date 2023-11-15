function parseJSON(jsonString) {
    try {
        const parsedObject = JSON.parse(jsonString);
        console.log('Parsed JSON:', parsedObject);
        return parsedObject;
    } catch (error) {
        console.error('Error parsing JSON:', error.message);
        return null; // or handle the error in another way
    }
}
  
const validJSONString = '{"name": "John", "age": 30}';
parseJSON(validJSONString);
  
const invalidJSONString = '{"name": "John", "age": 30,}';
parseJSON(invalidJSONString);
  