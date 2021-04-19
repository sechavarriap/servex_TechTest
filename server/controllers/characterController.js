const fetch = require("node-fetch");

exports.getCharacters = async (req, res) => {
    const { nextPage } = req.body;
    console.log(req.body);
    console.log(`https://rickandmortyapi.com/api/character?page=${nextPage}`)

    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${nextPage}`);
        
        const result = await response.json();
        const characters = result.results;
        const existsNextPage = !result.info.next ? null : nextPage + 1;
        const existsPrevPage = !result.info.prev ? null : nextPage - 1;

        const cutCharacters = characters.map(character => {
            const {id, name, status, species, image} = character;
            return {id, name, status, species, image};
        })

        res.status(200).send({ next: existsNextPage, prev: existsPrevPage, characters: cutCharacters});
    } catch (error) {
        res.status(500).send({ msg: 'No ha sido posible realizar la consulta' });
    }
}