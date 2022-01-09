const getPercent = ({ number, total }) => {
  const percent = (number * 100) / total;
  const roundedPercent = percent.toFixed(1);

  return roundedPercent;
}

export default getPercent;