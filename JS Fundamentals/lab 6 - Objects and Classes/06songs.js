function songsFunc(arr) {
    let numberOfSongs = arr.shift();
    let typeOfList = arr.pop();

    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        let current = arr[i].split("_");
        let currentTypeList = current[0];
        let currentName = current[1];
        let currentTime = current[2];

        let song = new Song(currentTypeList, currentName, currentTime);

        if (typeOfList === "all") {
            console.log(song.name);
        } else if (currentTypeList === typeOfList) {
            console.log(song.name);
        }
    }
}

songsFunc([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']

)

