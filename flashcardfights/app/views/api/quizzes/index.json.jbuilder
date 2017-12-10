json.array! @quizzes do |quiz|
  json.partial! 'api/quizzes/show', quiz: quiz
end
