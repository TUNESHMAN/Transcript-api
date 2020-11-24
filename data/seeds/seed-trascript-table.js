exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("forms")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("forms").insert([
        {
          id: 1,
          matricNo: "15GT007",
          yearOfGraduation: 2020 - 11 - 04,
          reasonForRequest: "I need it at the embassy",
        },
      ]);
    });
};
