let accordian = document.getElementsByClassName("FAQ__title");

for (let i = 0; i < accordian.length; i++) {
  accordian[i].addEventListener("click", function () {
    if (this.childNodes[1].classList.contains("fa-plus")) {
      this.childNodes[1].classList.remove("fa-plus");
      this.childNodes[1].classList.add("fa-times");
    } else {
      this.childNodes[1].classList.remove("fa-times");
      this.childNodes[1].classList.add("fa-plus");
    }

    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

// https://player.vimeo.com/external/434326549.sd.mp4?s=9ee615a9b75b79f62606627560da7fa550a48032&profile_id=139&oauth2_token_id=57447761
// http://i.stack.imgur.com/zZNgk.png
// https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png