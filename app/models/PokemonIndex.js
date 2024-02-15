export class PokemonIndex {
  constructor(data) {
    this.name = data.name
  }

  get PokemonButtonHTMLTemplate() {
    return /*html*/ `
    <button type="button" class="redish btn btn-outline-danger fs-4 my-2 p-2">${this.name}</button>
    `
  }
}
