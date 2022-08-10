const data = [
  {
    no: 0,
  },
  {
    no: 1,
  },
  {
    no: 2,
  },
  {
    no: 3,
  },
  {
    no: 4,
  },
  {
    no: 5,
  },
  {
    no: 6,
  },
  {
    no: 7,
  },
  {
    no: 8,
  },
  {
    no: 9,
  },
  {
    no: 10,
  },
  {
    no: 11,
  },
  {
    no: 0,
  },
  {
    no: 1,
  },
  {
    no: 2,
  },
  {
    no: 3,
  },
  {
    no: 4,
  },
  {
    no: 5,
  },
  {
    no: 6,
  },
  {
    no: 7,
  },
  {
    no: 8,
  },
  {
    no: 9,
  },
  {
    no: 10,
  },
  {
    no: 11,
  },
];

const containerEl = document.querySelector(".container");

const unloadedData = [...data];
const loadedData = [];

const updateData = () => {
  const popped = unloadedData.splice(0, 4);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(loadedData.push(...popped));
    }, 500);
  });
};

const updateContents = () =>
  loadedData
    .map((content) => `<div class="content">${content.no}</div>`)
    .join("");

const updateContainer = () => {
  containerEl.innerHTML = updateContents();
};

const getThresholdEl = () =>
  [...containerEl.children][containerEl.children.length - 2];

const callback = (entries, observer) => {
  entries.forEach(async (entry) => {
    if (entry.isIntersecting) {
      const oldData = [...loadedData];
      await updateData();
      const newData = [...loadedData];
      updateContainer();

      if (oldData.length !== newData.length) {
        observer.observe(getThresholdEl());
      }
    }
    console.log(loadedData);
    console.log(containerEl.lastChild);
    console.log(entry);
  });
  console.log("callback");
};

const io = new IntersectionObserver(callback, { threshold: 0.5 });

const main = async () => {
  await updateData();
  updateContainer();
  io.observe(getThresholdEl());
};

main();
