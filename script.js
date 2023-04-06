const sectionProfileEl = document.getElementById("section-profile");
const sectionFormEl = document.getElementById("section-form");

const editBtnEl = document.getElementById("edit-btn");
const submitBtnEl = document.getElementById("submit-btn");

const inputNameEl = document.getElementById("input-name");
const inputRoleEl = document.getElementById("input-role");
const inputAvailabilityEl = document.getElementById("input-availability");
const inputAgeEl = document.getElementById("input-age");
const inputLocationEl = document.getElementById("input-location");
const inputYearEl = document.getElementById("input-year");
const inputEmailEl = document.getElementById("input-email");

const nameEl = document.getElementById("name");
const roleEl = document.getElementById("role");
const availabilityEl = document.getElementById("availability");
const ageEl = document.getElementById("age");
const locationEl = document.getElementById("location");
const yearEl = document.getElementById("year");
const emailEl = document.getElementById("email");

sectionFormEl.style.display = "none";

editBtnEl.addEventListener("click",function(){
    sectionFormEl.style.display = "block";
});

submitBtnEl.addEventListener("click",function(){
    sectionProfileEl.style.display = "block";
    sectionFormEl.style.display = "none";

    nameEl.textContent = inputNameEl.value;
    roleEl.textContent = inputRoleEl.value;
    availabilityEl.textContent = inputAvailabilityEl.value;
    ageEl.textContent = inputAgeEl.value;
    locationEl.textContent = inputLocationEl.value;
    yearEl.textContent = inputYearEl.value;
    emailEl.textContent = inputEmailEl.value;
});

