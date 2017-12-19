json.partial! "api/quizzes/quiz", quiz: @quiz

json.questions do
  @quiz.questions.each do |question|
    json.set! question.id do
      json.partial! "api/questions/question", question: question
      json.answers do
        question.answers.each do |answer|
          json.set! answer.id do
            json.partial! "api/answers/answer", answer: answer
          end
        end 
      end
    end
  end
end

json.quiz_attempts do
  @quiz.quiz_attempts.each do |attempt|
    json.set! attempt.id do
      json.partial! "api/quiz_attempts/quiz_attempt", quiz_attempt: attempt
    end
  end
end
