// Nomenclatura de variáveis

const categories = [
  {
    name: "User",
    minFollowers: 5,
  },
  {
    name: "Friendly",
    minFollowers: 50,
  },
  {
    name: "Famous",
    minFollowers: 500,
  },
  {
    name: "Super Star",
    minFollowers: 1000,
  },
];

export default async function getUserCategory(req, res) {
  const username = String(req.query.username);

  if (!username) {
    return res.status(400).json({
      message: `Please provide an username to search on the github API`,
    });
  }

  const response = await fetch(`https://api.github.com/users/${username}`);

  if (response.status === 404) {
    return res.status(400).json({
      message: `User with username "${username}" not found`,
    });
  }

  const userData = await response.json();

  const orderedCategories = categories.sort(
    (a, b) => b.minFollowers - a.minFollowers
  );

  const userCategory = orderedCategories.find(
    (category) => userData.minFollowers > category.minFollowers
  );

  const result = {
    username,
    category: userCategory.name,
  };

  return result;
}

getUserCategory(
  {
    query: {
      username: "josepholiveira",
    },
  },
  {}
);
