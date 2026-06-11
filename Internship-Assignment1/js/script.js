let player;
let formShown = false;

function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "500",
    width: "100%",
    videoId: "RJTCAL1DRro",

    events: {
      onStateChange: onPlayerStateChange,
    },
  });
}

function onPlayerStateChange(event) {

  if (
    event.data === YT.PlayerState.PLAYING &&
    !formShown
  ) {

    formShown = true;

    setTimeout(() => {

      document.getElementById(
        "leadModal"
      ).style.display = "flex";

    }, 6000);

  }

}

document.addEventListener(
  "DOMContentLoaded",
  () => {
    const closeBtn =
      document.querySelector(".close-btn");

    const leadForm =
      document.getElementById("leadForm");

    closeBtn.addEventListener(
      "click",
      () => {
        document.getElementById(
          "leadModal"
        ).style.display = "none";
      }
    );

  leadForm.addEventListener(
  "submit",
  (event) => {

    event.preventDefault();

    const leadData = {

      name:
        document.getElementById("name").value,

      email:
        document.getElementById("email").value,

      phone:
        document.getElementById("phone").value

    };

    console.log(
      "Lead Captured:",
      leadData
    );

    alert(
      "Thank you! Our team will contact you shortly."
    );

    leadForm.reset();

    document.getElementById(
      "leadModal"
    ).style.display = "none";

  }
);
  }
);

