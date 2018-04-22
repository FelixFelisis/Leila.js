
function areEquals(a, b) {

	let aProps = Object.getOwnPropertyNames(a);
  let bProps = Object.getOwnPropertyNames(b);

  if (bProps.length !== aProps.length)
  	return false;

  for (let key of aProps) {
  	if (!bProps.includes(key) || b[key] !== a[key])
  		return false;
  }

  for (let key of bProps) {
  	if (!aProps.includes(key) || b[key] !== a[key])
  		return false;
  }

  return true;
}

module.exports = areEquals;