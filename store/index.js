import data from 'static/content.json';

var shuffle = function(arr) {
	var n = 15
	var result = new Array(n),
			len = arr.length,
			taken = new Array(len);
	if (n > len)
			throw new RangeError("getRandom: more elements taken than available");
	while (n--) {
			var x = Math.floor(Math.random() * len);
			result[n] = arr[x in taken ? taken[x] : x];
			taken[x] = --len in taken ? taken[len] : len;
	}
	return result;
};

var createCategory = function(list) {
	var songsObj = [];
	var songs = shuffle(list.songs);
	for (var i = 0; i < 15; i++) {
		var song = { artist: songs[i], selected: false };
		songsObj.push(song);
	}
	var finalList = {	name: list.name, songs: songsObj };
	return finalList;
};

export const state = () => ({
	content: data,
	selectedList: createCategory(data['hittikamara']),
	singaList: createCategory(data['singa']),
});

export const getters = ({
	getCategories: (state) => {
		return state.content;
	},
	getSelectedList: (state) => {
		return state.selectedList;
	},
	getSingaList: (state) => {
		return state.singaList;
	},
});

export const mutations = {
	setSelectedList(state, listParam) {
		var list = listParam ? listParam : state.content['hittikamara'];
		state.selectedList = createCategory(list);
	},
	addSelectedArtist(state, artist) {
		for (var i = 0; i < 15; i++) {
			if (state.selectedList.songs[i].artist === artist.artist) {
				state.selectedList.songs[i].selected = !state.selectedList.songs[i].selected;
				break;
			}
		}
	}
};

export const actions = {
	setSelectedList({ commit }, list) {
		commit("setSelectedList", list);
	},
	addSelectedArtist({ commit }, artist) {
		commit("addSelectedArtist", artist);
	},

};