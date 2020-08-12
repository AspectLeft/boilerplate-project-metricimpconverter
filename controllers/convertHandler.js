/*
*
*
*       Complete the handler logic below
*       
*       
*/
const UNIT_MAP = {
  'gal': 'l',
  'l': 'gal',
  'lbs': 'kg',
  'kg': 'lbs',
  'mi': 'km',
  'km': 'mi'
}

const UNIT_FULLNAME = {
  'gal': 'gallons',
  'l': 'liters',
  'lbs': 'pounds',
  'kg': 'kilograms',
  'mi': 'miles',
  'km': 'kilometers'
}

function ConvertHandler() {
  
  this.getNum = function(input) {
    if ((typeof input) !== 'string') {
      return 'invalid number';
    }
    
    input = input.trim();
    
    const firstAlphaIndex = input.search(/[a-zA-Z]/);
    
    const numberStr = firstAlphaIndex >= 0 ? input.substring(0,  firstAlphaIndex) : input;
    
    if (numberStr.length === 0) {
      return 1;
    }
    
    const firstFractionIndex = numberStr.search(/\//);
    
    if (firstFractionIndex < 0) {
      const number = Number(numberStr);
      
      if (Number.isNaN(number)) {
        return 'invalid number';
      }
      
      return number;
    }
    
    const dividend = Number(numberStr.substring(0, firstFractionIndex));
    
    if (Number.isNaN(dividend)) {
      return 'invalid number';
    }
    
    const divisor = firstFractionIndex >= 0 ? Number(numberStr.substring(firstFractionIndex + 1)) : 1;
    
    if (Number.isNaN(divisor) || divisor === 0) {
      return 'invalid number';
    }
    
    return dividend / divisor;
  };
  
  this.getUnit = function(input) {
    if ((typeof input) !== 'string') {
      return 'invalid unit';
    }
    
    input = input.trim();
    
    const firstAlphaIndex = input.search(/[a-zA-Z]/);
    
    if (firstAlphaIndex < 0) {
      return 'invalid unit';
    }
    
    const unit = input.substring(firstAlphaIndex).toLowerCase();
    
    return UNIT_MAP[unit] ? unit : 'invalid unit';
  };
  
  this.getReturnUnit = function(initUnit) {
    return UNIT_MAP[initUnit.toLowerCase()];
  };

  this.spellOutUnit = function(unit) {
    return UNIT_FULLNAME[unit];
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    
    switch (initUnit.toLowerCase()) {
      case 'gal':
        return initNum * galToL;
      case 'l':
        return initNum / galToL;
      case 'lbs':
        return initNum * lbsToKg;
      case 'kg':
        return initNum / lbsToKg;
      case 'mi':
        return initNum * miToKm;
      case 'km':
        return initNum / miToKm;
      default:
        return initNum;
    }
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return '' + initNum + ' ' + this.spellOutUnit(initUnit) + ' converts to ' + returnNum + ' ' + this.spellOutUnit(returnUnit);
  };
  
}

module.exports = ConvertHandler;
