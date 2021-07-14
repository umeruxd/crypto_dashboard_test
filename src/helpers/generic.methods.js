import { matchPath } from 'react-router-dom';

/**
 * @name @matchDynamicRoute
 * @description match the dynammic path with the current page path
 * @requires Current defined route object
 * @returns Boolean (True if matched)
 * */
export const matchDynamicRoute = route => {
  const pathname = window.location.pathname;
  // match the path and extract dynmaic id params
  let matchRoutePathObj = matchPath(pathname, {
    path: route.path
  });
  if (matchRoutePathObj) {
    return replaceParamsId(route.path, matchRoutePathObj) || false;
  }
  return false;
};

export const replaceParamsId = (routeString, matchRoutePathObj) => {
  const id = process.env.REACT_APP_DYNAMIC_ROUTE_ID;
  // split and remove empty string
  let splittedRoute = routeString.split('/').filter(e => e !== '');
  if (matchRoutePathObj) {
    // replacing :id to dynamic id
    splittedRoute.forEach((e, i) => {
      if (e === ':' + id) {
        splittedRoute[i] = matchRoutePathObj.params[id];
      }
    });
    // form a valid path to match
    return '/' + splittedRoute.join('/');
  }
};

/**
 * @name @camelCaseStringToNormalText
 * @description convert camel case string to normal to =>
 *              uppercase, lowercase or senetence case
 * @requires Required first argument string that needs to be converted
 *              optional second argument is case type
 * @returns converted string
 * */

export const camelCaseStringToNormalText = (string, letterCase) => {
  let normalText = string.replace(/([A-Z])/g, ' $1').replace(/^./, text => {
    return text;
  });
  if (letterCase === 'uppercase') {
    return normalText.toUpperCase();
  }
  if (letterCase === 'sentence') {
    let lowercase = normalText.toLowerCase().slice(1);
    return normalText.charAt(0).toUpperCase() + lowercase;
  }
  if (letterCase === 'heading') {
    let wordsArray = normalText.split(' ');
    let sentence = '';
    wordsArray.forEach(word => {
      if (word.toLowerCase() === 'id') {
        sentence += word.toUpperCase() + ' ';
      } else {
        sentence += (word[0]?.toUpperCase() + word.slice(1) + ' ').replace(
          'undefined',
          ''
        );
      }
    });
    return sentence;
  }
  return normalText;
};

/**
 * @param {string} str takes string like 'This is test' and returns 'thisIsTest'
 * @returns converted camel case string
 */
export const camelize = str => {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, '');
};
