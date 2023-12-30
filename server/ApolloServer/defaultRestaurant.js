const incomeSheet = {
  Monday: {
    AM: 200,
    PM: 400,
  },
  Tuesday: {
    AM: 200,
    PM: 400,
  },
  Wednesday: {
    AM: 200,
    PM: 400,
  },
  Thursday: {
    AM: 200,
    PM: 400,
  },
  Friday: {
    AM: 200,
    PM: 400,
  },
  Saturday: {
    AM: null,
    PM: null,
  },
  Sunday: {
    AM: null,
    PM: null,
  },
};
const timeSheet = {
  Monday: {
    In: null,
    Out: null,
  },
  Tuesday: {
    In: null,
    Out: null,
  },
  Wednesday: {
    In: 200,
    Out: 400,
  },
  Thursday: {
    In: 200,
    Out: 400,
  },
  Friday: {
    In: 200,
    Out: 400,
  },
  Saturday: {
    In: 200,
    Out: 400,
  },
  Sunday: {
    In: 200,
    Out: 400,
  },
};
export const defaulUser = {
  name: 'TestUser',
  age: 1000,
  job: 'All',
  incomeSheet: {
    ...incomeSheet,
  },
  timeSheet: {
    ...timeSheet,
  },
};
export const defaultRestaurant = {
  restaurantName: 'DefaultRestaurant',
  empoyees: [defaulUser],
};
