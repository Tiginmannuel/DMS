const userRepo = require("../db/user.repo");

class UserService {
  async getUserDetails(_, callback) {
    var request = _.request;

    var user = await userRepo.getUserDetails(+request.userId);
    callback(null, user);
  }
}

module.exports = UserService;
