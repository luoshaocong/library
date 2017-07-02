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
             },
// FUNCTIONS TO IMPLEMENT:
// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
printPlaylists : function () {
  var playlists =  this["playlists"];
  
  console.log("*******************************");
  //console.log(playlists);
  for( var key in playlists ) {
    var tracks = playlists[key].tracks;
    var numTracks = tracks.length;
    if( playlists.hasOwnProperty(key) ) {
      console.log(key + ": " + playlists[key].name + " - "  + numTracks + " tracks" );
    }
  }
},
// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
printTracks : function () {
  var tracks = this["tracks"];
  
  console.log("*******************************");
  //console.log(tracks);
  for( var key in tracks ) {
    if( tracks.hasOwnProperty(key) ) {
      console.log(key + ": " + tracks[key].name + " by "  + tracks[key].artist + " ( "  + tracks[key].album + " ) " );
    }
  }
},
// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
printPlaylist : function (playlistId) {
  var tracks = this["playlists"][playlistId].tracks;
  var numTracks = tracks.length;
  
  console.log("*******************************");
  console.log(this["playlists"][playlistId]);
  console.log(tracks.length);
  console.log(tracks);
  console.log(playlistId + ": " + this["playlists"][playlistId].name + " - "  + numTracks + " tracks" ) ;
  for (var i = 0; i < numTracks; i++) {
    console.log(tracks[i] + ": " + this["tracks"][tracks[i]].name + " by "  + this["tracks"][tracks[i]].artist + " ( "  + this["tracks"][tracks[i]].album + " ) " );
  }
},
// adds an existing track to an existing playlist
addTrackToPlaylist : function (trackId, playlistId) {
  var tracks = this["playlists"][playlistId].tracks ;
  tracks.push(trackId);
  this["playlists"][playlistId].tracks = tracks;
},
// generates a unique id
// (use this for addTrack and addPlaylist)
uid : function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
},
// adds a track to the library
addTrack : function (name, artist, album) {
  var newUid = "t0" + this.uid();
  global_newUid = newUid;
  this["tracks"][newUid] = { newUid, name, artist, album } ;
},
// adds a playlist to the library
addPlaylist : function (name) {
  var newUid = "p0" + this.uid();
  var tracks = [];
  this["playlists"][newUid] = { newUid, name , tracks };
},
// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
printSearchResults : function(query) {
  var tracks = this["tracks"];
  
  console.log("*******************************");
  //console.log(tracks);
  for( var key in tracks ) {
    if( tracks.hasOwnProperty(key) ) {
      if ((tracks[key].name.search(query) != -1) ||
         (tracks[key].artist.search(query) != -1) ||
         (tracks[key].album.search(query) != -1)) {
          console.log(key + ": " + tracks[key].name + " by "  + tracks[key].artist + " ( "  + tracks[key].album + " ) " );
      }
    }
  }
}
}
var global_newUid = '';
library.printPlaylist("p01");
library.printTracks();
library.printPlaylists();
library.addTrack ("New Song", "Some Artist", "Album A") ;
library.printTracks();
library.addTrackToPlaylist(global_newUid, "p01");
library.printPlaylist("p01");
library.printPlaylists();
library.printSearchResults('Mo');
library.printSearchResults('200');
library.addPlaylist("New Play");
library.printPlaylists();