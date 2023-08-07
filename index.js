let i = 0;
let song_name = [
  "piccolo",
  "zogsohgui",
  "simp with me",
  "yunglex rose",
  "stressed out",
  "jocelyn flores",
  "everybody dies in their nightmare",
  "look at me",
  "hu tao yunglex",
  "let me down slowly",
  "hesitation",
  "stay strapped",
  "hulsnii munguur",
  "sain bodoj uzsenuu",
  "so what",
  "mexico shotgun willy",
];
let youtube_link = [
  "https://www.youtube.com/watch?v=nEkBF9C56o0",
  "https://www.youtube.com/watch?v=EovZhep-xes",
  "https://www.youtube.com/watch?v=7PcXaKuXNUs&pp=ygUMc2ltcCB3aXRoIG1l",
  "https://www.youtube.com/watch?v=QLEVhwROpcA&pp=ygUMeXVuZ2xleCByb3Nl",
  "https://www.youtube.com/watch?v=pXRviuL6vMY&pp=ygUMc3RyZXNzZWQgb3V0",
  "https://www.youtube.com/watch?v=7XhwUbf_O9g&pp=ygUOam9jZWx5biBmbG9yZXM%3D",
  "https://www.youtube.com/watch?v=7XhwUbf_O9g&pp=ygUOam9jZWx5biBmbG9yZXM%3D",
  "https://www.youtube.com/watch?v=wJGcwEv7838&pp=ygUKbG9vayBhdCBtZQ%3D%3D",
  "https://www.youtube.com/watch?v=QaaSKLrZCds&pp=ygUOaHUgdGFvIHl1bmdsZXg%3D",
  "https://www.youtube.com/watch?v=1mAgelsVrHs&pp=ygUSbGV0IG1lIGRvd24gc2xvd2x5",
  "https://www.youtube.com/watch?v=BKIAMg1FG2E&pp=ygUaaGVzaXRhdGlvbnMgc2hpbG9oIGR5bmFzdHk%3D",
  "https://www.youtube.com/watch?v=pe7RmhZgdOU&pp=ygUNc3RheSBzdHJhcHBlZA%3D%3D",
  "https://www.youtube.com/watch?v=YAjAW4IiKv0&pp=ygUPaHVsc25paSBtdW5ndXIn",
  "https://www.youtube.com/watch?v=FCD4TB7vfkA&pp=ygUac2FpbiBib2RvaiB1enNlbiB1dSBseXJpY3M%3D",
  "https://www.youtube.com/watch?v=udDND0Avznc&pp=ygUHc28gd2hhdA%3D%3D",
  "https://www.youtube.com/watch?v=JpJu7nFgTLY",
];
function show_me() {
  document.getElementById("show_me").style.display = "none";
  while (i < 14) {
    let element = document.createElement("div");
    document.getElementById("main").style.cssText =
      "border: 3px solid black;  display: flex;width: 500px;height: 800px;justify-content: center;flex-wrap: wrap;gap: 10px; align-items: center;";
    element.style.cssText =
      "width: 40px; background-color: rgb(113, 113, 113);font-size: 20px; color: rgb(69, 69, 69); height: 25px; border-radius: 10px";
    number_of_song = i + 1;
    element.innerHTML = "#" + number_of_song;
    document.getElementById("main").appendChild(element);
    i++;
    let song_names = document.createElement("a");
    song_names.style.cssText =
      "text-decoration:none;display: flex;padding: 10px; color: white; font-size: 20px; width: 170px";
    song_names.innerText = song_name[i];
    song_names.href = youtube_link[i];
    document.getElementById("main").appendChild(song_names);
  }
}
