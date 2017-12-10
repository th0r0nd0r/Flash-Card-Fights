export const fetchChallenges = user_id =>
  $.ajax({
    method: "GET",
    url: `api/users/${user_id}/challenges`,
    err: () => console.log("Error fetching challenges")
  });

export const fetchCourse = id =>
  $.ajax({
    method: "GET",
    url: `api/challenges/${id}`,
    err: () => console.log("Error fetching challenge")
  });

export const createChallenge = challenge =>
  $.ajax({
    method: "POST",
    url: "api/challenges",
    data: challenge
  });

export const updateChallenge = challenge =>
  $.ajax({
    method: "PATCH",
    url: `api/challenges/${challenge.id}`,
    data: challenge
  });

export const deleteChallenge = id =>
  $.ajax({
    method: "DELETE",
    url: `api/challenges/${id}`
  });
