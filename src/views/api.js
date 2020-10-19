const url = "https://api.coincap.io/v2";

function getAssets() {
  return fetch(`${url}/assets?limit=30`)
    .then(promise => promise.json())
    .then(promise => promise.data);
}

export default {
  getAssets
};
