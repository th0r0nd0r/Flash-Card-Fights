json.partial! "api/questions/question", question: @question

json.answers do
  @question.answers.each do |answer|
    json.set! answer.id do
      json.partial! "api/answers/answer", answer: answer
    end
  end
end

json.question_attempts do
  @question.question_attempts.each do |attempt|
    json.set! attempt.id do
      json.partial! "api/question_attempts/question_attempt", question_attempt: attempt
    end
  end
end