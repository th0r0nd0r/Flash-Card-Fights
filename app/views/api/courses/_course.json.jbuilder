json.extract! course, :id, :title
json.subjects do 
  course.subjects.each do |subject|
    json.set! subject.id do 
      json.partial! "api/subjects/subject", subject: subject
    end 
  end 
end
json.quizzes do 
  course.quizzes.each do |quiz|
    json.set! quiz.id do 
      json.partial! "api/quizzes/quiz", quiz: quiz
    end 
  end 
end