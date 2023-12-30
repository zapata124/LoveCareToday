import { gql } from 'apollo-server';

const typeDefs = gql`
  type User {
    name: String
    age: Int
    job: String
    defaultValues: String
  }
  type ClockIn {
    In: String
    Out: String
  }
  type DayIncome {
    AM: Int
    PM: Int
  }
  type WeekDays {
      Monday: ClockIn
      Tuesday: ClockIn
      Wednesday: ClockIn
      Thursday: ClockIn
      Friday: ClockIn
      Saturday: ClockIn
      Sunday: ClockIn
  }
  type IncomeWeek {
      Monday: DayIncome
      Tuesday: DayIncome
      Wednesday: DayIncome
      Thursday: DayIncome
      Friday: DayIncome
      Saturday: DayIncome
      Sunday: DayIncome
  }
  type Employee {
    name: String
    age: Int
    position: String
    timeSheet: WeekDays,
    incomeSheet: IncomeWeek
  }
  type EmployeeTime {
    timeSheet: [WeekDays]
  }
  type EmployeeIncome {
    incomeSheet: [IncomeWeek]
  }
  type Restaurant {
    restaurantName: String
    empoyees: [Employee]
  }
  input clockIn {
    In: String
    Out: String
  }
  input dayIncome {
    AM: Int
    PM: Int
  }
  input incomeWeek {
    Monday: dayIncome
    Tuesday: dayIncome
    Wednesday: dayIncome
    Thursday: dayIncome
    Friday: dayIncome
    Saturday: dayIncome
    Sunday: dayIncome
  }
  input weekDays {
      Monday: clockIn
      Tuesday: clockIn
      Wednesday: clockIn
      Thursday: clockIn
      Friday: clockIn
      Saturday: clockIn
      Sunday: clockIn
  }
  input employee {
    name: String
    restaurantName: String
  }
  input employeeTime {
    restaurantName: String
    employeeName: String
  }
  input employeeIncome {
    restaurantName: String
    employeeName: String
    incomeSheet: incomeWeek
  }
  input restaurant {
    restaurantName: String
  }
  type Input {
    user: User
  }
  type Query {
    getEmployee(name: String, restaurantName: String): Employee
  }
  type Query {
    restaurant(restaurantName: String): Restaurant
  }
  type Query {
    user(name: String): User
  }
  type Query {
    weekDays: [WeekDays]
  }
  type Query {
    employeeTime(restaurantName: String, employeeName: String): Employee
  }
  type client {
    client: String
  }
  type Query {
    AllUser(name: String): [User]
  }
  type Query {
    AllWeekDays: [WeekDays]
  }
  type Mutation {
    user(name: String, age: Int, job: String, defaultValues: String): User
  }
  type Mutation {
    weekDays(weekDays: weekDays): WeekDays
  }
  type Mutation {
    AddRestaurant(restaurantName: String): Restaurant
  }
  type Mutation {
    AddRestaurantEmployee(
      restaurantName: String
      name: String
      age: Int
      position: String
      weekDays: weekDays
    ): Restaurant
  }
  type Mutation {
    UpdateRestaurantEmployeeTimeSheet(restaurantName: String, name: String, timeSheet: weekDays): Restaurant
  }
  type Mutation {
    UpdateEmployeeTime(restaurantName: String, employeeName: String, weekDays: weekDays): Employee
  }
  type Mutation {
    UpdateEmployeeIncome(restaurantName: String, employeeName: String, incomeWeek: incomeWeek): Employee
  }
  type Mutation {
    addIncomeSheet(restaurantName: String, employeeName: String, incomeWeek: incomeWeek): Employee
  }
`;

export default typeDefs;
