getElementId("total-count-dash").innerText = jobCards.length;
getElementId("job-count").innerText = jobCards.length;

const jobListBtn = getElementId("all-jobs-list");
jobListBtn.addEventListener("click", function () {
  console.log("All jobs button clicked");
  const jobListContainer = getElementId("job-list-container");
  renderJobList();
});


// Render job cards to the DOM
function renderJobList() {
    const jobListContainer = getElementId("job-list-container");
  jobListContainer.innerHTML = "";
    jobCards.map((job) => {
      jobListContainer.innerHTML += `
        <div
            class="bg-white border-2 border-gray-100 p-8 rounded-lg space-y-8 relative"
          >
            <div
              class="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer"
            >
              <img src="./assets/Vector.png" alt="Delete" />
            </div>
            <div>
              <h1 class="text-2xl font-semibold">${job.companyName}</h1>
              <p class="text-lg text-gray-500">${job.position}</p>
            </div>
            <ul
              id="job-facilities"
              class="flex gap-3 text-base text-gray-600 my-3"
            >
              <p class="pr-5">${job.remote}</p>
              <li class="pr-5">${job.type}</li>
              <li>${job.salary}</li>
            </ul>
            <div class="mt-5">
              <button
                class="btn btn-md uppercase bg-gray-300 cursor-pointer text-gray-600 border-gray-300"
                disabled
              >
                Not Applied
              </button>
            </div>
            <p>
              ${job.description}
            </p>
            <div>
              <button class="btn btn-outline btn-success uppercase">
                ${job.buttons[0]}
              </button>
              <button class="btn btn-outline btn-error uppercase">
                ${job.buttons[1]}
              </button>
            </div>
          </div> `;
    });
}

renderJobList();