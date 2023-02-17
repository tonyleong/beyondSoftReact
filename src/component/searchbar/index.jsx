import { useEffect, useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { search, setPosition } from '../../redux/mapSlice'

const Searchbar = () => {
    const [searchInput, setSearchInput] = useState('')
    const dispatch = useDispatch()

    const searchResult = useSelector(state => state.SEARCH_RESULT ?? [])

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            dispatch(search(searchInput))
        }, 100)

        return () => clearTimeout(delayDebounceFn)
    }, [searchInput])

    const handleSearch = (e) => {
        setSearchInput(e.target.value)
    }

    const handleOnChange = (e, value) => {
        dispatch(setPosition(value))
    }

    return <Autocomplete
        options={searchResult}
        onInput={handleSearch}
        onChange={handleOnChange}
        getOptionLabel={opt => opt?.name}
        renderInput={(params) => <TextField {...params} label="Address" />}
    />
}

export { Searchbar as default, Searchbar }