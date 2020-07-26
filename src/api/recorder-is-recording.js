let LOCAL_STORAGE_KEY = 'uJYlJCHitxOoPI2LRO6hTG5O';

if (process.env.NODE_ENV === 'development') {
  LOCAL_STORAGE_KEY = 'is_recording';
}

/**
 * Get Sapient Analytics form data from storage
 * @returns {Promise<(Object|Error)>} Form data values
 */
export const getIsRecoding = () => {
  return new Promise((resolve, reject) => {
    try {
      let retVal = localStorage.getItem(LOCAL_STORAGE_KEY);

      if (retVal === null) {
        retVal = getDefaultValue();
      } else {
        retVal = JSON.parse(retVal);
      }
      resolve(retVal);
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * Store Sapient Analytics form data into storage
 * @param {Object} form Sapient Analytics form data to be stored
 * @returns {Promise<(Boolean|Error)>} True or Error if operation failed
 */
export const setIsRecording = (x = false) => {
  return new Promise((resolve, reject) => {
    try {
      x = `${x}`;
      localStorage.setItem(LOCAL_STORAGE_KEY, x);
      resolve(true);
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * Get the default form data for Sapient Analytics filter panel
 */
const getDefaultValue = () => false;
