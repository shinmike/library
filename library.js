var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

// var printPlaylists = function () {
//
// // Testing...
//   // for (var blah in library){
//   //   // tracks
//   //   // playlists
//   //   if (blah === "playlists"){
//   //     console.log(library[blah]);
//   //   }
//   // }
//
// var playlists = library.playlists;
// for (var p in playlists){
//   var p0 = playlists[p];
//   var id = p0.id;
//   var name = p0.name;
//   var trackCount = p0.tracks.length;
//   console.log(id + ': ' + name + " - " + trackCount + " tracks");
// }
//
// };
// printPlaylists();

// ---------------------------------------------------------- DONE


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

// var tracks = library.tracks;
// var printTracks = function () {
//   for (var t in tracks){
//     var t0 = tracks[t];
//     var id = t0.id;
//     var name = t0.name;
//     var artist = t0.artist;
//     var album = t0.album;
//     console.log(id + ": " + name + " by " + artist + " (" + album +")");
//   }
// };
//
// printTracks();

// ---------------------------------------------------------- DONE



// // prints a list of tracks for a given playlist, in the form:
// // p01: Coding Music - 2 tracks
// // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// // t02: Model View Controller by James Dempsey (WWDC 2003)




// var printPlaylist = function (playlistId) {
//   var input = playlistId;
//   var arr = Object.keys(library.playlists);
//   var output = "";
//
//   arr.forEach(function(element, index, array){
//     if(element === input){
//       var playlist = library.playlists[element];
//       var playlistId = playlist.id;
//       var playlistName = playlist.name;
//       var playlistTrackCount = playlist.tracks.length;
//       output += playlistId + ": " + playlistName + " - " + playlistTrackCount + " tracks\n";
//
//       var tracksInPlaylist = playlist.tracks;
//       tracksInPlaylist.forEach(function(element, index, array){
//         var track = library.tracks[element];
//         var trackId = track.id;
//         var trackName = track.name;
//         var trackArtist = track.artist;
//         var trackAlbum = track.album;
//         output += trackId + ": " + trackName + " by " + trackArtist + " (" + trackAlbum +")\n";
//       });
//     }
//   });
//   return output;
// };
//
// console.log(printPlaylist('p01'));

// ---------------------------------------------------------- DONE



// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {

  var playlistObj = library.playlists;
  var playlistOfInterest = playlistObj[playlistId];
  playlistOfInterest.tracks.push(trackId);
  return playlistOfInterest;

};
console.log(addTrackToPlaylist("t02", "p02"));

// ---------------------------------------------------------- DONE



// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};


// adds a track to the library

function nextTrackId() {
  var t0Array = Object.keys(library.tracks);
  var newTrackId = ("t0" + (parseInt(t0Array.length) + 1));
  return newTrackId;
}

var addTrack = function (name, artist, album) {
  var tracksObj = library.tracks;
  var trackId = uid();

  tracksObj[trackId] = {
    id: trackId,
    name: name,
    artist: artist,
    album: album
  };

  return tracksObj;
};

// console.log(addTrack("Billie Jean", "Michael Jackson", "Bad"));

// // ---------------------------------------------------------- DONE

// adds a playlist to the library

var addPlaylist = function (name) {
  var playlistObj = library.playlists;
  var playlistId = uid();

  playlistObj[playlistId] = {
    id: playlistId,
    name: name,
    tracks: []
  };

  return playlistObj;
};

console.log(addPlaylist("Jake and Amir"));


// // STRETCH:
// // given a query string string, prints a list of tracks
// // where the name, artist or album contains the query string (case insensitive)
// // tip: use "string".search("tri")
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
//
// var printSearchResults = function(query) {
//
// }
