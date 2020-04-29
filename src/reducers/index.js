import { combineReducers } from 'redux';

// Reducers
const songsReducer = () => {
	return [
		{ title: 'Bohemian Rhapsody', duration: '3:45'},
		{ title: 'Born To Be Wild', duration: '2:59'},
		{ title: 'Nothing Else Matters', duration: '7:04'},
		{ title: 'Ho Hey', duration: '2:49'}
	];
};

const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === 'SONG_SELECTED') {
		return action.payload;
	}

	return selectedSong;
}

//combine the reducers and export them
export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer
});