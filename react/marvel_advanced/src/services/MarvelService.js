import useHttp from "../hooks/http.hook";

const useMarvelService = () => {
  const { request, loading, error, clearError } = useHttp();
  const _apiBase = "https://gateway.marvel.com:443/v1/public/";
  // _apiKey = "apikey=35ce66c9948b2d1e6ca91816bfbd7d29";
  // _apiKey = "apikey=c905713214dae625fc9cfdbdacc1bce6";
  const _apiKey = "apikey=36fd00a260056fd28a0e2ecaeff47a3d";
  const _baseOffset = 0;

  const getAllCharacters = async (offset = _baseOffset) => {
    const res = await request(
      `${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`
    );

    return res.data.results.map(_transformCharacter);
  };

  const getCharacter = async (id) => {
    const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
    return _transformCharacter(res.data.results[0]);
  };

  const getCharacterByName = async (name) => {
    const res = await request(`${_apiBase}characters?name=${name}&${_apiKey}`);
    return _transformCharacter(res.data.results[0]);
  };

  const getAllComics = async (offset = _baseOffset) => {
    const res = await request(
      `${_apiBase}comics?limit=8&offset=${offset}&${_apiKey}`
    );
    return res.data.results.map(_transformComic);
  };

  const getComic = async (id) => {
    const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);
    return _transformComic(res.data.results[0]);
  };

  const _transformCharacter = (char) => {
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
  const _transformComic = (comic) => {
    const { title, thumbnail, urls, prices, id, description, pageCount } =
      comic;

    return {
      details: urls[0].url,
      thumb: thumbnail.path + "." + thumbnail.extension,
      price: prices[0].price,
      title,
      id,
      description,
      pageCount,
    };
  };

  return {
    loading,
    error,
    clearError,
    getAllCharacters,
    getCharacter,
    getCharacterByName,
    getAllComics,
    getComic,
  };
};

export default useMarvelService;
