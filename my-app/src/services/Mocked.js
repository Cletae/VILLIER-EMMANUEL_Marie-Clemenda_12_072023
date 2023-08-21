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
