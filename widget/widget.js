var field_data;
var session_data;
var rounding_amount;

window.addEventListener('onWidgetLoad', function (obj) {
  field_data = obj.detail.fieldData;
  session_data=obj["detail"]["session"]["data"];
  
  rounding_amount = field_data["rounding_amount"];
  let sub_count_figure = session_data["subscriber-total"]["count"];
  
  console.log(sub_count_figure);

  updateGoal(rounding_amount, sub_count_figure);
  
});

window.addEventListener('onSessionUpdate', function (obj) {
  session_data=obj.detail.session;

  let sub_count_figure = session_data["subscriber-total"]["count"];

  updateGoal(rounding_amount,sub_count_figure);

});

function updateGoal(rounding_amount,sub_count_figure) {
  sub_goal = document.getElementById("sub-goal");
  sub_count = document.getElementById("sub-count");
  
  sub_count.innerHTML = sub_count_figure;

  sub_goal_figure = Math.ceil(sub_count_figure / rounding_amount) * rounding_amount;

  if (sub_goal_figure == sub_count_figure) {
    sub_goal_figure +=rounding_amount;
  };

  sub_goal.innerHTML = sub_goal_figure;
};