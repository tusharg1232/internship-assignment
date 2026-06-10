let player;

function onYouTubeIframeAPIReady() {

  console.log("API Loaded");

  player = new YT.Player("player", {

    height: "500",

    width: "800",

   videoId: videos[currentVideo].videoId

  });
    renderChapters();

}

const videos = [

  {
    videoId: "RJTCAL1DRro",

    chapters: [
      { title: "Introduction", time: 0 },
      { title: "Main Topic", time: 60 },
      { title: "Examples", time: 120 },
      { title: "Conclusion", time: 180 }
    ]
  },

  {
    videoId: "jj_aUFX8SV8",

    chapters: [
      { title: "Start", time: 0 },
      { title: "Design", time: 45 },
      { title: "Features", time: 120 },
      { title: "Summary", time: 240 }
    ]
  },

  {
    videoId: "xmmxkmVSiq0",

    chapters: [
      { title: "Opening", time: 0 },
      { title: "Explanation", time: 90 },
      { title: "Demo", time: 180 },
      { title: "End", time: 300 }
    ]
  }

];
let currentVideo = 0;

function renderChapters() {

  const list =
  document.getElementById("chapterList");

  list.innerHTML = "";

  videos[currentVideo].chapters.forEach((chapter)=>{

    const li =
    document.createElement("li");

    li.textContent =
    `${chapter.title} (${chapter.time}s)`;

    li.addEventListener("click",()=>{

      player.seekTo(
        chapter.time,
        true
      );

    });

    list.appendChild(li);

  });
  
}

document
.getElementById("video1")
.addEventListener("click", () => {

  currentVideo = 0;

 if(player){

  player.loadVideoById(
    videos[currentVideo].videoId
  );

}

  renderChapters();

});

document
.getElementById("video2")
.addEventListener("click", () => {

  currentVideo = 1;

  player.loadVideoById(
    videos[currentVideo].videoId
  );

  renderChapters();

});

document
.getElementById("video3")
.addEventListener("click", () => {

  currentVideo = 2;

  player.loadVideoById(
    videos[currentVideo].videoId
  );

  renderChapters();

});