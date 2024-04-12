import axios from "axios";
import config from "./config";

class ProjectService {
  async getProjectList() {
    let response;

    try {
      response = await axios.get(
        config.BASE_URL + `project_list.json`
      );
    } catch (error) {
      throw new Error(
        error.response ? error.response.data.message : error.message
      );
    }

    const { data } = response;

    return data;
  }
}

export default new ProjectService();
