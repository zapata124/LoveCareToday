import { ApolloServer } from 'apollo-server';
import Model from './mongoUtil.js';
import mongoose from 'mongoose';
import typeDef from './schema.js';
// import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import pkg from '@apollo/client';
import { defaultRestaurant } from './defaultRestaurant.js';
const { ApolloClient, InMemoryCache, ApolloProvider, gql } = pkg;
// const Server2 = async () => {
//   const client = new ApolloClient({
//     uri: 'https://flyby-router-demo.herokuapp.com/',
//     cache: new InMemoryCache(),
//   });
// const client = ...

//   client
//     .query({
//       query: gql`
//         query ExampleQuery {
//           company {
//             ceo
//           }
//           roadster {
//             apoapsis_au
//           }
//         }
//       `,
//     })
//     .then((result) => console.log(result));
// };
// const save = mongoose.save;
// const client = new ApolloClient({
//   uri: 'https://flyby-router-demo.herokuapp.com/',
//   cache: new InMemoryCache(),
// });
// const erroHandler = (arg: any) => {
//   try {
//     return arg;
//   } catch (er) {
//     return er;
//   }
// };
let count = 0;
const resolvers = {
  // !!! lets try to see if we are able to make a reusable try catch function
  Query: {
    user: async (_, { name }) => {
      // this function may not be in use /// should probobly be removed
      try {
        return await Model.findOne({ name: name });
      } catch (err) {
        console.log('this is the err:', err);
      }
    },
    getEmployee: async (_, { name, restaurantName }) => {
      // this function may not be in use /// should probobly be removed
      try {
        // if( name === 'create') {
        //   return await Model.create({ ...defaultRestaurant });
        // };
        count++;
        const all = await Model.find({});
        const restaurant = await Model.findOne({ restaurantName: restaurantName });
        console.log('this is the', restaurant.empoyees, count);
        const employee = restaurant?.empoyees?.filter((employee) => {
          return employee?.name === name;
        });
        const dd = employee[0];
        console.log({ employee, dd });

        return employee[0];
        // return all
      } catch (err) {
        console.log(`The getEmployee error is: ${err}`);
      }
    },
    restaurant: async (_, { restaurantName }) => {
      // / we should make a reusable component to query
      try {
        return await Model.findOne({ restaurantName: restaurantName });
      } catch (err) {
        console.log(err);
      }
    },
    employeeTime: async (_, { restaurantName, employeeName }) => {
      try {
        const restaurantEmplyees = await Model.findOne({ restaurantName: restaurantName });
        const lookUpEmployee = restaurantEmplyees.empoyees.filter((employee) => {
          return employee?.name === employeeName;
        });
        return lookUpEmployee[0];
      } catch (err) {
        console.log(err);
      }
    },
    weekDays: async () => {
      // need to check and see if we can use the same function for this query and the one below
      try {
        const database = await Model.find();
        return database;
      } catch (err) {
        console.log(err);
      }
    },
    AllUser: async () => {
      try {
        const database = await Model.find({});
        return database;
      } catch (err) {
        console.log(err);
      }
    },
  },
  Mutation: {
    user: async (_, { name, age, job, defaultValues }) => {
      try {
        return await Model.create({ name, age, job, defaultValues });
      } catch (err) {
        console.log(err);
      }
    },
    AddRestaurant: async (_, { restaurantName }) => {
      try {
        return await Model.create({
          restaurantName: restaurantName,
          empoyees: [],
        });
      } catch (err) {
        console.log(err);
      }
    },
    AddRestaurantEmployee: async (_, { restaurantName, name, age, position }) => {
      try {
        const restaurant = await Model.findOne({ restaurantName: restaurantName });
        const restaurantEmployees = restaurant.empoyees;
        // name: String
        // age: Int
        // position: String
        // timeSheet: [WeekDay]
        const newEmployee = {
          name: name,
          age: age,
          position: position,
          timeSheet: {},
          incomeWeek: {},
        };
        restaurantEmployees.push(newEmployee);
        return await Model.findOneAndUpdate({
          restaurantName: restaurantName,
          empoyees: restaurantEmployees,
        });
      } catch (err) {
        console.log(err);
      }
    },
    UpdateRestaurantEmployeeTimeSheet: async (_, { restaurantName, name, timeSheet }) => {
      // // this may come out need to check if need it since the function UpdateTimesheet is doing something very similar

      const restaurant = await Model.findOne({ restaurantName: restaurantName });
      const restaurantEmployee = restaurant.empoyees;
      const updatedRestaurantEmployees = restaurantEmployee.map((employee) => {
        const currentEmployee = employee ? 'yes' : 'no';
        if (employee && employee.name === name) employee.timeSheet = timeSheet;
        return employee;
      });
      return await Model.findOneAndUpdate({
        restaurantName: restaurantName,
        empoyees: updatedRestaurantEmployees,
      });
    },
    UpdateEmployeeTime: async (_, { restaurantName, employeeName, weekDays }) => {
      try {
        const restaurantEmplyees = await Model.findOne({ restaurantName: restaurantName });
        const lookUpEmployee = restaurantEmplyees.empoyees.map((employee) => {
          if (employee?.name === employeeName)
            employee.timeSheet = { ...employee.timeSheet, ...weekDays };
          return employee;
        });
        const returnEmployee = lookUpEmployee[lookUpEmployee.length - 1];
        await Model.findOneAndUpdate({
          restaurantName: restaurantName,
          empoyees: lookUpEmployee,
        });
        console.log({ restaurantName, employeeName, weekDays, returnEmployee });
        return returnEmployee;
      } catch (err) {
        console.log(err);
      }
    },
    UpdateEmployeeIncome: async (_, { restaurantName, employeeName, incomeWeek }) => {
      try {
        console.log('This is incomeSheet');
        const restaurantEmplyees = await Model.findOne({ restaurantName: restaurantName });
        const lookUpEmployee = restaurantEmplyees.empoyees.map((employee) => {
          if (employee?.name === employeeName)
            employee.incomeSheet = { ...employee.incomeSheet, ...incomeWeek };
          return employee;
        });
        const returnEmployee = lookUpEmployee[lookUpEmployee.length - 1];
        await Model.findOneAndUpdate({
          restaurantName: restaurantName,
          empoyees: lookUpEmployee,
        });
        console.log(
          { employeeName, restaurantName, incomeWeek, restaurantEmplyees },
          'from server',
        );
        return returnEmployee;
      } catch (err) {
        console.log(err);
      }
    },
    addIncomeSheet: async (_, { restaurantName, employeeName, incomeWeek }) => {
      try {
        const restaurantEmplyees = await Model.findOne({ restaurantName: restaurantName });
        const lookUpEmployee = restaurantEmplyees.empoyees.map((employee) => {
          if (employee?.name === employeeName) {
            if (!employee.incomeWeek)
              employee.incomeSheet = { ...employee.incomeSheet, ...incomeWeek };
          }
          return employee;
        });
        const returnEmployee = lookUpEmployee[lookUpEmployee.length - 1];
        await Model.findOneAndUpdate({
          restaurantName: restaurantName,
          empoyees: lookUpEmployee,
        });
        return returnEmployee;
      } catch (err) {
        console.log(err);
      }
    },
    weekDays: async (_, { weekDays }) => {
      try {
        return await Model.create({
          ...weekDays,
        });
      } catch (err) {
        console.log(err);
      }
    },
  },
};
// we might need to change this to express
const server = new ApolloServer({
  typeDefs: typeDef,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
