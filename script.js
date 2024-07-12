let currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form...
  let x = document.getElementsByClassName("tab");
  x[n].style.display = "flex";
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.visibility = "hidden";
  } else {
    document.getElementById("prevBtn").style.visibility = "visible";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  //... and run a function that will display the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  let x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form...
  if (currentTab >= x.length) {
    // ... the form gets submitted:
    document.getElementById("survey-form").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  let x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");

  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid;
}


function fixStepIndicator(n) {
    // This function removes the "active" class of all steps...
    let i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
      x[i].className = x[i].className.replace(" active", "");
    }
    //... and adds the "active" class on the current step:
    x[n].className += " active";
  }
  
document.addEventListener('DOMContentLoaded', function() {
  let divisions = document.getElementsByClassName("division");
  let chars = document.getElementsByClassName("name");

  for (let i = 0; i < divisions.length; i++) {
    let checkbox = divisions[i].querySelector('input[type="checkbox"]');

    checkbox.addEventListener('change', function() {
      if (checkbox.checked) {
        chars[i].style.backgroundColor = "rgb(253, 69, 86)";
      } else {
        chars[i].style.backgroundColor = "rgb(15, 25, 35)";
      }
    });

    checkbox.addEventListener('mouseover', function() {
      if (checkbox.checked = false) {
        chars[i].style.backgroundColor = "rgb(253, 69, 86)";
      }
    });

    checkbox.addEventListener('mouseout', function() {
      if (checkbox.checked = false) {
        chars[i].style.backgroundColor = "rgb(15, 25, 35)";
      }
    });

    // Set initial state
    if (checkbox.checked) {
      chars[i].style.backgroundColor = "rgb(253, 69, 86)";
    } else {
      chars[i].style.backgroundColor = "rgb(15, 25, 35)";
    }
  }
});

document.addEventListener('DOMContentLoaded', function() {
  let divisionsWeap = document.getElementsByClassName("division-weap");
  let sec = document.getElementsByClassName("name-sec");

  for (let i = 0; i < divisionsWeap.length; i++) {
    let checkbox = divisionsWeap[i].querySelector('input[type="checkbox"]');

    checkbox.addEventListener('change', function() {
      if (checkbox.checked) {
        sec[i].style.backgroundColor = "rgb(253, 69, 86)";
      } else {
        sec[i].style.backgroundColor = "rgb(15, 25, 35)";
      }
    });

    // Set initial state
    if (checkbox.checked) {
      sec[i].style.backgroundColor = "rgb(253, 69, 86)";
    } else {
      sec[i].style.backgroundColor = "rgb(15, 25, 35)";
    }
  }
});

document.addEventListener('DOMContentLoaded', function() {
  let divisionsPri = document.getElementsByClassName("division-pri");
  let pri = document.getElementsByClassName("name-pri");

  for (let i = 0; i < divisionsPri.length; i++) {
    let checkbox = divisionsPri[i].querySelector('input[type="checkbox"]');

    checkbox.addEventListener('change', function() {
      if (checkbox.checked) {
        pri[i].style.backgroundColor = "rgb(253, 69, 86)";
      } else {
        pri[i].style.backgroundColor = "rgb(15, 25, 35)";
      }
    });

    // Set initial state
    if (checkbox.checked) {
      pri[i].style.backgroundColor = "rgb(253, 69, 86)";
    } else {
      pri[i].style.backgroundColor = "rgb(15, 25, 35)";
    }
  }
});

document.addEventListener('blur', function (event) {
  const isValid = event.target.validty.valid;
  const message = event.target.validationMessage;
  const connectedValidationId = event.target.getAttribute('aria-describedby');
  const connectedValidation = connectedValidationId ? document.getElementById(connectedValidationId) : false;

  if (connectedValidation && message && !isValid) {
    connectedValidation.innerText = message;
  } else {
    connectedValidation.innerText = '';
  }
}, true);

