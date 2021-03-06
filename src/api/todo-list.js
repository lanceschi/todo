let LOCAL_STORAGE_KEY = 'aoKSfL6VCxB6YFEkxoljU02k';

if (process.env.NODE_ENV === 'development') {
  LOCAL_STORAGE_KEY = 'todo_list';
}

/**
 * Get Sapient Analytics form data from storage
 * @returns {Promise<(Object|Error)>} Form data values
 */
export const getTodoList = () => {
  return new Promise((resolve, reject) => {
    try {
      let list = localStorage.getItem(LOCAL_STORAGE_KEY);

      if (!list) {
        list = getDefaultList();
      } else {
        list = JSON.parse(list);
      }

      resolve(list);
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
export const setTodoList = (list = []) => {
  return new Promise((resolve, reject) => {
    try {
      list = JSON.stringify(list);
      localStorage.setItem(LOCAL_STORAGE_KEY, list);
      resolve(true);
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * Get the default form data for Sapient Analytics filter panel
 */
const getDefaultList = () => [];