const options = {
  threshold: 0.3,
};

const observedEntries = document.querySelectorAll(".observe");

const observedEntriesObserver = new IntersectionObserver(function (
  entries,
  observedEntriesObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("animate");
      observedEntriesObserver.unobserve(entry.target);
    }
  });
},
options);

observedEntries.forEach((entry) => {
  observedEntriesObserver.observe(entry);
});