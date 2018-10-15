const sortDataByType = (data, type) => {
  const inputData = data;
  const outputData = {};
  let indexCounter = 0;

  for (let element of inputData) {
    if (element.type === type) {
      outputData[indexCounter] = element;
      indexCounter++;
    }
  }
  return outputData;
};

module.exports = sortDataByType;
