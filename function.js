var video_idx = 0;
var stack_select = [];
var cur_select = "0";

var batches = [
  [80, 84, 87, 81, 85, 88, 89, 86, 90, 91, 92, 93, 96, 97, 99, 100, 79, 78, 95, 98]
];
var video_dir = "./video/";

var video_idx_arr = [];
var question_name = "Q.mp4";
var select_names = ["1.mkv", "2.mkv", "3.mkv", "4.mkv"];
var video_num = video_idx_arr.length;
var required_num = 0;
var select_num = select_names.length;

addEventListener("DOMContentLoaded", (event) => {
  video_idx_arr = batches[Math.floor(Math.random() * batches.length)];
  required_num = video_idx_arr.length;
  show_content();
});

function previous() {
  clear_radio();
  if (video_idx > 0) {
    video_idx -= 1;
  } else {
    alert("It's already the first question!");
  }
  show_content();
  show_progress();
}

function show_content() {
  var video_node = document.getElementById("video");
  var select_node = [];
  for (var i = 0; i < select_num; i++) {
    select_node.push(document.getElementById("select_video_" + i));
  }
  if (stack_select.length > video_idx) {
    document.getElementById(
      "select_" + (stack_select[video_idx] - 1)
    ).checked = true;
    cur_select = stack_select[video_idx];
  }
  var path = video_dir + (video_idx_arr[video_idx] + 1) + "/" + question_name;
  video_node.src = path;
  for (var i = 0; i < select_num; i++) {
    select_node[i].src = video_dir + (video_idx_arr[video_idx] + 1) + "/" + select_names[i];
  }
}

function sel_result(str) {
  if (video_idx < required_num) {
    cur_select = str;
  }
}

function next() {
  if (!check_radio()) {
    alert("Please make sure all three categories！");
    return;
  }
  if (video_idx > stack_select.length) stack_select.push(cur_select);
  else stack_select[video_idx] = cur_select;
  video_idx += 1;
  show_progress();
  if (video_idx < required_num) {
    show_content();
  } else {
    show_result();
  }
  clear_radio();
}

function check_radio() {
  if (cur_select != "0") {
    return true;
  }
  return false;
}

function clear_radio() {
  cur_select = "0";
  var elements = document.getElementsByClassName("rate_radio");
  for (var i = 0; i < elements.length; i++) {
    elements[i].checked = false;
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function show_progress() {
  var percent = ((video_idx * 1.0) / required_num) * 100;
  var progress_node = document.getElementById("progress");
  progress_node.innerText =
    "Progress: " +
    percent +
    "% (" +
    video_idx.toString() +
    "/" +
    required_num.toString() +
    ")";
}

function show_result() {
  var result_string = "";
  for (var i = 0; i < stack_select.length; i++) {
	if (i !== 0) result_string += "_" 
    result_string += (video_idx_arr[i] + 1) + "-" + stack_select[i];
  }
  const Http = new XMLHttpRequest();
  const url = "demo.php?q=" + result_string;
  Http.open("POST", url);
  Http.send();
  alert("Thanks!");
}
