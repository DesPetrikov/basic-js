import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(/*date*/) {
  throw new NotImplementedError('Not implemented');
  // if(typeof date != 'object'){
  //   return 'Unable to determine the time of year!'
  // }
  // else if ( isNaN(Date.parse(String(date)))){
  //   throw new Error('Invalid date!')
  // }
  // else{
    
  // }

}

// console.log(getSeason(new Date(2020, 02, 31)));
// console.log(getSeason(new Date(2025, 1, 22, 23, 45, 11, 500))); //winter
// console.log(getSeason({ John: 'Smith' }));

