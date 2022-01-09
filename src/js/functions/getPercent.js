const getPercent = ({ values }) => {
  const percents = {};
  let total = 0;

  for (const key in values) {
    total = total + values[key];
  }

  for (const key in values) {
    const percent = (values[key] * 100) / total;
    const roundedPercent = percent.toFixed(1);
    percents[key] = `${roundedPercent}%`;
  }

  return percents;
}

export default getPercent;