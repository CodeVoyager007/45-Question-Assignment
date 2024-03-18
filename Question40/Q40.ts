type Album = {
    artist: string;
    title: string;
    tracks?: number;
};

const album1: Album = { artist: "Artist1", title: "Album Title 1", tracks: 10 };
const album2: Album = { artist: "Artist2", title: "Album Title 2", tracks: 12 };
const album3: Album = { artist: "Artist3", title: "Album Title 3", tracks: 8 };

console.log(`Album 1:
Artist: ${album1.artist}
Title: ${album1.title}
Tracks: ${album1.tracks ?? "Not specified"}
`);

console.log(`Album 2:
Artist: ${album2.artist}
Title: ${album2.title}
Tracks: ${album2.tracks ?? "Not specified"}
`);

console.log(`Album 3:
Artist: ${album3.artist}
Title: ${album3.title}
Tracks: ${album3.tracks ?? "Not specified"}
`);
