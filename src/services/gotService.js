export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`);
        }
        return await res.json();
    }

    getAllBooks = async () => {
        const res = await this.getResource(`/books/`);
        return res.map(this._transformBook)
    }

    getBook = async (id) => {
        const book = await this.getResource(`/books/${id}`);
        return this._transformBook(book);
    }

    getAllCharacters = async () => {
        const res = await this.getResource(`/characters?page=5&pageSize=10`); //получил массив от api
        return res.map(this._transformCharacter);
    }

    getCharacter = async (id) => {
        const character = await this.getResource(`/characters/${id}`);
        return this._transformCharacter(character);
    }

    getAllHouses = async () => {
        const res = await this.getResource(`/houses/`);
        return res.map(this._transformHouse)
    }

    getHouse = async (id) => {
        const house = await this.getResource(`/houses/${id}/`);
        return this._transformHouse(house)
    }

    isCheck(data) {
        if (data !== '') {
            return data
        } else {
            return 'no data :('
        }
    }

    _transformCharacter = (char) => {
        return {
            name: this.isCheck(char.name),
            gender: this.isCheck(char.gender),
            born: this.isCheck(char.born),
            died: this.isCheck(char.died),
            culture: this.isCheck(char.culture)
        }
    }

    _transformHouse = (house) => {
        return {
            name: this.isCheck(house.name),
            region: this.isCheck(house.region),
            words: this.isCheck(house.words),
            overlord: this.isCheck(house.overlord),
            coatOfArms: this.isCheck(house.coatOfArms)
        };
    }

    _transformBook = (book) => {
        return {
            name: this.isCheck(book.name),
            numberOfPages: this.isCheck(book.numberOfPages),
            publisher: this.isCheck(book.publisher),
            released:this.isCheck(book.released.slice(0,10))
        };
    }
}
