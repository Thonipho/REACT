import { combineReducers } from "redux";

const songsReducer = () => {
    return [
        { title: 'Blue Laces', duration: '4:05'},
        { title: 'Long Way', duration: '3:35'},
        { title: 'Keep it 100', duration: '1:20'},
        { title: 'Big Poppa', duration: '2:53'}
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});