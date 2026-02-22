
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
            id="job-card-${job.id}"
            class="bg-white border-2 border-gray-100 p-8 rounded-lg md:space-y-8 space-y-4 relative"
          >
            <button
            onclick="deleteJob(${job.id})"
              class="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer"
            >
              <img src="./assets/Vector.png" alt="Delete" />
            </button>
            <div>
              <h1 class="text-2xl font-semibold">${job.companyName}</h1>
              <p class="text-lg text-gray-500">${job.position}</p>
            </div>
            <div class=" text-gray-500">
            <span class="">${job.location}</span>
            <span>•</span>
              <span class="">${job.type}</span>
              <span >•</span>
              <span>${job.salary}</span>
            </div>
            <div class="mt-5">
              <button
              id="enable-btn-${job.id}"
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
              <button onclick="addToInterviewList(${job.id})" class="btn btn-outline btn-success uppercase">
                interview
              </button>
              <button onclick="addToRejectedList(${job.id})" class="btn btn-outline btn-error uppercase">
                Rejected
              </button>
            </div>
          </div> `;
  });
}
// Render interview cards to the DOM
function renderInterviewList() {

  interviewContainer.innerHTML = "";
  if (interviewCards.length === 0) {
    interviewContainer.innerHTML = `
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
    interviewContainer.innerHTML += `
        <div
            class="bg-white border-2 border-l-4 border-gray-100 p-8 rounded-lg space-y-8 relative border-l-green-600"
          >
            <button
            onclick="deleteJob(${job.id})"
              class="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer"
            >
              <img src="./assets/Vector.png" alt="Delete" />
            </button>
            <div>
              <h1 class="text-2xl font-semibold">${job.companyName}</h1>
              <p class="text-lg text-gray-500">${job.position}</p>
            </div>
            <ul
              id="job-facilities"
              class="flex gap-3 text-base text-gray-600 my-3"
            >
              <p class="pr-5">${job.location}</p>
              <li class="pr-5">${job.type}</li>
              <li>${job.salary}</li>
            </ul>
            <div class="mt-5">
              <button
                class="btn btn-md uppercase bg-green-300/15 cursor-pointer text-green-600 border-gray-300"
                
              >
                Interview
              </button>
            </div>
            <p>
              ${job.description}
            </p>
            <div>
              <button onclick="addToInterviewList(${job.id})" class="btn btn-outline btn-success uppercase">
                Interview
              </button>
              <button onclick="addToRejectedList(${job.id})" class="btn btn-outline btn-error uppercase">
                Rejected
              </button>
            </div>
          </div> `;
  });
}

// Render rejected cards to the DOM
function renderRejectedList() {

  rejectedContainer.innerHTML = "";
  if (rejectedCards.length === 0) {
    rejectedContainer.innerHTML = `
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
    rejectedContainer.innerHTML += `
        <div
            class="bg-white border-2 border-l-4 border-gray-100 p-8 rounded-lg space-y-8 relative border-l-red-600"
          >
            <button
            onclick="deleteJob(${job.id})"
              class="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer"
            >
              <img src="./assets/Vector.png" alt="Delete" />
            </button>
            <div>
              <h1 class="text-2xl font-semibold">${job.companyName}</h1>
              <p class="text-lg text-gray-500">${job.position}</p>
            </div>
            <ul
              id="job-facilities"
              class="flex gap-3 text-base text-gray-600 my-3"
            >
              <p class="pr-5">${job.location}</p>
              <li class="pr-5">${job.type}</li>
              <li>${job.salary}</li>
            </ul>
            <div class="mt-5">
              <button
                class="btn btn-md uppercase bg-red-300/15 cursor-pointer text-red-600 border-gray-300"
                disabled
              >
                Rejected
              </button>
            </div>
            <p>
              ${job.description}
            </p>
            <div>
              <button onclick="addToInterviewList(${job.id})" class="btn btn-outline btn-success uppercase">
                Interview
              </button>
              <button onclick="addToRejectedList(${job.id})" class="btn btn-outline btn-error uppercase">
                Rejected
              </button>
            </div>
          </div> `;
  });
}