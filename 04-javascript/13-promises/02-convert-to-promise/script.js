// Refactor the following function to use a Promise instead
const studentAsleep = false;
const studentLearning = true;

function watchInstructorDemo() {
  return new Promise((callback, errCallback) => {
    if (studentAsleep) {
      errCallback({
          event: "Student is sleeping.",
          message: "Instructor needs to be more fun.",
      });
    } else if (studentLearning === false) {
      errCallback({
        event: "Student is not learning.",
        message: "Instructor needs to be more fun.",
      });
    } else {
      callback("We are all totally getting this!");
    }
  });
} 


watchInstructorDemo().then((callback) => {
    console.log(callback);
}).catch((errCallback) => {
    console.log(errCallback.event + ' ' + errCallback.message);
})