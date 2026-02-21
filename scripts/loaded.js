
// Render job cards to the DOM
function renderJobList() {
    jobListContainer.innerHTML = "";
    if (jobCards.length === 0) {
        jobListContainer.innerHTML = `
    <div id="no-job-availabel" class="">
            <div
              class="bg-white border-2 border-gray-100 p-8 py-20 rounded-lg space-y-8 flex flex-col items-center justify-center h-84"
            >
              <div>
                <img src="./assets/jobs.png" alt="Document" class="w-20" />
              </div>
              <div class="mt-1 text-center space-y-2">
                <h2 class="text-3xl font-semibold">No Job Available</h2>
                <p class="text-gray-500">
                  Check back soon for new job opportunities
                </p>
              </div>
            </div>
          </div>`;
        return;
    }
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
              <button id="interview-btn-${job.id}" class="btn btn-outline btn-success uppercase">
                ${job.buttons[0]}
              </button>
              <button id="reject-btn-${job.id}" class="btn btn-outline btn-error uppercase">
                ${job.buttons[1]}
              </button>
            </div>
          </div> `;
    });
}
// Render interview cards to the DOM
function renderInterviewList() {

    jobListContainer.innerHTML = "";
    if (interviewCards.length === 0) {
        jobListContainer.innerHTML = `
    <div id="no-job-availabel" class="">
            <div
              class="bg-white border-2 border-gray-100 p-8 py-20 rounded-lg space-y-8 flex flex-col items-center justify-center h-84"
            >
              <div>
                <img src="./assets/jobs.png" alt="Document" class="w-20" />
              </div>
              <div class="mt-1 text-center space-y-2">
                <h2 class="text-3xl font-semibold">No Job Available</h2>
                <p class="text-gray-500">
                  Check back soon for new job opportunities
                </p>
              </div>
            </div>
          </div>`;
        return;
    }

    interviewCards.map((job) => {
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
              <button id="interview-btn-${job.id}" class="btn btn-outline btn-success uppercase">
                ${job.buttons[0]}
              </button>
              <button id="reject-btn-${job.id}" class="btn btn-outline btn-error uppercase">
                ${job.buttons[1]}
              </button>
            </div>
          </div> `;
    });
}

// Render rejected cards to the DOM
function renderRejectedList() {

    jobListContainer.innerHTML = "";
    if (rejectedCards.length === 0) {
        jobListContainer.innerHTML = `
    <div id="no-job-availabel" class="">
            <div
              class="bg-white border-2 border-gray-100 p-8 py-20 rounded-lg space-y-8 flex flex-col items-center justify-center h-84"
            >
              <div>
                <img src="./assets/jobs.png" alt="Document" class="w-20" />
              </div>
              <div class="mt-1 text-center space-y-2">
                <h2 class="text-3xl font-semibold">No Job Available</h2>
                <p class="text-gray-500">
                  Check back soon for new job opportunities
                </p>
              </div>
            </div>
          </div>`;
        return;
    }

    rejectedCards.map((job) => {
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
              <button id="interview-btn-${job.id}" class="btn btn-outline btn-success uppercase">
                ${job.buttons[0]}
              </button>
              <button id="reject-btn-${job.id}" class="btn btn-outline btn-error uppercase">
                ${job.buttons[1]}
              </button>
            </div>
          </div> `;
    });
}