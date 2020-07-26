import Types from 'FSATypes/app';

/**
 * Trigger redux-saga for web-app routing
 * @param  {Object} payload
 */
export const routeTo = (payload) => {
  return {
    type: Types.ROUTE_TO,
    payload,
  };
};
