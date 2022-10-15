const showHidePlot = (targetId) => {
  const target = document.getElementById(`scatter_bar_${targetId}`);
  const allElement = document.getElementsByClassName("sb");
  const allButtons = document.getElementsByClassName("index-button");
  const allInlineTitles = document.getElementsByClassName("inline-title-cat");

  for (var i = 0; i < allElement.length; i++) {
    if (allElement[i] != target) {
      allElement[i].style.display = "none";
      allButtons[i].style.backgroundColor = "white";
      allInlineTitles[i].style.color = "black";
      allButtons[i].style.fontWeight = "unset";
      allInlineTitles[i].style.fontWeight = "unset";
      allButtons[i].style.boxShadow = "none";
    } else {
      allElement[i].style.display = "flex";
      allButtons[i].style.backgroundColor = "lightblue";
      allInlineTitles[i].style.color = "lightblue";
      allButtons[i].style.fontWeight = "bold";
      allInlineTitles[i].style.fontWeight = "bold";
      allButtons[i].style.boxShadow = "2px 2px 2px 2px lightgray";
    }
  }

};
