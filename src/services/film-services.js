export default class FilmcatalogService{
_api_url = 'https://api.themoviedb.org';
_api_key = 'b9109cf9c78ffd5710a223d4c880a667';

getResource = async(url) => {
    const res = await fetch(`${this._api_url}${url}`)

    if (!res.ok){
        throw new Error (`Could not fetch ${url}`+
            `received ${res.status}`)
    }
    return await res.json();
};

getAllFilms = async () => {
    const res = await this.getResource(`/3/movie/top_rated?api_key=${this._api_key}&language=en-US&page=1`);
    return res.films;
};



    data = [  {
        id: 1,
        title: '123',
        author: '123',
        year: '2007',
        coverImage:"" },
      {
        id: 2,
        title: '12323',
        author: '23123',
        year: '2001',
        coverImage:"" 
    }
];
    getFilms() {
        return  new Promise ((resolve, reject) => {
         setTimeout(() => {
             resolve(this.data)
             reject( new Error ('sa'))
         }, 700);
     });
     
    }
    
}