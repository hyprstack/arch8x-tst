#!/usr/bin/env node
/**
 * Created by mariomendes (https://github.com/hyprstack) on 21/03/2022.
 */
const Employee = require("./question10");

const fetchRecordsMock = jest
  .spyOn(Employee.prototype, "fetchAllRecords")
  .mockImplementation(() => Promise.resolve(["1", "2", "3"]));

describe("Employee class", () => {
  describe("FetchAllRecords", () => {
    it("should return an array [1,2,3]", async () => {
      const employee = new Employee();
      const res = await employee.fetchAllRecords();

      expect(fetchRecordsMock).toHaveBeenCalled();
      expect(res).toEqual(["1", "2", "3"]);
    });
  });
});
