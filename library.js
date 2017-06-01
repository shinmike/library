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

var printPlaylists = function () {
  // for (var blah in library){
  //   // tracks
  //   // playlists
  //   if (blah === "playlists"){
  //     console.log(library[blah]);
  //   }
  // }
  var musLib = Object.keys(library['playlists']);
  for (var playlists of musLib){
    var playlist = library['playlists'][playlists];
    var name = playlist['name'];
    var id = playlist['id'];
    var tracks = playlist['tracks'];
    var trackCount = tracks['length'];
    // console.log(id + ': ' + name + " - " + trackCount + " tracks");
  }
}
printPlaylists();
// ---------------------------------------------------------- DONE


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

//Object.keys(library.tracks) -> ["t01", "t02", "t03"];
var printTracks = function () {
  // console.log(library['tracks']['t01']);
  //var tracks = library['tracks']['t01'];
  //console.log(tracks);
  var musLib = Object.keys(library['tracks']);
  //console.log(musLib);
  for (var i = 0; i < musLib.length; i++){
    var tracks = musLib[i];
    var track = library['tracks'][tracks];
    var name = track['name'];
    var artist = track['artist'];
    var album = track['album'];
    // console.log(track);
    //console.log(track['id'] + ': ' +  name + ' by ' + artist + ' (' + album + ')');
  }
}
printTracks();
// ---------------------------------------------------------- DONE


// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {

  var playlists = library['playlists'];
  var output = "";

  for (var i in playlists) {
    var playlist = playlists[i];

    var playlistId = playlist["id"];
    var playlistName = playlist["name"];
    var playlistTrackCount = playlist["tracks"].length;
    output += playlistId + ": " + playlistName + " - " + playlistTrackCount + " tracks\n";

    for (var j in playlist["tracks"]) {
      var tracksInPlaylist = playlist["tracks"][j];

      var track = library.tracks[tracksInPlaylist];

      var tracksInPlaylistId = track["id"];
      var tracksInPlaylistName = track["name"];
      var tracksInPlaylistArtist = track["artist"];
      var tracksInPlaylistAlbum = track["album"];
      output += tracksInPlaylistId + ": " + tracksInPlaylistName + " by " + tracksInPlaylistArtist + " (" + tracksInPlaylistAlbum + ")\n";
    }
  }
  return output;
}

//console.log(printPlaylist());


// var printPlaylist = function (playlistId) {

//   var playlist = library['playlists'][playlistId];
//   var playlistTracks = playlist['tracks'];
//   var noOfTracks = playlistTracks.length;
//   var nameOfPlaylist = playlist['name'];
//   console.log(playlistId + ": " + nameOfPlaylist + "- " + noOfTracks + " tracks");
//   playlistTracks.forEach(printTrack);
// }

// function printTrack(album){
//   var track = library['tracks'][album];
//   console.log(track);
// }

// printPlayList('p01');
// ('p01') = argument to function
// {} = code block / object literal
// [] = array literal
// function(parameter)

// ---------------------------------------------------------- DONE



// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {

  var playlistObj = library.playlists;
  var playlistTracks = playlistObj.tracks;
  var tracksObj = library.tracks;

  var playlistOfInterest = playlistObj[playlistId];
  playlistOfInterest.tracks.push(trackId);
  //console.log(playlistOfInterest);

}
addTrackToPlaylist("t02", "p02");
console.log(printPlaylist());

// ---------------------------------------------------------- DONE

// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library

function getNextId() {
  var sortedNums = Object.keys(library.tracks).map(function(id){

    return parseInt(id.replace("t", ""));
  }).sort()

  return "t0" + (sortedNums[sortedNums.length - 1] + 1);
};

var addTrack = function (name, artist, album) {
  var playlistObj = library.playlists;
  var tracksObj = library.tracks;
  var id = getNextId();

  tracksObj[id] = {
    id: id,
    name: name,
    artist: artist,
    album: album
  };

return tracksObj;
}

// ---------------------------------------------------------- DONE

// adds a playlist to the library

var addPlaylist = function (name) {

}


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}
