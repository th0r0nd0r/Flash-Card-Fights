json.array! @quizzes do |quiz|
  json.partial! 'api/quizzes/_quiz', quiz: quiz
end
