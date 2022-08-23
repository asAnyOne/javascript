class MarvelService {
  _apiBase = "https://gateway.marvel.com:443/v1/public/";
  // _apiKey = "apikey=35ce66c9948b2d1e6ca91816bfbd7d29";
  // _apiKey = "apikey=c905713214dae625fc9cfdbdacc1bce6";
  _apiKey = "apikey=36fd00a260056fd28a0e2ecaeff47a3d";
  _total = 1562;
  _baseOffset = 0;

  getResource = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url} status ${res.status}`);
    }
    return await res.json();
  };

  getAllCharacters = async (offset = this._baseOffset) => {
    const res = await this.getResource(
      `${this._apiBase}characters?limit=9&offset=${offset}&${this._apiKey}`
    );

    return res.data.results.map(this._transformCharacter);
  };

  getCharacter = async (id) => {
    const res = await this.getResource(
      `${this._apiBase}characters/${id}?${this._apiKey}`
    );
    return this._transformCharacter(res.data.results[0]);
  };

  _transformCharacter = (char) => {
    const { id, description, name, thumbnail, urls, comics } = char;

    return {
      id,
      description,
      thumb: thumbnail.path + "." + thumbnail.extension,
      wiki: urls[1].url,
      details: urls[0].url,
      name,
      comics: comics.items,
    };
  };
}

export default MarvelService;
