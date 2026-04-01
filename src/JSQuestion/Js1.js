function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function retryAsync(fn, retries, delay) {
  for (let i = 1; i <= retries; i++) {
    try {
      return await fn();
    } catch (error) {
      if (i === retries) throw new Error("number of retries over");
      await sleep(delay);
    }
  }
}
let attempt = 0;

const tempFn = async () => {
  attempt++;
  console.log(`Attempt ${attempt}`);
  if (attempt < 3) throw new Error("Failed!");
  return "Success!";
};
retryAsync(tempFn, 5, 1000)
  .then((result) => console.log("Result:", result))
  .catch((err) => console.log("Error:", err.message));
