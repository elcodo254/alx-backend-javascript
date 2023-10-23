function calculateNumber(a, b) {
  return Math.round(a) + Math.round(b);
};

module.exports = calculateNumber;
module.exports = function calculateNumber(a, b = 0) {
  const aNum = Number(a);
  const bNum = Number(b);
  
  if (Number.isNaN(aNum) || Number.isNaN(bNum))
    throw TypeError('Parameters must be numbers');
  
    return Math.round(aNum) + Math.round(bNum);
  };:x
module.exports = function calculateNumber(a, b = 0) {
  const aNum = Number(a);
  const bNum = Number(b);
  
  if (Number.isNaN(aNum) || Number.isNaN(bNum))
    throw TypeError('Parameters must be numbers');
  
    return Math.round(aNum) + Math.round(bNum);
  };
