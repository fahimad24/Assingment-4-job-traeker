const totalJobCount = getElementId("total-count-dash");
totalJobCount.innerText = jobCards.length;
const jobCountElement = getElementId("job-count");
jobCountElement.innerText = jobCards.length;


const jobListContainer = getElementId("job-list-container");
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

//  Add All job List button event listener
jobListBtn.addEventListener("click", function () {
    setActiveFilterButton(jobListBtn);
    jobCountElement.innerText = jobCards.length;
    renderJobList();
});
// Add interview button event listener
interviewBtn.addEventListener("click", function () {
    setActiveFilterButton(interviewBtn);
    jobCountElement.innerText = interviewCards.length;
    renderInterviewList();
});
// Add rejected button event listener
rejectedBtn.addEventListener("click", function () {
    setActiveFilterButton(rejectedBtn);
    jobCountElement.innerText = rejectedCards.length;
    renderRejectedList();
});

// initially render all job list to the DOM
renderJobList();







