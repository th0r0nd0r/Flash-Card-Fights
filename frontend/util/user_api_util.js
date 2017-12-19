export const fetchUser = id =>
  $.ajax({
    method: "GET",
    url: `api/users/${id}`
  });

export const fetchUsers = data => $.ajax({
    method: "GET",
    url: "api/users",
    data,
    err: () => console.log("Error fetching users")
  });
