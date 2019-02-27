import createFoodEntry from "./create";
import deleteFoodEntry from "./delete";
import createUser from "../user/create";
import { clearDatabase } from "../../test/helpers";
import { UserType } from "../user/types";
import { FoodEntryType } from "./types";

describe("Food Entry: update food entry", function() {
  let user: UserType, foodEntry: FoodEntryType;
  const day = 20180501;

  before(async () => {
    await clearDatabase();
    user = await createUser("testMan@test.com", "test password");
    foodEntry = await createFoodEntry(
      user.id,
      day,
      "Description",
      5,
      10,
      15,
      20
    );
  });

  it("should delete food entry properly", async () => {
    const deleted = await deleteFoodEntry(foodEntry.id, user.id);
    if (!deleted) {
      return "Did not delete properly!";
    }
  });
});
