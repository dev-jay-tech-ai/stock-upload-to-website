module.exports = () => {
  const date = new Date();
  const day = new Date(+new Date() + 3240 * 10000).toISOString().split("T")[0];
  const hours = ('0' + date.getHours()).slice(-2); 
  const minutes = ('0' + date.getMinutes()).slice(-2);
  const seconds = ('0' + date.getSeconds()).slice(-2);
  return day + "_" + hours + minutes + seconds;
};