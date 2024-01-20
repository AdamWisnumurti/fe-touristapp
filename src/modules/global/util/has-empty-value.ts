export const hasEmptyValue = (obj: any) => {
  // Check if obj is defined and not null
  if (obj === undefined || obj === null) {
    return false; // or handle it based on your requirements
  }

  const keys = Object.keys(obj);

  for (const key of keys) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        // Recursively check nested objects
        if (hasEmptyValue(obj[key])) {
          return true;
        }
      } else if (obj[key] === undefined || obj[key] === '') {
        // Check if any property is undefined or empty
        return true;
      }
    }
  }
  return false;
};
