const updatePokemonSpecies = (state, action) => {

    if (state === undefined) {
        return {
            species: [],
            loading: true,
            error: null
        };
    }

    switch (action.type) {
        case 'FETCH_SPECIES_REQUEST':
            return {
                species: [],
                loading: true,
                error: null
            };

        case 'FETCH_SPECIES_SUCCESS':
            return {
                species: action.payload,
                loading: false,
                error: null
            };

        case 'FETCH_SPECIES_FAILURE':
            return {
                species: [],
                loading: false,
                error: action.payload
            };

        default:
            return state.pokemonSpecies;
    }
};

export default updatePokemonSpecies;