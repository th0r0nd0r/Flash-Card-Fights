json.extract! challenge, :id, :completed, :challenger_score, :challengee_score

json.challenger do
  json.partial! "api/users/user", user: challenge.challenger
end

json.challengee do
  json.partial! "api/users/user", user: challenge.challengee
end