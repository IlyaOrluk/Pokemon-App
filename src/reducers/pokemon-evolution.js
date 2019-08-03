const updatePokemonEvolutions = (state, action) => {

    if (state === undefined) {
        return {
            evolutions: [],
            loading: true,
            error: null
        };
    }

    switch (action.type) {
        case 'FETCH_EVOLUTIONS_REQUEST':
            return {
                evolutions: [],
                loading: true,
                error: null
            };

        case 'FETCH_EVOLUTIONS_SUCCESS':
            return {
                evolutions: action.payload,
                loading: false,
                error: null
            };

        case 'FETCH_EVOLUTIONS_FAILURE':
            return {
                evolutions: [],
                loading: false,
                error: action.payload
            };

        default:
            return state.pokemonEvolutions;
    }
};

export default updatePokemonEvolutions;