class MarvelService {
  _apiBase = "https://gateway.marvel.com:443/v1/public/";
  _apiKey = "apikey=35ce66c9948b2d1e6ca91816bfbd7d29";

  getResource = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url} status ${res.status}`);
    }
    return await res.json();
  };

  getAllCharacters = async () => {
    const res = await this.getResource(
      `${this._apiBase}characters?limit=100&offset=500&${this._apiKey}`
    );

    return res.data.results.map(this._transformCharacter(res));
  };

  getCharacter = async (id) => {
    const res = await this.getResource(
      `${this._apiBase}characters/${id}?${this._apiKey}`
    );
    return this._transformCharacter(res.data.results[0]);
  };

  _transformCharacter = (char) => {
    const { description, name, thumbnail, urls } = char;

    return {
      description,
      thumb: thumbnail.path + "." + thumbnail.extension,
      wiki: [urls.length === 3 ? urls[urls.length - 1].url : urls[1].url],
      details: urls[0].url,
      name,
    };
  };
}

export default MarvelService;
