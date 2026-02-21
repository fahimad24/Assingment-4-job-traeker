const totalJobCount = getElementId("total-count-dash");
totalJobCount.innerText = jobCards.length;
const jobCountElement = getElementId("job-count");
jobCountElement.innerText = jobCards.length;
const interviewCountElement = getElementId("interview-count");
interviewCountElement.innerText = interviewCards.length;
const rejectedCountElement = getElementId("rejected-count");
rejectedCountElement.innerText = rejectedCards.length;



const jobListContainer = getElementId("job-list-container");
const interviewContainer = getElementId("interview-container");
const rejectedContainer = getElementId("rejected-container");


const jobListBtn = getElementId("all-jobs-list");
const interviewBtn = getElementId("interview-job-list");
const rejectedBtn = getElementId("rejected-job-list");

const filterButtons = [jobListBtn, interviewBtn, rejectedBtn];

function setActiveFilterButton(activeButton) {
    filterButtons.forEach((button) => {
        button.classList.remove("btn-info", "text-white");
        button.classList.add("bg-white", "text-gray-400", "border", "border-gray-400");
    });

    activeButton.classList.add("btn-info", "text-white");
    activeButton.classList.remove("bg-white", "text-gray-400");
}

const filterContainer = [jobListContainer, interviewContainer, rejectedContainer];

function setHiddenContainers(activeContainer) {
    filterContainer.forEach((container) => {
        container.classList.add("hidden");
    });
    activeContainer.classList.remove("hidden");
}

//  Add All job List button event listener
jobListBtn.addEventListener("click", function () {
    setActiveFilterButton(jobListBtn);
    jobCountElement.innerText = jobCards.length;
    setHiddenContainers(jobListContainer);

});
// Add interview button event listener
interviewBtn.addEventListener("click", function () {
    setActiveFilterButton(interviewBtn);
    jobCountElement.innerText = interviewCards.length + " of " + jobCards.length;
    setHiddenContainers(interviewContainer);
    renderInterviewList();
});
// Add rejected button event listener
rejectedBtn.addEventListener("click", function () {
    setActiveFilterButton(rejectedBtn);
    jobCountElement.innerText = rejectedCards.length + " of " + jobCards.length;
    setHiddenContainers(rejectedContainer);
    renderRejectedList();
});

// initially render all job list to the DOM
renderJobList();


// Add interview Apply List

function addToInterviewList(id) {
    const job = jobCards.find(job => job.id === id);

    rejectedCards = rejectedCards.filter((rejectedJob) => rejectedJob.id !== job.id);

    for (let i of interviewCards) {
        if (i.id === job.id) {
            alert("This job is already in the interview list.");
            return;
        }

    }
    interviewCards.push(job);
    interviewCountElement.innerText = interviewCards.length;
    rejectedCountElement.innerText = rejectedCards.length;
    jobCountElement.innerText = interviewCards.length + " of " + jobCards.length;

    const jobCard = getElementId(`job-card-${job.id}`);
    const enableBtn = getElementId(`enable-btn-${job.id}`);
    jobCard.classList.add("border-l-4", "border-l-green-600");
    jobCard.classList.remove("border-l-red-600");
    console.log(enableBtn, jobCards);
    enableBtn.innerText = "Interview";
    enableBtn.disabled = false;
    enableBtn.classList.remove("bg-gray-300", "text-gray-600", "bg-red-300/15", "text-red-600");
    enableBtn.classList.add("bg-green-300/15", "text-green-600");
    alert("Job added to the interview list.");



    renderInterviewList();
    renderRejectedList();
}

// Add rejected List
function addToRejectedList(id) {
    const job = jobCards.find(job => job.id === id);


    interviewCards = interviewCards.filter((interviewJob) => interviewJob.id !== job.id);


    for (let i of rejectedCards) {
        if (i.id === job.id) {
            alert("This job is already in the rejected list.");
            return;
        }

    }
    rejectedCards.push(job);
    rejectedCountElement.innerText = rejectedCards.length;
    interviewCountElement.innerText = interviewCards.length;
    jobCountElement.innerText = interviewCards.length + " of " + jobCards.length;

    const jobCard = getElementId(`job-card-${job.id}`);
    const enableBtn = getElementId(`enable-btn-${job.id}`);
    jobCard.classList.add("border-l-4", "border-l-red-600");
    jobCard.classList.remove("border-l-green-600");
    enableBtn.innerText = "Rejected";
    enableBtn.disabled = false;
    enableBtn.classList.remove("bg-gray-300", "text-gray-600", "bg-green-300/15", "text-green-600");
    enableBtn.classList.add("bg-red-300/15", "text-red-600");
    alert("Job added to the rejected list.");


    renderRejectedList();
    renderInterviewList();
}

// Delete job from the list
function deleteJob(id) {
    jobCards = jobCards.filter((job) => job.id !== id);
    interviewCards = interviewCards.filter((job) => job.id !== id);
    rejectedCards = rejectedCards.filter((job) => job.id !== id);
    alert("Job deleted successfully.");
    totalJobCount.innerText = jobCards.length;
    interviewCountElement.innerText = interviewCards.length;
    rejectedCountElement.innerText = rejectedCards.length;
    if (!interviewContainer.classList.contains("hidden")) {
        jobCountElement.innerText = interviewCards.length + " of " + jobCards.length;

    } else if (!rejectedContainer.classList.contains("hidden")) {
        jobCountElement.innerText = rejectedCards.length + " of " + jobCards.length;

    } else {
        jobCountElement.innerText = jobCards.length;

    }
    renderJobList();
    renderInterviewList();
    renderRejectedList();
}