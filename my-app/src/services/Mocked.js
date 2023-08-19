import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../data/data";
/**
 * @param {number} props User Id
 * @param {string} action final path URL
 */

class DataMocked {
  async get(id, action) {
    switch (action) {
      case "activity":
        const activityFilter = USER_ACTIVITY.filter(
          (user) => user.userId.toString() === id
        );
        return activityFilter[0];
      case "average-sessions":
        const averageFilter = USER_AVERAGE_SESSIONS.filter(
          (user) => user.userId.toString() === id
        );
        return averageFilter[0];
      case "performance":
        const performanceFilter = USER_PERFORMANCE.filter(
          (user) => user.userId.toString() === id
        );
        return performanceFilter[0];
      default:
        const userFilter = USER_MAIN_DATA.filter(
          (user) => user.id.toString() === id
        );
        return userFilter[0];
    }
  }
}

export default DataMocked;


// import get from "./Api";

// /**
//  * get the user front name from back
//  * @returns user first name
//  */
// function getFirstName() {
//   return get().then((data) => data.userInfos.firstName);
// }

// /**
//  * get the user key data from the back
//  * @returns user key data like kcal, proteins, etc...
//  */
// function getKeyData() {
//   return get().then((data) => data.keyData);
// }

// /**
//  * get by the name, the value of the searched data
//  * @param {string} name name of the searched data
//  * @returns the value of the searched data
//  */
// // function getNutriCountFromNutriName(name) {
// //   return getKeyData().then((data) => {
// //     switch (name) {
// //       case NUTRISCORE_LIST.Calorie:
// //         return data.calorieCount;
// //       case NUTRISCORE_LIST.Glucide:
// //         return data.carbohydrateCount;
// //       case NUTRISCORE_LIST.Lipide:
// //         return data.lipidCount;
// //       case NUTRISCORE_LIST.Protein:
// //         return data.proteinCount;
// //       default:
// //         throw new Error("Can't find nutriment");
// //     }
// //   });
// // }

// /**
//  * Get the average duration of the last sessions
//  * @returns the average duration of the last sessions
//  */
// function getAverageDuration() {
//   return get().then((data) => data.sessions);
// }

// /**
//  * get the performance stats with there names
//  * @returns the performance stats
//  */
// function getStats() {
//   return get().then((data) => {
//     data.data.forEach((value) => {
//       switch (value.kind) {
//         case 1:
//           value.name = "cardio";
//           break;
//         case 2:
//           value.name = "energy";
//           break;
//         case 3:
//           value.name = "endurance";
//           break;
//         case 4:
//           value.name = "strength";
//           break;
//         case 5:
//           value.name = "speed";
//           break;
//         case 6:
//           value.name = "intensity";
//           break;
//       }
//     });
//     return data.data;
//   });
// }

// /**
//  * get the daily score in degree
//  * @returns daily score in degree
//  */
// function getScoreInDegree() {
//   return get().then((data) => {
//     return data.todayScore * 360 + 90;
//   });
// }

// /**
//  * get the daily score in percent
//  * @returns daily score in percent
//  */
// function getScoreInPercent() {
//   return get().then((data) => {
//     return data.todayScore * 100;
//   });
// }

// /**
//  * Get daily activities sorted by dates
//  * @returns daily activities sorted by dates
//  */
// function getDailyActivitySortByDate() {
//   return get().then((data) => {
//     let sessions = data.sessions.sort((a, b) => {
//       return new Date(a.day) - new Date(b.day);
//     });
//     sessions.forEach((session) => {
//       session.index = sessions.indexOf(session) + 1;
//     });
//     return sessions;
//   });
// }

// export {
//   getFirstName,
//   getKeyData,
//   // getNutriCountFromNutriName,
//   getAverageDuration,
//   getStats,
//   getScoreInDegree,
//   getScoreInPercent,
//   getDailyActivitySortByDate,
// };
