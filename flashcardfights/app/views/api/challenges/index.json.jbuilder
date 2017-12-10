@challenges.each do |challenge|
  json.set! challenge.id do
    json.partial! "api/challenges/challenge", challenge: challenge
  end
end
